import React, { useEffect, useState } from 'react';
import Layout from './components/Layout';
import { useParams } from 'react-router-dom';
import style from '../../css/style.module.css';
import axios from 'axios';
const UserProfile = () => {
 
    var {id}=useParams();
var [admin_details,adminSet]=useState({
    name:"",
    email:"",
    password:""

})


var find_data=()=>{
    axios.get(`http://localhost:1234/find_admin/${id}`).then((resp)=>{adminSet(resp.data)})
}
useEffect(()=>{
    find_data()
},[])
var handleInput=(e)=>{
    adminSet({...admin_details,[e.target.name]:e.target.value})
    }
var adminupdated=(e)=>{
    e.preventDefault();
    axios.put(`http://localhost:1234/admin_Update/${id}`,admin_details)
  

}


var [reg,userregistered]=useState({
  email:"",password:"",name:"",Status:1
})
var inputHandle=(e)=>{
  userregistered({...reg,[e.target.name]:e.target.value})
}

    return (
        <>
        <Layout></Layout>
            <div className='container'style={{ width:"50%", marginTop:150}}  >
              <div className="modal-dialog">
                  <div className="modal-content">
                  <div className={`${style.customHeader} modal-header`}>
                          <h5 className= {`${style.modaltitle} modal-title`} 
                          id="addPassengerModalLabel" style={{padding:10}}>Update Profile</h5>
                   
                      </div>
                      <div className="modal-body">
                      <form onSubmit={adminupdated} >
                     <div className="form-group">
                                                 <label htmlFor="name">Name</label>
                                                 <input
                                                   name="name"
                                                   type="text"
                                                   readOnly
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
                                
                     </form> 
                     </div>
                  </div>
              </div>
              </div>
        </>
    );
};

export default UserProfile;