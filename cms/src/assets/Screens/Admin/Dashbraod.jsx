import React, { useEffect, useState } from 'react'
import Layout from './components/Layout'

import style from '../../css/style.module.css';
import axios from 'axios';
const Dashbraod = () => {

// admin
var [admins,adminDetails]=useState([])
var fetchAdmin=()=>{
 axios.get("http://localhost:1234/fetchadmin").then((resp)=>{
        adminDetails(resp.data);
     
    })
}
var [brnach_data,branchFetch]=useState([])
var fecth_branch_detail=()=>{
  axios.get("http://localhost:1234/branch_fetch").then((resp)=>{branchFetch(resp.data)})
}
var [company_data,companiesfetch]=useState([]);
var company_fetch=()=>{
  axios.get("http://localhost:1234/fetch_company").then((resp)=>{
    companiesfetch(resp.data);
    console.log(resp.data)
  })
}
var [agents,fetch_agent]=useState([])
var getagent=()=>{
    axios.get("http://localhost:1234/fetch_agent").then((resp)=>{
        fetch_agent(resp.data)
    })
 
}
var [fetch_types,typesdetails]=useState([])
var fetch_data=()=>{
axios.get("http://localhost:1234/fetch_types").then((resp)=>{
    typesdetails(resp.data)
})
}
var [s,CourierSet]=useState([]);
var fetchDetails=()=>{
    axios.get("http://localhost:1234/fetchdata").then((resp)=>{
     CourierSet(resp.data);
   
   } )
}
var [contact,fetchContact]=useState([]);

var fetch_details=()=>{
    axios.get("http://localhost:1234/fetchCouier").then((resp)=>{
        fetchContact(resp.data);
    })
}


var [user,setUser]=useState([]);
var fetch_datas = ()=>{
axios.get("http://localhost:1234/userdetails").then((resp)=>{
setUser(resp.data)
console.log(resp.data)
})
}
useEffect(()=>{
    fetchAdmin();
    fecth_branch_detail();
    company_fetch();
    getagent();
    fetch_data();
    fetchDetails();
    fetch_details();
    fetch_datas();
},[])


  return (
    <div>
      <Layout></Layout>
      <div class={style.maincontent}>
            <h1>DashBoard</h1>
            <div class="row mahnoorRow">
            <div class="col-md-3">
                    <div class="card card-count">
                        <div class="card-body">
                            <div class="count">{admins.length}</div>
                            <div class="icon">
                            <i class='bx bx-user-circle'></i>
                            </div>
                        </div>
                        <div class="card-footer">
                        Total Admins
                        </div>
                    </div>
                    </div>
                    
                <div class="col-md-3">
                    <div class="card card-count">
                        <div class="card-body">
                            <div class="count">{company_data.length}</div>
                            <div class="icon">
                            <i class='bx bx-store-alt'></i>
                                </div>
                        </div>
                        <div class="card-footer">
                        Companies
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card card-count">
                        <div class="card-body">
                            <div class="count">{agents.length}</div>
                            <div class="icon">
                            <i class='bx bxs-user'></i>
                            </div>
                        </div>
                        <div class="card-footer">
                        Agent
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card card-count">
                        <div class="card-body">
                            <div class="count">{brnach_data.length}</div>
                            <div class="icon">
                            <i class='bx bxs-location-plus'></i>
                            </div>
                        </div>
                        <div class="card-footer">
                         Branch
                        </div>
                    </div>
                </div>
            </div>
         
            <div class="row mahnoorRow">
                <div class="col-md-3">
                    <div class="card card-count">
                        <div class="card-body">
                            <div class="count">{fetch_types.length}</div>
                            <div class="icon"><i class='bx bxs-grid-alt'></i></div>
                        </div>
                        <div class="card-footer">
                       Courier Type
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card card-count">
                        <div class="card-body">
                            <div class="count">{s.length}</div>
                            <div class="icon">
                            <i class='bx bxs-package'></i>
                            </div>
                        </div>
                        <div class="card-footer">
                           Courier
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card card-count">
                        <div class="card-body">
                            <div class="count">{contact.length}</div>
                            <div class="icon">  
                                 <i class='bx bxs-contact' >
                                    </i></div>
                        </div>
                        <div class="card-footer">
                           Contact
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card card-count">
                        <div class="card-body">
                            <div class="count">{user.length}</div>
                            <div class="icon">   <i class='bx bx-user-circle'></i></div>
                        </div>
                        <div class="card-footer">
                        User
                        </div>
                    </div>
                </div>
            </div>
         
        </div>
    </div>
  )
}

export default Dashbraod
