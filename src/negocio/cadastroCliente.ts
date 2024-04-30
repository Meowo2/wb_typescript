import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Telefone from "../modelo/telefone";
import Cadastro from "./cadastro";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf (123.456.789-00): `);
        let cpf = valor;
        let telefone = this.entrada.receberTexto(`Por favor informe o número de telefone do cliente(ddd 123456789): `);
        let ddd = telefone.substring(0, 3);
        let numero = telefone.substring(4);
        let telefoneObj = new Telefone(ddd, numero);
        let genero = this.entrada.receberTexto(`Por favor informe o gênero do cliente (M / F): `);
        let cliente = new Cliente(nome, nomeSocial, cpf, telefoneObj, genero);
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }

    public get getClientes(): Array<Cliente> {
        return this.clientes
    }

    public preCadastrados(): void {
        let clientesIniciais = [
            { nome: 'Arthur Sousa', nomeSocial: 'Arthur', cpf: '987.654.321-00', telefone: '022 987654321', genero: 'M' },
            { nome: 'João Silva', nomeSocial: 'João', cpf: '111.222.333-44', telefone: '031 987654321', genero: 'M' },
            { nome: 'Maria Oliveira', nomeSocial: 'Maria', cpf: '555.666.777-88', telefone: '047 998877665', genero: 'F' },
            { nome: 'Pedro Santos', nomeSocial: 'Pedro', cpf: '999.888.777-66', telefone: '021 12344321', genero: 'M' },
            { nome: 'Ana Souza', nomeSocial: 'Ana', cpf: '333.444.555-66', telefone: '011 55443322', genero: 'F' },
            { nome: 'Lucas Pereira', nomeSocial: 'Lucas', cpf: '777.888.999-00', telefone: '022 11223344', genero: 'M' },
            { nome: 'Fernanda Costa', nomeSocial: 'Fernanda', cpf: '222.333.444-55', telefone: '031 66778899', genero: 'F' },
            { nome: 'Rodrigo Oliveira', nomeSocial: 'Rodrigo', cpf: '888.777.666-55', telefone: '041 99887766', genero: 'M' },
            { nome: 'Carla Martins', nomeSocial: 'Carla', cpf: '444.555.666-77', telefone: '032 11223344', genero: 'F' },
            { nome: 'Gustavo Almeida', nomeSocial: 'Gustavo', cpf: '666.777.888-99', telefone: '015 99887766', genero: 'M' },
            { nome: 'Juliana Lima', nomeSocial: 'Juliana', cpf: '555.444.333-22', telefone: '019 12345678', genero: 'F' },
            { nome: 'Rafael Fernandes', nomeSocial: 'Rafael', cpf: '333.222.111-00', telefone: '021 87654321', genero: 'M' },
            { nome: 'Patrícia Santos', nomeSocial: 'Patrícia', cpf: '999.888.777-66', telefone: '011 11223344', genero: 'F' },
            { nome: 'Anderson Lima', nomeSocial: 'Anderson', cpf: '444.555.666-77', telefone: '032 99887766', genero: 'M' },
            { nome: 'Camila Oliveira', nomeSocial: 'Camila', cpf: '222.333.444-55', telefone: '011 98765432', genero: 'F' },
            { nome: 'Daniel Costa', nomeSocial: 'Daniel', cpf: '888.777.666-55', telefone: '021 99887766', genero: 'M' },
            { nome: 'Aline Martins', nomeSocial: 'Aline', cpf: '111.222.333-44', telefone: '015 12344321', genero: 'F' },
            { nome: 'Marcelo Almeida', nomeSocial: 'Marcelo', cpf: '666.777.888-99', telefone: '011 99887766', genero: 'M' },
            { nome: 'Carolina Lima', nomeSocial: 'Carolina', cpf: '555.444.333-22', telefone: '021 12345678', genero: 'F' },
            { nome: 'Diego Fernandes', nomeSocial: 'Diego', cpf: '333.222.111-00', telefone: '022 87654321', genero: 'M' },
            { nome: 'Luana Santos', nomeSocial: 'Luana', cpf: '999.888.777-66', telefone: '031 11223344', genero: 'F' },
            { nome: 'Marcos Lima', nomeSocial: 'Marcos', cpf: '444.555.666-77', telefone: '015 99887766', genero: 'M' },
            { nome: 'Natália Oliveira', nomeSocial: 'Natália', cpf: '222.333.444-55', telefone: '041 98765432', genero: 'F' },
            { nome: 'Ricardo Costa', nomeSocial: 'Ricardo', cpf: '888.777.666-55', telefone: '011 99887766', genero: 'M' },
            { nome: 'Sandra Martins', nomeSocial: 'Sandra', cpf: '111.222.333-44', telefone: '021 12344321', genero: 'F' },
            { nome: 'Thiago Almeida', nomeSocial: 'Thiago', cpf: '666.777.888-99', telefone: '015 99887766', genero: 'M' },
            { nome: 'Vanessa Lima', nomeSocial: 'Vanessa', cpf: '555.444.333-22', telefone: '021 12345678', genero: 'F' },
            { nome: 'Wagner Fernandes', nomeSocial: 'Wagner', cpf: '333.222.111-00', telefone: '022 87654321', genero: 'M' },
            { nome: 'Yasmin Santos', nomeSocial: 'Yasmin', cpf: '999.888.777-66', telefone: '031 11223344', genero: 'F' },
            { nome: 'Zé Carlos Lima', nomeSocial: 'Zé Carlos', cpf: '444.555.666-77', telefone: '015 99887766', genero: 'M' }
        ];
    
        for (let clienteInicial of clientesIniciais) {
            let cpf = clienteInicial.cpf;
            let ddd = clienteInicial.telefone.substring(0, 3);
            let numero = clienteInicial.telefone.substring(4);
            let telefoneObj = new Telefone(ddd, numero);
            let cliente = new Cliente(clienteInicial.nome, clienteInicial.nomeSocial, cpf, telefoneObj, clienteInicial.genero);
            this.clientes.push(cliente)
        }
    }
}