import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom'
import axios from 'axios'
import Confetti from "react-confetti";

const Complete = () => {
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);


    let query = new URLSearchParams(useLocation().search);
    let paymentIntentId = query.get("payment_intent");

    useEffect(() => {
        if (paymentIntentId) {
            axios.get("http://localhost:5000/api/payment-intent?paymentIntentId=" + paymentIntentId)
                .then((response) => {
                    setIsLoaded(true);

                    if (response.data.status !== 'succeeded') setStatus(false)
                    setStatus(true)

                })
                .catch((error) => {
                    setIsLoaded(true);
                    setError("Error when fetching PaymentIntent");
                });
        }
    }, [paymentIntentId]);




    useEffect(() => {
        setTimeout(() => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }, 100);
    });


    return (
        <div className="container">
            <h1>{query.get("payment_intent")}</h1>
            <div className="row justify-content-center">
                <Confetti width={width} height={height} numberOfPieces={450}/>
                <div className="col">
                    <h1>Gefeliciteerd!</h1>
                    <h2>Stripe has successfully processed your payment</h2>
                </div>
            </div>
        </div>
    );
};

export default Complete;