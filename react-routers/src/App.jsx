import { Routes, Route } from "react-router";
import { useState } from "react";
import "./App.css";
import Contact from "./assets/components/Contact";
import Services from "./assets/components/Services";
import Home from "./assets/components/Home";
import Navbar from "./assets/components/Navbar";
import Login from "./assets/components/login-signup/Login";
import Signup from "./assets/components/login-signup/Signup";
function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      <Navbar />
      {isLogin ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<div>Page not Found 404</div>} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      )}
      <button
        type="button"
        className="btn btn-primary btn-lg mx-auto d-block mt-5"
        onClick={() => {
          setIsLogin(!isLogin);
        }}
      >
        Click Here!
      </button>
    </div>
  );
}

export default App;
