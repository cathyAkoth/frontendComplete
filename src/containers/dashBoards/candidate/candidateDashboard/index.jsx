import "./candidateDashboard.css";
import cover from "./cover.jpeg";
import profile from "./profile.jpeg";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import Banner from "components/banner";

export default function CandidateDashboard() {
  const formHandler = () => {};
  return (
    <div className="profile">
      <div className="profileTop">
        <div className="profileCover">
          <img src={cover} alt="" className="profileCoverImg" />
          <img src={profile} alt="" className="profileUserImg" />
        </div>
        <div className="profileHead">
          <h4 className="profileName">Hello Mike Rembo</h4>
        </div>
        <div className="pull-up section__padding">
          <Banner
            title="Complete your profile to connect with all our employers"
            buttonLabel="Complete My Profile"
            link="verify"
          />
        </div>
      </div>

      <div className="info-section section__padding">
        <div className="profileTitleContainer">
          <h1 className="profileTitle">Your Info</h1>
        </div>
        <div className="infoContainer">
          <div className="infoShow">
            <span className="infoSubTitle">Account Details</span>
            <div className="infoDetail">
              <PermIdentity className="detailIcon" />
              <span className="detail">Mike Rembo</span>
            </div>
            <div className="infoDetail">
              <CalendarToday className="detailIcon" />
              <span className="detail">10.12.1999</span>
            </div>
            <span className="infoSubTitle">Contact Details</span>
            <div className="infoDetail">
              <PhoneAndroid className="detailIcon" />
              <span className="detail">+256 751 930841</span>
            </div>
            <div className="infoDetail">
              <MailOutline className="detailIcon" />
              <span className="detail">rembomike@gmail.com</span>
            </div>
            <div className="infoDetail">
              <LocationSearching className="detailIcon" />
              <span className="detail">Kampala | Uganda</span>
            </div>
          </div>
          <div className="infoUpdate">
            <span className="updateTitle">Edit Your Info</span>
            <form className="updateForm" id="edit_form">
              <div className="updateLeft">
                <div className="updateItem">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="Mike"
                    className="updateInput"
                  />
                </div>
                <div className="updateItem">
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="Rembo"
                    className="updateInput"
                  />
                </div>
                <div className="updateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="annabeck99@gmail.com"
                    className="updateInput"
                  />
                </div>
                <div className="updateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="+256 751 930841"
                    className="updateInput"
                  />
                </div>
                <div className="updateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="Kampala | Uganda"
                    className="updateInput"
                  />
                </div>
              </div>
              <div className="updateRight">
                <div className="updateUpload">
                  <img
                    className="updateImg"
                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish className="updateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button
                  type="button"
                  className="updateButton"
                  onClick={formHandler}
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
