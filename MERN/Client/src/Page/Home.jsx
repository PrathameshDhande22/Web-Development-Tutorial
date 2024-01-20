import { Analytics } from "../Components/Analytics";
import homeimage from "../assets/home.png";
import startedimage from "../assets/design.png";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handleConnectClick = () => {
    navigate("/contact");
  };

  const handleLearnClick = () => {
    navigate("/services");
  };

  return (
    <div>
      <div className="home">
        <div className="content-home">
          <div>We are the World Best IT Company</div>
          <h2>Welcome to MERN Tutorial</h2>
          <div className="line-height">
            Are you ready to take your business to the next level with
            cutting-edge IT solutions? Look no further! at Prathamesh Dhande, we
            specialize in providing innovative IT services and solutions
            tailored to meet your unique needs.
          </div>
          <div className="flex-btn">
            <button
              type="button"
              onClick={handleConnectClick}
              className="btn btn-blue"
            >
              Connect Now
            </button>
            <button
              type="button"
              onClick={handleLearnClick}
              className="btn btn-dark"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="homeimage">
          <img src={homeimage} alt="Image of the Home page" />
        </div>
      </div>
      <Analytics />
      <div className="home">
        <div className="homeimage">
          <img src={startedimage} alt="Image of the Home page" />
        </div>
        <div className="content-home">
          <div>We are here to help you</div>
          <h2>Get Started Today</h2>
          <div className="line-height">
            Ready to take the first step towards a more efficient and secure IT
            infrastructure? Contact us today for a free consulation and lets
            discuss how Prathamesh Dhande can help your business thrive in the
            digital age.
          </div>
          <div className="flex-btn">
            <button
              type="button"
              onClick={handleConnectClick}
              className="btn btn-blue"
            >
              Connect Now
            </button>
            <button
              type="button"
              onClick={handleLearnClick}
              className="btn btn-dark"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
