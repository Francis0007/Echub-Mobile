import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home"; 
import { Ongoingprojects } from "./components/Ongoingprojects"; 
import { Navbar } from "./components/Navbar";
import { Notification } from "./components/Notification";
import { Profile } from "./components/Profile";
import { Dropdownnav } from "./components/Dropdownnav";
import { Completedprojects } from "./components/Completedprojects";
 

function App() {
  return (
    <>
<Navbar />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/ongoingprojects" element={<Ongoingprojects />} />
  <Route path="/notification" element={<Notification />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/dropdownnav" element={<Dropdownnav />} />
  <Route path="/completedprojects" element={<Completedprojects />} />
</Routes>
</>
  )
}

export default App;
