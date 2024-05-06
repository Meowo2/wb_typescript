import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
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
        // Sort the rank maps in descending order based on the values
        const sortedProdutos = Array.from(rankProdutos.entries()).sort((a, b) => b[1] - a[1]);
        const sortedServicos = Array.from(rankServicos.entries()).sort((a, b) => b[1] - a[1]);

        // Get the top 10 clients from each rank
        const top10Produtos = sortedProdutos.slice(0, 10);
        const top10Servicos = sortedServicos.slice(0, 10);

        // Print the top 10 clients for each rank
        console.log(`\nTop 10 clientes que mais consumiram por quantidade de produtos:`);
        top10Produtos.forEach(([cpf, quantidade]) => {
            console.log(`CPF: ${cpf}, Quantidade: ${quantidade}`);
        });

        console.log(`\nTop 10 clientes que mais consumiram por quantidade de serviços:`);
        top10Servicos.forEach(([cpf, quantidade]) => {
            console.log(`CPF: ${cpf}, Quantidade: ${quantidade}`);
        });
        
        console.log(`\n`);
    }
}