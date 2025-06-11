import React, { useRef, useState } from 'react'
import style from '../../../css/style.module.css';
import { Link, useNavigate } from 'react-router-dom'
const Layout = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

var nav=useNavigate();
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
    <>
      <div className={style.sidebar} >
        <div className={style.logodetails}>
        <i className='bx bxs-truck'></i>
            <span className={style.logo} >Admin</span>
        </div>
        <ul className={style.links}>
        
             
        <li>
    
            <Link to={'/Index'} className={style.sidebarlink}>
                
            <i class='bx bxs-dashboard'></i>
                <span className="linkName text-white">Dash Broad</span>
          
            </Link>
            </li>
            <li>
      
      <Link to={'/admin'} className={style.sidebarlink}>
          
      <i class='bx bx-user-circle'></i>
          <span className="linkName text-white">Admin</span>
    
      </Link>
      </li>
            <li>
            
      
      <Link to={'/companies'} className={style.sidebarlink}>
          
      <i class='bx bx-store-alt'></i>
          <span className="linkName text-white">Company</span>
    
      </Link>
      </li>
            <li>
            <Link to={'/agent'} className={style.sidebarlink}>
                
            <i class='bx bxs-user'></i>
                <span className="linkName text-white">Agent</span>
          
            </Link>
            </li>
            <li>
            <Link to={'/branch'} className={style.sidebarlink}>
                
            <i class='bx bxs-location-plus'></i>
                <span className="linkName text-white">Branch</span>
          
            </Link>
            </li>
            <li>
            <Link to={'/couerierType'} className={style.sidebarlink}>
                
            <i class='bx bxs-grid-alt'></i>
                <span className="linkName text-white">Courier Types</span>
          
            </Link>
            </li>
            <li>
            <Link to={'/couerier'} className={style.sidebarlink}>
                
            <i class='bx bxs-package'></i>
                <span className="linkName text-white">Courier Details</span>
          
            </Link>
            </li>
            <li>
            <Link to={'/fetchContact'} className={style.sidebarlink}>
                
            <i class='bx bxs-contact' ></i>
                <span className="linkName text-white">Contact</span>
          
            </Link>
            </li>
         
            <li>
            <Link to={'/user_data'} className={style.sidebarlink}>
            <i class='bx bx-user-circle'></i>
                <span className="linkName text-white">User</span>
          
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
                       
                          <Link to={`/user/${userId}`}>Profile</Link>
                            <a onClick={()=>logout()}>Logout</a>
                        </div>
                    )}
                </div>
            </div>
        </section>
    </>
  )
}

export default Layout
