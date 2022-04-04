import React from "react";

function EducationCard(props) {
    return (
        <li>
            <div className="education-card">
                <h4>{props.data.institute}</h4>
                <span>{props.data.affiliation} | </span>
                <span>Score: {props.data.score}</span>
            </div>
        </li>
    );
}

export default EducationCard;
