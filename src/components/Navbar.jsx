import { Link } from "react-router-dom";
import "../App.css";
import React from "react";

export const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navleft">
        <Link to="/dropdownnav">
          <img src="images/b5.svg" />
          </Link>
        </div>
        <div className="navright">
        <Link to="/">
            <i className="fa fa-home"  style={{ marginTop:'7px' }} />
          </Link>

          <Link to="/">
            <img src="images/military-tech.svg" style={{ marginTop:'7px' }} />
          </Link>

          <Link to="/notification">
            <img src="images/notification.svg" style={{height: '20px',width: '25px', marginTop:'7px', }} />
          </Link>

          <Link to="/profile">
            <img src="images/Ellipse 42.png" />
          </Link>
          
        </div>
      </nav>
    </>
  );
};
