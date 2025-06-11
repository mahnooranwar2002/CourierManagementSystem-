import React, { useEffect, useState } from 'react'
import Layout from './components/Layout'
import style from '../../css/style.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const EditCompany = () => {
        var [com,companyinserted]=useState({
          name:"",  
          des:"",
          website:"",
          email:"",
          status:1,
         })
    var inputHandle=(e)=>{
        companyinserted({...com,[e.target.name]:e.target.value})
      }
   
      var {id}=useParams()
      var find_data=()=>{
axios.get(`http://localhost:1234/com_data/${id}`).then((r)=>(companyinserted(r.data)))
      }
      useEffect(()=>{
        find_data()
      },[])
      var companyUpdated=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:1234/com_Update/${id}`,com).then(()=>{
          alert("the comapny is updated now ");
       

      
        })
      }
      
  return (
    <div>
      <Layout></Layout>
      <div className='container'style={{ width:"50%", marginTop:150}}  >
      <div className="modal-dialog">
          <div className="modal-content">
          <div className={`${style.customHeader} modal-header`}>
                  <h5 className= {`${style.modaltitle} modal-title`} 
                  id="addPassengerModalLabel" style={{padding:10}}>Update Company</h5>
             
              </div>
              <div className="modal-body">
                    <form onSubmit={companyUpdated}>
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
                                          <label htmlFor="name">des</label>
                                         
                                          <textarea  className="form-control"  
                                           placeholder="Enter Des" onChange={inputHandle} name='des' value={com.des} ></textarea>
                                        </div>
                                          <button type="submit" className={`${style.btnblock} bt2 btn1`}>
                                                                    Save
                                                                  </button>
                                                      </form>
              </div>
          </div>
      </div>
      </div>
    </div>
  )
}

export default EditCompany
