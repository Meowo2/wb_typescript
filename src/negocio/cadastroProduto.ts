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
        let quantidade = this.entrada.receberNumero(`Por favor informe a quantidade do produto: `);

        let produto = new Produto(nome, preco, codigo, quantidade);
        this.produtos.push(produto);

        console.log(`\nCadastro concluído :)\n`);
    }

    public get getProdutos(): Array<Produto> {
        return this.produtos;
    }

    public preCadastrados(): void {
        let produtosIniciais = [
            { nome: 'Base Líquida', preco: 39.99, codigo: '123', quantidade: 8 },
            { nome: 'Máscara de Cílios', preco: 19.99, codigo: '456', quantidade: 10 },
            { nome: 'Batom Vermelho', preco: 14.99, codigo: '789', quantidade: 7 },
            { nome: 'Pó Compacto', preco: 29.99, codigo: '012', quantidade: 10 },
            { nome: 'Blush Rosa', preco: 9.99, codigo: '345', quantidade: 5 },
            { nome: 'Delineador Preto', preco: 12.99, codigo: '678', quantidade: 10 },
            { nome: 'Corretivo Líquido', preco: 19.99, codigo: '901', quantidade: 4 },
            { nome: 'Sombra Marrom', preco: 9.99, codigo: '234', quantidade: 10 },
            { nome: 'Batom Nude', preco: 14.99, codigo: '567', quantidade: 2 },
            { nome: 'Iluminador em Pó', preco: 24.99, codigo: '890', quantidade: 1 },

            { nome: 'Perfume Masculino', preco: 99.99, codigo: '123', quantidade: 6 },
            { nome: 'Gel para Cabelo', preco: 14.99, codigo: '456', quantidade: 9 },
            { nome: 'Desodorante Roll-on', preco: 9.99, codigo: '789', quantidade: 3 },
            { nome: 'Creme para Barbear', preco: 19.99, codigo: '012', quantidade: 10 },
            { nome: 'Loção Pós-Barba', preco: 12.99, codigo: '345', quantidade: 2 },
            { nome: 'Shampoo 2 em 1', preco: 15.99, codigo: '678', quantidade: 7 },
            { nome: 'Gel Fixador para Sobrancelhas', preco: 11.99, codigo: '901', quantidade: 10 },
            { nome: 'Gel de Limpeza Facial', preco: 17.99, codigo: '234', quantidade: 8 },
            { nome: 'Sabonete Líquido Corporal', preco: 8.99, codigo: '567', quantidade: 9 },
            { nome: 'Creme Hidratante Facial', preco: 29.99, codigo: '890', quantidade: 1}
        ];

        for (let produtoInicial of produtosIniciais) {
            let produto = new Produto(produtoInicial.nome, produtoInicial.preco, produtoInicial.codigo, produtoInicial.quantidade);
            this.produtos.push(produto);
        }
    }
}