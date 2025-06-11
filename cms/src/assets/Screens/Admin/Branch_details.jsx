
import axios from 'axios'
import React, { useEffect,useState,useRef } from 'react'
import Layout from './components/Layout'
import style from '../../css/style.module.css';
import { Link } from 'react-router-dom';

const Branch_details = () => {
    useEffect(()=>{
        fecth_branch_detail()
      })
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
      var [branch,branchState]=useState({
        name:"",
        street:"",
        city:"",
        state:"",
       contact:"",


      })
      const modalRef = useRef(null);
      var handleInput=(e)=>{
         branchState({...branch,[e.target.name]:e.target.value})
      }
      var added_branch=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:1234/branch_inserted",branch).then(()=>{
            alert("the branch is added now");
            branchState({
              name:"",
                street:"",
                city:"",
                state:"",
               contact:"",
            })
            closeModal()
        })
      }
    var [brnach_data,branchFetch]=useState([])
      var fecth_branch_detail=()=>{
        axios.get("http://localhost:1234/branch_fetch").then((resp)=>{branchFetch(resp.data)})
      }
     
  var brnach_delete=(id)=>{

axios.delete(`http://localhost:1234/branch_Deleted/${id}`).then(()=>{
    fecth_branch_detail()
})

   }
  return (
    <>
      <Layout></Layout>
    <div className="container-fluid">
              <div className={style.maincontent}>
                  <h1>Branch Management</h1>
                  <div className="card">
                      <div className={style.cardheader}>Branch Information</div>
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
                                      <th>Contact</th>
                                   
                                      <th >Action</th>
                                  </tr>
                              </thead>
                              <tbody>
                                {
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
                                )}
          
    
                               
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
                          Add New Branch
                        </h5>
                      </div>
                      <div className="modal-body">
                        <form onSubmit={added_branch}>
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
                          <button onClick={closeModal} className="btn btn-danger w-100" style={{marginTop:10}}>
                            Cancel
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

    </>
  )
}

export default Branch_details
