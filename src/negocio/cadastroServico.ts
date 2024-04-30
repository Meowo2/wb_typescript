import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Cadastro from "./cadastro";

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico> = [];
    private entrada: Entrada = new Entrada();

    constructor(servicos: Array<Servico>) {
        super();
        this.servicos = servicos;
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do serviço`);

        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `);
        let preco = this.entrada.receberNumero(`Por favor informe o preço do serviço: `);
        let codigo = this.entrada.receberTexto(`Por favor informe o código do serviço: `);

        let servico = new Servico(nome, preco, codigo);
        this.servicos.push(servico);

        console.log(`\nCadastro concluído :)\n`);
    }

    public get getServicos(): Array<Servico> {
        return this.servicos;
    }

    public preCadastrados(): void {
        let servicosIniciais = [
            { nome: 'Corte de Cabelo', preco: 39.99, codigo: '123' },
            { nome: 'Manicure', preco: 19.99, codigo: '456' },
            { nome: 'Pedicure', preco: 14.99, codigo: '789' },
            { nome: 'Massagem', preco: 29.99, codigo: '012' },
            { nome: 'Limpeza de Pele', preco: 9.99, codigo: '345' },
            { nome: 'Depilação', preco: 12.99, codigo: '678' },
            { nome: 'Design de Sobrancelhas', preco: 19.99, codigo: '901' },
            { nome: 'Maquiagem', preco: 9.99, codigo: '234' },
            { nome: 'Tratamento Facial', preco: 14.99, codigo: '567' },
            { nome: 'Banho de Lua', preco: 24.99, codigo: '890' }
        ];

        for (let servicoInicial of servicosIniciais) {
            let servico = new Servico(servicoInicial.nome, servicoInicial.preco, servicoInicial.codigo);
            this.servicos.push(servico);
        }
    }
}