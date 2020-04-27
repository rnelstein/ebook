import React, {useEffect, useState} from 'react';
import {useLocation, useHistory, Link} from 'react-router-dom'
import axios from 'axios'
import {useWindowSize} from 'react-use'
import Confetti from "react-confetti";

const paymentSuccess = {
    "id": "pi_1GcRH5IuKQ0PCijjreWn0tPj",
    "object": "payment_intent",
    "amount": 1400,
    "amount_capturable": 0,
    "amount_received": 1400,
    "application": null,
    "application_fee_amount": null,
    "canceled_at": null,
    "cancellation_reason": null,
    "capture_method": "automatic",
    "charges": {
        "object": "list",
        "data": [
            {
                "id": "py_1GcRHCIuKQ0PCijj3IKgy8zn",
                "object": "charge",
                "amount": 1400,
                "amount_refunded": 0,
                "application": null,
                "application_fee": null,
                "application_fee_amount": null,
                "balance_transaction": "txn_1GcRHCIuKQ0PCijjOljDgosu",
                "billing_details": {
                    "address": {
                        "city": null,
                        "country": null,
                        "line1": null,
                        "line2": null,
                        "postal_code": null,
                        "state": null
                    },
                    "email": null,
                    "name": null,
                    "phone": null
                },
                "calculated_statement_descriptor": null,
                "captured": true,
                "created": 1587972074,
                "currency": "eur",
                "customer": null,
                "description": null,
                "destination": null,
                "dispute": null,
                "disputed": false,
                "failure_code": null,
                "failure_message": null,
                "fraud_details": {},
                "invoice": null,
                "livemode": false,
                "metadata": {},
                "on_behalf_of": null,
                "order": null,
                "outcome": {
                    "network_status": "approved_by_network",
                    "reason": null,
                    "risk_level": "not_assessed",
                    "seller_message": "Payment complete.",
                    "type": "authorized"
                },
                "paid": true,
                "payment_intent": "pi_1GcRH5IuKQ0PCijjreWn0tPj",
                "payment_method": "pm_1GcRH8IuKQ0PCijjMRZYjTB0",
                "payment_method_details": {
                    "ideal": {
                        "bank": "rabobank",
                        "bic": "RABONL2U",
                        "iban_last4": "5264",
                        "verified_name": "Jenny Rosen"
                    },
                    "type": "ideal"
                },
                "receipt_email": null,
                "receipt_number": null,
                "receipt_url": "https://pay.stripe.com/receipts/acct_1EwaEdIuKQ0PCijj/py_1GcRHCIuKQ0PCijj3IKgy8zn/rcpt_HAmqCLiGEeKPfzy4aX5gM0hHCC93Tdn",
                "refunded": false,
                "refunds": {
                    "object": "list",
                    "data": [],
                    "has_more": false,
                    "total_count": 0,
                    "url": "/v1/charges/py_1GcRHCIuKQ0PCijj3IKgy8zn/refunds"
                },
                "review": null,
                "shipping": null,
                "source": null,
                "source_transfer": null,
                "statement_descriptor": null,
                "statement_descriptor_suffix": null,
                "status": "succeeded",
                "transfer_data": null,
                "transfer_group": null
            }
        ],
        "has_more": false,
        "total_count": 1,
        "url": "/v1/charges?payment_intent=pi_1GcRH5IuKQ0PCijjreWn0tPj"
    },
    "client_secret": "pi_1GcRH5IuKQ0PCijjreWn0tPj_secret_Jt78pzmAuQFkP1s905lHAjXWs",
    "confirmation_method": "automatic",
    "created": 1587972067,
    "currency": "eur",
    "customer": null,
    "description": null,
    "invoice": null,
    "last_payment_error": null,
    "livemode": false,
    "metadata": {},
    "next_action": null,
    "on_behalf_of": null,
    "payment_method": "pm_1GcRH8IuKQ0PCijjMRZYjTB0",
    "payment_method_options": {
        "card": {
            "installments": null,
            "request_three_d_secure": "automatic"
        }
    },
    "payment_method_types": [
        "ideal",
        "card"
    ],
    "receipt_email": null,
    "review": null,
    "setup_future_usage": null,
    "shipping": null,
    "source": null,
    "statement_descriptor": null,
    "statement_descriptor_suffix": null,
    "status": "succeeded",
    "transfer_data": null,
    "transfer_group": null
}
const paymentFailed = {
    "id": "pi_1GcRI9IuKQ0PCijjhHn4WDEJ",
    "object": "payment_intent",
    "amount": 1400,
    "amount_capturable": 0,
    "amount_received": 0,
    "application": null,
    "application_fee_amount": null,
    "canceled_at": null,
    "cancellation_reason": null,
    "capture_method": "automatic",
    "charges": {
        "object": "list",
        "data": [],
        "has_more": false,
        "total_count": 0,
        "url": "/v1/charges?payment_intent=pi_1GcRI9IuKQ0PCijjhHn4WDEJ"
    },
    "client_secret": "pi_1GcRI9IuKQ0PCijjhHn4WDEJ_secret_AbsxazJXpXvHwwXIyBt8NAk1b",
    "confirmation_method": "automatic",
    "created": 1587972133,
    "currency": "eur",
    "customer": null,
    "description": null,
    "invoice": null,
    "last_payment_error": {
        "code": "payment_intent_authentication_failure",
        "doc_url": "https://stripe.com/docs/error-codes/payment-intent-authentication-failure",
        "message": "The provided PaymentMethod has failed authentication. You can provide payment_method_data or a new PaymentMethod to attempt to fulfill this PaymentIntent again.",
        "payment_method": {
            "id": "pm_1GcRIEIuKQ0PCijj4ascQLpO",
            "object": "payment_method",
            "billing_details": {
                "address": {
                    "city": null,
                    "country": null,
                    "line1": null,
                    "line2": null,
                    "postal_code": null,
                    "state": null
                },
                "email": null,
                "name": null,
                "phone": null
            },
            "created": 1587972138,
            "customer": null,
            "ideal": {
                "bank": "asn_bank",
                "bic": "ASNBNL21"
            },
            "livemode": false,
            "metadata": {},
            "type": "ideal"
        },
        "type": "invalid_request_error"
    },
    "livemode": false,
    "metadata": {},
    "next_action": null,
    "on_behalf_of": null,
    "payment_method": null,
    "payment_method_options": {
        "card": {
            "installments": null,
            "request_three_d_secure": "automatic"
        }
    },
    "payment_method_types": [
        "ideal",
        "card"
    ],
    "receipt_email": null,
    "review": null,
    "setup_future_usage": null,
    "shipping": null,
    "source": null,
    "statement_descriptor": null,
    "statement_descriptor_suffix": null,
    "status": "requires_payment_method",
    "transfer_data": null,
    "transfer_group": null
}

