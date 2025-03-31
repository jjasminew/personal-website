import React from 'react';
import './Component.css';
import aboutImage from '../assets/aboutImage.JPG';

const About = () => {
    return (
        <section id="about" class="aboutBox">
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
                    <li>2x hackathon winner</li>
                </ul>
            </div>
        </section>
    );
};

export default About;