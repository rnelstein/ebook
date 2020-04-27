const express = require('express');
const morgan = require('morgan');
const Stripe = require('stripe');
const cors = require('cors');
const stripe = new Stripe("sk_test_ZSCLrGNRtbudQt1YkWvMMhJa00e9Sh52XC");


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
    const domainURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://young-dusk-69229.herokuapp.com';

    const {quantity} = req.body;

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['ideal', 'card'],
        locale: 'nl',
        line_items: [
            {
                name: 'De Complete Bol Verkooppartner Gids 2020',
                //images: ['https://picsum.photos/300/300?random=4'],
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


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get("*", async (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));