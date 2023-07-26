import { Link } from "react-router-dom";
import "../App.css"
import React from "react";


 const Completedprojects = () => {
    return (
<>
<div className="completedprojects"><br /><br /><br /><br />
<div className="topforcompleted"><Link to="/"><img src="images/cancle.svg"></img></Link></div>
<div className="completedcontents">
<br /><br />
<hr />
<div className="projects"><h2>Electrical/Electronics, Renovation <br /> Subscription</h2>
<p>Lagos, Lagos State, Nigeria (On-Site)<br /> 1 day ago 
<img src="images/down.svg" style={{float: 'right',}} />
</p></div>
<hr />
<div className="projects"><h2>Electrical/Electronics, Renovation <br /> Subscription</h2>
<p>Lagos, Lagos State, Nigeria (On-Site)<br /> 1 day ago 
<img src="images/down.svg" style={{float: 'right',}} />
</p></div>
<hr />
<div className="projects"><h2>Electrical/Electronics, Renovation <br /> Subscription</h2>
<p>Lagos, Lagos State, Nigeria (On-Site)<br /> 1 day ago 
<img src="images/down.svg" style={{float: 'right',}} />
</p></div>

<hr />
<div className="projects"><h2>Electrical/Electronics, Renovation <br /> Subscription</h2>
<p>Lagos, Lagos State, Nigeria (On-Site)<br /> 1 day ago 
<img src="images/down.svg" style={{float: 'right',}} />
</p></div>
<hr />
<div className="projects"><h2>Electrical/Electronics, Renovation <br /> Subscription</h2>
<p>Lagos, Lagos State, Nigeria (On-Site)<br /> 1 day ago 
<img src="images/down.svg" style={{float: 'right',}} />
</p></div>

<Link to="/ongoingprojects"><div className="addnewproject">Add New Project</div></Link><br />

</div>
</div>
</>
    )
}
export default Completedprojects;