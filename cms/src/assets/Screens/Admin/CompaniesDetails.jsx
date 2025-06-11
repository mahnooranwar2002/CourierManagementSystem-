
import Layout from './components/Layout'
import React, { useEffect,useState,useRef } from 'react'

import style from '../../css/style.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
const CompaniesDetails = () => {
  const modalRef = useRef(null);
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
        // for insert the data
     var [com,companyinserted]=useState({
      name:"",  
      des:"",
      website:"",
      email:"",
      status:1
     })
var inputHandle=(e)=>{
  companyinserted({...com,[e.target.name]:e.target.value})
}
var companyReg=(e)=>{
  e.preventDefault();
  axios.post("http://localhost:1234/company_created",com).then(()=>{
    alert("the comapny is created now ");
    closeModal();

companyinserted({
  name:"",  
  des:"",
  website:"",
  email:"",
  status:1
})

  })
}
// for fetch
var [company_data,companiesfetch]=useState([]);
var company_fetch=()=>{
  axios.get("http://localhost:1234/fetch_company").then((resp)=>{
    companiesfetch(resp.data);
    console.log(resp.data)
  })
}
useEffect(()=>{
  company_fetch()
})
//for delete
var del_com=(id)=>{
  alert("the company is deleted");
  axios.delete(`http://localhost:1234/del_com/${id}`)
}
var company_Status=(id)=>{
  axios.put(`http://localhost:1234/company_status/${id}`).
    alert("the status of company is updated");
 
}

  return (
    
    <>
      <Layout></Layout>
          <div className="container-fluid">
                    <div className={style.maincontent}>
                        <h1>Company Management</h1>
                        <div className="card">
                            <div className={style.cardheader}>Company Information</div>
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
                                            <th>Status</th>
                                            <th >Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                     {company_data.map((con,index)=>(
                                    <tr key={index}>
                                      <td>{con.name}</td>
                                      <td>{con.email}</td>
                                      <td>{con.status===1?(
                                        <span>Activate</span>
                                      ):(
                                        <span>Deactive</span>
                                      )}</td>
                                      <td>
                                      <button className='btn btn-success text-white mt-1' 
                                        onClick={()=>company_Status(con._id)} style={{marginRight:10}}>Status
                                        </button>
                                        <Link to={`/view_company/${con._id}`} className='btn btn-secondary text-white mt-1' style={{marginRight:10}}> View</Link>
                                         <Link to={`/edit_company/${con._id}`} className='btn btn-primary text-white mt-1' style={{marginRight:10}}> Edit</Link>

                                      <button className='btn btn-danger text-white mt-1' 
                                        onClick={()=>del_com(con._id)} >Delete</button>
                                      </td>
                                    </tr>
                                     ))}
                
          
                                     
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
                                          Add New Company
                                        </h5>
                                      </div>
                                      <div className="modal-body">
                                        <form onSubmit={companyReg}>
                                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                              name="name"
                              type="text"
                            value={com.name}
                              onChange={inputHandle}
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
                            value={com.email}
                              onChange={inputHandle}
                              className="form-control"
                              id="name"
                              required
                              placeholder="Enter name"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="name">website</label>
                            <input
                              name="website"
                              type="text"
                              value={com.website}
                            
                              onChange={inputHandle}
                              className="form-control"
                              id="name"
                              required
                              placeholder="Enter name"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="name">website</label>
                           
                            <textarea  className="form-control"   placeholder="Enter Des" onChange={inputHandle} name='des' value={com.des} ></textarea>
                          </div>
                            <button type="submit" className={`${style.btnblock} bt2 btn1`}>
                                                      Save
                                                    </button>
                                        </form>
                                           <button onClick={closeModal} className="btn btn-danger w-100" style={{marginTop:10}}>
                                                                Cancel
                                                              </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
    </>
  )
}

export default CompaniesDetails
