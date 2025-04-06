import React from 'react';
import AthenaImage from '../assets/athenaImage.png';
import GithubImage from '../assets/github.png';
import './ProjectPage.css';

const AthenaPage = () => {
  return (
    <div className="projectBox">
      <div>
        <h1 className="projectTitle">Athena</h1>
        <p className="projectDescript">A mental health companion chatbot that responds to the unique experiences of students who identify as underrepresented genders in STEM.</p>
        <h2 className="projectSubtitle">Motivation & Process</h2>
        <p className="projectDescript">It's widely acknowledged that students who identify with marginalized genders in STEM confront unique challenges, including 
          gender bias and stereotypes, lack of representation, and intersectional struggles. These difficulties can take a toll on their mental health, leading to lower retention 
          rates compared to their male counterparts. At USC's AthenaHacks 2024, Athena was created to foster the mental well-being of students from underrepresented genders in STEM.</p>
        <h2 className="projectSkills">Skills</h2>
        <ul className="projectSkillsList">
          <li>Python</li>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>OpenAI API</li>
        </ul>
      </div>
      <div className="projectImageAlign">
        <div className="projectImageEffect">
          <img src={AthenaImage} alt="athena" className="projectImage"/>
        </div>
        <a class="githubLogoAlign" href="https://github.com/jjasminew" target="_blank" rel="noreferrer">
          <img class="githubLogo" src={GithubImage} alt="github" />
        </a>
      </div>
    </div>
  )
}

export default AthenaPage;