import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrders } from '../actions/orderActions';
import Loader from './Loader'
import Success from './Success'
import Error from './Error'

const Checkout = ({amount}) => {

    const dispatch = useDispatch()
    const orderstate = useSelector(state => state.placeOrderReducer)

    const { loading , success , error} = orderstate

    function tokenHandler(token) {
        dispatch(placeOrders(token, amount))
    }

    const validate = () => {

        if(!localStorage.getItem('currentUser')){
            window.location.href='/login'
        }

    }

    return (
        <div>

            {loading && <Loader />}
            {success && <Success success='Your Order Placed successfully' />}
            {error && <Error error='Something went Wrong' />}

            <StripeCheckout
                amount={amount*100}
                shippingAddress   
                currency='INR'
                token={tokenHandler}
                stripeKey='pk_test_51JDN3CIgj5ZpCQRp7NDAHELW7onGxn0SgjbGjyRlUSgVxlwcL6L7JvNLPfwzdeQoRcYDvNdN18pl7LIL2G4pYqRO00MgBFljAT'
                >

                <button className="btn btn-dark mb-3" onClick={validate}>PAY NOW</button>

            </StripeCheckout>
        </div>
    )
}

export default Checkout
