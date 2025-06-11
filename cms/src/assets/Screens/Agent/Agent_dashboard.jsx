import React, { useEffect, useState } from 'react'
import AgentLayout from './AgentLayout'
import style from '../../css/style.module.css';
import axios from 'axios';
const Agent_dashboard = () => {
  var uagent_branch= JSON.parse(window.localStorage.getItem("userData"))?.bracnh;
      var [courier,setCourier]=useState([])
  var fetch_data=()=>{
    axios.get(`http://localhost:1234/couerierDetailfetch/${uagent_branch}`).then((resp)=>{
        setCourier(resp.data)
        console.log(resp.data)
    })
}
useEffect(()=>{
    fetch_data();
},)
  return (
    <div>
      <AgentLayout></AgentLayout>
       <div class={style.maincontent}>
                  <h1>DashBoard</h1>
                  <div class="row mahnoorRow">
                  <div class="col-md-3">
                          <div class="card card-count">
                              <div class="card-body">
                                  <div class="count">{courier.length}</div>
                                  <div class="icon">
                                  <i class='bx bxs-package'></i>
                                  </div>
                              </div>
                              <div class="card-footer">
                              Courier
                              </div>
                          </div>
                          </div>
                          
                  
                  </div>
               </div>
    </div>
  )
}

export default Agent_dashboard
