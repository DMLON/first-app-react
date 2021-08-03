import React from 'react'

class StateExample extends React.Component{
    constructor(props){
        super(props);
        this.state = {text:"Click me!", text2:"Click me too!"};
    }

    onCambiarText(...texts){
        for(let text of texts){
            this.setState({[text]:"cambiado"})
        }
    }

    render(){
        return <div>
            <h1>Hola mundo!</h1>
            <p>Ejemplo de state</p>
            <button onClick={()=>this.onCambiarText("text","text2")}>{this.state.text}</button>
            <button onClick={()=>this.onCambiarText("text")}>{this.state.text2}</button>
        </div>
    }
}

export default StateExample;