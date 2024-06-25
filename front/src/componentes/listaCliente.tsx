/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import FormularioCadastroCliente from "./formularioCadastroCliente";
import BuscarClientes from "../back/buscarCliente";
import { URI } from "../back/uri";
import RemoverCliente from "../back/removerCliente";
import RemoveIdCliente from "../back/removeIdCliente";
import FormularioEdicao from "./formularioEdicao";
import AtualizarCliente from "../back/atualizarCliente";

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

    public ativarEdicao(cliente: Cliente, e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();
        this.setState({ clienteEditando: cliente, modoEdicao: true });
    }

    public atualizarCliente(cliente: Cliente) {
        let atualizadorCliente = new AtualizarCliente();
        atualizadorCliente.atualizar(cliente);
        const clientesAtualizados = this.state.clientes.map(c => {
            if (c.id === cliente.id) {
                return cliente;
            } else {
                return c;
            }
        });
        this.setState({
            clientes: clientesAtualizados,
            modoEdicao: false,
            clienteEditando: null
        });
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
        } if (this.state.modoEdicao) {
            const estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
            if (this.state.clienteEditando){
                var clientedit = this.state.clienteEditando
            }
            return (
                <>
                    <div>
                    
                    {this.state.modoEdicao && this.state.clienteEditando && this.state.clienteEditando.id === this.state.clienteEditando.id && (

                    <div className="row">
            <form className="col s12" onSubmit= {() => this.atualizarCliente(clientedit)}>

                <div className="row">

                <div className="input-field col s6">
                    <input id="nome" type="text" className="validate active" value={this.state.clienteEditando.nome}/>
                    <label htmlFor="nome">Nome</label>
                </div>

                <div className="input-field col s6">
                    <input id="sobreNome" type="text" className="validate"/>
                    <label htmlFor="sobreNome">Sobrenome</label>
                </div>

                <div className="input-field col s6">
                    <input id="cidade" type="text" className="validate"/>
                    <label htmlFor="cidade">Cidade</label>
                </div>

                <div className="input-field col s6">
                    <input id="estado" type="text" className="validate"/>
                    <label htmlFor="estado">Estado</label>
                </div>

                <div className="input-field col s6">
                    <input id="bairro" type="text" className="validate"/>
                    <label htmlFor="bairro">Bairro</label>
                </div>

                <div className="input-field col s6">
                    <input id="rua" type="text" className="validate"/>
                    <label htmlFor="rua">Rua</label>
                </div>

                <div className="input-field col s6">
                    <input id="numero" type="text" className="validate"/>
                    <label htmlFor="numero">Número Residência</label>
                </div>

                <div className="input-field col s6">
                    <input id="codigoPostal" type="text" className="validate"/>
                    <label htmlFor="codigoPostal">Código Postal</label>
                </div>

                <div className="input-field col s6">
                    <input id="informacoesAdicionais" type="text" className="validate"/>
                    <label htmlFor="informacoesAdicionais">Informações Adicionais</label>
                </div>

                </div>

                <div className="row">

                <div className="col s12">
                    <button className={estiloBotao} type="submit" name="action">Submit
                    <i className="material-icons right">send</i>
                    </button>
                </div>

                </div>

            </form>
            </div>
            )}



                    </div>
                    <div className="right-align">
                        <a onClick={() => this.setState({ modoEdicao: false })} className="waves-effect waves-light btn">Voltar</a>
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
                                <a href="/" onClick={(e) => this.ativarEdicao(cliente, e)}>
                                    <i className="material-icons">edit</i>
                                </a>
                                <a href="/" className="button-edition" onClick={(e)=> { this.excluirLocal(cliente.id, e) }}>
                                    <i className="material-icons">block</i>
                                </a>
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