import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const [addAdmin, setAddAdmin] = useState({});
    

    const handleBlur = (ev) =>{
        const newAdmin = {...addAdmin}
        newAdmin[ev.target.name] = ev.target.value;
        setAddAdmin(newAdmin);
    }

    const handleAdminSubmit = () =>{
        const formData = new FormData()
        formData.append('email', addAdmin.email)
        

        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
        
    }
    return (
        <div className=" row " style={{margin:'0'}}>
           <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
                <div className="col-md-10" style={{padding:'0'}}>
                <div >
                    <h1 style={{fontWeight:'24px'}} >Review</h1>
                </div>
                <div className="order-body" style={{ backgroundColor: '#F4F7FC', minHeight: '400px', maxHeight: 'auto'}}>

                    <form className="order-form" onSubmit={handleAdminSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                        </div>

                        <div className="form-group" style={{display: 'flex'}}>
                        <input type="email" name="email" className="form-control" placeholder="ino@gmail.com" style={{height: '45px',marginRight:'5px'}} onBlur={handleBlur}/>
                            <button type="submit" className="btn " style={{backgroundColor:' rgb(0, 148, 68)', color: 'white', border: 'none', padding: '10px 50px'}}> Submit </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;