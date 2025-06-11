import React, { useEffect, useState } from 'react'
import Layout from './components/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ViewCompany = () => {
     var [com,companyinserted]=useState([])
    var {id}=useParams()
    var find_data=()=>{
axios.get(`http://localhost:1234/com_data/${id}`).then((r)=>(companyinserted(r.data)))
    }
    useEffect(()=>{
      find_data()
    },[])
  return (
    <>
      <Layout></Layout>
      <section className='container'style={{ width:"60%", marginTop:150}} >
     <div class="container-fluid">
        <div class="main-content">
            <h1>Company Data</h1>
            <div class="card mb-4 cardd">
                <div class="row no-gutters">
                   
                    <div class="col-md-5" >
                        <div class="card-body cardbody">
                            <h5 class="card-title cardtitle"> Name : <b>{com.name}</b></h5>
                       <h6>Email:{com.email}</h6>
                       <h6>Website:{com.website}</h6>
                       <h6>Status:{com.status===1?(
                        <span className='text-success'>Active</span>
                       ):(
                        <span className='text-danger'> Deactive</span>
                       )
                       }</h6>
                       <h6>{com.des}</h6>
                     
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

export default ViewCompany
