
import Layout from './components/Layout'
import React, { useEffect,useState,useRef } from 'react'
import style from '../../css/style.module.css';
import axios from 'axios';
import Index from '../Website/Index';
const AdminDetails = () => {
          const openModal = () => {
            if (modalRef.current) {
              modalRef.current.classList.add('show');
              modalRef.current.style.display = 'block';
              document.body.classList.add('modal-open');
              document.body.style.overflow = 'hidden';
              //create a backdrop
              let backdrop = document.createElement('div');
              backdrop.className = 'modal-backdrop fade show';
              document.body.appendChild(backdrop);
            }
          };
          const modalRef = useRef(null);
          const closeModal = () => {
            if (modalRef.current) {
                modalRef.current.classList.remove('show');
                modalRef.current.style.display = 'none';
                document.body.classList.remove('modal-open');
                document.body.style.overflow = '';
                //remove backdrop
                let backdrop = document.querySelector('.modal-backdrop');
                if(backdrop){
                    backdrop.remove();
                }
            }
          };
        //   for fetch
var [admins,adminDetails]=useState([])
var fetchAdmin=()=>{

  console.log(  admins.length)
    axios.get("http://localhost:1234/fetchadmin").then((resp)=>{
        adminDetails(resp.data);
        console.log(resp)
    })
}
var admin_del=(id)=>{
    axios.delete(`http://localhost:1234/admin_del/${id}`)
}
useEffect(()=>{
    fetchAdmin()
})
var [admin_details,adminSet]=useState({
    name:"",
    email:"",
    password:""

})
var handleInput=(e)=>{
adminSet({...admin_details,[e.target.name]:e.target.value})
}

var add_admin=(r)=>{
    r.preventDefault();
    axios.post("http://localhost:1234/admin_added",admin_details).then(()=>{
        closeModal();
        alert("The admin is added successfully ")
    })
}
  return (
    <div>
      <Layout></Layout>
      <div className="container-fluid">
              <div className={style.maincontent}>
                  <h1>Admin Management</h1>
                  <div className="card">
                      <div className={style.cardheader}>Admin Information</div>
                      <div className="card-body table-responsive">
                  
                          <div className="d-flex justify-content-between align-items-center mb-3">
                              <div className="input-group">
                              <input type="text" class="form-control" id="searchPassenger" placeholder="Search for Contact..."/>
                                  <div className="input-group-append">
                                      <button className={style.btn2} type="button">Search</button>
                                  </div>
                              </div>
                              <button className={style.btn1  } onClick={openModal}>New</button>
                          </div>
          
                          <table className="table table-striped "  >
                              <thead>
                                  <tr>
                                  
                                      <th>Name</th>
                                      <th>Email</th>
                                   
                                      <th>Action</th>
                                  </tr>
                              </thead>
                              <tbody>
                             {
                                admins.map((con,index)=>(
                                <tr key={index}>
                                    <td>{con.name}</td>
                                    <td>{con.email}</td>
                                    <td>     
                                        <button className='btn btn-danger text-white mt-1' 
                                onClick={()=>{
                                   admin_del(con._id)
                                }}>Delete</button>
                                </td>
                                </tr>
                                ))
                             }
                               
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
             <div className="modal fade" id="addPassengerModal" ref={modalRef}>
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className={`${style.customHeader} modal-header`}>
                        <h5 className={`${style.modaltitle} modal-title`} id="addPassengerModalLabel">
                          Add New Admin
                        </h5>
                      </div>
                      <div className="modal-body">
<form onSubmit={add_admin} >
<div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                              name="name"
                              type="text"
                            value={admin_details.name}
                              onChange={handleInput}
                              className="form-control"
                              id="name"
                              required
                              placeholder="Enter name"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="name">Email</label>
                            <input
                              name="email"
                              type="text"
                            value={admin_details.email}
                              onChange={handleInput}
                              className="form-control"
                              id="name"
                              required
                              placeholder="Enter name"
                            />
                          </div><div className="form-group">
                            <label htmlFor="name">Password</label>
                            <input
                              name="password"
                              type="text"
                            value={admin_details.password}
                              onChange={handleInput}
                              className="form-control"
                              id="name"
                              required
                              placeholder="Enter name"
                            />
                          </div>
                            <button type="submit" className={`${style.btnblock} bt2 btn1`}>Save  </button>
              <button onClick={closeModal} className="btn btn-danger w-100" style={{marginTop:10}}>
                                                  Cancel
                                                </button>
</form> 

                     
                  
                      </div>
                    </div>
                  </div>
                </div>

    </div>
  )
}

export default AdminDetails
