import React from "react";
import "./TheSquad.css" // Import styling sheet




type TheSquadProps = {};
type TheSquadState = {};
class TheSquad extends React.Component<TheSquadProps, TheSquadState> {
    constructor(props: TheSquadProps, state: TheSquadState) {
        super(props);
        this.state = state
    }

    render() {
        return (
                <div></div>
        );
    }
}

export default TheSquad