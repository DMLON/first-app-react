import ReactDOM from "react-dom";
import App from "./app";

const Titulo = () => {
    return <h1>Lista de comentarios</h1>
}

ReactDOM.render(
<App>
    <Titulo></Titulo>
</App>,
document.getElementById('root'));