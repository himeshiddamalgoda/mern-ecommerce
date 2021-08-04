import React, { useState } from 'react'
import {  useSelector,useDispatch } from 'react-redux'
import { registerNewUser } from '../actions/userActions'
import Error from '../components/Error'
import Loader from '../components/Loader'
import Success from '../components/Success'



const Registerscreen = () => {

    const registerstate = useSelector(state => state.registerNewUserReducer)
    const {loading , error , success} = registerstate

    const [name, setname] = useState('')
    const [email, setemail] = useState('')

    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')

    const dispatch = useDispatch()

    const register = (e) => {
        e.preventDefault()

        const user ={
            name : name,
            email : email,
            password : password
        }
        
        if(password===cpassword){
            dispatch(registerNewUser(user))
        }else {
            alert('passwords not Matching!')
        }
    }

    return (
      <div>
        <div className="row justify-content-center m-2">
          <div className="col-md-5 card p-3 shadow p-3 mb-5 bg-white rounded" style={{marginTop:'100px'}}>
            <div className="div">

                <h2 className="text-center m-3"> Register</h2>

                {loading && <Loader/>}
                {error && <Error error = 'Email Address is already Registerd'/>}
                {success && <Success success='User Succesfully Registerded'/>}

                <form onSubmit={register}>
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
                    <button type='submit' className="btn btn-dark mt-3">REGISTER</button>
                    
                </div>
                </form>
               
            </div>
            <a style={{color:'black'}} href='/login' className="m-3">Click Here To Login</a>
          </div>
        </div>
      </div>
    );
}

export default Registerscreen;