const Complete = () => {
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const {width, height} = useWindowSize();

    let query = new URLSearchParams(useLocation().search);
    let history = useHistory();
    let paymentIntentId = query.get("payment_intent");

    useEffect(() => {
        if (!paymentIntentId) history.push('/');

        if (paymentSuccess.status === 'succeeded') setStatus(true);
        else setStatus(false)


        /*
                axios.get("/api/payment-intent?paymentIntentId=" + paymentIntentId)
                    .then((response) => {
                        setIsLoaded(true);


                         if (response.data.status === 'succeeded') setStatus(true);
        else setStatus(false)

                    })
                    .catch((error) => {
                        setIsLoaded(true);
                        setError(error.response.data.message);
                    });
         */
    }, []);


    if (error) return <div>Error: {error}</div>;
    //else if (!isLoaded) return <div>Loading...</div>;
    else

        return (
            <div className="intro">
                <div className="container pb-5 mb-sm-4">

                    {status &&
                    <div className="pt-5">
                         <Confetti width={width} height={height} numberOfPieces={450}/>
                        <div className="card py-3 mt-sm-3">
                            <div className="card-body text-center">
                                <h3 className="h4 pb-3">Bedankt voor je bestelling!</h3>
                                <p className="mb-2">Uw bestelling is geplaatst en wordt zo snel mogelijk
                                    verwerkt.</p>
                                <p className="mb-2">Zorg ervoor dat u uw ordernummer noteert, dat
                                    is <strong>{paymentIntentId}.</strong></p>
                                <p>U ontvangt binnenkort een e-mail met de bevestiging van uw bestelling. <u>Je kan
                                    nu:</u>
                                </p>
                                <Link className="btn btn-secondary mt-3 mr-3" to="/">Ga terug naar homepagina</Link>
                            </div>
                        </div>
                    </div>
                    }


                    {!status &&
                    <div className="pt-5">
                        <div className="card py-3 mt-sm-3">
                            <div className="card-body text-center">
                                <h3 className="h4 pb-3">IDEAL-betaling mislukt, probeer het opnieuw</h3>

                                <Link className="btn btn-secondary mt-3 mr-3" to="/checkout">Ga terug naar de
                                    betaalpagina</Link>
                            </div>
                        </div>
                    </div>
                    }

                </div>
            </div>
        );
};

export default Complete;