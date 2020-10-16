import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Order from '../Order/Order';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    

    return (
        <div className=" row " style={{margin:'0'}}>
           <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10" style={{padding:'0'}}>
                <Order></Order>
            </div>
        </div>
    );
};

export default Dashboard;