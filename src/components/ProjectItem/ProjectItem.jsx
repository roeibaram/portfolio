import React from "react";
import "./ProjectItem.css";

function ProjectItem({ project, index }) {
  return (
    <li className={`project-card project-card--${index + 1}`}>
      <div className="project-card__glow" aria-hidden="true" />
      <div className="project-card__head">
        <p className="project-card__index">0{index + 1}</p>
        <div>
          <h3>{project.name}</h3>
          <p className="project-card__subtitle">{project.subtitle}</p>
        </div>
      </div>

      <p className="project-card__description">{project.description}</p>

      <ul className="project-card__stack">
        {project.stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <ul className="project-card__points">
        {project.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      <div className="project-card__actions">
        <a href={project.link} target="_blank" rel="noreferrer">
          View Repository
        </a>
      </div>
    </li>
  );
}

export default ProjectItem;
