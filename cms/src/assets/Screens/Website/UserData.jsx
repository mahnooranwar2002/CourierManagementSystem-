import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import style from '../../css/style.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const UserData = () => {
    var {id}=useParams();
    var [user,userData]=useState({
        email:"",password:"",name:"",Status:1 
})
    var userDatas=()=>{
axios.get(`http://localhost:1234/userdata/${id}`).then((resp)=>{
    userData(resp.data);
 console.log(resp.data)
})

    }
    var inputHandle=(e)=>{
        userData({...user,[e.target.name]:e.target.value})
      }
    var userRegistered=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:1234/userUpdated/${id}`,user).then((resp)=>{
        
            alert(" your account is Updated !")
        })
            }
    useEffect(()=>{
        userDatas()
        },[])
  return (
    <>
      <Navbar></Navbar>
    <div className='container'style={{ width:"100%", marginTop:100,marginBottom:80}}  >
              <div className="modal-dialog">
                  <div className="modal-content">
                  <div className={`${style.customHeader} modal-header`}>
                          <h5 className= {`${style.modaltitle} modal-title`} 
                          id="addPassengerModalLabel" style={{padding:10}}>Update Profile</h5>
                   
                      </div>
                      <div className="modal-body">
                      <form onSubmit={userRegistered} >
                        <input type="hidden"  value={user.Status}  name='Status'/>
                       
                     <div className="form-group">
                                                 <label htmlFor="name">Name</label>
                                                 <input
                                                   name="name"
                                                   type="text"
                                                   readOnly
                                                 value={user.name}
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
                                                   value={user.email}
                                                   onChange={inputHandle}
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
                                                   value={user.password}
                                                   onChange={inputHandle}
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
<Footer></Footer>

    </>
  )
}

export default UserData

