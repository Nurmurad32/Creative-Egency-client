import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../../images/logos/logo.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';


const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        fetch('https://aqueous-plains-47347.herokuapp.com/isAdmin',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(response => response.json())
        .then(data => setIsAdmin(data))
    },[])

    return (
        <nav class="container navbar navbar-expand-lg " id="home">
            <a class="navbar-brand" href="#home">
                <img src={logo} width="150" height="47" alt="" loading="lazy"/>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto main-nav">
                    <li style={{marginRight: '40px'}} class="nav-item active" >
                    <Link style={{textDecoration:'none'}} to="/"><span className="">Home</span></Link>
                        {/* <a class="nav-link " href="#home">Home </a> */}
                    </li>
                    <li style={{marginRight: '40px'}} class="nav-item">
                    <Link style={{textDecoration:'none'}} to="#"><span className="">Our Portfolio</span></Link>
                        {/* <a class="nav-link " href="#">Our Portfolio</a> */}
                    </li>
                    <li style={{marginRight: '40px'}} class="nav-item">
                    <Link style={{textDecoration:'none'}} to="#"><span className="">Our Team</span></Link>
                        {/* <a class="nav-link " href="#">Our Team</a> */}
                    </li>
                    <li style={{marginRight: '40px'}} class="nav-item">
                    <Link style={{textDecoration:'none'}} to="#contact"><span className="">Contact Us</span></Link>
                        {/* <a class="nav-link " href="#contact">Contact Us</a> */}
                    </li>
                    {loggedInUser.email 
                    ?
                        isAdmin 
                            ?
                            <li className="nav-item">
                                <Link style={{textDecoration:'none'}} to="/dashboard/serviceList"><span className="">Dashboard</span></Link>
                            </li>
                            :
                            <li className="nav-item">
                                <Link style={{textDecoration:'none'}} to="/dashboard/orderedList"><span className="">Dashboard</span></Link>
                            </li>
                    :
                        <li className="nav-item">
                            <Link style={{textDecoration:'none'}} to="/login"><span className="">Login</span></Link>
                        </li>
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;