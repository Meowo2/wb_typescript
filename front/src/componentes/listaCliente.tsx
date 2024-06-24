/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import FormularioCadastroCliente from "./formularioCadastroCliente";
import BuscarClientes from "../back/buscarCliente";
import { URI } from "../back/uri";
import RemoverCliente from "../back/removerCliente";
import RemoveIdCliente from "../back/removeIdCliente";

interface Cliente {
    id: string;
    nome: string;
    sobreNome: string;
    endereco: {
        estado: string;
        cidade: string;
        bairro: string;
        rua: string;
        numero: string;
        codigoPostal: string;
        informacoesAdicionais: string;
    };
}

interface State {
    clientes: Cliente[];
    modoEdicao: boolean;
    clienteEditando: Cliente | null;
    mostrarCadastro: boolean;
}

type props = {
    tema: string
}

export default class ListaCliente extends Component<props, State> {

    constructor(props: props) {
        super(props);
        this.state = {
            mostrarCadastro: false,
            clientes: [],
            modoEdicao: false,
            clienteEditando: null
        };
    }

    public buscarClientes() {
        let buscadorClientes = new BuscarClientes();
        const clientes = buscadorClientes.buscar();
        clientes.then(clientes => {
            this.setState({ clientes });
        });
    }

    public excluirRemoto(idCliente: string) {
        let removedor = new RemoverCliente();
        removedor.remover({ id: idCliente });
    }

    public excluirLocal(id: string, e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();
        let removedorLocal = new RemoveIdCliente();
        let clientes = removedorLocal.remover(this.state.clientes, id);
        this.excluirRemoto(id);
        this.buscarClientes();
    }

    handleAddClick = () => {
        this.setState({ mostrarCadastro: true });
    }

    componentDidMount() {
        this.buscarClientes();
    }

    render() {
        const { clientes } = this.state;
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
                        {clientes.map(cliente => (
                            <>
                            <a className="collection-item">
                                <h6><strong>{cliente.nome}</strong></h6>
                                <h6>{cliente.sobreNome}</h6>
                                <li>
                                    Endereço:
                                    <p>Estado: {cliente.endereco.estado}</p>
                                    <p>Cidade: {cliente.endereco.cidade}</p>
                                    <p>Bairro: {cliente.endereco.bairro}</p>
                                    <p>Rua: {cliente.endereco.rua}</p>
                                    <p>Número: {cliente.endereco.numero}</p>
                                    <p>Código Postal: {cliente.endereco.codigoPostal}</p>
                                    <p>Informações Adicionais: {cliente.endereco.informacoesAdicionais}</p>
                                </li>
                            </a>
                            <div className="secondary-content">
                                <a href="/" className="button-edition" onClick={(e)=> { this.excluirLocal(cliente.id, e) }}>
                                    <i className="material-icons">block</i>
                                </a>
                            </div>
                            </>
                        ))}
                    </div>
                    <div className="right-align">
                        <a className="btn-floating btn-large waves-effect waves-light red" onClick={this.handleAddClick}><i className="material-icons">add</i></a>
                    </div>
                </>
            );
        }
    }
}