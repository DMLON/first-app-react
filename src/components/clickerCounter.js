import React from "react";

export default class ClickerCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { clicks: 0 };
    }

    addClick() {
        const currentClicks = this.state.clicks;
        this.setState({ clicks: currentClicks + 1 });
    }

    substractClick() {
        const currentClicks = this.state.clicks;
        this.setState({ clicks: currentClicks - 1 });
    }

    render() {
        return (
            <div>
                <h1>Click counter</h1>
                <button onClick={this.addClick.bind(this)}>Incrementar</button>
                <button onClick={this.substractClick.bind(this)}>Decrementar</button>
                <p>{this.state.clicks}</p>
            </div>
        );
    }
}
