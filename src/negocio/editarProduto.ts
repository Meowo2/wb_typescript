import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Editar from "./editar";

export default class EditarProduto extends Editar {
    private produtos: Array<Produto>;
    private entrada: Entrada;

    constructor(produtos: Array<Produto>) {
        super();
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public editar(): void {
        console.log(`\nInício da edição do produto`);
        let codigo = this.entrada.receberTexto(`Por favor, informe o código do produto a ser editado: `);
        let produto = this.produtos.find(p => p.getCodigo === codigo);
        if (produto) {
            let nome = this.entrada.receberTexto(`Por favor, informe o novo nome do produto: `);
            let preco = this.entrada.receberNumero(`Por favor, informe o novo preço do produto: `);
            let quantidade = this.entrada.receberNumero(`Por favor, informe a nova quantidade do produto: `);
            produto.setNome(nome);
            produto.setPreco(preco);
            produto.setQuantidade(quantidade);
            console.log(`\nEdição concluída :)\n`);
        } else {
            console.log(`Produto não encontrado :(\n`);
        }
    }

    public get getProdutos(): Array<Produto> {
        return this.produtos;
    }
}
