import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ title, techStack, description, imageSrc, link, learnBtnRoute }) => {
  return (
    <div className="projOutline">
      <img src={imageSrc} alt={title} className="image" />
      <h3 className="projHeader">{title}</h3>
      <div className="projStack">
        {techStack.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
      <p className="projDescript">{description}</p>
      <div className="projButton">
        <button onClick={() => window.open(link, '_blank')}>Link</button>
        <Link class="learnMoreButton" to={learnBtnRoute}>Learn More</Link>
      </div>
    </div>
  );
};

export default ProjectCard;