import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, techStack, description, imageSrc }) => {
  return (
    <div className="projOutline">
      <img src={imageSrc} alt={title} className="image"/>
      <h3 className="projHeader">{title}</h3>
      <div className="projStack">
        {techStack.map((tech, index) => (
          <span key={index}>
            {tech}
          </span>
        ))}
      </div>
      <p className="projDescript">{description}</p>
      <div className="projButton">
        <button>Link</button>
        <button>Learn More</button>
      </div>
    </div>
  );
}

export default ProjectCard;
