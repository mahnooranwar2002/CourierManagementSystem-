import React, { useEffect, useState } from 'react'
import Layout from './components/Layout'
import style from '../../css/style.module.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
const ViewCouier = () => {
  var {id}=useParams();

  var [parcel,pracelSet]=useState([])
var fetch_data=()=>{
  axios.get(`http://localhost:1234/pracelData/${id}`).then((resp)=>{
pracelSet(resp.data);
console.log(resp.data);
  })
}
useEffect(()=>{
  fetch_data()
},[])


  return (
    <>
      <Layout></Layout>
      <div className="container-fluid">
    <div className={style.maincontent}>
    <div class={style.header}>Parcel's Details</div>
        <div class={style.section09}>
            <p style={{fontSize:20,fontWeight:"bold"}}><span style={{marginRight:10}}>Tracking Number:</span>
           {parcel.tracking}</p>
        </div>
        <div className={style.s_rdetails}>
          <div className={style.sss}>
        <div class={style.section010}>
            <h2>Sender Information</h2>
            <p><span>Name:</span> {parcel.s_name}</p>
            <p><span>Address:</span> {parcel.s_address}</p>
            <p><span>Contact:</span> {parcel.s_phone}</p>
        </div>
        <div class={style.section011}>
            <h2>Recipient Information</h2>
            <p><span>Name:</span> {parcel.r_name}</p>
            <p><span>Address:</span> {parcel.r_address}</p>
            <p><span>Contact:</span> {parcel.r_phone}</p>
        </div>
        </div>
       <div className={style.ViewCouiersec}>
       <div className={style.section09}>
            <h2>Parcel Details</h2>
            <p><span>Delivery Date:</span> {parcel.delivery_data} </p>
            <p><span>Wight:</span> {parcel.Weight} kg</p>
            <p><span>Width:</span> {parcel.Width} in</p>
            <p><span>Height:</span> {parcel.Height} in</p>
            <p><span>length:</span> {parcel.Length} in</p>
            <p><span>Price:</span> {parcel.price}</p>
            <p><span>Type:</span> <span style={{backgroundColor: "#17a2b8", color: "#fff", padding: "2px 5px", borderRadius: 4}}>{parcel.Type}</span></p>
            <p><span>Branch Accepted the Parcel:</span>{parcel.BranchProcessed}</p>
            <p><span>Nearest Branch to Recipient for Pickup:</span> {parcel.Pickup_Branch}</p>
            <div class="status">
                <span>Status : {parcel.Status}</span>
               
            </div>
            </div>
        </div>
        </div>
<div className={style.buttons}>

  <Link className='btn btn-secondary text-white mt-1 w-25' to={"/couerier"}>Back</Link>
</div>
    </div>
      </div>
    </>
  )
}

export default ViewCouier
