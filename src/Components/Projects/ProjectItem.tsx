// Components/Project/ProjectItem.tsx

import React from "react";
import "./ProjectItem.css"; // Import styling sheet

interface ProjectItemProps {
  imageSrc: string;
  description: string;
}

class ProjectItem extends React.Component<ProjectItemProps> {
  render() {
    const { imageSrc, description } = this.props;
    return (
      <div className="ProjectItem">
        <div className="ImageContainer">
          <img src={imageSrc} alt="Project" className="ProjImg" />
        </div>
        <div className="DescriptionContainer">
          <div className="ProjDesc">{description}</div>
        </div>
      </div>
    );
  }
}

export default ProjectItem;