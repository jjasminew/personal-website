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
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
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
              description="A web app that tackles period poverty and the lack of menstrual health education in schools."
              imageSrc={CampusFloImage}
            />
            <ProjectCard 
              title="Athena"
              techStack={["Python", "HTML/CSS", "OpenAI API"]}
              description="A mental companion chatbot that responds to the needs of underrepresented genders in STEM."
              imageSrc={AthenaImage}
            />
            <ProjectCard 
              title="B.L.O.B."
              techStack={["JavaScript", "HTML/CSS", "MongoDB"]}
              description="A web game for children to develop emotional awareness through interactive games and visual aids."
              imageSrc={BlobImage}
            />
            <ProjectCard 
              title="(G)-STEM"
              techStack={["JavaScript", "HTML/CSS"]}
              description="A website that provides resources to empower young women to join STEM fields."
              imageSrc={GstemImage}
            />
          </Carousel>
      </section>
  );
};

export default Projects;