import React from 'react';
import Carousel from 'react-multi-carousel';
import ProjectCard from './ProjectCard';
import 'react-multi-carousel/lib/styles.css';
import CampusFloImage from '../assets/campusflo.png';
import AthenaImage from '../assets/athenaImage.png';
import BlobImage from '../assets/blobImage.png';
import GstemImage from '../assets/gstemImage.jpg';
import './Component.css';

const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 3
    },
    desktop2: {
      breakpoint: { max: 1300, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2
    },
    smallTablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  

  return(
      <section id="projects">
          <h2 class="header">projects</h2>
          <Carousel responsive={responsive}>
            <ProjectCard 
              title="CampusFlo"
              techStack={["React", "Firebase", "HTML/CSS"]}
              description="A web app that tackles period poverty for college students and the lack of menstrual health education in schools."
              imageSrc={CampusFloImage}
              link="https://campusflo.replit.app/"
              learnBtnRoute="/campusflo"
            />
            <ProjectCard 
              title="Athena"
              techStack={["Python", "HTML/CSS", "OpenAI API"]}
              description="A mental health companion chatbot that responds to the unique experiences of underrepresented genders in STEM."
              imageSrc={AthenaImage}
              link="https://devpost.com/software/athena-wed3pr"
              learnBtnRoute="/athena"
            />
            <ProjectCard 
              title="B.L.O.B."
              techStack={["JavaScript", "HTML/CSS", "MongoDB"]}
              description="A web game for children to develop emotional awareness through interactive games and visual aids."
              imageSrc={BlobImage}
              link="https://devpost.com/software/b-l-o-b"
              learnBtnRoute="/blob"
            />
            <ProjectCard 
              title="(G)-STEM"
              techStack={["JavaScript", "HTML/CSS"]}
              description="A website that provides resources to empower young women to join STEM fields."
              imageSrc={GstemImage}
              link="https://jjasminew.github.io/g-stem/"
              learnBtnRoute="/blob"
            />
          </Carousel>
      </section>
  );
};

export default Projects;