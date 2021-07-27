import React from 'react';
import Comentario from './comentario';
import './css/style.css'


const comentario = {
    nombre:"Pedro",
    comentario:"Hola mundo!"
}

const App = () => {
    return <div className="contenedor-comentarios">
        <Comentario nombre="Juan" comentario="Hola mundo!"/>
        <Comentario nombre="Manuel" comentario="Hola mundo para vos!"/>
        <Comentario nombre="Ezequiel" comentario="Como va"/>
        <Comentario nombre="Sol" comentario="Giles"/>
        <Comentario nombre="Jessica" comentario="Toga"/>
        <Comentario nombre="Gordon" comentario="lorem ipsum"/>
        <Comentario nombre="Banano" comentario="Hola mundo para vos!"/>
    </div>
    
}

export default App;