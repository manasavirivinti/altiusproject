import react from "react";
import "./home.css";
import Register from "../register/register";
function home(){
    function image(){
        window.location.href="/image"
    }
    function login(){
        window.location.href="/login"
    }
    function Register(){
        window.location.href="/register"
    }
    return (
        <div className="container" >
            <h1>Welcome to TaskRabbit page</h1>
            <br />
            <div >
                <button onClick={image} className="btn btn-success">Image Upload</button>
                <br />
                <button onClick={login} style={{marginTop:"10px"}}> Login</button> <br />
                <button onClick={Register} style={{marginTop:"10px"}}>Register</button>
            </div>
            
        </div>
    )
}

export default home;