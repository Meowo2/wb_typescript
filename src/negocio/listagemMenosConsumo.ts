import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemMenosConsumo extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        let rankProdutos = new Map<string, number>();
        let rankServicos = new Map<string, number>();
        console.log(`\nLista dos 10 clientes que mais consumiram por quantidade:`);
        this.clientes.forEach(cliente => {
            const servico = cliente.getQuantidadeServicos.reduce((acc, curr) => acc + curr, 0);
            const produto = cliente.getQuantidadeProdutos.reduce((acc, curr) => acc + curr, 0);
            rankProdutos.set(cliente.getCpf, produto);
            rankServicos.set(cliente.getCpf, servico);
        });
        // Sort the rank maps in ascending order based on the values
        const sortedProdutos = Array.from(rankProdutos.entries()).sort((a, b) => a[1] - b[1]);
        const sortedServicos = Array.from(rankServicos.entries()).sort((a, b) => a[1] - b[1]);

        // Get the bottom 10 clients from each rank
        const bottom10Produtos = sortedProdutos.slice(0, 10);
        const bottom10Servicos = sortedServicos.slice(0, 10);

        // Print the bottom 10 clients for each rank
        console.log(`\nOs 10 clientes que menos consumiram por quantidade de produtos:`);
        bottom10Produtos.forEach(([cpf, quantidade]) => {
            console.log(`CPF: ${cpf}, Quantidade: ${quantidade}`);
        });

        console.log(`\nOs 10 clientes que menos consumiram por quantidade de serviços:`);
        bottom10Servicos.forEach(([cpf, quantidade]) => {
            console.log(`CPF: ${cpf}, Quantidade: ${quantidade}`);
        });
        
        console.log(`\n`);
    }
}