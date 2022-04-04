import React from "react";
import "./Editor.css";
import InputForm from "./InputForm";
import { connect } from "react-redux";
import { editFields } from "../../actions/fieldsActions";
import { fetchData } from "../../actions/codeforcesActions";
import { createSelector } from "reselect";

function Editor({ fields, editField }) {
    return (
        <div className="editor">
            <h3>Editor</h3>

            <InputForm
                sectionName="Info"
                fields={fields.info}
                changeState={editField.info}
            />
            <InputForm
                sectionName="Skills"
                fields={fields.skills}
                changeState={editField.skills}
            />
            <InputForm
                sectionName="Education"
                fields={fields.education}
                changeState={editField.education}
            />
            <InputForm
                sectionName="Projects"
                fields={fields.projects}
                changeState={editField.projects}
            />
            <InputForm
                sectionName="CodeForces"
                fields={fields.codeforces}
                changeState={editField.codeforces}
            />
        </div>
    );
}

const getInfo = createSelector(
    (state) => state.fields.info,
    (fields) => fields
);
const getSkills = createSelector(
    (state) => state.fields.skills,
    (fields) => fields
);
const getEducation = createSelector(
    (state) => state.fields.education,
    (fields) => fields
);
const getProjects = createSelector(
    (state) => state.fields.projects,
    (fields) => fields
);
const getCodeforces = createSelector(
    (state) => state.fields.codeforces,
    (fields) => fields
);

const mapStateToProps = (state) => ({
    fields: {
        info: getInfo(state),
        skills: getSkills(state),
        education: getEducation(state),
        projects: getProjects(state),
        codeforces: getCodeforces(state),
    },
});

const mapDispatchToProps = (dispatch) => ({
    editField: {
        info: (newState) => dispatch(editFields("info", newState)),
        education: (newState) => dispatch(editFields("education", newState)),
        skills: (newState) => dispatch(editFields("skills", newState)),
        projects: (newState) => dispatch(editFields("projects", newState)),
        codeforces: async (handle, newState) => {
            await dispatch(fetchData(handle));
            dispatch(editFields("codeforces", newState));
        },
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
