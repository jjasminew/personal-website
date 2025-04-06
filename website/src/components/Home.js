import React from 'react';
import Intro from './Intro';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';


const Home = () => {
    return(
        <>
            <Intro />
            <About />
            <Projects />
            <Contact />
        </>
    );
};

export default Home;