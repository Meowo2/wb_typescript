import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemMaisValor extends Listagem {
    private clientes: Array<Cliente>;
    
    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }
    
    public listar(): void {
        let rankClientes = new Map<string, number>();
        
        console.log(`\nLista dos 10 clientes que mais consumiram por valor:`);
        
        this.clientes.forEach(cliente => {
            const valorTotal = cliente.getValorCompras.reduce((acc, curr) => acc + curr, 0);
            rankClientes.set(cliente.getCpf, valorTotal);
        });
        
        // Ordenar o rank em ordem decrescente com base nos valores
        const sortedRank = Array.from(rankClientes.entries()).sort((a, b) => b[1] - a[1]);
        
        // Obter os top 10 clientes do rank
        const top10Clientes = sortedRank.slice(0, 10);
        
        // Imprimir os top 10 clientes
        console.log(`\nOs 10 clientes que mais consumiram por valor:`);
        top10Clientes.forEach(([cpf, valor]) => {
            console.log(`CPF: ${cpf}, Valor: ${valor}`);
        });
        
        console.log(`\n`);
    }
}
