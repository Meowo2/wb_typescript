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
            { nome: 'Corte de Cabelo', preco: 39.99, codigo: '001' },
            { nome: 'Manicure', preco: 19.99, codigo: '002' },
            { nome: 'Pedicure', preco: 14.99, codigo: '003' },
            { nome: 'Massagem', preco: 29.99, codigo: '004' },
            { nome: 'Limpeza de Pele', preco: 9.99, codigo: '005' },
            { nome: 'Depilação', preco: 12.99, codigo: '006' },
            { nome: 'Design de Sobrancelhas', preco: 19.99, codigo: '007' },
            { nome: 'Maquiagem', preco: 9.99, codigo: '008' },
            { nome: 'Tratamento Facial', preco: 14.99, codigo: '009' },
            { nome: 'Banho de Lua', preco: 24.99, codigo: '010' }
        ];

        for (let servicoInicial of servicosIniciais) {
            let servico = new Servico(servicoInicial.nome, servicoInicial.preco, servicoInicial.codigo);
            this.servicos.push(servico);
        }
    }
}