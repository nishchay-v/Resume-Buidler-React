import { connect } from "react-redux";
import ProjectCard from "../Molecules/ProjectCard";

const ProjectList = ({ projects }) => {
    return (
        <div>
            <div className="section-heading">Projects</div>
            <ul>
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        name={project.data.title}
                        keySkills={project.data.keySkills}
                        description={project.data.description}
                        link={project.data.link}
                    />
                ))}
            </ul>
        </div>
    );
};

const getProjects = (state) => state.fields.projects;

const mapStateToProps = (state) => ({
    projects: getProjects(state),
});

export default connect(mapStateToProps)(ProjectList);
