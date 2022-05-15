import Banner from "components/banner";
import "./agent.css";

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
                        <a href="/">
                          <i className="fa fa-home" />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="fa fa-angle-double-right" /> Dashboard
                        </a>
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
            title="Complete Your Profile and have permissions earn by registering new candidates"
            buttonLabel="Complete Profile"
            link="verify"
          />
        </div>
      </div>
    </>
  );
}
