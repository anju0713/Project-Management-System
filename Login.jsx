import React  from "react";
import {  Navigate ,NavLink } from "react-router-dom";
import { useNavigate } from "react-router";

import Dashboard from "./Dashboard";
import { useState } from "react";

const Login = () => {

    const navigate = useNavigate()

    const [ user , setUser] = useState({
        email : '',
        password : ''
    });

    const handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value

        setUser({...user , [name] : value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email , password} = user;
        try{
            const res = await fetch ('/login',{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"

                },
                body : JSON.stringify({
                    email,password
                })
            });
        if(res.status === 200 || !res){
            window.alert("Invalid Credentials")
        }else{
            window.alert("Login Successfull");
            window.location.reload();
            Navigate.push('/')
        }



        }catch(error){
      console.log(error);
        }
    }

    return (
        <div>
            <div className="container shadow my-5">
                <div className="row">
                    <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form">
                        <h1 className="display-4 fw-bolder">
                            Welcome Back
                        </h1>
                        <p className="lead text-center">Enter Your Credentials To Login</p>
                        <h5 className="mb-4">OR</h5>
                        <NavLink to="/register" className="btn btn-outline-light rounded-pill pb-2 w-50">Register</NavLink>
                    </div>
                    <div className="col-md-6 p-5">
                        <h1 className="display-6 fw-bolder mb-5">LOGIN</h1>
                        <form onSubmit = {handleSubmit}>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name = "email" value = {user.email} onChange = {handleChange} />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1"  name = "password" value = {user.password} onChange = {handleChange}/>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Remember me</label>
                            </div>
                           
                            <NavLink to = "/dashboard" className='btn btn-outline-primary ms-2 px-4 rounded-pill'><i className = "fa fa-user me-2"></i>Login</NavLink>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;