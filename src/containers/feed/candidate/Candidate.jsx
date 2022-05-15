import "./candidate.css";
import { PermMedia, History, Room } from "@material-ui/icons";
import { Users } from "../../../dummyData";
// import { useState } from 'react';

export default function Candidate({ candidate }) {
    // console.log(post); 

    return (
        <div className="mkz__candidate">
            <div className="mkz__candidate-contents">
                <div className="mkz__candidate-box">
                    <div className="image-wrapper">
                        <div className="front-profile-img">
                            <img className="mkz__candidateProfileImg" src={Users.filter((u) => u.id === candidate?.userId)[0].profilePicture} alt="" />
                        </div>
                        <div className="label-wrapper">
                            <label className="profile-label">
                                <span>Verified</span>
                            </label>
                        </div>
                    </div>                    
                </div>
                <div className="mkz__candidate-detail">
                    <h4 className="mkz__candidateUsername">
                        {Users.filter((u) => u.id === candidate?.userId)[0].username}
                        <span className="mkz__candidate-age">{` - ` + candidate.age} years</span>
                    </h4>   
                    <hr className="mkz__hr" />
                    <span className="mkz__candidate-job">Domestic Helper - Full Time</span>
                    {/* Question mark is for candidates without descriptions */}
                    <p className="mkz__candidate-desc">{candidate?.desc}</p>
                </div>
            </div>
            <hr className="mkz__hr" />
            <div className="mkz__candidate-bottom">
                <div className="candidateOptions">
                    <div className="candidateOption">
                        <PermMedia htmlColor="#FF8A71" className="candidateIcon" />
                        <span className="candidateOptionText">More Photos</span>
                    </div>
                    <div className="candidateOption">
                        <History htmlColor="blue" className="candidateIcon" />
                        <span className="candidateOptionText">Experience: {candidate.experience} years</span>
                    </div>
                    <div className="candidateOption">
                        <Room htmlColor="green" className="candidateIcon" />
                        <span className="candidateOptionText">Uganda</span>
                    </div>
                </div>
                <div className="candidate-buttons">
                    <button className="candidate-button">View Profile</button>
                    <button className="candidate-button">Add to Shortlist</button>
                </div>
            </div>
        </div>
    )
}
