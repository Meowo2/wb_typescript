import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Editar from "./editar";

export default class EditarServico extends Editar {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public editar(): void {
        console.log(`\nInício da edição do serviço`);
        let codigo = this.entrada.receberTexto(`Por favor informe o código do serviço a ser editado: `);
        let servico = this.servicos.find(s => s.getCodigo === codigo);
        if (servico) {
            let descricao = this.entrada.receberTexto(`Por favor informe a nova descrição do serviço: `);
            let preco = this.entrada.receberNumero(`Por favor informe o novo preço do serviço: `);
            servico.setDescricao(descricao);
            servico.setPreco(preco);
            console.log(`\nEdição concluída :)\n`);
        } else {
            console.log(`Serviço não encontrado :(\n`);
        }
    }
}
