import React,{ useState } from 'react'
import StarRatingComponent from "react-star-rating-component";
import {useDispatch , useSelector} from 'react-redux'

import { addProductReview } from '../actions/productActions';

const Review = ({product}) => {

    const dispatch = useDispatch()

    const [value , setvalue] = useState(5)
    const [comment , setcomment] = useState('')

    const sendReview = () => {

        if(localStorage.getItem('currentUser')){
            const currentUser = JSON.parse(localStorage.getItem('currentUser'))

            var alreadyreviewed 
    
            for(var i=0; i<product.reviews.length; i++){
    
                if(product.reviews[i].userid==currentUser._id){
                    alreadyreviewed =true
                }
    
            }
    
            if(alreadyreviewed){
                alert ('you have already Reviewd this product')
            }else{
                const review = {
                    rating : value,
                    comment : comment
                }
                dispatch(addProductReview(review , product._id))
            }
        }else{
            window.location.href='/login'
        }
    }

    return (
        <div className="m-2 shadow p-3 mb-5 bg-white rounded mr-3">
            <h2>Give Your Review</h2>
            <StarRatingComponent 
                name="rate1" 
                starCount={5}
                value={value}
                onStarClick={setvalue}
            />

            <input type="text" className="form-control mt-2 mr-5" value={comment} onChange={(e) => {setcomment(e.target.value)}}/>
            <button className='btn btn-dark mt-3' onClick={sendReview}>Submit Review</button>

            <h2 className='mt-3'>Latest Reviews</h2>
            <hr/>

            {product.reviews && (product.reviews.map(review => {
                    return <div className="text-left">
                                <StarRatingComponent 
                                    name="rate1" 
                                    starCount={review.rating}
                                    value={value}
                                    readonly
                                />
                                <p>{review.comment}</p>
                                <p>By : {review.name}</p>
                                <hr/>
                            </div>
            }))}
        </div>
    )
}

export default Review
