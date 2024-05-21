import React from "react";

import "./Resume.css"; // Import styling sheet
import resumeImage1 from '../../Documents/Basic_Porter_Resume_24_Image.jpg';
import resumeImage2 from '../../Documents/Fancy_Porter_Resume_24_Image.jpg';

type ResumeProps = {};
type ResumeState = {};
class Resume extends React.Component<ResumeProps, ResumeState> {
    render() {
        const resumeURL1 = `${process.env.PUBLIC_URL}/Fancy_Porter_Resume_24.pdf`;
        const resumeURL2 = `${process.env.PUBLIC_URL}/Basic_Porter_Resume_24.pdf`;
        return (
            <div className="ResumeContainer">
                <img 
                    className="ResumeImg" alt="Resume" 
                    src={resumeImage1}  
                />
                <a href={resumeURL1} download="Porter_Resume_24(Basic).pdf" className="DownloadButton">
                    Download 'Original' Resume 
                </a>
                <img 
                    className="ResumeImg" alt="Resume" 
                    src={resumeImage2}  
                />
                <a href={resumeURL2} download="Porter_Resume_24(Fancy).pdf" className="DownloadButton">
                    Download 'Fancy' Resume 
                </a>
            </div>
        );
    }
}

export default Resume