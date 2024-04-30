import Venda from "../modelo/venda";
import Listagem from "./listagem";

export default class ListagemVendas extends Listagem {
    private vendas: Array<Venda>;

    constructor(vendas: Array<Venda>) {
        super();
        this.vendas = vendas;
    }

    public listar(): void {
        console.log(`\nLista de todas as vendas:`);
        this.vendas.forEach(venda => {
            console.log(`Data: ${venda.dataVenda}`);
            console.log(`CPF do Cliente: ${venda.cpfCliente}`);
            console.log(`Produtos: {`);
            for (let produto of venda.codigosProdutos) {
                console.log(`    Código: ${produto.codigoProduto.getCodigo}`);
                console.log(`    Quantidade: ${produto.quantidade}`);
                console.log(`    Preço Individual: ${produto.precoIndividual}`);
                console.log(`    }`);
            }
            console.log(`Serviços: {`);
            for (let servico of venda.codigoServicos) {
                console.log(`    Código: ${servico.codigoServico.getCodigo}`);
                console.log(`    Quantidade: ${servico.quantidade}`);
                console.log(`    Preço Individual: ${servico.precoIndividual}`);
                console.log(`    }`);
            }
            console.log(`Total: ${venda.total}`);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}
