import React, { useState } from 'react'
import style from '../../../css/login.module.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../Website/Navbar';
import Footer from '../../Website/Footer';
const Login = () => {
    var nav=useNavigate();
    var [logined,userlogined]=useState({
        email:"",password:""
    })
    var inputHandle=(e)=>{
        userlogined({...logined,[e.target.name]:e.target.value})
    }

var logined_user=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:1234/logined_user",logined).then((res)=>{
       
        nav("/Index")
        window.localStorage.setItem("loginedIn",true)
        window.localStorage.setItem("userData", JSON.stringify(res.data));
       
    }).catch(()=>{
        alert("the email or password is incorrected")
    });
    userlogined({
                email:"",
                password:""
    })

}


    return (
  
    <>
    <Navbar></Navbar>
    
    <div className={`${style.box}`}>
    <div className={`${style.box1}`}>
   
   <div className={`${style.myform}`}>
   <form onSubmit={logined_user} className={`${style.formchild}`}> 
        <h3>Login as Admin</h3>

        <label for="username">Username</label>
        <input type="text" name='email' value={logined.email} onChange={inputHandle} placeholder="Email or Phone" id="username"/>

        <label for="password">Password</label>
        <input type="password" name='password'  value={logined.password} onChange={inputHandle} placeholder="Password" id="password"/>

        <button>Log In</button>
  
    </form>
    <div className={style.bo098}>
      <Link to={"/Login"} className={style.links}>Admin?</Link>
      <br/>
        <Link to={"/LoginAgent"} className={style.links}>Agent?</Link>
        <br/>
        <Link to={"/userreg"} className={style.links}>New user?</Link>
        </div>
   </div>
    </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Login
