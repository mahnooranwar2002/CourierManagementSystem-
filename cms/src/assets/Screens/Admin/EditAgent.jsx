import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from '../../css/style.module.css';
import Layout from './components/Layout';

const EditAgent = () => {
    
      var [agent,agents_details]=useState({
        name:"",
        email:"",
        password:"",
        city:"",
       address:"",
        status:1,
      })
      var handleInput=(e)=>{
        agents_details({...agent,[e.target.name]:e.target.value})
      }
    var {id}=useParams()
    var find_data=()=>{
        axios.get(`http://localhost:1234/find_agent/${id}`).then((resp)=>{
            agents_details(resp.data)
        })
    }
    var update_Agnet=(e)=>{
        e.preventDefault();
axios.put(`http://localhost:1234/agent_updated/${id}`,agent)
alert("the agent is created successfully");

    }

    useEffect(()=>{
        find_data()
    },[])
  return (

    <>
    <Layout></Layout>
        <div className='container'style={{ width:"50%", marginTop:150}}  >
      <div className="modal-dialog">
          <div className="modal-content">
          <div className={`${style.customHeader} modal-header`}>
                  <h5 className= {`${style.modaltitle} modal-title`} 
                  id="addPassengerModalLabel" style={{padding:10}}>Update Agent</h5>
             
              </div>
              <div className="modal-body">
              <form onSubmit={update_Agnet}>
              <div className="form-group">
                          <label for="name">Name</label>
                          <input name='name' type="text" onChange={handleInput} className="form-control" id="name" required value={agent.name}/>
                      </div>
                      <div>
                      <label for="name">Email</label>
                          <input name='email' type="text" onChange={handleInput} className="form-control" id="name" required placeholder="Enter name" value={agent.email}/>
                      </div>
                      <div>
                      <label for="name">Password</label>
                          <input name='password' type="text" onChange={handleInput} className="form-control" id="name" required placeholder="Enter name" value={agent.password}/>
                      </div>
                      <div>
                <label for="name">City</label>
                    <input name='city' type="text" onChange={handleInput} className="form-control" id="name" required placeholder="Enter name" value={agent.city}/>
                </div>
                      <div>
                      <label for="name">Address</label>
                          <input name='address' type="text" onChange={handleInput} value={agent.address} className="form-control" id="name" required />
                      </div>
                      <button type="submit" className={`${style.btnblock} bt2 btn1`}>Save</button>
      
              </form>
              </div>
          </div>
      </div>
      </div>
    </>
  )
}

export default EditAgent
