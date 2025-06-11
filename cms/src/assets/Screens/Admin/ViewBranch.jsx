import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from './components/Layout'

const ViewBranch = () => {

    var[bracnh,branchData]=useState([])
var {id}=useParams()
var find_data=()=>{
axios.get(`http://localhost:1234/branch_data/${id}`).then((resp)=>{
branchData(resp.data);
console.log(resp.data);
})
}
useEffect(()=>{
    find_data();
},[])

  return (
    <>
     <Layout></Layout>
     <section className='container'style={{ width:"60%", marginTop:150}} >
     <div class="container-fluid">
        <div class="main-content">
            <h1>Branch Data</h1>
            <div class="card mb-4 cardd">
                <div class="row no-gutters">
                   
                    <div class="col-md-12">
                        <div class="card-body cardbody">
                            <h5 class="card-title cardtitle"> Name : <b>{bracnh.name}</b></h5>
                         
                           <div className='d-flex ' style={{ width: "100%" ,justifyContent:"space-between",}}>
    <p className="card-text mr-2">Street: <b>{bracnh.street}</b></p>
    <p className="card-text">City: <b>{bracnh.city}</b></p>
</div>  <div className='d-flex ' style={{ width: "100%" ,justifyContent:"space-between"}}>
                            <p class="card-text">State: <b>{bracnh.state}</b></p>
                            <p class="card-text">Contact: <b>{bracnh.contact}</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
      
    </>
  )
}

export default ViewBranch
