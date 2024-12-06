import "../styles/CardProfile.css";
import { FaCamera } from "react-icons/fa";
import photoProfile from "../assets/cute cat.jpeg";

function CardProfile() {
  return (
    <>
      <div className="card">
        <div className="card-wrapper">
          <div className="text-profile">Profile</div>
          <div className="card-desc">
            <ul>
              <li>
                <h1>Username</h1>
                <p>Vorenzy XD</p>
              </li>
              <li>
                <h1>E - Mail</h1>
                <p>vorenzy@gmail.com</p>
              </li>
              <li>
                <h1>Phone</h1>
                <p>08312xxxx</p>
              </li>
              <li>
                <h1>Location</h1>
                <p>Jl.xxxx</p>
              </li>
            </ul>
          </div>
          <div className="card-photo">
            <div className="photo">
              <img src={photoProfile} alt="pp" />
              <div className="icon-camera">
                <FaCamera />
              </div>
            </div>
            <button type="submit">Save</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProfile;
