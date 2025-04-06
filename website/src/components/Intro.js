import React from 'react';
import './Component.css';
import Jasmine from '../assets/jasmine.jpeg';


const Intro = () => {
    return(
        <section id="home" class="homeBox">
            <div class="homeTextBox">
                <h2 class="header">jasmine wongphatarakul</h2>
                <p class="descript">innovative problem-solver. social impact driven. critical thinker.</p>
            </div>
            <div className="profilePhotoEffect">
                <img class="profilePhoto" src={Jasmine} alt="Jasmine"/>
            </div>
        </section>
    );
};

export default Intro;