import { Component } from "react";
import CadastrarCliente from "../back/cadastrarCliente";
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

type props = {
    tema: string
    cliente: Cliente
}

export default class FormularioEdicao extends Component<props> {

    private nome: string = this.props.cliente.nome;
    private sobreNome: string = this.props.cliente.sobreNome;
    private endereco: {
        estado: string;
        cidade: string;
        bairro: string;
        rua: string;
        numero: string;
        codigoPostal: string;
        informacoesAdicionais: string;
    } = {
        estado: this.props.cliente.endereco.estado,
        cidade: this.props.cliente.endereco.cidade,
        bairro: this.props.cliente.endereco.bairro,
        rua: this.props.cliente.endereco.rua,
        numero: this.props.cliente.endereco.numero,
        codigoPostal: this.props.cliente.endereco.codigoPostal,
        informacoesAdicionais: this.props.cliente.endereco.informacoesAdicionais
    };

    constructor(props: props | Readonly<props>) {
        super(props);
        this.getNome = this.getNome.bind(this);
        this.getSobreNome = this.getSobreNome.bind(this);
        this.getEstado = this.getEstado.bind(this);
        this.getCidade = this.getCidade.bind(this);
        this.getBairro = this.getBairro.bind(this);
        this.getRua = this.getRua.bind(this);
        this.getNumero = this.getNumero.bind(this);
        this.getCodigo = this.getCodigo.bind(this);
        this.getInformacao = this.getInformacao.bind(this);
        this.submeterFormulario = this.submeterFormulario.bind(this);
        this.atualizarCliente = this.atualizarCliente.bind(this);
    }

    public atualizarCliente(cliente: Object) {
        let atualizadorCliente = new AtualizarCliente();
        atualizadorCliente.atualizar(cliente);
    }

    public getNome(event: any){
        this.nome = event.target.value;
    }

    public getSobreNome(event: any){
        this.sobreNome = event.target.value;
    }

    public getEstado(event: any){
        this.endereco.estado = event.target.value;
    }

    public getCidade(event: any){
        this.endereco.cidade = event.target.value;
    }

    public getBairro(event: any){
        this.endereco.bairro = event.target.value;
    }

    public getRua(event: any){
        this.endereco.rua = event.target.value;
    }

    public getNumero(event: any){
        this.endereco.numero = event.target.value;
    }

    public getCodigo(event: any){
        this.endereco.codigoPostal = event.target.value;
    }

    public getInformacao(event: any){
        this.endereco.informacoesAdicionais = event.target.value;
    }

    public submeterFormulario(evento: any) {
        evento.preventDefault();
        let cliente = {
            nome: this.nome,
            sobreNome: this.sobreNome,
            endereco: {
                cidade: this.endereco.cidade,
                estado: this.endereco.estado,
                bairro: this.endereco.bairro,
                rua: this.endereco.rua,
                numero: this.endereco.numero,
                codigoPostal: this.endereco.codigoPostal,
                informacoesAdicionais: this.endereco.informacoesAdicionais
            }
        };
        this.atualizarCliente(cliente);
        evento.target.reset();
    }

    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div className="row">
            <form className="col s12" onSubmit={(e) => this.submeterFormulario(e)}>

                <div className="row">

                <div className="input-field col s6">
                    <input id="nome" type="text" className="validate active"/>
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
        )
    }
}