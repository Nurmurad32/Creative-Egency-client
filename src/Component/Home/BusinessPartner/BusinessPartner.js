import React from 'react';
import slack from '../../../images/logos/slack.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'
import airbnb from '../../../images/logos/airbnb.png'

const BusinessPartner = () => {
    return (
        <section className="" style={{marginTop:'85px',position:'absolute'}}>
            <div className="d-flex">
                <div style={{textAlign: 'center'}}><img  height="67" class='w-50' src={slack} alt=""/></div>
                <div style={{textAlign: 'center'}}><img  height="67" class='w-50' src={google} alt=""/></div>
                <div style={{textAlign: 'center'}}><img  height="67" class='w-50' src={uber} alt=""/></div>
                <div style={{textAlign: 'center'}}><img  height="67" class='w-50' src={netflix} alt=""/></div>
                <div style={{textAlign: 'center'}}><img  height="67" class='w-50' src={airbnb} alt=""/></div>
            </div>
        </section>
    );
};

export default BusinessPartner;