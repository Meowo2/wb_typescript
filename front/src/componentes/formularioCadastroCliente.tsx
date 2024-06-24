import { Component } from "react";
import CadastrarCliente from "../back/cadastrarCliente";

type props = {
    tema: string
}

export default class FormularioCadastroCliente extends Component<props> {

    private nome!: string;
    private sobreNome!: string;
    private endereco!: {
        estado?: string;
        cidade?: string;
        bairro?: string;
        rua?: string;
        numero?: string;
        codigoPostal?: string;
        informacoesAdicionais?: string;
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
        this.registerCliente = this.registerCliente.bind(this);
    }

    public registerCliente(objeto: Object) {
        new CadastrarCliente().cadastrar(objeto);
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
            }
        this.registerCliente(cliente);
        evento.target.reset();
    }

    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div className="row">
                <form className="col s12" onSubmit={(e) => this.submeterFormulario(e)}>

                    <div className="row">

                        <div className="input-field col s6">
                            <input id="nome" type="text" className="validate active" onChange={this.getNome} />
                            <label htmlFor="nome">Nome</label>
                        </div>

                        <div className="input-field col s6">
                            <input id="sobreNome" type="text" className="validate" onChange={this.getSobreNome}/>
                            <label htmlFor="sobreNome">Sobrenome</label>
                        </div>

                        <div className="input-field col s6">
                            <input id="cidade" type="text" className="validate" onChange={this.getCidade}/>
                            <label htmlFor="cidade">Cidade</label>
                        </div>

                        <div className="input-field col s6">
                            <input id="estado" type="text" className="validate" onChange={this.getEstado}/>
                            <label htmlFor="estado">Estado</label>
                        </div>

                        <div className="input-field col s6">
                            <input id="bairro" type="text" className="validate" onChange={this.getBairro}/>
                            <label htmlFor="bairro">Bairro</label>
                        </div>

                        <div className="input-field col s6">
                            <input id="rua" type="text" className="validate" onChange={this.getRua}/>
                            <label htmlFor="rua">Rua</label>
                        </div>

                        <div className="input-field col s6">
                            <input id="numero" type="text" className="validate" onChange={this.getNumero}/>
                            <label htmlFor="numero">Número Residência</label>
                        </div>

                        <div className="input-field col s6">
                            <input id="codigoPostal" type="text" className="validate" onChange={this.getCodigo}/>
                            <label htmlFor="codigoPostal">Código Postal</label>
                        </div>

                        <div className="input-field col s6">
                            <input id="informacoesAdicionais" type="text" className="validate" onChange={this.getInformacao}/>
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