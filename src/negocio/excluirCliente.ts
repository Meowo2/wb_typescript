import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Excluir from "./excluir";

export default class ExcluirCliente extends Excluir {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public excluir(): void {
        console.log(`\nInício da exclusão do cliente`);
        let cpf = this.entrada.receberTexto(`Por favor informe o número do cpf do cliente a ser excluído (123.456.789-00): `);
        let index = this.clientes.findIndex(c => c.getCpf === cpf);
        if (index !== -1) {
            let cliente = this.clientes[index];
            console.log(`Informações do cliente:`);
            console.log(`Nome: ${cliente.getNome}`);
            console.log(`Nome Social: ${cliente.getNomeSocial}`);
            console.log(`CPF: ${cliente.getCpf}`);
            console.log(`Telefones: ${cliente.getTelefoneString}`);
            
            let confirmacao = this.entrada.receberTexto(`Deseja realmente excluir o cliente? (S/N): `);
            if (confirmacao.toUpperCase() === 'S') {
                this.clientes.splice(index, 1);
                console.log(`Cliente excluído com sucesso!\n`);
            } else {
                console.log(`Exclusão cancelada.\n`);
            }
        } else {
            console.log(`Cliente não encontrado :(\n`);
        }
    }

    public get getClientes(): Array<Cliente> {
        return this.clientes
    }
}
