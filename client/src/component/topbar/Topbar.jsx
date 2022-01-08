import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
export default function Topbar() {
  const logOutHandler =(e)=>{
    e.preventDefault();
    localStorage.removeItem('isLogged',false);
    window.location.replace("/login");
  }
  return (
    <div className="topbar">
      <>
        <div className="logo">
          <Link className="link" to='/'>
          <h4>Blood</h4>
          </Link>
        </div>
        <div className="navbar">
          <ul>
            <li>
              {" "}
              <Link className="link" to="/">
                Home
              </Link>{" "}
            </li>

            <li>
              <Link className="link" to="/why-blood">
                Why give Blood
              </Link>
            </li>

            <li>
              <Link className="link" to="/service">
                Find Blood
              </Link>
            </li>

            <li>
              <Link className="link" to="/contact">
                About & Contact
              </Link>
            </li>

            <li>
              <Link className="link" onClick={logOutHandler}>
                logout
              </Link>
            </li>

          </ul>
        </div>
      </>
    </div>
  );
}
