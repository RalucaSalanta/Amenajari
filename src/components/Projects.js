import ProjectData from "./ProjectData";
import "./ProjectsStyles.css";

const Projects = () => {
  return (
    <div className="projects">
      <h1>Previous Projects</h1>
      <p>
        Transforming Spaces, Enhancing Lives: A Portfolio of Residential
        Renovation Projects
      </p>
      <ProjectData
      className="first-project"
      heading="The Smith Residence - Suburban Oasis"
      text=" Located in the heart of a bustling suburban neighborhood, the Smith
      Residence presented an exciting challenge: to modernize a classic
      structure while preserving its charm. Our team meticulously
      renovated the interior, updating outdated fixtures and finishes to
      create a contemporary living space that seamlessly blended with the
      home's original character. From the open-concept kitchen remodel to
      the rejuvenation of the cozy family room, every detail was
      thoughtfully considered to enhance functionality and aesthetics."
      img1={"https://images.unsplash.com/photo-1612301988752-5a5b19021f45?q=80&w=2057&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      img2={"https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      />

      <ProjectData
      className="first-project-reverse"
      heading="The Garcia Residence - Urban Retreat"
      text="In the heart of the city, the Garcia Residence stood as a testament to urban living. 
      Tasked with maximizing space in a compact environment, our team embarked on a journey to create an urban retreat that exuded both style and functionality. 
      Through strategic layout adjustments and innovative design solutions, we transformed cramped quarters into airy living spaces filled with natural light. 
      The integration of smart home technology further enhanced the homeowner's everyday experience, offering unparalleled comfort and convenience."
      img1={"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      img2={"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      />
    </div>
  );
};
export default Projects;
