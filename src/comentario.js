import React from 'react';
import './css/style.css'

const estiloComentario = {
    color:"pink",
    fontWeight:400
}

const Comentario = function (props){
    return <div className="contenedor">
        <img style={{objectFit:'cover'}} src="http://simpleicon.com/wp-content/uploads/user1.png"></img>
        <div className="contenido">
            <div className="name">{props.nombre}</div>
            <div style={estiloComentario}>{props.comentario}</div>
        </div>
        <button>Eliminar</button>
    </div>;
}

export default Comentario
