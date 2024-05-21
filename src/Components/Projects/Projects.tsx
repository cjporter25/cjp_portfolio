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
// https://www.cleanpng.com/png-pyqt-pyside-widget-toolkit-graphical-user-interfac-1882952/
//import pyqtLogo from "../../Images/logo_pyqt.jpg"

// Project Data (replace with actual data)
const projectsInfo = [
    {
      imageSrc: squadImg,
      imageURL: "https://leagueoflegends.fandom.com/wiki/Team_Builder",
      // You can use "`" or "backticks", to create multi line strings
      title: "TheSquad",
      description: `TheSquad is my longest running project and has many iterations over the 
      past year. It was originally an experiment to replicate the data collection methods
      of websites that gather information about individual League of Legends players. TheSquad
      has since evolved into a personally designed database and API that can output 
      potentially valuable data on how players perform as a team. Design diagrams and example
      output will be coming soon!`,
      link: "https://github.com/cjporter25/thesquad-api-demo"
    },
    {
      imageSrc: carSales,
      imageURL: "https://www.spyne.ai/blogs/used-car-dealership",
      title: "MPScrubber",
      description: `Like many webscrappers before it, MPScrubber or 
      "Marketplace Scrubber" is a freelance project for individuals looking to have
      an edge in the used car marketplace. MPScrubber's goal is to find and retrieve
      the most recent additions to the used car marketplace online. The user then gets
      curated spreadsheet reports, split by manufacturer, on the most recently added 
      things. This gives them an edge by increasing the odds that their the first ones
      to jump on a good deal.`,
      link: "https://github.com/cjporter25/MPScrubber"
    },
    {
      imageSrc: zombImg,
      imageURL: zombImg,
      title: "Zombiture",
      description: `Zombiture - In extremely early development, Zombiture's
      goal is to provide an 8-bit styled, time-traveling, zombie ridden 2D 
      arcade shooter experience to both PC and mobile devices. Being developed 
      by an informal game development group called "HazyGames", this game will 
      be built using the open source GoDot game engine and although we're excited, 
      we are currently unsure of a release date. Project Link will currently only
      reference the current image!`,
      link: zombImg
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
              title={project.title}
              description={project.description}
              link={project.link}
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