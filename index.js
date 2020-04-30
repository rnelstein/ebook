require('dotenv').config();
const fs = require("fs");
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


//app
const app = express();

// Development logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
// Use JSON parser for all non-webhook routes
app.use((req, res, next) => {
    if (req.originalUrl === '/webhook') {
        next();
    } else {
        bodyParser.json()(req, res, next);
    }
});
app.use(cors());


app.get('/api/checkout-session', async (req, res) => {
    const {sessionId} = req.query;
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    res.send(session);
});

app.post('/api/create-checkout-session', async (req, res) => {

    const domainURL = process.env.DOMAIN_URL;
    const {quantity} = req.body;

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['ideal', 'card'],
        locale: 'nl',
        line_items: [
            {
                name: 'De Complete Bol Verkooppartner Gids 2020',
                images: [`${req.headers.origin}/images/smartmockups_k9et078tbg.png`],
                quantity: quantity,
                currency: 'eur',
                amount: 19.95 * 100, // Keep the amount on the server to prevent customers from manipulating on client
            },
        ],
        success_url: `${req.headers.origin}/complete?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/canceled`,
    });

    res.send({
        sessionId: session.id,
    });
});

app.post('/webhook', bodyParser.raw({type: 'application/json'}), async (req, res) => {

    const endpointSecret = process.env.STRIPE_SIGNING_SECRET;
    let pathToAttachment = `${__dirname}/attachment.pdf`;
    let attachment = fs.readFileSync(pathToAttachment).toString("base64");


    let event;
    let signature = req.headers['stripe-signature'];

    try {
        event = stripe.webhooks.constructEvent(req.body, signature, endpointSecret)
    } catch (err) {
        console.log(`Webhook Error: ${err.message}`);
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