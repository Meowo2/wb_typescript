import React, { useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import FormularioCadastroCliente from "./formularioCadastroCliente";

function ListaCliente(props) {
    const [mostrarCadastro, setMostrarCadastro] = useState(false);

    const handleAddClick = () => {
        setMostrarCadastro(true);
    };

    let estilo = `collection-item active ${props.tema}`;
    if (mostrarCadastro) {
        return (
            <>
                <div>
                    <FormularioCadastroCliente tema="purple lighten-4" />
                </div>
                <div className="right-align">
                    <a onClick={() => setMostrarCadastro(false)} className="waves-effect waves-light btn">Voltar</a>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="collection">
                    <a className="collection-item">Cliente 1</a>
                    <a className="collection-item">Cliente 2</a>
                    <a className="collection-item">Cliente 3</a>
                    <a className="collection-item">Cliente 4</a>
                </div>
                <div className="right-align">
                    <a className="btn-floating btn-large waves-effect waves-light red" onClick={handleAddClick}><i className="material-icons">add</i></a>
                </div>
            </>
        );
    }
}

export default ListaCliente;
