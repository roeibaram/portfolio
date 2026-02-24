import React from "react";
import "./ExperienceItem.css";

function ExperienceItem({ experience }) {
  return (
    <li className="experience-item">
      <div className="experience-item__head">
        <h3>{experience.title}</h3>
        <p>{experience.meta}</p>
      </div>

      <ul className="experience-item__points">
        {experience.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </li>
  );
}

export default ExperienceItem;
