import React, { useState } from 'react';
import './Service.css';
import mobile from '../../../images/icons/service1.png';
import graphics from '../../../images/icons/service2.png';
import web from '../../../images/icons/service3.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';


// const serviceData = [
//     {
//        name: 'Web & Mobile design',
//        des : 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
//        img: mobile 
//     },
//     {
//         name: 'Graphic design',
//         des : 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
//         img: graphics 
//     },
//     {
//         name: 'Web development',
//         des : 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
//         img: web 
//     }
 
// ]


// 
// 
const Service = () => {
    const [serviceData,setServiceData] = useState([])

    fetch('https://aqueous-plains-47347.herokuapp.com/service')
    .then(res => res.json())
    .then(data =>{
        setServiceData(data);
    })
    return (
        <section className="services-container">
            <div className="text-center" style={{fontWeight:'34px'}}>
                <h2>Provide awesome <span style={{color:'#7AB259'}}> services</span></h2>
            </div>
            <div  className="d-flex justify-content-center container">
                <div className="row w-100 mt-5 pt-5 " >
                    {
                        serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;