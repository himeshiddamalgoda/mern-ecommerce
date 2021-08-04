import React ,{useEffect, useState} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {Link} from 'react-router-dom'


import Loader from '../components/Loader'
import Error from '../components/Error'
import { getAllProducts , deleteProduct} from '../actions/productActions'

const ProductList = () => {

    const dispatch = useDispatch()

    const getallproductstate = useSelector(state => state.getAllProductsReducer)
    const { products,loading, error} = getallproductstate

    useEffect(() => {
        
        dispatch(getAllProducts())

    }, [])

    return (
        <div>

            <h2> Product List </h2>
            <table className="table table-bordered table-responsive-sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {loading && (<Loader/>)}
                    {error && (<Error error="Something went wrong"/>)}
                    {products && (products.map(product => {
                        return <tr>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.countInStock}</td>
                            <td>{product._id}</td>
                            <td>
                                <Link to={`/admin/editproduct/${product._id}`}><i className="fas fa-edit mr-3"></i></Link>
                                <i className="far fa-trash-alt" onClick={()=>{dispatch(deleteProduct(product._id))}} ></i>
                            </td>
                        </tr>
                    }))}

                </tbody>
            </table>
            


        </div>
    )
}

export default ProductList
