import React from "react";
import {  useEffect } from "react";

import Filter from "../components/Filter";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Error from "../components/Error";

import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../actions/productActions";

const Homescreen = () => {

  const getallproductsstate = useSelector((state) => state.getAllProductsReducer );
  const { loading, products, err } = getallproductsstate;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div>
      <Filter />
      <div className="row justify-content-center ml-2 mr-2">

        {loading ? (
          <Loader />
        ) : err ? (
          <Error error='Something went wrong!' />
        ) : (
          products.map(product => {
              return    <div className='col-md-3 m-2 p-2 card shadow p-3 mb-5 bg-white rounded'> 
                            <Product product={product}/>
                        </div>
          })
        )}

      </div>
    </div>
  );
};

export default Homescreen;
