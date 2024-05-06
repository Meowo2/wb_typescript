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

            let produtos = venda.getCodigosProdutos();
            let servicos = venda.getCodigosServicos();
            let quantidadeProdutos = venda.getQuantidadeProdutos();
            let quantidadeServicos = venda.getQuantidadeServicos();

            console.log(`Data: ${venda.getDataVenda()}`);
            console.log(`CPF do Cliente: ${venda.getCpfCliente()}`);
            console.log(`Produtos: {`);

            for (let i = 0; i < venda.getCodigosProdutos().length; i++) {
                console.log(`    Código: ${produtos[i].getCodigo}`);
                console.log(`    Quantidade: ${quantidadeProdutos[i]}`);
                console.log(`    Preço Individual: ${produtos[i].getPreco}`);
                console.log(`    }`);
            }

            console.log(`Serviços: {`);

            for (let i = 0; i < venda.getCodigosServicos().length; i++) {
                console.log(`    Código: ${servicos[i].getCodigo}`);
                console.log(`    Quantidade: ${quantidadeServicos[i]}`);
                console.log(`    Preço Individual: ${servicos[i].getPreco}`);
                console.log(`    }`);
            }

            console.log(`Total: ${venda.getTotal()}`);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}
