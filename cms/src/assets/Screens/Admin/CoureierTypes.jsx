import React, { useEffect,useState,useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Layout from './components/Layout'
import style from '../../css/style.module.css';
import axios from 'axios';
const CoureierTypes = () => {
    var [type,settypes]=useState({
        name:"",
        des:"",
    });
    var handleInput=(e)=>{
     settypes({...type,[e.target.name]:e.target.value})
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
         
        }
      };

          const modalRef = useRef(null);
var add_types=(e)=>{
  
    e.preventDefault();
    axios.post("http://localhost:1234/created_type",type).then((resp)=>{
        alert("the type is created now")
        settypes({
            name:"",
            des:"",
        })
        closeModal()
    })
}
var [fetch_types,typesdetails]=useState([])
var fetch_data=()=>{
axios.get("http://localhost:1234/fetch_types").then((resp)=>{
    typesdetails(resp.data)
})
}
useEffect(()=>{
    fetch_data()
})

var delete_types=(id)=>{
    alert(id);
    axios.delete(`http://localhost:1234/del_type/${id}`)
}
  return (
    <>
      <Layout></Layout>
      <div className="container-fluid">
              <div className={style.maincontent}>
                  <h1>Couier Types Management</h1>
                  <div className="card">
                      <div className={style.cardheader}>Couier Types Information</div>
                      <div className="card-body table-responsive">
                       
                          <div className="d-flex justify-content-between align-items-center mb-3">
                              <div className="input-group">
                              <input type="text" class="form-control" id="searchPassenger" placeholder="Search for Contact..."/>
                                  <div className="input-group-append">
                                      <button className={style.btn2} type="button">Search</button>
                                  </div>
                              </div>
                              <button className={style.btn1  } onClick={openModal}>New </button>
                          </div>
          
                          <table className="table table-striped "  >
                              <thead>
                                  <tr>
                                  
                                      <th>Name</th>
                                      <th>Details</th>
                                      <th>Action</th>
                                  </tr>
                              </thead>
                              <tbody>
                 {
                    fetch_types.map((con,index)=>(
                    <tr key={index}>
                        <td>{con.name}</td>
                        <td>{con.des}</td>
                        <td>
                        <button className='btn btn-danger text-white mt-1' 
                            onClick={()=>delete_types(con._id)} >Delete</button>
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
                        <form onSubmit={add_types} >
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                              name="name"
                              type="text"
                              value={type.name}
                              onChange={handleInput}
                              className="form-control"
                              id="name"
                              required
                              placeholder="Enter name"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="name">Details</label>
                            <textarea
                              name="des"
                              type="text"
                              value={type.des}
                              onChange={handleInput}
                              className="form-control"
                              id="name"
                              required
                              
                            ></textarea>
                          </div>
                   
                     <button type="submit" className={`${style.btnblock} bt2 btn1 `} >
                            Save
                          </button>
                          <button onClick={closeModal} className={'w-100, btn btn-secondary'} style={{marginTop:10,width:"100%"}}>
                            Close
                          </button>
                         
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

    </>
  )
}

export default CoureierTypes
