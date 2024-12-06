import Form from "../components/Form";
import FormImg from "../components/FormImg";
import "../styles/Login.css";

function Login() {
  return (

      <div className="wrapper-login">
        
        <div className="bg-white"></div>
        <div className="login">
          <div className="image-login">
            <FormImg/>
          </div>
          <div className="content-login">
            <Form/>
          </div>
        </div>

      </div>
  );
}

export default Login;
