import "../App.css";
import { Link } from "react-router-dom";
import React from "react";

export const Ongoingprojects = () => {
    return (
<>
<div className="ongoingprojects"><br /><br /><br /><br />
<div className="topforcompleted"><Link to="/"><img src="images/cancle.svg"></img></Link></div>

<br />
<h2>Details of Ongoing Projects</h2><br/>
<div className="ongoinglist">
<input type="date" name="Date" />
<input type="text" placeholder="Nature of work" name="Nature of work" />
<input type="text" placeholder="Status" name="Status" />
<div className="additional">Additional Files</div>
<Link to="/ongoingprojects"><div className="addnewproject">Add New Project</div></Link><br />
</div>

</div>

</>
    )
}