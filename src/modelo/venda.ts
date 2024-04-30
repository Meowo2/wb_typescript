import Cliente from "./cliente";
import CPF from "./cpf";
import Produto from "./produto";

export default class Venda {
    cpfCliente: CPF;
    codigosProdutos: Array<Produto>;
    total: number;
    dataVenda: Date;

    constructor(cliente: Cliente, codigosProdutos: Array<Produto>) {
        this.cpfCliente = cliente.getCpf;
        this.codigosProdutos = codigosProdutos;
        this.total = this.valorTotal();
        this.dataVenda = new Date();
    }

    private valorTotal(): number {
        let valorTotal = 0;
        for (let produto of this.codigosProdutos) {
             valorTotal += produto.getPreco;
        }
        return valorTotal;
    }

    public adicionarCodigoProduto(produto: Produto): void {
        this.codigosProdutos.push(produto);
        this.total = this.valorTotal();
    }

    public getCpfCliente(): CPF {
        return this.cpfCliente;
    }

    public getCodigosProdutos(): Array<Produto> {
        return this.codigosProdutos;
    }

    public getTotal(): number {
        return this.total;
    }

    public getDataVenda(): Date {
        return this.dataVenda;
    }
}
