import React, { useEffect, useState } from 'react';
import Layout from './components/Layout';
import { useParams } from 'react-router-dom';
import style from '../../css/style.module.css';
import axios from 'axios';

const UserDetailsAdmin = () => {
    var [user,setUser]=useState([]);
    var fetch_data = ()=>{
axios.get("http://localhost:1234/userdetails").then((resp)=>{
    setUser(resp.data)
    console.log(resp.data)
})
    }
    useEffect(()=>{
        fetch_data()

    })
   var user_delete=(id)=>{
    
    axios.delete(`http://localhost:1234/user_del/${id}`)

   }
   var user_status=(id)=>{
    axios.put(`http://localhost:1234/user_status/${id}`)
   }
  return (
    <div>
        <Layout></Layout>
        <div className="container-fluid">
              <div className={style.maincontent}>
                  <h1>User Management</h1>
                  <div className="card">
                      <div className={style.cardheader}>User Information</div>
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
                                      <th>Email </th>
                                      <th>Status </th>
                                      <th >Action</th>
                                  </tr>
                              </thead>
                              <tbody>
                                {/* {
                                brnach_data.map((con,index)=>(
                                    <tr key={index}>
                                    <td>{con.name}</td>  
                                    <td>{con.contact}</td>  
                                    <td>
                                      <Link to={`/view_branch/${con._id}`} className='btn btn-secondary text-white mt-1' style={{marginRight:10}}> View</Link>
                                      <Link to={`/edit_branch/${con._id}`} className='btn btn-primary text-white mt-1' style={{marginRight:10}}> Edit</Link>
                                    <button className='btn btn-danger text-white mt-1' 
                                onClick={()=>{
                                    brnach_delete(con._id)
                                }}     >Delete</button>
                                </td>
                                    </tr>)
                                )} */}
          
    {
        user.map((con,index)=>(
<tr key={index}>
    <td>{con.name}</td>
    <td>{con.email}</td> 
   <td>
   {con.Status === 1 ? (
        <span>Active</span>
    ) : (
        <span>Deactive</span>
    )}
  
   </td>
   <td>
   <button className='btn btn-danger text-white mt-1' 
                                onClick={()=>{
                                    user_delete(con._id)
                                }}     >Delete</button>
                                  <button className='btn btn-primary text-white mt-1' style={{marginLeft:15}}
                                onClick={()=>{
                                    user_status(con._id)
                                }}     >Status</button>
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
    </div>
  )
}

export default UserDetailsAdmin
