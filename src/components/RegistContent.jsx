import { FaRegEnvelope } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlinePhone } from "react-icons/md";
import "../styles/RegistContent.css";
import { Link, useNavigate } from "react-router-dom";

function RegistContent() {
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <form action="">
        <div className="header">
          <h1>WAOW</h1>
          <h1>Register</h1>
        </div>
        <div className="name">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Email" />
          <FaRegEnvelope className="icon" />
        </div>
        <div className="input-box">
          <input type="number" placeholder="Phone Number" />
          <MdOutlinePhone className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" />
          <IoMdEyeOff className="icon" />
        </div>

        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault(); // Mencegah pengiriman form
            navigate("/profile"); // Navigasi ke "/profile"
          }}
        >
          Register <FaArrowRight />
        </button>

        <div className="register-link">
          <p>
            Have an Account? <Link to="/">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default RegistContent;
