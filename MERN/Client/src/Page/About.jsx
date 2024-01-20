import { useNavigate } from "react-router-dom";
import aboutimage from "../assets/about.png";
import { Analytics } from "../Components/Analytics";

export const About = () => {
  const navigate = useNavigate();

  const handleConnectClick = () => {
    navigate("/contact");
  };

  const handleLearnClick = () => {
    navigate("/services");
  };

  return (
    <div className="margin-btm">
      <div className="home">
        <div className="content-home">
          <div>Welcome, to our Website</div>
          <h2>Why Choose Us?</h2>
          <div className="line-height paragraph">
            <p>
              Expertise : Our team consists of experienced IT professionals who
              are passionate about staying up-to-date with the latest industry
              trends.
            </p>
            <p>
              Customization : We understand that every business is unique. Thats
              why we create solutions that are tailored to your specific needs
              and goals.
            </p>
            <p>
              Customer-Centric Approach : We prioritize your satisfaction and
              provide top-notch support to address your IT concerns.
            </p>
            <p>
              Affordability: We Offer competitive pricing without compromising
              on the quality of our services.
            </p>
            <p>
              Reliability: Count on us to be there when you need us. We are
              committed to ensuring your IT environment is reliable and
              available 24/7.
            </p>
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
          <img src={aboutimage} alt="Image of the Home page" />
        </div>
      </div>
      <Analytics/>
    </div>
  );
};
