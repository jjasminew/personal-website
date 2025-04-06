import React from 'react';
import './Component.css';
import aboutImage from '../assets/aboutImage.JPG';

const About = () => {
    return (
        <section id="about" class="aboutBox">
            <div className="aboutRow">
                <div class="aboutHeaderImage">
                    <h2 class="header">about me</h2>
                    <div className="aboutImageEffect">
                        <img class="aboutImage" src={aboutImage} alt="jasmine and kode with klossy" />
                    </div>
                </div>
                <div class="aboutText">
                    <h2 class="aboutSubtitle">i am a:</h2>
                    <ul class="aboutDescript">
                        <li>19-year old who is passionate about creating social change through tech</li>
                        <li>second-year computer science and linguistics major</li>
                        <li>incoming swe intern @ snap</li>
                        <li>summer '24 instructor assistant @ kode with klossy</li>
                        <li>2x hackathon winner</li>
                    </ul>
                </div>
            </div>
            <div className="aboutRow">
                <div class="interestsText">
                    <h2 class="interestsSubtitle">my interests:</h2>
                    <ul class="interestsDescript">
                        <li>software engineering & product management</li>
                        <li>avid traveler and concert goer</li>
                        <li>listening to kpop and tate mcrae</li>
                        <li>embroidery & diy projects</li>
                    </ul>
                </div>
                <div class="interestsImage">
                    <div className="interestsImageEffect">
                        <img class="interestsImage" src={aboutImage} alt="jasmine and kode with klossy" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;