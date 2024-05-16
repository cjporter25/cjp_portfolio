import React from "react";
import "./Projects.css";
import ProjectItem from "./ProjectItem";
// import squadCode from "../../Images/the_squad_code.jpg"
// import squadImg2 from "../../Images/the_squad_champions2.jpg"
// import squadImg3 from "../../Images/the_squad_champions3.jpg"
// https://leagueoflegends.fandom.com/wiki/Team_Builder
import squadImg from "../../Images/the_squad_champions.jpg"
import zombImg from "../../Images/zombiture_main.png"
// import mpImg from "../../Images/fb_mp_logo.jpeg"
// https://www.spyne.ai/blogs/used-car-dealership
import carSales from "../../Images/used_car_salesman.jpg"


// Sample project data (replace with actual data)
const projectsInfo = [
    {
      imageSrc: squadImg,
      // You can use "`" or "backticks", to create multi line strings
      description: "This is a placeholder description of TheSquad!",
    },
    {
      imageSrc: carSales,
      description: "This is a placeholder description of MPScrubber!",
    },
    {
      imageSrc: zombImg,
      description: `Zombiture - In extremely early development, this game,
      is intended to be an 8-bit styled, time-traveling, zombie ridden 2D 
      arcade shooter. Being developed by an informal game development
      group called HazyGames, this game will be built using the open source
      GoDot game engine and although we're excited, we are currently unsure
      of a release date`
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