import React from "react";
import Comentario from "./components/comentarioclass";
import ComentarioFuncion from "./components/comentariofunc";
import "./css/style.css";

const comentarios = [
    {
        nombre: "Pedro",
        mensaje: "Hola mundo!",
    },
    {
        nombre: "Juan",
        mensaje: "Hola mundo para vos!",
    },
    {
        nombre: "Sol",
        mensaje: "Como va",
    },
    {
        nombre: "Jessica",
        mensaje: "Giles",
    },
    {
        nombre: "Gordon",
        mensaje: "Toga",
    },
    {
        nombre: "Banano",
        mensaje: "Hola mundo para vos!",
    },
];

const renderComentarios = onSeleccionarComentario => {
    return comentarios.map((comentario) => {
        return <Comentario nombre={comentario.nombre} comentario={comentario.mensaje} onSelected={onSeleccionarComentario} />;
    })
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { comentarioSelected: null };
    }

    onSelectedComment(comentario) {
        // Debo cambiar el state con setState
        this.setState({comentarioSelected:comentario})
    }

    render() {
        return (
            <div className="contenedor-comentarios">
                {/* Voy a poner los hijos acá */}
                <div>{this.props.children}</div>
                {
                renderComentarios(this.onSelectedComment.bind(this))
                }
                <div>{this.state.comentarioSelected}</div>
            </div>
        );
    }
}

export default App;
