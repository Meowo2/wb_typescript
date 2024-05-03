import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Telefone from "../modelo/telefone";
import Editar from "./editar";

export default class EditarCliente extends Editar {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public editar(): void {
        console.log(`\nInício da edição do cliente`);
        let cpf = this.entrada.receberTexto(`Por favor informe o número do cpf do cliente a ser editado (123.456.789-00): `);
        let cliente = this.clientes.find(c => c.getCpf === cpf);
        if (cliente) {
            let nome = this.entrada.receberTexto(`Por favor informe o novo nome do cliente: `);
            let nomeSocial = this.entrada.receberTexto(`Por favor informe o novo nome social do cliente: `);
            let telefone = this.entrada.receberTexto(`Por favor informe o novo número de telefone do cliente (ddd 123456789): `);
            let ddd = telefone.substring(0, 3);
            let numero = telefone.substring(4);
            let telefoneObj = new Telefone(ddd, numero);
            let genero = this.entrada.receberTexto(`Por favor informe o novo gênero do cliente (M / F): `);
            cliente.setNome(nome);
            cliente.setNomeSocial(nomeSocial);
            cliente.setTelefone(telefoneObj);
            cliente.setGenero(genero);
            console.log(`\nEdição concluída :)\n`);
        } else {
            console.log(`Cliente não encontrado :(\n`);
        }
    }
}