import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import uploadIcon from '../../../images/upload.png'

const AddService = () => {
    const [addService, setAddService] = useState({});
    const [file , setFile] = useState(null);

    const handleBlur = (e) =>{
        const newService = {...addService}
        newService[e.target.name] = e.target.value;
        setAddService(newService);
    }

    const handleFileChange = (e) =>{
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () =>{
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', addService.name)
        formData.append('description', addService.description)

        fetch('http://localhost:5000/addAService', {
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
                    <h1 style={{fontWeight:'24px'}} >Add Service</h1>
                </div>
                <div className="order-body" style={{ backgroundColor: '#F4F7FC', minHeight: '400px', maxHeight: 'auto'}}>



                    <form style={{padding: '83px 0 16px 37px'}}  onSubmit={handleSubmit}>
                        <div className="form-group">
                            <div style={{display: 'flex'}}>
                            <div style={{width:'450px'}}>
                                <label htmlFor="">Service list</label>
                                <input type="text" name="name" className="form-control" placeholder="Enter title" onBlur={handleBlur}/>
                            </div>
                            <div style={{marginLeft:'49px'}}>
                                <label htmlFor="file" style={{marginLeft:'10px'}}>Icon</label>

                                <input onChange={handleFileChange} type="file" id="img" name="img" accept="image/*" /> 
                            </div>
                            </div>
             
                        </div>
                        <div className="form-group" style={{width:'450px'}}>
                            <textarea name="description" type="text" className="form-control" id="" cols="30" rows="8" placeholder="Description" onBlur={handleBlur}></textarea>
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

export default AddService;