import "../styles/Navbar.css";
import { GoTriangleDown } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import photoProfile from "../assets/cute cat.jpeg"

function Navbar() {
  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <a href="#">WAOW</a>
          <ul className="nav-list">
          <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#courses">Profile</a>
            </li>
            <li className="category">
              <a href="#tutors">Category</a>
              <GoTriangleDown className="icon"/>
            </li>
          </ul>
        </div>
        <div className="menu">
          <ul>
            <li className="search">
              <input type="text" placeholder="Search" />
              <CiSearch className="icon"/>
            </li>
            <li className="photoProfile">
              <a href=""><img src={photoProfile} alt="pp" width="35px"/></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
