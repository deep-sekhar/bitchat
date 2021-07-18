import React from 'react'
import Logo1 from '../images/newlogo.png'
import {Link, Router} from "react-router-dom";

export const Navbar = (props) => {
    const mystyles ={
        backgroundColor:"rgb(34, 194, 42)"
    }
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark " style={mystyles}>
                <div className="container-fluid">
                    <img src={Logo1} className=" img-responsive mx-3 my-0.5" style={{height:"45px"}}/>
                    <Link className="navbar-brand" to="#">Bit-Chat</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    <h5>
                                    Dashboard
                                    </h5> 
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link active" to="/Profile">Profile</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Aboutus">
                                    <h5>
                                    About Us
                                    </h5>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <h5 className="nav-link active" aria-disabled="true" onClick={()=>{props.signInChanger(false)}} style={{cursor:"pointer"}}>
                                    Sign-out
                                </h5>
                            </li>
                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
            
        </div>
    )
}
