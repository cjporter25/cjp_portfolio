import React from "react";
import "./Projects.css";
import ProjectItem from "./ProjectItem";

import squadImg from "../../Images/the_squad_champions.jpg"
import zombImg from "../../Images/zombiture_main.png"
// import carSales from "../../Images/used_car_salesman.jpg"
import scrubberImg from "../../Images/mpscubber_gui.jpg"
import webImg from "../../Images/portfolio_website_page.jpg"

// import squadCode from "../../Images/the_squad_code.jpg"
// import squadImg2 from "../../Images/the_squad_champions2.jpg"
// import squadImg3 from "../../Images/the_squad_champions3.jpg"
// import mpImg from "../../Images/fb_mp_logo.jpeg"
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
      description: `TheSquad is my longest running project containing many iterations over the 
      past year. It was originally an experiment to replicate the data collection methods
      of player data gathering websites for the MOBA, League of Legends. Since then, TheSquad has 
      evolved into a personally designed database and API using Flask and Google's Firebase Services 
      as the backbone and Heroku as a hosting service. Instead of pulling singular
      player data like every other website, TheSquad pulls together data about groups of players, 
      analyzes how they perform as a team, and uses machine learning to recommend champion choices 
      in live  games. Design diagrams and example output can be seen using the links below!`,
      githubLink: "https://github.com/cjporter25/thesquad-api-demo",
      websiteLink: "www.thesquad-api.com",
      diagramsLink: "https://github.com/cjporter25/thesquad-api-demo/tree/main/static/images",
    },
    {
      imageSrc: scrubberImg,
      imageURL: scrubberImg,
      title: "MPScrubber",
      description: `Like many webscrappers before it, MPScrubber or 
      "Marketplace Scrubber" is a freelance project, utilizing a variety of python tools
      and libraries, for individuals looking to have an edge in the used car marketplace. 
      MPScrubber's primary feature is to retrieve the most recent additions to the used car 
      marketplace online. The user then receives curated spreadsheet reports on the most 
      recently added things. This gives them an edge by increasing the odds that they're 
      the first ones to jump on a good deal. Although in it's early stages, this program
      may one day greatly aid small used car businesses to increase product diversity and
      lower research cost!`,
      githubLink: "https://github.com/cjporter25/MPScrubber",
      websiteLink: "",
      diagramsLink: "",
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
      githubLink: zombImg,
      websiteLink: "",
      diagramsLink: "",
    },
    {
      imageSrc: webImg,
      imageURL: "www.c-porter.com",
      title: "Portfolio Website",
      description: `This website was made or "bootstrapped" using the React framework's 
      scaffolding system. From there, this website was designed using a straightforward 
      folder structure containing distinct components that all lead to a simple yet 
      functional presentation of me. The link below leads to the repository showing the 
      various files used, as well as the various diagrams that coincide with the projects 
      you see above.`,
      githubLink: "https://github.com/cjporter25/cjp_portfolio",
      websiteLink: "www.c-porter.com",
      diagramsLink: "",
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
              githubLink={project.githubLink}
              websiteLink={project.websiteLink}
              diagramsLink={project.diagramsLink}
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