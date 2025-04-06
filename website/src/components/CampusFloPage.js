import React from 'react';
import CampusFloImage from '../assets/campusflo.png';
// import './ProjectPage.css';

const CampusFloPage = () => {
  return (
    <>
      <img src={CampusFloImage} alt="campusflo" className="image"/>
      <h1>CampusFlo</h1>
      <p>A community-driven web app that tackles period poverty and menstrual health education for college students.</p>
      <h2>Motivation & Process</h2>
      <p>1 in 10 college students in the United States face period poverty. CampusFlo was developed to tackle period poverty 
        by providing a free menstrual products locator, a menstrual products and pills image classifier, and community hub.
        This web app was created as part of the Kode With Klossy x Deloitte Health Equity Challenge and was awarded as one of 
        the top 10 winners out of 200+ applicants, winning $5,000 towards my educational expenses. </p>
      <h2>Skills</h2>
      <ul>
        <li>React</li>
        <li>Firebase</li>
        <li>HTML/CSS</li>
        <li>Google's Teachable Machine</li>
      </ul>
    </>
  )

  
}

export default CampusFloPage;