import React from 'react';
import {useStripe, useElements, IdealBankElement} from '@stripe/react-stripe-js';
import axios from 'axios'
import {Link} from "react-router-dom";

const IDEAL_ELEMENT_OPTIONS = {
    // Custom styling can be passed to options when creating an Element
    style: {
        base: {
            //color: '#32325d',
           fontSize: '16px',
            letterSpacing: "0.025em",
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
            const {data: clientSecret} = await axios.post("/api/payment_intents", {
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
        <div className="container pb-5 mb-sm-4">
            <div className="row pt-4 mt-2">

                <div className="col-md-8">
                    <form onSubmit={handleSubmit}>
                        <div className="card mb-4">
                            <h3 className="card-header">Betaal met ideal</h3>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>iDEAL Bank</label>
                                    <IdealBankElement className="form-control" options={IDEAL_ELEMENT_OPTIONS} required/>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex pt-2">
                            <div className="w-50 pr-3">
                                <Link className="btn btn-outline-secondary btn-block" to="/">
                                    Back</Link>
                            </div>
                            <div className="w-50 pl-2">

                                <button className="btn btn-primary btn-block text-white" type="submit"
                                        disabled={!stripe}>
                                    Bevestig
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="col-md-4">
                    <div className="card mb-4">
                        <h3 className="card-header">Overzicht</h3>
                        <div className="card-body">
                            <div className="font-size-sm border-bottom pt-2 pb-3">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Subtotaal:</span><span>€35,00</span>
                                </div>

                                <div className="d-flex justify-content-between text-danger"><span>Korting: </span><span>15,05</span>
                                </div>
                            </div>
                            <div className="h3 font-weight-semibold text-center py-3">€19,95</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default CheckoutForm;