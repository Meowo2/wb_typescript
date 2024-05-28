/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import FormularioCadastroProduto from "./formularioCadastroProduto";


type Props = {
    tema: string
}

export default class ListaProdutos extends Component<Props, { mostrarCadastro: boolean }> {
    constructor(props: Props) {
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
                        <FormularioCadastroProduto tema="purple lighten-4" />
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
                        <a className="collection-item">Produto 1</a>
                        <a className={estilo}>Produto 2</a>
                        <a className="collection-item">Produto 3</a>
                        <a className="collection-item">Produto 4</a>
                    </div>
                    <div className="right-align">
                        <a className="btn-floating btn-large waves-effect waves-light red" onClick={this.handleAddClick}><i className="material-icons">add</i></a>
                    </div>
                </>
            );
        }
    }
}