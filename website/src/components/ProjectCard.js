import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, techStack, description, imageSrc }) => {
  return (
    <div className="projOutline">
      <img src={imageSrc} alt={title} className="image"/>
      <h3 className="projHeader">{title}</h3>
      {techStack.map((tech, index) => (
        <span key={index}>
          {tech}
        </span>
      ))}
      <p className="projDescript">{description}</p>
      <button>🌍</button>
      <button>View More</button>
    </div>
  );
}

export default ProjectCard;
