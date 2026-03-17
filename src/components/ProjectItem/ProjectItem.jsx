import React, { useEffect, useRef, useState } from "react";
import "./ProjectItem.css";

function ProjectItem({ project, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(cardRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <li
      ref={cardRef}
      className={`project-card project-card--${index + 1} ${
        isVisible ? "project-card--visible" : ""
      }`}
    >
      <div className="project-card__glow" aria-hidden="true" />
      <div className="project-card__meta">
        <p className="project-card__category">{project.category}</p>
        <p className="project-card__status">{project.status}</p>
      </div>

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
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        )}
        <a href={project.link} target="_blank" rel="noreferrer">
          View Repository
        </a>
      </div>
    </li>
  );
}

export default ProjectItem;
