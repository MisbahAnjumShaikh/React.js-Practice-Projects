import { Routes, Route } from "react-router";
import './App.css'
import Contact from "./assets/components/Contact";
import Services from "./assets/components/Services";
import Home from "./assets/components/Home";
import Navbar from "./assets/components/Navbar";
function App() {
  return (
    <div>
    <Navbar />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="*" element={<div>Page not Found 404</div>}/>
    </Routes>
    

    </div>
  )
}

export default App
