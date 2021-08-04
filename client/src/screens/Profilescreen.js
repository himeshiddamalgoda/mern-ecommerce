import React,{useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { updateUser } from '../actions/userActions'

import Loader from '../components/Loader'
import Error from '../components/Error'
import Success from '../components/Success'


const Profilescreen = () => {

    const dispatch = useDispatch()

    const updateuserstate  = useSelector(state => state.updateReducer)
    const {loading, success, error} = updateuserstate

    const loginstate = useSelector(state => state.loginReducer)
    const currentUser = loginstate.currentUser

    const [name , setname] = useState(currentUser.name)
    const [email, setemail] = useState(currentUser.email)
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')

    const update = (e) => {

        e.preventDefault()
        if(password==cpassword){
            const updateduser = {
                name: name,
                email : email,
                password : password
            }
            dispatch(updateUser(currentUser._id, updateduser))
        }else{
                alert('password not matched')
        }

    }

    return (
        <div>
        <div className="row justify-content-center">
          <div className="col-md-5 card p-3" style={{marginTop:'150px'}}>
            <div className="div">

                <h2 className="text-center m-3">Update</h2>

                {loading && <Loader/>}
                {error && <Error error = 'Something went wrong'/>}
                {success && <Success success='User Details Updated Succesfully please re- login'/>}

                <form onSubmit={update}>
                <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    value={name}
                    required
                    onChange={(e) => {setname(e.target.value)}}
                />

                <input
                    type="text"
                    placeholder="e-mail"
                    className="form-control"
                    value={email}
                    required
                    onChange={(e) => {setemail(e.target.value)}}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    value={password}
                    required
                    onChange={(e) => {setpassword(e.target.value)}}
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="form-control"
                    value={cpassword}
                    required
                    onChange={(e) => {setcpassword(e.target.value)}}
                />

                <div className='text-right'>
                    <button type='submit' className="btn mt-3">Update</button>
                    
                </div>
                </form>
               
            </div>
          
          </div>
        </div>
        </div>
    )
}

export default Profilescreen
