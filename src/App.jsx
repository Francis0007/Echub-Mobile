import { Routes, Route } from "react-router-dom"
import { Home } from "./components/Home"; 
import { Ongoingprojects } from "./components/Ongoingprojects"; 
import { Navbar } from "./components/Navbar";
import { Notification } from "./components/notification";
import { Profile } from "./components/profile";
import { Dropdownnav } from "./components/dropdownnav"
 

function App() {
  return (
    <>
<Navbar />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="ongoingprojects" element={<Ongoingprojects />} />
  <Route path="notification" element={<Notification />} />
  <Route path="profile" element={<Profile />} />
  <Route path="dropdownnav" element={<Dropdownnav />} />
</Routes>
</>
  )
}

export default App;
