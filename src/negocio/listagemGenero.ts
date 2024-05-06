
import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemGenero extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de clientes do gênero Masculino:`);
        this.clientes.forEach(cliente => {
            if (cliente.genero === 'M') {
                console.log(`Nome: ` + cliente.nome);
                console.log(`Nome social: ` + cliente.nomeSocial);
                console.log(`CPF: ` + cliente.getCpf);
                console.log('Telefones: ' + cliente.getTelefoneString)
                console.log(`--------------------------------------`);
            }
        });
        console.log(`\n********************************************`);
        console.log(`\nLista de clientes do gênero Feminino:`);
        this.clientes.forEach(cliente => {
            if (cliente.genero === 'F') {
                console.log(`Nome: ` + cliente.nome);
                console.log(`Nome social: ` + cliente.nomeSocial);
                console.log(`CPF: ` + cliente.getCpf);
                console.log('Telefones: ' + cliente.getTelefoneString)
                console.log(`--------------------------------------`);
            }
        });
        console.log(`\n`);
    }
}