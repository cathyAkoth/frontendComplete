import "./banner.css";
import Labour from "assets/labour_ministry.jpeg";
import Idwf from "assets/idwf.jpeg";
import Wiego from "assets/wiego.png";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

export default function Banner(props) {
  const { title, leading, buttonLabel, link } = props;

  return (
    <div className="banner">
      <div className="banner-wrapper">
        <div className="banner-content">
          <h1>{title}</h1>
          <p className="leading">{leading}</p>
          <div className="banner-btn">
            <Link to={link}>
              <Button className="new-btn" variant="contained">
                {buttonLabel}
              </Button>
            </Link>
          </div>
          <div className="row mt-2 banner-logos">
            <div className="banner-logo">
              <img
                _ngcontent-serverapp-c112=""
                class="img-fluid"
                src="https://cdn.helperplace.com/misc/brand/internation-labour-organization.png"
                alt="Mukozi Domestic Helper Platform"
              />
            </div>
            <div className="banner-logo">
              <img
                _ngcontent-serverapp-c112=""
                class="img-fluid"
                src="https://cdn.helperplace.com/misc/brand/google-play.png"
                alt="Domestic Helper Mobile App"
              />
            </div>
            <div className="banner-logo">
              <img
                className="img-fluid"
                src={Labour}
                alt="Ministry of Labour"
              />
            </div>
            <div className="banner-logo">
              <img
                className="img-fluid"
                src={Idwf}
                alt="International Domestic Workers Federation"
              />
            </div>
            <div className="banner-logo">
              <img
                className="img-fluid"
                src={Wiego}
                alt="Women Informal Employment"
              />
            </div>
          </div>
          <div className="banner-bottom">
            <h2>
              We are your trusted partner for the welfare of your household
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
