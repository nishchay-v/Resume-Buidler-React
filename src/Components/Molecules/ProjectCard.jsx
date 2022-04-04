import "./ProjectCard.css";

function ProjectCard(props) {
    return (
        <li className="boxed">
            <h3>{props.name}</h3>
            <div>Key Skills: {props.keySkills}</div>
            <p>{props.description}</p>
            <a href={props.link}>Link</a>
        </li>
    );
}

export default ProjectCard;
