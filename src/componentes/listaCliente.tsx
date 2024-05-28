/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import FormularioCadastroCliente from "./formularioCadastroCliente";


type props = {
    tema: string
}

export default class ListaCliente extends Component<props, { mostrarCadastro: boolean }> {
    constructor(props: props) {
        super(props);
        this.state = {
            mostrarCadastro: false
        };
    }

    handleAddClick = () => {
        this.setState({ mostrarCadastro: true });
    }

    render() {
        let estilo = `collection-item active ${this.props.tema}`;
        if (this.state.mostrarCadastro) {
            return (
                <>
                    <div>
                        <FormularioCadastroCliente tema="purple lighten-4" />
                    </div>
                    <div className="right-align">
                        <a onClick={() => this.setState({ mostrarCadastro: false })} className="waves-effect waves-light btn">Voltar</a>
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
                        <a className="btn-floating btn-large waves-effect waves-light red" onClick={this.handleAddClick}><i className="material-icons">add</i></a>
                    </div>
                </>
            );
        }
    }
}