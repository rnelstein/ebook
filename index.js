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


app.post('/api/payment_intents', async (req, res) => {

    try {
        const {amount} = req.body;


        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "eur",
            payment_method_types: ['ideal']
        });



        res.status(200).send(paymentIntent.client_secret);
    } catch (err) {
        res.status(500).json({statusCode: 500, message: err.message});
    }
});

const port = 5000;
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))