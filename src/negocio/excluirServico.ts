import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Excluir from "./excluir";

export default class ExcluirServico extends Excluir {
    private servicos: Array<Servico>;
    private entrada: Entrada;
    constructor(servicos: Array<Servico>) {
        super();
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public excluir(): void {
        console.log(`\nInício da exclusão do serviço`);
        let codigo = this.entrada.receberTexto(`Por favor informe o código do serviço a ser excluído: `);
        let index = this.servicos.findIndex(s => s.getCodigo === codigo);
        if (index !== -1) {
            let servico = this.servicos[index];
            console.log(`Informações do serviço:`);
            console.log(`Nome: ${servico.getNome}`);
            console.log(`Preço: ${servico.getPreco}`);
            console.log(`Código: ${servico.getCodigo}`);
            
            let confirmacao = this.entrada.receberTexto(`Deseja realmente excluir o serviço? (S/N): `);
            if (confirmacao.toUpperCase() === 'S') {
                this.servicos.splice(index, 1);
                console.log(`Serviço excluído com sucesso!\n`);
            } else {
                console.log(`Exclusão cancelada.\n`);
            }
        } else {
            console.log(`Serviço não encontrado :(\n`);
        }
    }

    public get getServicos(): Array<Servico> {
        return this.servicos;
    }
}
