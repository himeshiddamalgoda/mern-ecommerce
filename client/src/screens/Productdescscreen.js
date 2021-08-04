import React from "react";
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { getProductById } from "../actions/productActions";

import Loader from '../components/Loader'
import Error from '../components/Error'
import Review from "../components/Review";

const Productdescscreen = ({ match }) => {

  // product quantity setting in AddToCart
  const [quantity , setquantity] = useState(1)

  // fuction execute when clicking addtocart-> sending productdetail data and quantity data to cartAction.js action creator
  const addtocart = () => {
    dispatch(addToCart(product , quantity))
  }
  

  // product id fetching
  const productid = match.params.id;

  // redux state single product description
  const dispatch = useDispatch()
  const getproductbyidstate = useSelector(state => state.getProductByIdReducer)
  const {product , loading , error} = getproductbyidstate

  useEffect(() => {
     dispatch(getProductById(productid))
  }, [])

  return (
    <div className="mr-3 ml-2">
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error="Something went wrong!" />
      ) : (
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="card p-2 m-3 shadow p-3 mb-5 bg-white rounded">
              <h1 style={{fontSize:'20px'}}>
                <b>{product.name}</b>
              </h1>
              <hr/>
              <img
                src={product.image}
                className="img-fluid m-3 bigimg"
                alt="img"
              />
              <p>{product.description}</p>
            </div>
          </div>

          <div className="col-md-6 text-left">
            <div className="m-2 shadow p-3 mb-5 bg-white rounded">
              <h1>
                <b>Price {product.price}</b>
              </h1>
              <hr />

              <h1>Select Quantity</h1>

              <select
                value={quantity}
                onChange={(e) => {
                  setquantity(e.target.value);
                }}
              >
                {[...Array(product.countInStock).keys()].map((x, i) => {
                  return <option value={i + 1}>{i + 1}</option>;
                })}
              </select>
              <hr />

              {product.countInStock > 0 ? (
                <button className="btn btn-dark" onClick={addtocart}>
                  ADD TO CART
                </button>
              ) : (
                <div>
                <h1>Out of Stock</h1>
                <button className="btn btn-dark" disabled onClick={addtocart}>
                  ADD TO CART
                </button>
                </div>
              )}
            </div>

            <Review product={product} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Productdescscreen;
