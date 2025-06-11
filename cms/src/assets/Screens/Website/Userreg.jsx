
import React, { useState } from 'react'
import style from '../../css/login.module.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
const Userreg = () => {
    var nav=useNavigate();
    var [reg,userregistered]=useState({
        email:"",password:"",name:"",Status:1
    })
    var inputHandle=(e)=>{
        userregistered({...reg,[e.target.name]:e.target.value})
    }
    var userRegistered=(e)=>{
e.preventDefault();
axios.post("http://localhost:1234/user_reg",reg).then((resp)=>{
    userregistered({
        email:"",password:"",name:"",Status:1 
    })
    alert(" your account is created  !")
}).catch((e)=>{
alert("the email is already registered !")
})
    }

  return (
    <div>
              <Navbar></Navbar>
    
    <div className={`${style.box}`}>
    <div className={`${style.box1}`}>
   <a href=""></a>
   <div className={`${style.myform}`} style={{height:"auto"}}>
   <form onSubmit={userRegistered}  className={`${style.formchild}`}> 
        <h3>Register  as User</h3>

        <label for="username">Username</label>
        <input type="text" name='name' value={reg.name} onChange={inputHandle} placeholder="Email or Phone" id="username"/>
        <label for="username">Email</label>
        <input type="text" name='email' value={reg.email} onChange={inputHandle} placeholder="Email or Phone" id="username"/>
        <label for="password">Password</label>
        <input type="password" name='password'  value={reg.password} onChange={inputHandle} placeholder="Password" id="password"/>

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
    </div>
  )
}

export default Userreg
