import "../App.css"
import React from "react";
import { Link } from "react-router-dom";

export const Dropdownnav = () => {
    return (
     <>
 

     <div className="headingofnav"><br /><br /><br />
     <div className="dropdowntop">
<div className="leftdropdowntop"><img src="images/blaa1.svg" /></div>
<Link to="/"> <div className="rightdropdowntop"><img src="images/cancle.svg" /></div></Link>
     </div>
     <div className="dropdown">
       <Link to="/"> <div className="dropdowncontents">Dashboard</div></Link>
        <div className="dropdowncontents">Projects</div>
        <Link to="/notification"> <div className="dropdowncontents"><img src="images/notification.svg" style={{height: '35px',width: '45px', marginTop:'-7px', marginRight: '20px',marginLeft: '-15px' }} />Notification</div></Link>
        <div className="dropdowncontents">Settings</div>
     </div>

<div class="signoutbutton">Sign out</div>


     </div>
     </>
    )
}