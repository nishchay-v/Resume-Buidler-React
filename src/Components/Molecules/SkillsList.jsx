import React from "react";
import { connect } from "react-redux";
import "./SkillsList.css";

function SkillsList({ skills }) {
    return (
        <div>
            <div className="section-heading">
                <h4>Key Skills</h4>
            </div>
            <ul>
                {skills.map((field) => (
                    <li className="bubble" key={field.id}>
                        {field.data.skill}
                    </li>
                ))}
            </ul>
        </div>
    );
}
const getSkills = (state) => state.fields.skills;

const mapStateToProps = (state) => ({
    skills: getSkills(state),
});

export default connect(mapStateToProps)(SkillsList);
