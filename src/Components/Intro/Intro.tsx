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
                <img className="yourmom" src={profile_pic1} alt="Profile Picture" />
            </div>
        );
    }
}

export default Intro