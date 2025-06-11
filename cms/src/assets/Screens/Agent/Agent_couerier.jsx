import React, { useEffect, useState } from 'react'
import AgentLayout from './AgentLayout'
import style from '../../css/style.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Agent_couerier = () => {
    var uagent_branch= JSON.parse(window.localStorage.getItem("userData"))?.bracnh;
    var [courier,setCourier]=useState([])

var fetch_data=()=>{
    axios.get(`http://localhost:1234/couerierDetailfetch/${uagent_branch}`).then((resp)=>{
        setCourier(resp.data)
        console.log(resp.data)
    })
}
useEffect(()=>{
    fetch_data();
},)

var delete_pracel=(id)=>{
   
    axios.delete(`http://localhost:1234/delCouier/${id}`)
}
  return (
    <div>

      <AgentLayout></AgentLayout>

      <div className="container-fluid">
              <div className={style.maincontent}>
                  <h1>Courier Management</h1>
                  <div className="card">
                      <div className={style.cardheader}>Courier Information</div>
                      <div className="card-body table-responsive">
                       
                          <div className="d-flex justify-content-between align-items-center mb-3">
                              <div className="input-group">
                              <input type="text" class="form-control" id="searchPassenger" placeholder="Search for Contact..."/>
                                  <div className="input-group-append">
                                      <button className={style.btn2} type="button">Search</button>
                                  </div>
                              </div>
                        
                              <Link to={'/Agent_addCouerier'} className={style.btn1}>New</Link>
                          </div>
          
                          <table className="table table-striped "  >
                              <thead>
                                
                                  <tr>
                                        <th>Tracking No</th>
                                            <th>Sender Name</th>
                                            <th>Receiver Name</th>
                                            <th>Status</th>
                                            <th >Action</th>

                                        </tr>
                                  
                              </thead>
                              <tbody>
                          
     
                        
                        
                 
                 {
                   
                    courier.map((con,index)=>(
                        <tr key={index}>
                            <td>{con.tracking}</td>
                            <td>{con.s_name}</td>
                            <td>{con.r_name}</td>
                            <td>{con.Status}</td>

<td>
                             <button className='btn btn-danger text-white mt-1' 
                            onClick={()=>delete_pracel(con._id)} >Delete</button>
                            <Link to={`/Agent_viewCouerier/${con._id}`} style={{marginLeft:10}} className='btn btn-warning text-white mt-1'>View</Link>
                            </td>
                        </tr>
                    ))
                 }
         
                               
                              </tbody>
                              
                          </table>
                      </div>
                      {courier.length === 0 && (
        <div className={style.box890}>
          <h5>Not Courier is added yet</h5>
        </div>
      )}
                  </div>
                  
              </div>
          </div>
    </div>
  )
}

export default Agent_couerier
