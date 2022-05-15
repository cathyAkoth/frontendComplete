// import { House } from "@material-ui/icons";
import Banner from "components/banner";
import { Link } from "react-router-dom";
import "./employer.css";

export default function Home() {
  return (
    <>
      <div className="employer-dashboard">
        <div className="breadcrumb">
          <div className="container head">
            <div className="row breadcrumb-content">
              <div className="col-12">
                <div className="breadcrumb-wrapper">
                  <div className="text-left">
                    <ul className="breadcrumb-list">
                      <li>
                        <Link to="/">
                          <i className="fa fa-home" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fa fa-angle-double-right" /> Dashboard
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="employer-dashboard section__padding">
          <Banner
            title="Complete Your Profile and view all our candidates"
            buttonLabel="Complete Profile"
            link="verify"
          />
        </div>
      </div>
    </>
  );
}
