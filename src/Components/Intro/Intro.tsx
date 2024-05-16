import React from "react";
import "./Intro.css" // Import styling sheet

// "./" means same directory
// "./profile_pic1.jpeg" means this image file in the current directory
// "../../ means up two directories"
// Attaches the file to the variable profile_pic1
import profile_pic1 from "../../Images/profile_pic1.jpeg"; 


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
                <div className="IntroContent">
                    <div className="ContactContainer">
                        <section className="contactObj">E-mail: chris.j.porter25@gmail.com</section>
                        <section className="contactObj">Phone: 952-847-7697</section>
                    </div>
                    <div className="PictureContainer">
                        <img className="picObj" src={profile_pic1} alt="Profile Pic" />
                    </div>
                    <div className="LinksContainer">
                        <a href="https://www.linkedin.com/in/christopher-porter-83860b26a/" className="LinkObj">LinkedIn</a>
                        <a href="https://github.com/cjporter25"                             className="LinkObj">GitHub</a>
                    </div>
                </div>
            </div>
    
        );
    }
}

export default Intro