require('dotenv').config();
const fs = require("fs");
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const stripe = require("stripe")("sk_test_ZSCLrGNRtbudQt1YkWvMMhJa00e9Sh52XC");
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const endpointSecret = process.env.STRIPE_SIGNING_SECRET;


//app
const app = express();
app.use(cors());

// Development logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json({
    // We need the raw body to verify webhook signatures.
    // Let's compute it only when hitting the Stripe webhook endpoint.
    verify: function (req, res, buf) {
        if (req.originalUrl.startsWith('/api/webhook')) {
            req.rawBody = buf.toString();
        }
    },
}));


app.get('/api/checkout-session', async (req, res) => {
    const {sessionId} = req.query;
    try {
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        res.send(session);
    } catch (e) {
        res.send(e.message);
    }
});

app.post('/api/create-checkout-session', async (req, res) => {

    const domainURL = process.env.NODE_ENV === 'production' ? 'http://bolmeesterbrein.nl' : 'http://localhost:3000';
    const {quantity} = req.body;
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['ideal', 'card'],
            locale: 'nl',
            line_items: [
                {
                    name: 'De Complete Bol Verkooppartner Gids 2020',
                    images: [`${domainURL}/images/smartmockups_k9et078tbg.png`],
                    quantity: quantity,
                    currency: 'eur',
                    amount: 19.95 * 100, // Keep the amount on the server to prevent customers from manipulating on client
                },
            ],
            success_url: `${domainURL}/complete?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${domainURL}/canceled`,
        });
        res.send({sessionId: session.id});
    } catch (e) {
        res.status(400).send(` error: ${e.message}`);
    }
});

app.post('/api/webhook', bodyParser.raw({type: 'application/json'}), async (req, res) => {

    let pathToAttachment = `${__dirname}/attachment.pdf`;
    let attachment = fs.readFileSync(pathToAttachment).toString("base64");


    let event;
    let signature = req.headers['stripe-signature'];
    try {
        event = stripe.webhooks.constructEvent(req.rawBody, signature, endpointSecret)
    } catch (err) {
        console.log(`❌ Error message: ${err.message}`);
        res.status(400).send(`Webhook Error: ${err.message}`);
    }


    if (event.type === 'checkout.session.completed') {
        let customer = await stripe.customers.retrieve(event.data.object.customer);

        const msg = {
            to: customer.email,
            from: 'info@bolmeesterbrein.nl',
            subject: 'Sending with SendGrid is Fun',
            text: 'and easy to do anywhere, even with Node.js',
            html: '<strong>and easy to do anywhere, even with Node.js</strong>',
            attachments: [
                {
                    content: attachment,
                    filename: 'attachment.pdf',
                    type: "application/pdf",
                    disposition: 'attachment'
                },
            ],
        };

        try {
            await sgMail.send(msg);
        } catch (error) {
            console.error(error);
        }
    }

    res.status(200).json({received: true});
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get("*", async (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));