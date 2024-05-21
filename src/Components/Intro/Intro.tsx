import React, {useState} from "react";
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
                <div className="PictureContainer">
                    <img className="PicObj" src={profile_pic1} alt="Profile Pic" />
                </div>
                <div className="IntroContent">
                    <section className="AboutMe">
                        <h1>Christopher Porter </h1>
                        <h3>About Me</h3>
                        <p> I am a highly motivated and detail-oriented IT specialist and growing software engineer with a 
                            Bachelor’s degree in Computer Science and a strong passion for technology, data analysis, and 
                            client satisfaction. I am eager to leverage my skills and expand my knowledge to establish a 
                            foothold in the software development or advanced IT industries.</p>
                    </section>
                    <ContactAndLinks />
                </div>
        </div>
        );
    }
}

const ContactAndLinks: React.FC = () => {
    const [showEmail, setShowEmail] = useState(false);
    const [showPhone, setShowPhone] = useState(false);

    return (
        <ul className="ContactAndLinks">
            <li>
                <button onClick={() => setShowEmail(!showEmail)} className="ContactBtn">
                    {showEmail ? "E-mail ->" : "E-mail"}
                </button>
                {showEmail && <span className="ContactObj">chris.j.porter25@gmail.com</span>}
            </li>
            <li>
                <button onClick={() => setShowPhone(!showPhone)} className="ContactBtn">
                    {showPhone ? "Phone ->" : "Phone"}
                </button>
                {showPhone && <span className="ContactObj">952-847-7697</span>}
            </li>
            <li>
                <a href="https://www.linkedin.com/in/christopher-porter-83860b26a/" 
                   target="_blank" rel="noopener noreferrer" className="ContactBtn">
                    LinkedIn
                </a>
            </li>
            <li>
                <a href="https://github.com/cjporter25" 
                   target="_blank" rel="noopener noreferrer" className="ContactBtn">
                    GitHub
                </a>
            </li>
        </ul>
    );
};

export default Intro