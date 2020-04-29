const express = require('express');
const morgan = require('morgan');
const stripe = require('stripe')("sk_test_ZSCLrGNRtbudQt1YkWvMMhJa00e9Sh52XC");
;
const cors = require('cors');

const bodyParser = require('body-parser');


//app
const app = express();

// Development logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());
app.use(cors());


// Fetch the Checkout Session to display the JSON result on the success page
app.get('/api/checkout-session', async (req, res) => {
    const {sessionId} = req.query;
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    res.send(session);
});

app.post('/api/create-checkout-session', async (req, res) => {
    const domainURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://bolmeesterbrein.nl';

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
        // ?session_id={CHECKOUT_SESSION_ID} means the redirect will have the session ID set as a query param
        success_url: `${domainURL}/complete?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${domainURL}/canceled`,
    });

    res.send({
        sessionId: session.id,
    });
});


// Stripe webhook, BEFORE body-parser, because stripe needs the body as stream
app.post('/webhook', bodyParser.raw({type: 'application/json'}), (req, res) => {
    const signature = req.headers['stripe-signature'];

    let event;
    try {
        event = stripe.webhooks.constructEvent(
            req.body,
            signature,
            'whsec_dbeEAUXEv2UplH0ByQYqJOMdE5gO9luq'
        );
    } catch (err) {
        return res.status(400).send(`Webhook error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
       // const tour = session.client_reference_id;
        //const user = (await User.findOne({email: session.customer_email})).id;
        console.log(event.data.object)

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