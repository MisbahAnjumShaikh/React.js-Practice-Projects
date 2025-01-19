import { Link } from "react-router";
const Navbar = () => {
  return (
    <nav>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link to={"/"} className="nav-link" aria-current="page" href="#">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/contact"} className="nav-link" href="#">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/services"} className="nav-link" href="#">
            Services
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
