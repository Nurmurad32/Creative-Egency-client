import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    const [addReview, setAddReview] = useState({});
    const [file , setFile] = useState(null);

    const handleBlur = (e) =>{
        const newReview = {...addReview}
        newReview[e.target.name] = e.target.value;
        setAddReview(newReview);
    }

    const handleFileChange = (e) =>{
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () =>{
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', addReview.name)
        formData.append('designation', addReview.designation)
        formData.append('description', addReview.description)

        fetch('https://aqueous-plains-47347.herokuapp.com/addReview', {
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


                    <form className="order-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" name="name" className="form-control" placeholder="Your name / Company's name" onBlur={handleBlur}/>
                        </div>
                        
                        <div className="form-group">
                            <input type="text" name="designation" className="form-control" placeholder="Company's name Designation" onBlur={handleBlur}/>
                        </div>

                        <div className="form-group">
                            <textarea name="description" className="form-control" id="" cols="30" rows="8" placeholder="Description" onBlur={handleBlur}></textarea>
                        </div>

                        <div>
                            <input onChange={handleFileChange} type="file" id="img" name="img" accept="image/*" />
                        </div>

                        <div className="form-group ml-auto">
                            <button type="submit" className="btn btn-brand "> Submit </button>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default Review;