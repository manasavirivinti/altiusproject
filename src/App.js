import react, { Fragment } from "react"
import Login from "./components/login/login";
import Register from "./components/register/register";
import Home from "./components/home/home";
import User from "./components/User/User";
import Image from "./components/Image/Image";
import {Route,BrowserRouter as Router,Routes,Redirect} from "react-router-dom";

function App(){

  return(
    <Router>
      <Routes>
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<Register />} /> 
      <Route path="/" element={<Home />} /> 
      <Route path="/user" element={<User />} />
      <Route path="/image" element={<Image />} />
      </Routes>
    </Router>
  )
}

export default App;