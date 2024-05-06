import Cliente from "./cliente";
import Produto from "./produto";
import Servico from "./servico";

export default class Venda {
    private cpfCliente: string;
    private codigosProdutos: Array<Produto>;
    private codigoServicos: Array<Servico>;
    private quantidadeProdutos: Array<number>;
    private quantidadeServicos: Array<number>;
    private total: number;
    private dataVenda: Date;

    constructor(cliente: Cliente, codigosProdutos: Array<Produto>, codigosServicos: Array<Servico>, quantidadeProdutos: Array<number>, quantidadeServicos: Array<number>) {
        this.cpfCliente = cliente.getCpf;
        this.codigosProdutos = codigosProdutos;
        this.codigoServicos = codigosServicos;
        this.quantidadeProdutos = quantidadeProdutos;
        this.quantidadeServicos = quantidadeServicos;
        this.total = this.valorTotal();
        this.dataVenda = new Date();
    }

    private valorTotal(): number {
        let valorTotal = 0;
        for(let i = 0; i < this.codigosProdutos.length; i++){
            valorTotal += this.codigosProdutos[i].getPreco * this.quantidadeProdutos[i];
        }
        for(let i = 0; i < this.codigoServicos.length; i++){
            valorTotal += this.codigoServicos[i].getPreco * this.quantidadeServicos[i];
        }
        return valorTotal;
    }

    public atualizarValorTotal(): void {
        this.total = this.valorTotal();
    }

    /*
    public adicionarCodigoProduto(produto: Produto): void {
        this.codigosProdutos.push(produto);
        this.total = this.valorTotal();
    }

    public adicionarCodigoServico(servico: Servico): void {
        this.codigoServicos.push(servico);
        this.total = this.valorTotal();
    }

    */
   
    public getCpfCliente(): string {
        return this.cpfCliente;
    }

    public getCodigosProdutos(): Array<Produto> {
        return this.codigosProdutos;
    }

    public getCodigosServicos(): Array<Servico> {
        return this.codigoServicos;
    }

    public getQuantidadeProdutos(): Array<number> {
        return this.quantidadeProdutos;
    }

    public getQuantidadeServicos(): Array<number> {
        return this.quantidadeServicos;
    }

    /*
    public printProdutos(): string {
        let produtos = "";
        for (let i = 0; i < this.codigosProdutos.length; i++) {
            produtos += `${this.codigosProdutos[i].getNome} - Quantidade: ${this.quantidadeProdutos[i]} - Preço: ${this.codigosProdutos[i].getPreco}\n`;
        }
        return produtos;
    }

    public printServicos(): string {
        let servicos = "";
        for (let i = 0; i < this.codigoServicos.length; i++) {
            servicos += `${this.codigoServicos[i].getNome} - Quantidade: ${this.quantidadeServicos[i]} - Preço: ${this.codigoServicos[i].getPreco}\n`;
        }
        return servicos;
    }
    */

    public getTotal(): number {
        return parseFloat(this.total.toFixed(2));
    }

    public getDataVenda(): Date {
        return this.dataVenda;
    }
}
