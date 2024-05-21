// Components/Project/ProjectItem.tsx

import React from "react";
import "./ProjectItem.css"; // Import styling sheet

interface ProjectItemProps {
  imageSrc: string;
  imageURL: string;
  description: string;
  title: string;
  
}

class ProjectItem extends React.Component<ProjectItemProps> {
  render() {
    const { imageSrc, imageURL, title, description } = this.props;
    return (
      <div className="ProjectItem">
        <div className="ImageContainer">
          <img src={imageSrc} alt="Project" className="ProjImg" data-src={imageURL}/>
        </div>
        <div className="DescriptionContainer">
          <h3 className="ProjTitle">{title}</h3>
          <p className="ProjDesc">{description}</p>
        </div>
      </div>
    );
  }
}

export default ProjectItem;