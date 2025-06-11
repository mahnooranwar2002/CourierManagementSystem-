import React, { useState } from "react";
import style from "../../css/login.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Forgetpassword = () => {
  var [forgetData, Setpassword] = useState({
    email: "",
    password: "",
  });

  function inputHandle(e) {
    Setpassword({ ...forgetData, [e.target.name]: e.target.value });
  }
  var forgetPassoward = (e) => {
    e.preventDefault();
     axios.put("http://localhost:1234/foregtPassword",forgetData).then(()=>{
        alert("Password is updated");
        Setpassword({
            email: "",
           password: "",
        })
     })
  };
  return (
    <>
      <Navbar></Navbar>

      <div className={`${style.box}`}>
        <div className={`${style.box1}`}>
          <a href=""></a>
          <div className={`${style.myform}`}>
            <form onSubmit={forgetPassoward} className={`${style.formchild}`}>
              <h3>Forget Password</h3>

              <label for="username">Username</label>
              <input
                type="text"
                name="email"
                value={forgetData.email}
                onChange={inputHandle}
                placeholder="Email or Phone"
                id="username"
              />

              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                value={forgetData.password}
                onChange={inputHandle}
                placeholder="Password"
                id="password"
              />

              <button>Forget</button>
            </form>
            <div className={style.bo098}>
              <Link to={"/Login"} className={style.links}>
                Admin?
              </Link>
              <br />
              <Link to={"/LoginAgent"} className={style.links}>
                Agent?
              </Link>
              <br />
              <Link to={"/userreg"} className={style.links}>
                New user?
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Forgetpassword;
