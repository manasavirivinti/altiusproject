import React, { Fragment, useState, useEffect } from "react";
import {Link} from "react-router-dom";
import './Register.css';

const Register=({setAuth })=>{
    const [inputs,setInputs]=useState({
        email:"",
        password:"",
        name:""
    })
    const [user,setUser]=useState({});
    const {email,password,name}=inputs;
    const [error,setError]=useState(null);
    const onChange=(e)=>{
        setInputs({...inputs,[e.target.name]
        : e.target.value});
    }


    //normal registration
    const onSubmitForm= async e=>{
        e.preventDefault();
        try {
            const user_email=email;
            const user_name=name;
            const user_password=password;
            const body={user_email,user_password,user_name};
            const response=await fetch("https://deployment-8nty.onrender.com/auth/register",{
                method:"POST",
                headers:{"content-Type":"application/json"}
                ,
                body:JSON.stringify(body)
            });
            // console.log(body);
            const parseRes=await response.json();
            localStorage.setItem("token", parseRes.token);
            console.log(parseRes.token);
            if(parseRes.token){
                setAuth(true);
                const role = parseRes.role;
                if (role === 'ADMIN') {
                    window.location.href = "/admin";
                } else {
                    window.location.href = "/user";
                }
            }
            else{
                setAuth(false);
                setError(parseRes.error);
            }
                
        } catch (err) {
            console.error(err.message);
        }
    }

 return(
        <Fragment>
                <div className="content">
                    <div className="container">
                <h1 className="text-center my-5">Register</h1>
                <form onSubmit={onSubmitForm}>
                    <input 
                        type="email" name="email"  placeholder="email" className="form-control my-3"
                        value={email} onChange={e=>onChange(e)}required
                    />
                    <input 
                        type="password"  name="password"  placeholder="password" 
                        className="form-control my-3" value={password} onChange={e=>onChange(e)}  required
                    />
                    <input  type="text" name="name"  placeholder="name"  className="form-control my-3"
                        value={name} onChange={e=>onChange(e)} required
                    />
                    <button className="btn btn-secondary btn-block">Submit</button>
                </form>
                {error && <div className="alert alert-danger mt-3">{error}</div>}
                <div className="mt-5 text-center">
                    <Link to="/login" style={{color:"black",fontWeight:'bolder'}}>Already registered ...? then Login</Link>
                </div>
                <div id="signInDiv" ></div>
                
                
                    </div>
                </div>
            
            
        </Fragment>
     );
};

export default Register;