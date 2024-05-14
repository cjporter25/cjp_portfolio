import React from "react";
import "./Projects.css";
// Importing the 
import ProjectItem from "./ProjectItem";
import squadImg from "../../Images/the_squad_pic.jpg"
import mpImg from "../../Images/fb_mp_logo.jpeg"


// Sample project data (replace with actual data)
const projectsInfo = [
    {
      // No dots before the initial slash because they are not being imported
      //    to be used as a variable. It is a direct pointer
      imageSrc: squadImg,
      description: "This is a placeholder description of TheSquad!",
    },
    {
      imageSrc: mpImg,
      description: "This is a placeholder description of MPScrubber!",
    },
    {
      imageSrc: "/Images/profile_pic2.jpeg",
      description: "Description of Project 3",
    },
  ];


class Projects extends React.Component{
    // Renders the list of project items based on the data in "projectsInfo"
    renderProjects() {
        // Iterates over each project item and generates a "ProjectItem" for each one.
        //      It does this by passing the necessary props for img and desc
        return projectsInfo.map((project, index) => (
            <ProjectItem
              key={index}
              imageSrc={project.imageSrc}
              description={project.description}
            />
        ));
    }
    // Renders the container that wraps the rendered project items. 
    //  "this.renderProjects" is called to render the project items inside this container.
    render() {
        return <div className="ProjectsContainer">{this.renderProjects()}</div>;
    }
}

export default Projects