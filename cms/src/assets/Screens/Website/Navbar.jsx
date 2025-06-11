import React, { useEffect, useState } from "react";
import $ from "jquery";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  var nav = useNavigate();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  var userData = JSON.parse(window.localStorage.getItem("userData"));
  const [user, setUser] = useState(null);
  useEffect(() => {
    // Simulate fetching user data (replace with your actual authentication logic)
    const fetchUser = () => {
      // Example: Check if user is logged in (this could be from localStorage, context, etc.)
      const loggedInUser = localStorage.getItem("userData"); // or your auth logic
      if (loggedInUser) {
        setUser(JSON.parse(loggedInUser)); // Assuming user data is stored as JSON
      }
    };

    fetchUser();
  }, []);
  const userId = JSON.parse(window.localStorage.getItem("userData"))?._id;
  var logout = () => {
    localStorage.removeItem("userData");
    nav("/userLogin");
  };
  return (
    <>
      <header
        className={`sticky-top ${isSticky ? "visible" : ""}`}
        style={{ top: isSticky ? "0px" : "-100px", transition: "top 0.3s" }}
      >
        <nav class="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary sticky-top p-0">
          <a
            href="index.html"
            class="navbar-brand bg-primary d-flex align-items-center px-4 px-lg-5"
          >
            <h2 class="mb-2 text-white">Logistica</h2>
          </a>
          <button
            type="button"
            class="navbar-toggler me-4"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-lg-0 " style={{ width: "50%" }}>
              <Link to={"/Home"} className="nav-item nav-link ">
                Home
              </Link>

              <Link to={"/About"} className="nav-item nav-link">
                About
              </Link>
              <Link to={"/faq"} className="nav-item nav-link">
                Faq
              </Link>
              <Link to={"/addCouerier"} className="nav-item nav-link">
             Courier 
              </Link>
              <a href="service.html" class="nav-item nav-link">
                Services
              </a>
              <Link to={"/Contact"} className="nav-item nav-link">
                Contact
              </Link>

              {user ? (
                <li className="nav-item">
                  <div class="dropdown" style={{ marginTop: 15 }}>
                    <button
                      class="btn btn-primary  dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {user.name}
                    </button>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <Link
                        to={`/userprofile/${userId}`}
                        className="nav-item nav-link"
                        style={{ padding: 15 }}
                      >
                        Profile
                      </Link>
                      <Link
                        to={`/TrackCouerier`}
                        className="nav-item nav-link"
                        style={{ padding: 15 }}
                      >
                        Track Courier
                      </Link>
                      <button
                        className="nav-item nav-link "
                        style={{ padding: 15 }}
                        onClick={() => logout()}
                      >
                        logout
                      </button>
                    </div>
                  </div>
                </li>
              ) : (
                <li className="nav-item">
                  <Link to="/userLogin" className="nav-link">
                    Login
                  </Link>
                </li>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
