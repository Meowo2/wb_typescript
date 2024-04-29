import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Cadastro from "./cadastro";

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto> = [];
    private entrada: Entrada = new Entrada();

    constructor(produtos: Array<Produto>) {
        super();
        this.produtos = produtos;
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do produto`);

        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `);
        let preco = this.entrada.receberNumero(`Por favor informe o preço do produto: `);
        let codigo = this.entrada.receberTexto(`Por favor informe o código do produto: `);

        let produto = new Produto(nome, preco, codigo);
        this.produtos.push(produto);

        console.log(`\nCadastro concluído :)\n`);
    }
}