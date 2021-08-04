import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { addProductReducer, addProductReviewReducer, deleteProductReducer, getAllProductsReducer, updateProductReducer } from "./reducers/productReducer";
import { getProductByIdReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import { deleteUserReducer, getAllUsersReducer, loginReducer, registerNewUserReducer, updateReducer } from './reducers/userReducer';
import { getAllOrdersReducer, getOrderByIdReducer, getOrdersByUserIdReducer, placeOrderReducer } from './reducers/orderReducer';

const finalReducer = combineReducers({

    getAllProductsReducer : getAllProductsReducer,
    getProductByIdReducer : getProductByIdReducer,
    cartReducer : cartReducer,
    registerNewUserReducer : registerNewUserReducer,
    loginReducer : loginReducer,
    placeOrderReducer : placeOrderReducer,
    getOrdersByUserIdReducer : getOrdersByUserIdReducer,
    getOrderByIdReducer : getOrderByIdReducer,
    addProductReviewReducer : addProductReviewReducer,
    updateReducer : updateReducer,
    getAllUsersReducer : getAllUsersReducer,
    deleteUserReducer : deleteUserReducer,
    deleteProductReducer : deleteProductReducer,
    addProductReducer : addProductReducer,
    updateProductReducer : updateProductReducer,
    getAllOrdersReducer : getAllOrdersReducer

})

// have to write one initial state for local storage whenever page reloaded it check for the initial state for all reducers
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const currentUser =localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState = {

  cartReducer : {cartItems : cartItems},
  loginReducer : {currentUser : currentUser}

}


const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
});

const store = createStore(finalReducer, initialState ,  composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
))

export default store;