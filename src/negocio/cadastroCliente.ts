import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
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
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        let telefone = this.entrada.receberTexto(`Por favor informe o número de telefone do cliente(ddd 123456789): `);
        let ddd = telefone.substring(0, 3);
        let numero = telefone.substring(4);
        let telefoneObj = new Telefone(ddd, numero);
        let genero = this.entrada.receberTexto(`Por favor informe o gênero do cliente: `);
        let cliente = new Cliente(nome, nomeSocial, cpf, telefoneObj, genero);
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }

    public preCadastrados(): void {
        let clientesIniciais = [
            { nome: 'Arthur Sousa', nomeSocial: 'Arthur', cpf: '987.654.321-00', dataEmissao: '02/02/2002', telefone: '022 987654321', genero: 'Masculino' },
            { nome: 'João Silva', nomeSocial: 'João', cpf: '111.222.333-44', dataEmissao: '05/03/1995', telefone: '031 987654321', genero: 'Masculino' },
            { nome: 'Maria Oliveira', nomeSocial: 'Maria', cpf: '555.666.777-88', dataEmissao: '10/12/1988', telefone: '047 998877665', genero: 'Feminino' },
            { nome: 'Pedro Santos', nomeSocial: 'Pedro', cpf: '999.888.777-66', dataEmissao: '15/07/1976', telefone: '021 12344321', genero: 'Masculino' },
            { nome: 'Ana Souza', nomeSocial: 'Ana', cpf: '333.444.555-66', dataEmissao: '20/04/1990', telefone: '011 55443322', genero: 'Feminino' },
            { nome: 'Lucas Pereira', nomeSocial: 'Lucas', cpf: '777.888.999-00', dataEmissao: '25/09/1985', telefone: '022 11223344', genero: 'Masculino' },
            { nome: 'Fernanda Costa', nomeSocial: 'Fernanda', cpf: '222.333.444-55', dataEmissao: '30/06/1978', telefone: '031 66778899', genero: 'Feminino' },
            { nome: 'Rodrigo Oliveira', nomeSocial: 'Rodrigo', cpf: '888.777.666-55', dataEmissao: '03/11/1993', telefone: '041 99887766', genero: 'Masculino' },
            { nome: 'Carla Martins', nomeSocial: 'Carla', cpf: '444.555.666-77', dataEmissao: '12/08/1982', telefone: '032 11223344', genero: 'Feminino' },
            { nome: 'Gustavo Almeida', nomeSocial: 'Gustavo', cpf: '666.777.888-99', dataEmissao: '17/05/1974', telefone: '015 99887766', genero: 'Masculino' },
            { nome: 'Juliana Lima', nomeSocial: 'Juliana', cpf: '555.444.333-22', dataEmissao: '22/02/1998', telefone: '019 12345678', genero: 'Feminino' },
            { nome: 'Rafael Fernandes', nomeSocial: 'Rafael', cpf: '333.222.111-00', dataEmissao: '27/10/1983', telefone: '021 87654321', genero: 'Masculino' },
            { nome: 'Patrícia Santos', nomeSocial: 'Patrícia', cpf: '999.888.777-66', dataEmissao: '01/09/1979', telefone: '011 11223344', genero: 'Feminino' },
            { nome: 'Anderson Lima', nomeSocial: 'Anderson', cpf: '444.555.666-77', dataEmissao: '08/04/1991', telefone: '032 99887766', genero: 'Masculino' },
            { nome: 'Camila Oliveira', nomeSocial: 'Camila', cpf: '222.333.444-55', dataEmissao: '14/03/1975', telefone: '011 98765432', genero: 'Feminino' },
            { nome: 'Daniel Costa', nomeSocial: 'Daniel', cpf: '888.777.666-55', dataEmissao: '19/11/1986', telefone: '021 99887766', genero: 'Masculino' },
            { nome: 'Aline Martins', nomeSocial: 'Aline', cpf: '111.222.333-44', dataEmissao: '24/07/1994', telefone: '015 12344321', genero: 'Feminino' },
            { nome: 'Marcelo Almeida', nomeSocial: 'Marcelo', cpf: '666.777.888-99', dataEmissao: '29/05/1980', telefone: '011 99887766', genero: 'Masculino' },
            { nome: 'Carolina Lima', nomeSocial: 'Carolina', cpf: '555.444.333-22', dataEmissao: '04/02/1977', telefone: '021 12345678', genero: 'Feminino' },
            { nome: 'Diego Fernandes', nomeSocial: 'Diego', cpf: '333.222.111-00', dataEmissao: '09/10/1992', telefone: '022 87654321', genero: 'Masculino' },
            { nome: 'Luana Santos', nomeSocial: 'Luana', cpf: '999.888.777-66', dataEmissao: '13/06/1981', telefone: '031 11223344', genero: 'Feminino' },
            { nome: 'Marcos Lima', nomeSocial: 'Marcos', cpf: '444.555.666-77', dataEmissao: '18/01/1996', telefone: '015 99887766', genero: 'Masculino' },
            { nome: 'Natália Oliveira', nomeSocial: 'Natália', cpf: '222.333.444-55', dataEmissao: '23/08/1984', telefone: '041 98765432', genero: 'Feminino' },
            { nome: 'Ricardo Costa', nomeSocial: 'Ricardo', cpf: '888.777.666-55', dataEmissao: '28/04/1973', telefone: '011 99887766', genero: 'Masculino' },
            { nome: 'Sandra Martins', nomeSocial: 'Sandra', cpf: '111.222.333-44', dataEmissao: '02/03/1989', telefone: '021 12344321', genero: 'Feminino' },
            { nome: 'Thiago Almeida', nomeSocial: 'Thiago', cpf: '666.777.888-99', dataEmissao: '07/11/1987', telefone: '015 99887766', genero: 'Masculino' },
            { nome: 'Vanessa Lima', nomeSocial: 'Vanessa', cpf: '555.444.333-22', dataEmissao: '12/09/1972', telefone: '021 12345678', genero: 'Feminino' },
            { nome: 'Wagner Fernandes', nomeSocial: 'Wagner', cpf: '333.222.111-00', dataEmissao: '17/07/1997', telefone: '022 87654321', genero: 'Masculino' },
            { nome: 'Yasmin Santos', nomeSocial: 'Yasmin', cpf: '999.888.777-66', dataEmissao: '22/05/1982', telefone: '031 11223344', genero: 'Feminino' },
            { nome: 'Zé Carlos Lima', nomeSocial: 'Zé Carlos', cpf: '444.555.666-77', dataEmissao: '27/12/1971', telefone: '015 99887766', genero: 'Masculino' }
        ];
    
        for (let clienteInicial of clientesIniciais) {
            let partesData = clienteInicial.dataEmissao.split('/')
            let ano = new Number(partesData[2].valueOf()).valueOf()
            let mes = new Number(partesData[1].valueOf()).valueOf()
            let dia = new Number(partesData[0].valueOf()).valueOf()
            let dataEmissao = new Date(ano, mes, dia)
            let cpf = new CPF(clienteInicial.cpf, dataEmissao);
            let ddd = clienteInicial.telefone.substring(0, 3);
            let numero = clienteInicial.telefone.substring(4);
            let telefoneObj = new Telefone(ddd, numero);
            let cliente = new Cliente(clienteInicial.nome, clienteInicial.nomeSocial, cpf, telefoneObj, clienteInicial.genero);
            this.clientes.push(cliente)
        }
    }
}