require('dotenv').config();
const fs = require("fs");
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail').setApiKey(process.env.SENDGRID_API_KEY);
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


//app
const app = express();

// Development logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use(express.json());
app.use(cors());


app.get('/api/checkout-session', async (req, res) => {
    const {sessionId} = req.query;
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    res.send(session);
});

app.post('/api/create-checkout-session', async (req, res) => {
    let domainURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://bolmeesterbrein.nl';
    const {quantity} = req.body;

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['ideal', 'card'],
        locale: 'nl',
        line_items: [
            {
                name: 'De Complete Bol Verkooppartner Gids 2020',
                images: ['https://bolmeesterbrein.nl/images/smartmockups_k9et078tbg.png'],
                quantity: quantity,
                currency: 'eur',
                amount: 19.95 * 100, // Keep the amount on the server to prevent customers from manipulating on client
            },
        ],
        success_url: `${domainURL}/complete?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${domainURL}/canceled`,
    });

    res.send({
        sessionId: session.id,
    });
});

app.post('/webhook', bodyParser.raw({type: 'application/json'}), async (req, res) => {
    const signature = req.headers['stripe-signature'];
    const pathToAttachment = `${__dirname}/attachment.pdf`;
    const attachment = fs.readFileSync(pathToAttachment).toString("base64");

    let event;
    try {
        event = stripe.webhooks.constructEvent(
            req.body,
            signature,
            'whsec_4hA5RNlBJFz8YbOnIVPOJ7XkRgJYx10m'
        );
    } catch (err) {
        return res.status(400).send(`Webhook error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
        console.log(event.data.object)
    }

    if (event.type === 'checkout.session.completed') {
        // const tour = session.client_reference_id;
        //const user = (await User.findOne({email: session.customer_email})).id;
        console.log(event.data.object);
        const msg = {
            to: event.data.object.customer_email,
            from: 'test@example.com',
            subject: 'Sending with SendGrid is Fun',
            text: 'and easy to do anywhere, even with Node.js',
            attachments: [
                {
                    content: attachment,
                    filename: "attachment.pdf",
                    type: "application/pdf",
                    disposition: "attachment"
                }
            ]
        };
        sgMail.send(msg).catch(err => console.log(err))
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