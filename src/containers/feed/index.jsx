import "./feed.css";
import Filter from "./filter";
import CandidatesList from "./candidatesList";
import Banner from "components/banner";

export default function Feed() {
  return (
    <>
      <div className="banner section__padding">
        <Banner
          title="Find a Domestic Helper fast, Easily and Securely"
          leading="Thousand of domestic workers, helpers or maids are looking 
            now for new employers, we help them to directly connect with employers and those in need of work. 
            We are proud to never charge any helpers or candidates. Select your 
            region and get full access to the best domestic helpers!"
          buttonLabel="About Us"
          link="/"
        />
      </div>
      <div className="mkz__feed section__padding" id="feed">
        <Filter />
        <CandidatesList />
      </div>
    </>
  );
}
