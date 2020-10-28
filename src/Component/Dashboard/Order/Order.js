import React, { useContext, useEffect, useState } from 'react';
import './Order.css';
import uploadIcon from '../../../images/upload.png'
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {serviceId} = useParams();
    const history = useHistory();

    const [serviceWork,setServiceWork] = useState({});
    useEffect(()=>{
        fetch('https://aqueous-plains-47347.herokuapp.com/service/'+serviceId)
        .then(res=>res.json())
        .then(data=>setServiceWork(data))
    },[serviceId])
    console.log(serviceWork);

    const [addOrder, setAddOrder] = useState({});
    const handleBlur = (ee) =>{
        const newOrder = {...addOrder}
        newOrder[ee.target.name] = ee.target.value;
        setAddOrder(newOrder);
    }
    const handleSubmit = () =>{
        const formData = new FormData()
        formData.append('name', addOrder.name)
        formData.append('email', addOrder.email)
        formData.append('project', addOrder.project)
        formData.append('price', addOrder.price)
        formData.append('description', addOrder.description)
        formData.append('status', 'Pending')
        fetch('https://aqueous-plains-47347.herokuapp.com/registerOrder', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert("Service ordered successfully.... waiting for admin reply..");
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
        history.push("/dashboard/orderedList");
    }


    // const handleSubmit = (data) =>{
    //     fetch('https://aqueous-plains-47347.herokuapp.com/registerOrder',{
    //         method:'POST',
    //         headers:{
    //             'Content-Type' : 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //     history.push("/dashboard/orderedList");
    // }

    return (
        <div className="order-container">
            <div >
                <h1 style={{fontWeight:'24px'}} >Order</h1>
            </div>
            <div className="order-body">
                <form className="order-form" onSubmit={handleSubmit} >
                    <div className="form-group">
                        <input onBlur={handleBlur}  type="text" name="name" className="form-control" placeholder="Your name / Company's name" />
                    </div>
                    <div className="form-group">
                        <input onBlur={handleBlur}  type="email" name="email" className="form-control" placeholder="Email Address *" defaultValue={loggedInUser.email} />
                    </div>
                    <div className="form-group">
                        <input onBlur={handleBlur}  type="text" name="project" className="form-control" placeholder="Selected Project" defaultValue={serviceWork.name} />
                    </div>
                    <div className="form-group">
                        <textarea onBlur={handleBlur} name="description" className="form-control" id="" cols="30" rows="10" placeholder="Project Details" ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">$</label>
                        <input onBlur={handleBlur}  type="number" min="0" name="price" placeholder="In doller" />
                        <button type="file" id="img" name="img" accept="image/*" style={{backgroundColor: '#DEFFED',color: '#009444',    marginLeft: '10px', border: '1px solid rgb(0, 148, 68)'}}><img src={uploadIcon} alt="" style={{height:'24px',width:'24px'}}/> Upload image</button>
                    </div>
                    <div className="form-group ml-auto">
                        <button type="submit"  className="btn btn-brand "> Send </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Order;