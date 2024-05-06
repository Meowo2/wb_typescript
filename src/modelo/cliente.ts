import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    public genero: string
    private cpf: string
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private quantidadeProdutos: Array<number>
    private servicosConsumidos: Array<Servico>
    private quantidadeServicos: Array<number>
    constructor(nome: string, nomeSocial: string, cpf: string, telefone: Telefone, genero: string) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.genero = genero
        this.cpf = cpf
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = [telefone]
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.quantidadeProdutos = []
        this.quantidadeServicos = []
    }

    public get getNome(): string {
        return this.nome
    }
    public get getNomeSocial(): string {
        return this.nomeSocial
    }
    public get getCpf(): string {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones;
    }
    public get getTelefoneString(): string {
        let telefoneString = "\n";
        for (let telefone of this.telefones) {
            telefoneString += telefone.getDdd + ' ' + telefone.getNumero + "\n";
        }
        return telefoneString.slice(0, -2);
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos;
    }
    public get getQuantidadeProdutos(): Array<number> {
        return this.quantidadeProdutos;
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos;
    }
    public get getQuantidadeServicos(): Array<number> {
        return this.quantidadeServicos;
    }

    public setNome(nome: string) {
        this.nome = nome;
    }
    public setNomeSocial(nomeSocial: string) {
        this.nomeSocial = nomeSocial;
    }
    public setTelefone(telefone: Telefone) {
        this.telefones.push(telefone);
    }
    public setGenero(genero: string) {
        this.genero = genero;
    }
    public addProdutoConsumido(produto: Produto) {
        this.produtosConsumidos.push(produto);
    }
    public addServicoConsumido(servico: Servico) {
        this.servicosConsumidos.push(servico);
    }
    public addQuatidadeProduto(quantidade: number) {
        this.quantidadeProdutos.push(quantidade);
    }
    public addQuantidadeServico(quantidade: number) {
        this.quantidadeServicos.push(quantidade);
    }
}