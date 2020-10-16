import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './ServiceDetail.css'

const ServiceDetail = ({service}) => {

    const history = useHistory();
    const handelOrder = () => {
        history.push("/order/"+ service._id)
    } 
    return (
        
            <div className="col-md-4 text-center service-card" style={{padding: '34px 50px 0 50px'}} onClick={handelOrder}> 
                <img src={`data:image/png;base64,${service.image.img}`} alt="" style={{height:'50px'}}/>
                <h5 className="mt-3 mb-3">{service.name}</h5>
                <p className="text-secondary">{service.description}</p> 
            </div>
        
        
    //     <div className="card" style={{float:' left',
    //         margin: '1px',
    //         padding: '10px 3px'}}>
    //         <img src={service.img} class="card-img-top" alt="..." style={{height:'74px', width:'74px'}}/>
    //         <div className="card-body">
    //             <h5 className="card-title">{service.name}</h5>
    //             <p className="card-text">{service.des}</p>
    //         {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
    //         </div>
    //   </div>
    );
};

export default ServiceDetail;