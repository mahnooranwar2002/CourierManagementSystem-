import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "./Backtotop";
import axios from "axios";

const TrackCouerier = () => {
  var [query, Setquery] = useState("");
  var [result, Setresult] = useState([]);
 const userID = JSON.parse(window.localStorage.getItem("userData"))?._id;
  function searchFuntionality() {
    axios
      .get(`http://localhost:1234/trackCouerier/search?q=${query}`)
      .then((res) => {
        Setresult(res.data);
        console.log(res.data);
      });
  }
  function fetchCoueier(){
    axios.get(`http://localhost:1234/fetchcourier/${userID}`).then((resp)=>{
     Setresult(resp.data);
    })
  } 

  useEffect(()=>{
    fetchCoueier()
  })
  function delCoueirier(id){
axios.delete(`http://localhost:1234/delCouier/${id}`).then(()=>{
    fetchCoueier()
})
  } 
  return (
    <div>
      <Navbar></Navbar>

      <BackToTop></BackToTop>
      <div
        class="container-fluid page-header py-5"
        style={{ "margin-bottom": "6rem;" }}
      >
        <div class="container py-5">
          <h1 class="display-3 text-white mb-3 animated slideInDown">
            {" "}
            Track Your Courier{" "}
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a class="text-white" href="#">
                  Home
                </a>
              </li>
              <li class="breadcrumb-item">
                <a class="text-white" href="#">
                  Pages
                </a>
              </li>
              <li class="breadcrumb-item text-white active" aria-current="page">
                {" "}
                Tracking your Courier
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="container">
        <div className="row text-center mt-3">
          <h1>Track your couerier Details</h1>
          <div className="col searchbar">
            <input
              type="text"
              placeholder="write your couerier Tracking Number"
              onChange={(e) => {
                Setquery(e.target.value);
              }}
              value={query}
            />{" "}
            <button className="btn btn-primary" onClick={searchFuntionality}>
              Search
            </button>
          </div>
        </div>
      </div>
      {
        result.length===0?(<h4 className="text-center  mt-5 mb-5" style={{fontSize:30}}>No couerier is booked now !</h4>):(
 <div className="container  mytrackCon">
        {result.map((r, index) => (
          <div className="card">
            <div className="card-header text-center bg-primary text-white">
              <h2>{r.tracking}</h2>
            </div>
            <div className="card-body">
              <h5>Sender Information</h5>
              <p>Sender Name :{r.s_name}</p>
              <h5>Receiver Information</h5>
              <p>Receiver Name :{r.r_name}</p>
              <p>Receiver Address :{r.r_address}</p>
              <p>Receiver Phone :{r.r_phone}</p>
              <h5>Receiver Information</h5>
              <p>Company Name :{r.company}</p>
              <p>Courier Type:{r.Type}</p>
              <p>Branch Processed:{r.BranchProcessed}</p>
              <p>Pickup Branch:{r.Pickup_Branch}</p>
              <p>Weight :{r.Weight}</p>
              <p>Height :{r.Height}</p>
              <p>Length :{r.Length}</p>
              <p>Width :{r.Width}</p>
              <p>price :{r.price}</p>
              <p>Status:{r.Status}</p>
              <p> Delivery date:{r.delivery_data}</p>
              {
                r.Status==="approved"?(""):(<button className="btn btn-danger w-100" onClick={()=>{
                  delCoueirier(r._id)
                }}>Cancel</button>) 
              }
            </div>
          </div>
        ))}
      </div>


          
        )
      }
     

      <Footer></Footer>
    </div>
  );
};

export default TrackCouerier;
