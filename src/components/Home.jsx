import "../App.css"
import { Link } from "react-router-dom";
import React from "react";

export const Home = () => {
    return (
        <> 
  <div className="hometext">
    Hello,Issac Kelvin
        </div>

        <div className="dashboardcontents">
            <h2>Ongoing Project/Status</h2>
            <p>Most recent</p>
            <div className="statusbar">
                <div className="statusbarinner"></div>
            </div>
            </div>

            <div className="dashboardcontents">
            <h2>Health / Life span status (1/3)</h2>
            <p>Most recent</p>
            <div className="statusbar">
                <div className="statusbarinnerr"></div>
            </div>
            </div>

            <div className="ongoingjobs">
                <div className="ongoing1"><h2>Ongoing Jobs <br /><br /> 0</h2></div>
                <div className="ongoing1"><h2>0 <br /><br /> <Link to="/ongoingprojects"><img src="images/play.svg" /></Link></h2></div>
                
            </div>

            
            <div className="ongoingjobs">
                <div className="ongoing1"><h2>Project Completed <br /><br /> 0</h2></div>
                <div className="ongoing1"><h2>0 <br /><br /> <Link to="/completedprojects"><img src="images/play.svg" /></Link></h2></div>
                
            </div>

            <Link to="/ongoingprojects"><div className="addnewproject">Add New Project</div></Link>

            <div className="textonbottom">Call Jeffery the project officer on <br />08148143284</div>
       
       <div className="bottonsonbottom">
        <div className="bottononbottom1">? Get Help</div>
        <div className="bottononbottom2">Give feedback</div>
       </div>
        </>

    )
}