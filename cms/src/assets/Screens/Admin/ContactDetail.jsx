import React, { useEffect, useState } from 'react'
import Layout from './components/Layout'
import style from '../../css/style.module.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ContactDetail = () => {

var [contact,fetchContact]=useState([]);

var fetch_details=()=>{
    axios.get("http://localhost:1234/fetchCouier").then((resp)=>{
        fetchContact(resp.data);
    })
}
useEffect(()=>{
    fetch_details();
})

var del_contact=(id)=>{
    alert(id);
    axios.delete(`http://localhost:1234/delContact/${id}`)
}
  return (
    <div>
      <Layout></Layout>
      <div className="container-fluid">
              <div className={style.maincontent}>
                  <h1>Contact Management</h1>
                  <div className="card">
                      <div className={style.cardheader}>Confact Information</div>
                      <div className="card-body table-responsive">
                       
                          <div className="d-flex justify-content-between align-items-center mb-3">
                              <div className="input-group">
                              <input type="text" class="form-control" id="searchPassenger" placeholder="Search for Contact..."/>
                                  <div className="input-group-append">
                                      <button className={style.btn2} type="button">Search</button>
                                  </div>
                              </div>
                            
                          </div>
          
                          <table className="table table-striped "  >
                              <thead>
                                  <tr>
                                  
                                      <th>Name</th>
                                      <th>Email</th>
                                      <th>Sub</th>
                                      <th>Message</th>
                                      <th>Action</th>
                                  </tr>
                              </thead>
                              <tbody>
                              {contact.map(
                                (con,index)=>(
                            <tr key={index}>
                                <td> {con.name}</td>
                                <td> {con.email}</td>
                                <td> {con.sub}</td>   
                                <td> {con.msg}</td>
                                 <td>
                                    <button className='btn btn-danger text-white mt-1' onClick={()=>del_contact(con._id)}> Delete</button>
                                 </td>


                            </tr>
                              ))}
    
                               
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default ContactDetail
