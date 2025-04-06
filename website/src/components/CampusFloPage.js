import React from 'react';
import CampusFloImage from '../assets/campusflo.png';
import GithubImage from '../assets/github.png';
import './ProjectPage.css';

const CampusFloPage = () => {
  return (
    <div className="projectBox">
      <div>
        <h1 className="projectTitle">CampusFlo</h1>
        <p className="projectDescript">A community-driven web app that tackles period poverty and menstrual health education for college students.</p>
        <h2 className="projectSubtitle">Motivation & Process</h2>
        <p className="projectDescript">1 in 10 college students in the United States face period poverty. CampusFlo was developed to tackle period poverty 
          by providing a free menstrual products locator, a menstrual products and pills image classifier, and community hub.
          This web app was created as part of the Kode With Klossy x Deloitte Health Equity Challenge and was awarded as one of 
          the top 10 winners out of 200+ applicants, winning $5,000 towards my educational expenses. </p>
        <h2 className="projectSkills">Skills</h2>
        <ul className="projectSkillsList">
          <li>React</li>
          <li>Firebase</li>
          <li>HTML/CSS</li>
          <li>Google's Teachable Machine</li>
        </ul>
      </div>
      <div className="projectImageAlign">
        <div className="projectImageEffect">
          <img src={CampusFloImage} alt="campusflo" className="projectImage"/>
        </div>
        <a class="githubLogoAlign" href="https://github.com/jjasminew/campusflo" target="_blank" rel="noreferrer">
          <img class="githubLogo" src={GithubImage} alt="github" />
        </a>
      </div>
    </div>
  )
}

export default CampusFloPage;