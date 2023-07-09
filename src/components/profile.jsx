import "../pro.css"

export const Profile = () => {
    return (
<>
<div className="profile">
    <div className="profilecover"><img src="images/profilecover.svg" style={{width: '100%'}} /></div>
    <div className="profilepicture"><img src="images/Ellipse 42.png" style={{width: '270px', height: '250px',}}  /></div>
<h2>Isaac Kelvin</h2>
<p>Frontend Developer</p>
<p>Issackelvin@gmail.com</p>
<label for="country">Country</label><br />
<input type="text" name="Country" /><br />

<label>First Name</label><br />
<input type="text" /><br />

<label>Last Name</label><br />
<input type="text" /><br />

<label style={{marginLeft: '-120px'}}>Email/Work mail address</label><br />
<input type="text" /><br />

<label style={{marginLeft: '-180px'}}>Phone Number</label><br />
<input type="text" /><br />

<label>City/Staye</label><br />
<input type="text" /><br />

<label>Address</label><br />
<input type="text" />
</div>
</>
    )
}