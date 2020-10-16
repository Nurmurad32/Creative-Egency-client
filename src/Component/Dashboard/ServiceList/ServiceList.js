import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const ServiceList = () => {

    const { register, handleSubmit, errors } = useForm();
    const [orderList, setOrderList] = useState([])

    fetch('http://localhost:5000/orderList')
        .then(res => res.json())
        .then(data => {
            setOrderList(data);
        })

    return (
        <div className=" row " style={{ margin: '0' }}>
            <div className="col-md-2">
                <Sidebar></Sidebar>

            </div>
            <div className="col-md-10" style={{ padding: '0' }}>
                <h1 style={{ fontWeight: '22px', margin: '30px 0 19px 37px' }} >Service List</h1>
                <div style={{ padding: '0', backgroundColor: '#F4F7FC', minHeight: '500px' }}>
                    <div className="order-body" style={{ padding: '25px 30px' }}>
                        <table className="table table-borderless" style={{ backgroundColor: '#FFF' }}>
                            <thead style={{ backgroundColor: '#F5F6FA', border: '1px solid #F5F6FA' }}>
                                <tr>
                                    <th className="text-secondary" scope="col" >Name</th>
                                    <th className="text-secondary" scope="col">Email ID</th>
                                    <th className="text-secondary" scope="col">Service</th>
                                    <th className="text-secondary" scope="col">Project Details</th>
                                    <th className="text-secondary" scope="col">Status</th>
                                </tr>
                            </thead>

                            {
                                orderList.map(order =>
                                    <tbody style={{ backgroundColor: '#FFF' }}>
                                        <td>{order.name}</td>
                                        <td>{order.email}</td>
                                        <td>{order.project}</td>
                                        <td>{order.description}</td>
                                        <td>
                                            <form >
                                                <select name="gender" class="form-control" ref={register({ required: true })}>
                                                    <option type='submit' name="status" id="status" value="">{order.status}</option>
                                                    <option type='submit' name="status" id="status" value="On going">On going</option>
                                                    <option type='submit' name="status" id="status" value="Done">Done</option>
                                                    <option type='submit' name="status" id="status" value="Pending">Pending</option>
                                                </select>
                                            </form>
                                        </td>
                                    </tbody>
                                )
                            }
                        </table>
                    </div>
                    </div>
                </div>
            </div>
    );
};

export default ServiceList;