import React from "react";
import "./Intro.css" // Import styling sheet

// "./" means same directory
// "./profile_pic1.jpeg" means this image file in the current directory
// Attaches the file to the variable profile_pic1
import profile_pic1 from "./profile_pic1.jpeg" 


 // title: string, toolTip: string, id: string (Props short for properties)
type IntroProps = {};
type IntroState = {};
class Intro extends React.Component<IntroProps, IntroState> {
    constructor(props: IntroProps, state: IntroState) {
        super(props);
        this.state = state
    }

    render() {
        return (
            <div className="IntroContainer"> 
                <div className="PictureContainer">
                    <img className="myPic" src={profile_pic1} alt="Profile Pic" />
                </div>
                <div className="LinksContainer">
                    <a href="#" className="LinkItem">LinkedIn</a>
                    <a href="#" className="LinkItem">GitHub</a>
                    <a href="#" className="LinkItem">E-mail</a>
                    <a href="#" className="LinkItem">Phone</a>
                </div>
                
            </div>
    
        );
    }
}

export default Intro