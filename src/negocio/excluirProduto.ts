import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Excluir from "./excluir";

export default class ExcluirProduto extends Excluir {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public excluir(): void {
        console.log(`\nInício da exclusão do produto`);
        let codigo = this.entrada.receberTexto(`Por favor informe o código do produto a ser excluído: `);
        let index = this.produtos.findIndex(p => p.getCodigo === codigo);
        if (index !== -1) {
            let produto = this.produtos[index];
            console.log(`Informações do produto:`);
            console.log(`Nome: ${produto.getNome}`);
            console.log(`Preço: ${produto.getPreco}`);
            console.log(`Descrição: ${produto.getCodigo}`);
            console.log(`Quantidade: ${produto.getQuantidade}`)
            
            let confirmacao = this.entrada.receberTexto(`Deseja realmente excluir o produto? (S/N): `);
            if (confirmacao.toUpperCase() === 'S') {
                this.produtos.splice(index, 1);
                console.log(`Produto excluído com sucesso!\n`);
            } else {
                console.log(`Exclusão cancelada.\n`);
            }
        } else {
            console.log(`Produto não encontrado :(\n`);
        }
    }

    public get getProdutos(): Array<Produto> {
        return this.produtos
    }
}
