import React from 'react';
import {useStripe, useElements, IdealBankElement} from '@stripe/react-stripe-js';
import axios from 'axios'

const IDEAL_ELEMENT_OPTIONS = {
    // Custom styling can be passed to options when creating an Element
    style: {
        base: {
            padding: '10px 12px',
            color: '#32325d',
            fontSize: '16px',
            '::placeholder': {
                color: '#aab7c4'
            },
        },
    },
};

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();


    const handleSubmit = async event => {
        event.preventDefault();
        if (!stripe || !elements) return;

        const idealBank = elements.getElement(IdealBankElement);

        const payload = await stripe.createPaymentMethod({
            type: 'ideal',
            ideal: idealBank,
            billing_details: {
                name: 'hll',
            },
        });

        if (payload.error) {
            console.log('[error]', payload.error);

        } else {
            console.log('[PaymentMethod]', payload.paymentMethod);
        }


        try {
            const {data: clientSecret} = await axios.post("http://localhost:5000/api/payment_intents", {
                amount: 19.95 * 100
            });


            const {error} = await stripe.confirmIdealPayment(clientSecret, {
                payment_method: {
                    ideal: idealBank,
                    billing_details: {
                        name: 'kelly',
                        email: 'kelly@user.com'
                    },
                },
                return_url: 'http://localhost:3000/complete',
            });

            if (error) console.log(error.message);



        } catch (err) {
            console.log(err);
        }

    };

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <form onSubmit={handleSubmit}>


                        <div className="form-group">
                            <label>iDEAL Bank</label>
                            <IdealBankElement className="form-control" options={IDEAL_ELEMENT_OPTIONS}/>

                        </div>
                        <button type="submit" disabled={!stripe}>
                            Pay
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

};

export default CheckoutForm;