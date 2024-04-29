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
}