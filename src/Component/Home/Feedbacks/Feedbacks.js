import React from 'react';

const Feedbacks = ({feedback}) => {
    // const {msg,name,from ,img} = props.feedback;
    return (
        <div className="card shadow-sm">
            <div className="card-body d-flex ">
                <img className="mx-3 rounded-circle" src={`data:image/png;base64,${feedback.image.img}`} alt="" height="50" width="50"/>
                <div>
                    <h6 className="text-primary">{feedback.name}</h6>
                    <p className="m-0">{feedback.designation}</p>
                </div>
            </div>
            <div className="card-footer">
                <p className="card-text ">{feedback.description}</p>
            </div>
            
       </div>
    );
};

export default Feedbacks;