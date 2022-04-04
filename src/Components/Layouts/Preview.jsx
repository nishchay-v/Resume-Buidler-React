import React from "react";
import EducationList from "../Organisms/EducationList";
import logo from "../../Images/lnmiit.svg.png";
import "./Preview.css";
import InfoCard from "../Molecules/InfoCard";
import SkillsList from "../Molecules/SkillsList";
import CodeForcesCard from "../Molecules/CodeForcesCard";
import ProjectList from "../Organisms/ProjectList";

function Preview(props) {
    return (
        <div className="preview">
            <h3>Preview</h3>
            <div className="resume-header">
                <img className="logo" src={logo} alt="College Logo" />
                <InfoCard fields={props.infoState} />
            </div>
            <SkillsList />
            <EducationList fields={props.educationState} />
            <ProjectList />
            <CodeForcesCard />
        </div>
    );
}

export default Preview;
