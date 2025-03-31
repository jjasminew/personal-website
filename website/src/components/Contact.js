import React from 'react';
import './Component.css';
import GithubImage from '../assets/github.png';
import LinkedinImage from '../assets/linkedin.png';
import EmailImage from '../assets/email.png';

const Contact = () => {
    return (
        <section id="contact">
            <h2 class="header">contact</h2>
            <div class="contactLogoBox">
                <a href="https://github.com/jjasminew" target="_blank" rel="noreferrer">
                    <img class="contactLogo" src={GithubImage} alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/jasmine-wongphatarakul/" target="_blank" rel="noreferrer">
                    <img class="contactLogo" src={LinkedinImage} alt="linkedin" />
                </a>
                <a href="mailto:jjasminew@g.ucla.edu" target="_blank" rel="noreferrer">
                    <img class="contactLogo" src={EmailImage} alt="email" />
                </a>
            </div>
        </section>
    );
};

export default Contact;