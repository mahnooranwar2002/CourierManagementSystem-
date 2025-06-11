import React, { useEffect, useState } from "react";
import style from "../../css/style.module.css";
import Layout from "./components/Layout";
import { Link, Links } from "react-router-dom";
import axios from "axios";
const CourierDetails = () => {
  var [s, CourierSet] = useState([]);
  var fetchDetails = () => {
    axios.get("http://localhost:1234/fetchdata").then((resp) => {
      CourierSet(resp.data);
    });
  };
  useEffect(() => {
    fetchDetails();
  });
  var delete_pracel = (id) => {
    // alert(id);
    axios.delete(`http://localhost:1234/delCouier/${id}`);
  };
//   for update The status courier
const status_Updated = (id, Status) => {
 
  axios.put(`http://localhost:1234/pracelStatus/${id}`, { Status: Status }).then(()=>{
 alert(`courier status is Updated status`);
  })
    
};

  return (
    <>
      <Layout></Layout>
      <div className="container-fluid">
        <div className={style.maincontent}>
          <h1>Courier Management</h1>
          <div className="card">
            <div className={style.cardheader}>Courier Information</div>
            <div className="card-body table-responsive">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="input-group">
                  <input
                    type="text"
                    class="form-control"
                    id="searchPassenger"
                    placeholder="Search for Contact..."
                  />
                  <div className="input-group-append">
                    <button className={style.btn2} type="button">
                      Search
                    </button>
                  </div>
                </div>

                <Link to={"/pracel"} className={style.btn1}>
                  New
                </Link>
              </div>

              <table className="table table-striped ">
                <thead>
                  <tr>
                    <th>Tracking No</th>
                    <th>Sender Name</th>
                    <th>Receiver Name</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {s.map((con, index) => (
                    <tr key={index}>
                      <td>{con.tracking}</td>
                      <td>{con.s_name}</td>
                      <td>{con.r_name}</td>
                      <td>
                        <div class={style.mb_4}>
                          <select
                            class="w-full border rounded p-2"
                           name="Status"
                            onChange={(e) => status_Updated(con._id, e.target.value)}
                          >
                            <option hidden>{con.Status}</option>
                            <option value={"pending"}>Pending</option>
                            <option value={"approved"}>Approved</option>
                            <option value={"rejected"}>Rejected</option>
                            <option value={"in_progress"}>In Progress</option>
                            <option value={"completed"}>Completed</option>
                            <option value={"on_hold"}>On Hold</option>
                          </select>
                        </div>
                      
                      </td>
                      <td>
                        <button
                          className="btn btn-danger text-white mt-1"
                          onClick={() => delete_pracel(con._id)}
                        >
                          Delete
                        </button>
                        <Link
                          className="btn btn-warning text-white mt-1"
                          style={{ marginLeft: 10 }}
                          to={`/viewParcel/${con._id}`}
                        >
                          View
                        </Link>
                        <Link
                          className="btn btn-primary text-white mt-1"
                          style={{ marginLeft: 10 }}
                          to={`/EditParcel/${con._id}`}
                        >
                          Edit
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourierDetails;
