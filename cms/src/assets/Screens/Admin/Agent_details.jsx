import axios from 'axios'
import React, { useEffect,useState,useRef } from 'react'
import Layout from './components/Layout'
import style from '../../css/style.module.css';
import { Link, useNavigate } from 'react-router-dom';
const Agent_details = () => {
 
    var nav=useNavigate()
  var [agent,agents_details]=useState({
    name:"",
    email:"",
    password:"",
    city:"",
   address:"",
    status:1,
    bracnh:""
  })
  var handleInput=(e)=>{
    agents_details({...agent,[e.target.name]:e.target.value})
  }

  var agent_inserted=(e)=>{
e.preventDefault();
axios.post("http://localhost:1234/insertagent",agent).then(()=>{
    alert("the agent is successfully added !");
    closeModal();
    agents_details({
        name:"",
        email:"",
        password:"",
        city:"",
       address:"",
        status:1,
        bracnh:" "
    })
})

nav('/agent')
  }
var [agents,fetch_agent]=useState([])
var getagent=()=>{
    axios.get("http://localhost:1234/fetch_agent").then((resp)=>{
        fetch_agent(resp.data)
    })
 
}
var [brnach_data,branchFetch]=useState([])
var fecth_branch_detail=()=>{
  axios.get("http://localhost:1234/branch_fetch").then((resp)=>{branchFetch(resp.data)})
}

useEffect(()=>{
    getagent();
    fecth_branch_detail();
})
  const modalRef = useRef(null);
var agentStatus=(id)=>{
 
    axios.put(`http://localhost:1234/agent_status/${id}`);
    alert("the status is updated")
}
var deleted_agent=(id)=>{

    axios.delete(`http://localhost:1234/agent_delete/${id}`);

}


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
        agents_details({
            name:"",
            email:"",
            password:"",
            city:"",
           address:"",
            status:1,
            bracnh:""
        })
    }
  };
    return (

    <div>
        <Layout/>
        <div className="container-fluid">
              <div className={style.maincontent}>
                  <h1>Agent Management</h1>
                  <div className="card">
                      <div className={style.cardheader}>Agent Information</div>
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
                                     <th>satus</th>
                                      <th >Action</th>
                                  </tr>
                              </thead>
                              <tbody>
                 
                              {
                                agents.map((con,index)=>(
                                    <tr key={index}>
                                        <td>{con.name}</td>
                                     
                                        <td>{con.email}</td>
                                        <td>
    {con.status === 1 ? (
        <span>Active</span>
    ) : (
        <span>Deactive</span>
    )}
</td>
                                        
                                       <td>
                                       <button className='btn btn-primary text-white mt-1 mr-2' 
                                        onClick={()=>agentStatus(con._id)} style={{marginRight:19}}>Status</button>
                                       
                                        <button className='btn btn-primary text-white mt-1 ml-2' style={{marginRight:19, textDecoration:"none"}}>
                                            <Link to={`/editagent/${con._id}`} style={{ textDecoration:"none"}}  className='text-white'>Edit</Link>
                                            </button>
                                            <button className='btn btn-danger text-white mt-1' 
                                        onClick={()=>deleted_agent(con._id)} >Delete</button>
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
                          Add New Agent
                        </h5>
                      </div>
                      <div className="modal-body">
                        <form onSubmit={agent_inserted}>
                          <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                              name="name"
                              type="text"
                              value={agent.name}
                              onChange={handleInput}
                              className="form-control"
                              id="name"
                              required
                              placeholder="Enter name"
                            />
                          </div>
                          <div>
                            <label htmlFor="email">Email</label>
                            <input
                              name="email"
                              type="text"
                              value={agent.email}
                              onChange={handleInput}
                              className="form-control"
                              id="email"
                              required
                              placeholder="Enter email"
                            />
                          </div>
                          <div className="form-group">
                            
                          <label htmlFor="email">Branch</label>
                          <select onChange={handleInput} name='bracnh' class="form-select" aria-label="Default select example">
                          <option hidden>select branch</option>
                          {
                                brnach_data.map((con,index)=>(
                                  <option value={con.name}>{con.name}</option>
                                ))
                              }
                          </select>
                          </div>
                          <div>
                            <label htmlFor="password">Password</label>
                            <input
                              name="password"
                              type="password"
                              value={agent.password}
                              onChange={handleInput}
                              className="form-control"
                              id="password"
                              required
                              placeholder="Enter password"
                            />
                          </div>
                          <div>
                            <label htmlFor="city">City</label>
                            <input
                              name="city"
                              type="text"
                              value={agent.city}
                              onChange={handleInput}
                              className="form-control"
                              id="city"
                              required
                              placeholder="Enter city"
                            />
                          </div>
                          <div>
                            <label htmlFor="address">Address</label>
                            <input
                              name="address"
                              value={agent.address}
                              type="text"
                              onChange={handleInput}
                              className="form-control"
                              id="address"
                              required
                              placeholder="Enter address"
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



    </div>
  )
}

export default Agent_details
