import React,{useContext} from 'react'
import { userContext } from '../App';
import {Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import logo from '../images/Anemia-Mukt-Bharat__1_-removebg-preview.png'
const Navbar = () => {
  const {state,dispatch}=useContext(userContext);
  const RenderMenu=()=>{
      return(
        <>
        <li class="nav-item active">
        <Link className="nav-link" to="/">Home </Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/login">Login&nbsp;&nbsp;&nbsp;</Link>
        </li>
        {/* <li class="nav-item">
        <Link className="nav-link" to="/about">About</Link>
        </li> */}
        <li class="nav-item">
        <Link className="nav-link" to="/register">Register</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/Symptoms">Symptoms&nbsp;&nbsp;&nbsp;</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/Images">Images&nbsp;&nbsp;&nbsp;</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/IFA">IFA&nbsp;&nbsp;&nbsp;</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/logout">Logout&nbsp;&nbsp;&nbsp;</Link>
        </li>
      </>
      )
  }

  return (
    <>
    <nav class="navbar navbar-expand-lg  navbar-customclass">
    <a class="navbar-brand" href="#" >
    <img src={logo}></img>
    <h4>&nbsp;Anemia</h4>
  </a>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto">
      <RenderMenu/>
    </ul>
  </div>
</nav>
    </>
  )
}

export default Navbar