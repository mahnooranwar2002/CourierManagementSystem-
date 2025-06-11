import React from 'react'
import style from '../../css/login.module.css';
import { Link } from 'react-router-dom';
const BlockAgent = () => {
  return (
    <div>
        <div className={`${style.box072}`}>
        <div className={`${style.box14}`}>
       
       <div className={`${style.myblockChild}`}>
       <div className={`${style.blockchild}`}> 
            <h3>Announcement</h3>
     <h4>your Account is deactivate by the Admin ! </h4>
     <h5> please contact the admin</h5>
     <h6>Thank! </h6>
    
        </div>
          <div className={style.bo098}>
           <Link to={"/"} className={style.btnt}>Black</Link>
           </div>
       </div>
        </div>
        </div>
    </div>
  )
}

export default BlockAgent
