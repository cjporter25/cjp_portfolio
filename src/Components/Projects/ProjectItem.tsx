// Components/Project/ProjectItem.tsx

import React from "react";
import "./ProjectItem.css"; // Import styling sheet

interface ProjectItemProps {
  imageSrc: string;
  imageURL: string;
  description: string;
  
}

class ProjectItem extends React.Component<ProjectItemProps> {
  render() {
    const { imageSrc, imageURL, description } = this.props;
    return (
      <div className="ProjectItem">
        <div className="ImageContainer">
          <img src={imageSrc} alt="Project" className="ProjImg" data-src={imageURL}/>
        </div>
        <div className="DescriptionContainer">
          <div className="ProjDesc">{description}</div>
        </div>
      </div>
    );
  }
}

export default ProjectItem;