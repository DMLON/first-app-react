import React from 'react';
import '../css/style.css'

const estiloComentario = {
    color:"pink",
    fontWeight:400
}

//Para llamar algo de javascript desde JSX debo usar corchetes
class Comentario extends React.Component{

    render(){
        const {nombre, comentario, onSelected} = this.props;
        return <div className="contenedor">
            <img style={{objectFit:'cover'}} src="http://simpleicon.com/wp-content/uploads/user1.png"></img>
            <div className="contenido">
                <div className="name">{nombre}</div>
                <div style={estiloComentario}>{comentario}</div>
            </div>
            <button onClick={()=> onSelected(comentario)}>Seleccionar</button>
        </div>;
    }
}

export default Comentario
