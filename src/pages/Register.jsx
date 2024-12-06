import RegistContent from "../components/RegistContent";
import FormImg from "../components/FormImg";
import "../styles/Register.css";

function Register() {
  return (
    <div className="wrapper-register">
        
        <div className="bg-white"></div>
        <div className="register">
          <div className="image-register">
            <FormImg/>
          </div>
          <div className="content-register">
            <RegistContent/>
          </div>
        </div>

      </div>

  );
}

export default Register;
