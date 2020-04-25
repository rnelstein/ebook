import React from 'react';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Success from "./Success";
import Checkoutform from "./CheckoutForm";
import Home from "./Home";


const stripePromise = loadStripe('pk_test_9op09jaOtWB0qeg7bC4EMb6X00hKevtPhV');


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/checkout">
                    <Elements stripe={stripePromise}>
                    <Checkoutform />
                    </Elements>
                </Route>

                <Route exact path="/success">
                    <Success />
                </Route>

            </Switch>
        </Router>
    );
}

export default App;
