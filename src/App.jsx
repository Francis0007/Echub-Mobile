import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home"; 
import { Ongoingprojects } from "./components/ongoingprojects"; 
import { Navbar } from "./components/Navbar";
import { Notification } from "./components/notification";
import { Profile } from "./components/profile";
import { Dropdownnav } from "./components/dropdownnav";
import { Completedprojects } from "./components/completedprojects";
 

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
  <Route path="completedprojects" element={<Completedprojects />} />
</Routes>
</>
  )
}

export default App;
