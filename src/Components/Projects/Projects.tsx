import React from "react";
import "./Projects.css";
import ProjectItem from "./ProjectItem";

// import squadCode from "../../Images/the_squad_code.jpg"
// import squadImg2 from "../../Images/the_squad_champions2.jpg"
// import squadImg3 from "../../Images/the_squad_champions3.jpg"
// import mpImg from "../../Images/fb_mp_logo.jpeg"
import squadImg from "../../Images/the_squad_champions.jpg"
import zombImg from "../../Images/zombiture_main.png"
import carSales from "../../Images/used_car_salesman.jpg"
// https://en.wikipedia.org/wiki/Python_%28programming_language%29
//import pythonLogo from "../../Images/logo_python.png"
// https://1000logos.net/microsoft-excel-logo/
//import excelLogo from "../../Images/logo_excel.png"
// https://www.facebook.com/fbmarketplace/photos/a.800314846739820/2065548730216419/?type=3
//import fbmpLogo from "../../Images/logo_fb_mp.jpeg"

// Project Data (replace with actual data)
const projectsInfo = [
    {
      imageSrc: squadImg,
      imageURL: "https://leagueoflegends.fandom.com/wiki/Team_Builder",
      // You can use "`" or "backticks", to create multi line strings
      description: "This is a placeholder description of TheSquad!",
    },
    {
      imageSrc: carSales,
      imageURL: "https://www.spyne.ai/blogs/used-car-dealership",
      description: "This is a placeholder description of MPScrubber!",
    },
    {
      imageSrc: zombImg,
      imageURL: "N/A",
      description: `Zombiture - In extremely early development, Zombiture's
      goal is to provide an 8-bit styled, time-traveling, zombie ridden 2D 
      arcade shooter experience to both PC and mobile devices. Being developed 
      by an informal game development group called "HazyGames", this game will 
      be built using the open source GoDot game engine and although we're excited, 
      we are currently unsure of a release date.`
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
              imageURL={project.imageURL}
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