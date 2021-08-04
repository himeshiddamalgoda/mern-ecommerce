import React from 'react'
import { Link, Switch , Route} from 'react-router-dom'

import AddProduct from './AddProduct'
import Editproduct from './Editproduct'
import OrdersList from './OrdersList'
import ProductList from './ProductList'
import UsersList from './UsersList'

const Adminscreen = () => {
    return (
        <div>

            <div className="row justify-content-center mt-5">
                <div className="col-md-10">
                    <h2> Admin Panel</h2>
                    <ul className="admin p-2">
                        <li><Link to='/admin/userslist' style={{color:'white'}}>UsersList </Link></li>
                        <li><Link to='/admin/productslist' style={{color:'white'}}>Products List</Link></li>
                        <li><Link to='/admin/addnewproduct' style={{color:'white'}}>Add New Product</Link></li>
                        <li><Link to='/admin/orderslist' style={{color:'white'}}>OrdersList</Link></li>
                    </ul>

                    <Switch>
                        <Route path='/admin/userslist' component={UsersList}/>
                        <Route path='/admin/productslist' component={ProductList}/>
                        <Route path='/admin/addnewproduct' component={AddProduct}/>
                        <Route path='/admin/orderslist' component={OrdersList}/>
                        <Route path='/admin/editproduct/:productid' component={Editproduct}/>
                    </Switch>

                </div>
            </div>

        </div>
    )
}

export default Adminscreen
