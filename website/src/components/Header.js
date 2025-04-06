import React from 'react';
import './Component.css';

const Header = () => {
    return (
        <header>
            <nav class="navBox">
                {/* <a class="navLink" href="#home">home</a> */}
                <a class="navLink" href="/#about">about</a>
                <a class="navLink" href="/#projects">projects</a>
                <a class="navLink" href="/#contact">contact</a>
                <a 
                    class="navLink" 
                    href="https://drive.google.com/file/d/1i9NACjVSx_6uZ07vm7VpNEfv74PdS33z/view?usp=sharing" 
                    target="_blank" 
                    rel="noreferrer"
                >
                    resume
                </a>
            </nav>
        </header>
    );
};

export default Header;