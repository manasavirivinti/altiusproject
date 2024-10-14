import React, { Fragment, useState,useEffect } from "react";
import {Link} from "react-router-dom";
import './Login.css';



const Login=({setAuth })=>{
     const [rerender,setRerender]=useState(false);
    const [user,setUser]=useState({});
    const [inputs,setInputs]=useState({
        email:"",
        password:"",
    })
    const [error,setError]=useState(null);
    const {email,password}=inputs;
    const onChange=(e)=>{
        setInputs({...inputs,[e.target.name]
        : e.target.value});
    }
    // on submit form for normal login
    const onSubmitForm= async e=>{
        e.preventDefault();
        // try {
        //     const user_email=email;
        //     const user_password=password;
        //     const body={user_email,user_password};
        //     const response=await fetch("https://deployment-8nty.onrender.com/auth/login",{
        //         method:"POST",
        //         headers:{"content-Type":"application/json"}
        //         ,
        //         body:JSON.stringify(body)
        //     });
        //     // console.log(body);
        //     const parseRes=await response.json();
        //     // console.log(parseRes);
        //     const role=parseRes.role;
        //     localStorage.setItem("token",parseRes.token)
        //     if(parseRes.token){
        //         setAuth(true);
        //         if(role === 'ADMIN'){
        //             window.location.href="/admin";
                    
        //           }
        //           else{
        //             window.location.href="/user";
                     
        //           }
        //     }
        //     else{
        //         setAuth(false);
        //         setError(parseRes.error);
        //     }

            
        // } catch (err) {
        //     console.error(err.message);
        // }
        window.location.href="/"
    }
  
     return(
        <Fragment>
            <div className="d-flex justify-content-center">
                <div className="content">
                    <div className="container">
                        <div className="row justify-content-md-center mt-5" >     
                            <h1 className="text-center mt-2" style={{fontWeight:"bolder"}}>Login</h1>
                            <div className="col-md-6 b1 my-2">
                                <h3 className=" my-3 " style={{color:'black',fontWeight:'bolder'}}>Enter your credentials</h3>
                                <form onSubmit={onSubmitForm}>
                                        <input type="email" name="email" placeholder="Email" className="form-control my-3"
                                            value={email} onChange={e => onChange(e)} required
                                        />
                                        <input type="password" name="password" placeholder="Password"
                                            className="form-control my-3" value={password}
                                            onChange={e => onChange(e)} required
                                        />
                                        <button className="btn btn-secondary btn-block" style={{fontWeight:"bolder"}}>Submit</button>
                                    </form>
                                    {error && <div className="alert alert-danger mt-3">{error}</div>}
                                </div>
                                <div className="container mt-4">
                                    <Link to="/register"  style={{color:"black",fontSize:'20px',fontWeight:"bolder",textShadow:'5px 5px 5px 50px white'}}>New User ..? then Register</Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
            
            
        </Fragment>
     );
};

export default Login;