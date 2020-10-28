import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCommentDots, faList, faPlus, faShoppingCart, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import logo from '../../../images/logos/logo.png'
import { UserContext } from '../../../App';
import { useState } from 'react';




const Sidebar = () => {
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
        <div className="sidebar d-flex flex-column  col-md-2 px-4" style={{height:"100vh"}}>
            <div className="sidebar-img">
            <Link to="/" style={{color: 'black'}}>
                <img src={logo} alt="" height="47"/>
                </Link>
            </div>
            <ul className="list-unstyled">
                <li>
                    <Link to="/order/:serviceId" style={{color: 'black'}}>
                    <FontAwesomeIcon icon={faShoppingCart} /> <span >Order</span> 
                    </Link>
                </li>
                
                <li>
                    <Link to="/dashboard/review" style={{color: 'black'}}>
                        <FontAwesomeIcon icon={faCommentDots} /> <span >Review</span>
                    </Link>
                </li>
                <li>
                    {isAdmin 
                    ?
                    <Link  to='/dashboard/serviceList' style={{color: 'black'}}>
                        <FontAwesomeIcon icon={faList} /> <span >Service list</span> 
                    </Link>
                    :
                    <Link  to='/dashboard/orderedList' style={{color: 'black'}}>
                    <FontAwesomeIcon icon={faList} /> <span >Service list</span> 
                </Link>    
                }
                </li>
                {isAdmin && <div>
                    <li>
                        <Link to="/dashboard/addService" style={{color: 'black'}}>
                            <FontAwesomeIcon icon={faPlus} /> <span >Add service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/makeAdmin" style={{color: 'black'}}>
                            <FontAwesomeIcon icon={faUserPlus} /> <span >Make admin</span>
                        </Link>
                    </li>
                </div>}
            </ul>
            <div className="logout" onClick={()=>setLoggedInUser({})}>
                <FontAwesomeIcon icon={faSignOutAlt} /> <span >Logout</span>
            </div>
        </div>
    );
};

export default Sidebar;