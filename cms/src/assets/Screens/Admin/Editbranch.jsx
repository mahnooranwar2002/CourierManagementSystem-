import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from '../../css/style.module.css';
import Layout from './components/Layout';
const Editbranch = () => {
    var {id}=useParams();
var [branch,setBranch]=useState({
    name:"",
    street:"",
    city:"",
    state:"",
   contact:"",
})
var find_data=()=>{
    axios.get(`http://localhost:1234/branch_data/${id}`).then((resp)=>{
setBranch(resp.data)
    })
}

useEffect(()=>{
    find_data()
},[])

var handleInput=(e)=>{
setBranch({...setBranch,[e.target.name]:e.target.value})
}
var edit_branchs=(e)=>{
    e.preventDefault();
    axios.put(`http://localhost:1234/branch_edited/${id}`,branch)
}

    return (
    
    <>
  <Layout></Layout>
        <div className='container'style={{ width:"50%", marginTop:150}}  >
            <div className="modal-dialog">
                <div className="modal-content">
                <div className={`${style.customHeader} modal-header`}>
                        <h5 className= {`${style.modaltitle} modal-title`} 
                        id="addPassengerModalLabel" style={{padding:10}}>Update Branch</h5>
                   
                    </div>
                    <div className="modal-body">
                      <form onSubmit={edit_branchs}>
                                           <div className="form-group">
                                               <label htmlFor="name">Name</label>
                                               <input
                                                 name="name"
                                                 type="text"
                                               value={branch.name}
                                                 onChange={handleInput}
                                                 className="form-control"
                                                 id="name"
                                                 required
                                                 placeholder="Enter name"
                                               />
                                             </div>
                                             <div className="form-group">
                                               <label htmlFor="name">Street/Building</label>
                                               <input
                                                 name="street"
                                                 type="text"
                                               value={branch.street}
                                                 onChange={handleInput}
                                                 className="form-control"
                                                 id="name"
                                                 required
                                                 placeholder="Enter name"
                                               />
                                             </div>
                                          
                                             <div className="form-group">
                                               <label htmlFor="name">City</label>
                                               <input
                                                 name="city"
                                                 type="text"
                                               value={branch.city}
                                                 onChange={handleInput}
                                                 className="form-control"
                                                 id="name"
                                                 required
                                                 placeholder="Enter name"
                                               />
                                             </div>     <div className="form-group">
                                               <label htmlFor="name">State</label>
                                               <input
                                                 name="state"
                                                 type="text"
                                               value={branch.state}
                                                 onChange={handleInput}
                                                 className="form-control"
                                                 id="name"
                                                 required
                                                 placeholder="Enter name"
                                               />
                                             </div>
                                             <div className="form-group">
                                               <label htmlFor="name">Contact</label>
                                               <input
                                                 name="contact"
                                                 type="text"
                                               value={branch.contact}
                                                 onChange={handleInput}
                                                 className="form-control"
                                                 id="name"
                                                 required
                                                 placeholder="Enter name"
                                               />
                                             </div>
                                            
                                             <button type="submit" className={`${style.btnblock} bt2 btn1`}>
                                               Save
                                             </button>
                                         
                                           </form>
                    </div>
                </div>
            </div>
            </div>
    

    </>
  )
}

export default Editbranch
