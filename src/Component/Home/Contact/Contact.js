import React from 'react';
import Footer from '../Footer/Footer';
import './Contact.css'

const Contact = () => {
    return (
        <section className="contact py-5" id='contact'>
           <div className="container" style={{display: 'flex'}}>
               <div className="section-header mb-5 col-md-5">
                    <h5 >Let us handle your <br/> project, professionally.</h5>
                    <small>With well written codes, we build amazing apps for all <br/> platforms, mobile and web apps in general.</small>
               </div>
               <div className="col-md-7 mx-auto">
                   <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Subject *"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group">
                           <button type="button" className="btn btn-brand "> Submit </button>
                       </div>
                   </form>
               </div>
           </div>
           <Footer></Footer>
       </section>
    );
};

export default Contact;