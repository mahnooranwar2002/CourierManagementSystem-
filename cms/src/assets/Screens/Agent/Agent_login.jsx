import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import style from '../../css/login.module.css';
import axios from 'axios';
import Navbar from '../Website/Navbar';
import Footer from '../Website/Footer';
const Agent_login = () => {
      var nav=useNavigate();
      var [logined,userlogined]=useState({
          email:"",password:""
      })
      var inputHandle=(e)=>{
          userlogined({...logined,[e.target.name]:e.target.value})
      }
  
  var logined_user=(e)=>{
      e.preventDefault();
      axios.post("http://localhost:1234/logined_agent",logined).then((res)=>{
         
    

       if(res.data.status==1){
        nav("/Agent_dashboard");
        window.localStorage.setItem("loginedIn",true)
        window.localStorage.setItem("userData", JSON.stringify(res.data));
       }else if(res.data.status==0){
        // alert("The account is deactive by the Admin");
        nav("/blockagent")
       }
        
      }).catch(() => {
     alert("email or password is incorrected!. Please try again.");
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
            <h3>Login as Agent</h3>
    
            <label for="username">Username</label>
            <input type="text" name='email' onChange={inputHandle} value={logined.email} placeholder="Email or Phone" id="username"/>
    
            <label for="password">Password</label>
            <input type="password" name='password'  onChange={inputHandle} value={logined.password} placeholder="Password" id="password"/>
    
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

export default Agent_login

