import React, { Component } from 'react'

export default class RealTimeClock extends Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    // Se llama luego del render, permite usar las cosas de constructor y state
    // Pertenece al ciclo de vida
    componentDidMount(){
        this.timerID = setInterval(() => this.tick(),1000);
        console.log('componentDidMount');
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
        console.log('componentWillUnmount');

    }

    tick(){
        this.setState({
            date: new Date()
        });
    }
    
    render() {
        return (
            <div>
                <h2>It's {this.state.date.toLocaleString()}</h2>
            </div>
        )
    }
}
