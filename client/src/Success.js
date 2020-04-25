import React, {useEffect, useState} from 'react';
import Confetti from "react-confetti";


const Success = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }, 100);
    });

    return (
        <div className="container">
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

export default Success;