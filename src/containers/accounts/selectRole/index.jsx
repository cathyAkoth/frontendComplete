import Banner from "components/banner";
import CustomCard from "components/customCard";
import "./selectRole.css";
import job from "assets/icon-job.png";
import employer from "assets/icon-family.png";
import agent from "assets/icon-agent.png";
import { useDispatch } from "react-redux";
import { addRole } from "features/users/usersSlice";

const roleCards = [
  {
    role: "domesticWorker",
    className: "domestic",
    cardIcon: job,
    title: "Domestic Worker",
    desc: "Sign up for free and get a chance to be chosen by your future employer",
    // href: "/registration/candidate",
    href: "/my-account/candidate",
  },

  {
    role: "employer",
    className: "employer",
    cardIcon: employer,
    title: "Employer",
    desc: "Be in touch with thousands of candidate profiles and choose the right one.",
    href: "/my-account/employer",
  },

  {
    role: "agent",
    className: "agent",
    cardIcon: agent,
    title: "Agent",
    desc: "Become a partner and earn by helping domestic workers to register with Mukozi.",
    href: "/my-account/agent",
  },
];

const SelectRole = (props) => {
  const dispatch = useDispatch();
  const { domestic, employer, agent } = props;

  return (
    <div className="select-role section__padding">
      <Banner
        title="Welcome to Mukozi! Select Role!"
        leading="We are proud to never charge any helpers or candidates."
        buttonLabel="Contact Us"
        link="contact-us"
      />
      <div className="role-cards">
        {roleCards.map((card) => {
          const { role, cardIcon, className, title, desc, href } = card;
          console.log("__________", role);
          return (
            <>
              <CustomCard
                cardIcon={cardIcon}
                key={role}
                title={title}
                className={className}
                desc={desc}
                link={href}
                onClick={dispatch(addRole(role))}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default SelectRole;
