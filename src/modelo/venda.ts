import Produto from "./produto";

export default class Venda {
    cpfCliente: string;
    produtosComprados: Array<Produto>;

    constructor(cpfCliente: string, produtosComprados: Array<Produto>) {
        this.cpfCliente = cpfCliente;
        this.produtosComprados = produtosComprados;
    }

    calcularValorTotal(): number {
        let valorTotal = 0;
        for (const produto of this.produtosComprados) {
            valorTotal += produto.preco;
        }
        return valorTotal;
    }
}