import "../styles/Form.css";
import { FaRegEnvelope } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <form action="">
        <div className="header">
          <h1>WAOW</h1>
          <h1>Log In</h1>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Email" required />
          <FaRegEnvelope className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <IoMdEyeOff className="icon" />
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember Me
          </label>
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit" onClick={() => navigate("/profile")}>
          Login <FaArrowRight />
        </button>

        <div className="register-link">
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Form;
