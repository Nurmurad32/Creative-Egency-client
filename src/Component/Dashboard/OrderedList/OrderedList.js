import React, { useContext, useEffect, useState } from 'react';
import './OrderedList.css';
import Sidebar from '../Sidebar/Sidebar';
import img1 from '../../../images/icons/service1.png' 
import img2 from '../../../images/icons/service2.png' 
import img3 from '../../../images/icons/service3.png' 
import { UserContext } from '../../../App';
import { useHistory } from 'react-router-dom';

const OrderedList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [customerOrder,setCustomerOrder] = useState([])
    const history = useHistory();
    useEffect(() => {
        fetch('http://localhost:5000/customerOrder?email='+loggedInUser.email , {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
        setCustomerOrder(data);
    })
    
    },[])
    
    

    return (
        <div className=" row " style={{margin:'0'}}>
           <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
           

            

            <div className="col-md-10" style={{padding:'0'}}>
            <h1 style={{fontWeight:'24px',marginLeft:'40px'}} >Service you ordered</h1>
            <div style={{backgroundColor: '#F4F7FC',minHeight: '600px'}}>
                <div className="card-deck mt-5" >
                    {
                        customerOrder.map(customer=>
                            <div className="card shadow-sm" style={{margin: '35px 50px'}}>
                                <div className="card-footer d-flex  align-items-center">
                                    <img className="mx-3" src={img1} alt="" width="60"/>
                                    <p className="m-0 ml-auto" style={{border: '1px solid #FFE3E3',backgroundColor: '#FFE3E3',color: '#FF4545',padding: '5px 15px',borderRadius: '5px'}}>{customer.status}</p>
                                </div>
                                <div className="card-body">
                                    <h6 className="text-primary">{customer.project}</h6>
                                    <p className="card-text ">{customer.description}</p>
                                </div>
                            </div>   
                        )
                    }
                    </div> 
                </div>
            </div>
            
        </div>
    );
};

export default OrderedList;