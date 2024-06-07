// Components/Project/ProjectItem.tsx

import React from "react";
import "./ProjectItem.css"; // Import styling sheet

interface ProjectItemProps {
  imageSrc: string;
  imageURL: string;
  description: string;
  title: string;
  githubLink?: string; // Made optional as some projects don't have github links
  websiteLink?: string; // ... don't have website links
  diagramsLink?: string; // M... don't have diagrams
  
}

class ProjectItem extends React.Component<ProjectItemProps> {
  render() {
    const { imageSrc, imageURL, title, description, githubLink, websiteLink, diagramsLink } = this.props;
    return (
      <div className="ProjectItem">
        <div className="ImageContainer">
          <img src={imageSrc} alt="Project" className="ProjImg" data-src={imageURL}/>
        </div>
        <div className="DescriptionContainer">
          <h3 className="ProjTitle">{title}</h3>
          <p className="ProjDesc">{description}</p>
          <section className="Links">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="GitHubLink">
                GitHub
              </a>
            )}
            {websiteLink && (
              <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="WebsiteLink">
                Website
              </a>
            )}
            {diagramsLink && (
              <a href={diagramsLink} target="_blank" rel="noopener noreferrer" className="DiagramsLink">
                Diagrams
              </a>
            )}
          </section>
        </div>
      </div>
    );
  }
}

export default ProjectItem;