import React from "react";
import {Viewer} from '@react-pdf-viewer/core';
import "./Resume.css" // Import styling sheet

type ResumeProps = {};
type ResumeState = {};
class Resume extends React.Component<ResumeProps, ResumeState> {
    constructor(props: ResumeProps, state: ResumeState) {
        super(props);
        this.state = state
    }
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Resume