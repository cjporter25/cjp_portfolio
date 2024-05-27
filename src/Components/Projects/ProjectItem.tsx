// Components/Project/ProjectItem.tsx

import React from "react";
import "./ProjectItem.css"; // Import styling sheet

interface ProjectItemProps {
  imageSrc: string;
  imageURL: string;
  description: string;
  title: string;
  link: string;
  
}

class ProjectItem extends React.Component<ProjectItemProps> {
  render() {
    const { imageSrc, imageURL, title, description, link } = this.props;
    return (
      <div className="ProjectItem">
        <div className="ImageContainer">
          <img src={imageSrc} alt="Project" className="ProjImg" data-src={imageURL}/>
        </div>
        <div className="DescriptionContainer">
          <h3 className="ProjTitle">{title}</h3>
          <p className="ProjDesc">{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer" className="ProjLink">
            GitHub
          </a>
        </div>
      </div>
    );
  }
}

export default ProjectItem;