import React from 'react';
import '../css/style.css'

const estiloComentario = {
    color:"pink",
    fontWeight:400
}


// Puedo usar destructuracion en vez de poner el props
const ComentarioFuncion = function ({nombre, comentario}){
    return <div className="contenedor">
        <img style={{objectFit:'cover'}} src="http://simpleicon.com/wp-content/uploads/user1.png"></img>
        <div className="contenido">
            <div className="name">{nombre}</div>
            <div style={estiloComentario}>{comentario}</div>
        </div>
        <button>Eliminar</button>
    </div>;
}


export default ComentarioFuncion