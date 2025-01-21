// import { useState } from "react";
import { Link } from "react-router";
// import App from "../../App.jsx"
const Navbar = ({isLogin}) => {  
  // const [isLogin , setIsLogin] = useState(0)
  return (
    
    <nav>
      <ul className="nav justify-content-center">
      
        <li className="nav-item">
          <Link to={"/"} className="nav-link fw-semibold fs-5" aria-current="page">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/contact"} className="nav-link fw-semibold fs-5">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/services"} className="nav-link fw-semibold fs-5">
            Services
          </Link>
        </li>
         <li className="nav-item">
        <Link to={"/"} className="nav-link">
          <button type="button" className="btn btn-primary loginBtn">
            Login
          </button>
        </Link>
      </li>
      <li className="nav-item">
        <Link to={"/signup"} className="nav-link">
          <button type="button" className="btn btn-secondary">
            Signup
          </button>
        </Link>
      </li>

        
       
      </ul>
    </nav>

  )
}

export default Navbar;
