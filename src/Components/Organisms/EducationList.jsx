import React from "react";
import { connect } from "react-redux";
import EducationCard from "../Molecules/EducationCard";
import "./EducationList.css";

function EducationList({ education }) {
    return (
        <div>
            <div className="section-heading">
                <h4>Education</h4>
            </div>
            <ul>
                {education.map((field) => (
                    <EducationCard key={field.id} data={field.data} />
                ))}
            </ul>
        </div>
    );
}

const getEducation = (state) => state.fields.education;

const mapStateToProps = (state) => ({
    education: getEducation(state),
});

export default connect(mapStateToProps)(EducationList);
