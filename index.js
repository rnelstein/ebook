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


app.get("/api/payment-intent", async (req, res) => {
    const {paymentIntentId} = req.query;

    // Display the resulting PaymentIntent in the complete.html view
    try {
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
        res.status(200).send(paymentIntent);
    } catch (err) {
        console.log(err.message)
        res.status(500).json({statusCode: 500, message: err.message});
    }
});

app.post('/api/payment_intents', async (req, res) => {

    try {
        const {amount} = req.body;


        const intent = await stripe.paymentIntents.create({
            amount,
            currency: "eur",
            payment_method_types: ['ideal']
        });


        res.status(200).send(intent.client_secret);
    } catch (err) {
        res.status(500).json({statusCode: 500, message: err.message});
    }
});


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get("*", async (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))