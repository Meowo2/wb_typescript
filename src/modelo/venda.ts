import Cliente from "./cliente";
import CPF from "./cpf";
import Produto from "./produto";
import Servico from "./servico";

export default class Venda {
    cpfCliente: CPF;
    codigosProdutos: Array<Produto>;
    codigoServicos: Array<Servico>;
    total: number;
    dataVenda: Date;

    constructor(cliente: Cliente, codigosProdutos: Array<Produto>, codigosServicos: Array<Servico>) {
        this.cpfCliente = cliente.getCpf;
        this.codigosProdutos = codigosProdutos;
        this.codigoServicos = codigosServicos;
        this.total = this.valorTotal();
        this.dataVenda = new Date();
    }

    private valorTotal(): number {
        let valorTotal = 0;
        for (let produto of this.codigosProdutos) {
             valorTotal += produto.getPreco;
        }
        for (let servico of this.codigoServicos) {
            valorTotal += servico.getPreco;
        }
        return valorTotal;
    }

    public atualizarValorTotal(): void {
        this.total = this.valorTotal();
    }

    public adicionarCodigoProduto(produto: Produto): void {
        this.codigosProdutos.push(produto);
        this.total = this.valorTotal();
    }

    public adicionarCodigoServico(servico: Servico): void {
        this.codigoServicos.push(servico);
        this.total = this.valorTotal();
    }

    public getCpfCliente(): CPF {
        return this.cpfCliente;
    }

    public getCodigosProdutos(): Array<Produto> {
        return this.codigosProdutos;
    }

    public getCodigosServicos(): Array<Servico> {
        return this.codigoServicos;
    }

    public getTotal(): number {
        return this.total;
    }

    public getDataVenda(): Date {
        return this.dataVenda;
    }
}
