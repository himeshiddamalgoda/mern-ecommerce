import React from "react";
import { Link } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";

const Product = ({ product }) => {

  
  return (
    <div className="text-left ">
      <div>
        <Link to={`product/${product._id}`} class="text-decoration-none" >

          <div className="text-center">
            <img src={product.image} className="img-fluid" alt="text"/>
          </div>
      
          <h1>{product.name}</h1>
          <StarRatingComponent 
            name="rate1" 
            starCount={5}
            value={product.rating}
            // onStarClick={this.onStarClick.bind(this)}
          />
          <h1>Price: {product.price}</h1>
        </Link>
      </div>
    </div>
  );
};

export default Product;
