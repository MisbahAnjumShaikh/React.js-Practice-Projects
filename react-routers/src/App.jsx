import { Routes, Route } from "react-router";

import './App.css'
import Contact from "./assets/components/Contact";
import Services from "./assets/components/Services";
import Home from "./assets/components/Home";

function App() {

  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
    </Routes>
    

    </div>
  )
}

export default App
