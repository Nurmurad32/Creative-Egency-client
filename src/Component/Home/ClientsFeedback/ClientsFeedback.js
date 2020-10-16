import React, { useState } from 'react';
import './ClientFeedback.css'
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';
import Feedbacks from '../Feedbacks/Feedbacks';

// const feedbackData = [
//     {
//         msg : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name : 'Wilson Harry',
//         from : 'CEO, Manpol',
//         img : customer1
//     },
//     {
//         msg : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name : 'Ema Gomez',
//         from : 'CEO, Manpol',
//         img : customer2
//     },
//     {
//         msg : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name : 'Aliza Farari',
//         from : 'CEO, Manpol',
//         img : customer3
//     }
// ]

const ClientsFeedback = () => {
    const [feedbackData,setFeedbackData] = useState([])

    fetch('http://localhost:5000/feedback')
    .then(res => res.json())
    .then(data =>{
        setFeedbackData(data);
    })
    return (
        <section style={{margin: '100px 0 86px 0', textAlign: 'center'}}>
            <div className="container">
            <div >
                <h3>Clients <span style={{color:'#7AB259'}}> Feedback</span></h3>
            </div>
            <div className="card-deck mt-5">
                    {
                        feedbackData.map(feedback => <Feedbacks feedback={feedback} />)
                    }
                </div>
                </div>
        </section>
        
    );
};

export default ClientsFeedback;