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

    public preCadastrados(): void {
        let produtosIniciais = [
            { nome: 'Base Líquida', preco: 39.99, codigo: '123' },
            { nome: 'Máscara de Cílios', preco: 19.99, codigo: '456' },
            { nome: 'Batom Vermelho', preco: 14.99, codigo: '789' },
            { nome: 'Pó Compacto', preco: 29.99, codigo: '012' },
            { nome: 'Blush Rosa', preco: 9.99, codigo: '345' },
            { nome: 'Delineador Preto', preco: 12.99, codigo: '678' },
            { nome: 'Corretivo Líquido', preco: 19.99, codigo: '901' },
            { nome: 'Sombra Marrom', preco: 9.99, codigo: '234' },
            { nome: 'Batom Nude', preco: 14.99, codigo: '567' },
            { nome: 'Iluminador em Pó', preco: 24.99, codigo: '890' },

            { nome: 'Perfume Masculino', preco: 99.99, codigo: '123' },
            { nome: 'Gel para Cabelo', preco: 14.99, codigo: '456' },
            { nome: 'Desodorante Roll-on', preco: 9.99, codigo: '789' },
            { nome: 'Creme para Barbear', preco: 19.99, codigo: '012' },
            { nome: 'Loção Pós-Barba', preco: 12.99, codigo: '345' },
            { nome: 'Shampoo 2 em 1', preco: 15.99, codigo: '678' },
            { nome: 'Gel Fixador para Sobrancelhas', preco: 11.99, codigo: '901' },
            { nome: 'Gel de Limpeza Facial', preco: 17.99, codigo: '234' },
            { nome: 'Sabonete Líquido Corporal', preco: 8.99, codigo: '567' },
            { nome: 'Creme Hidratante Facial', preco: 29.99, codigo: '890' }
        ];

        for (let produtoInicial of produtosIniciais) {
            let produto = new Produto(produtoInicial.nome, produtoInicial.preco, produtoInicial.codigo);
            this.produtos.push(produto);
        }
    }
}