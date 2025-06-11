import React, { useRef, useState } from 'react'
import style from '../../css/style.module.css';
import { Link, useNavigate } from 'react-router-dom'
const AgentLayout = () => {
      var nav=useNavigate();
        const [isDropdownOpen, setIsDropdownOpen] = useState(false);
        const toggleDropdown = () => {
            setIsDropdownOpen(!isDropdownOpen);
        };
        const userData = JSON.parse(window.localStorage.getItem("userData"));
        const userId = JSON.parse(window.localStorage.getItem("userData"))?._id;
      var logout=()=>{
        window.localStorage.removeItem("userData")
        nav("/")
      
      }
  return (
    <div>
           <div className={style.sidebar} >
        <div className={style.logodetails}>
        <i className='bx bxs-truck'></i>
            <span className={style.logo} >Agent</span>
        </div>
        <ul className={style.links}>
        
             
        <li>
    
            <Link to={'/Agent_dashboard'} className={style.sidebarlink}>
                
            <i class='bx bxs-dashboard'></i>
                <span className="linkName text-white">Dash Broad</span>
          
            </Link>
            </li>
            <li>
      
      <Link to={'/Agent_Couerier'} className={style.sidebarlink}>
          
      <i class='bx bxs-package'></i>
          <span className="linkName text-white">courier</span>
    
      </Link>
      </li>
      
         
        </ul>
    </div>
      {/* <!-- end  -->
       <!-- main sec  --> */}
  <section className={style.homesection}>
             <div className={style.homecontent}>
                 <i className='bx bx-menu text-white' style={{ fontSize: 30 }}></i>
                 <span className={style.text}>CMS</span>
                 <div style={{margin:20}} className="profiledropdown" onClick={toggleDropdown}>
                     <span className="profile-name"  style={{color:"white"}}>{userData.name}</span>
                     <i className='bx bx-chevron-down'  style={{color:"white"}}></i>
                     {isDropdownOpen && (
                         <div className={style.dropdowncontent}>
                        
                           <Link to={`/Agent_profile/${userId}`}>Profile</Link>
                             <a onClick={()=>logout()}>Logout</a>
                         </div>
                     )}
                 </div>
             </div>
         </section>
    </div>
  )
}

export default AgentLayout
