import Cliente from "./cliente"
import Produto from "./produto"
import Servico from "./servico"
import Venda from "./venda"

export default class Empresa{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private vendas: Array<Venda>
    constructor(){
        this.clientes = []
        this.produtos = []
        this.servicos = []
        this.vendas = []
    }
    public get getClientes(){
        return this.clientes
    }
    public get getProdutos(){
        return this.produtos
    }
    public get getServicos(){
        return this.servicos
    }
    public get getVendas(){
        return this.vendas
    }
    public atualizarClientes(novosClientes: Array<Cliente>): void {
        this.clientes = novosClientes;
    }

    public atualizarProdutos(novosProdutos: Array<Produto>): void {
        this.produtos = novosProdutos;
    }

    public atualizarServicos(novosServicos: Array<Servico>): void {
        this.servicos = novosServicos;
    }

    public atualizarVendas(novasVendas: Array<Venda>): void {
        this.vendas = novasVendas;
    }
}