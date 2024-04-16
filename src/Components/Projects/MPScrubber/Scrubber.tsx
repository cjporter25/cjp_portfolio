import React from "react";
import "./Scrubber.css" // Import styling sheet



type ScrubberProps = {};
type ScrubberState = {};
class Scrubber extends React.Component<ScrubberProps, ScrubberState> {
    constructor(props: ScrubberProps, state: ScrubberState) {
        super(props);
        this.state = state
    }

    render() {
        return (
                <div></div>
        );
    }
}

export default Scrubber