import React, { useState, useEffect } from "react";

export default function HooksExample() {
    const [name, setName] = useState("Click me!");

    // Component did update
    // Retorna una funcion que se ejecuta todas las veces antes de que se ejecute la funcion
    useEffect(() => {
        console.log("Executed");
        // * Cleanup, ejemplo de uso:
        // * https://dev.to/otamnitram/react-useeffect-cleanup-how-and-when-to-use-it-2hbm
        return () => {
            console.log("Cleanup executed");
        }
    }) 

    // Component did mount
    useEffect(() => {
        console.log("Executed at startup");
    },[]) 


    // Ejecuta cuando cambia la propiedad
    useEffect(() => {
        console.log("Executed when name changes");
    },[name])

    //Para poder acceder a los ciclos de vida (Equivalente de did mount en clases)
    return <div>
        <h1>Prueba de hooks</h1>
        <button onClick={()=>setName("Updated")}>{name}</button>
    </div>;
}
