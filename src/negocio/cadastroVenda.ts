import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Venda from "../modelo/venda";
import Cadastro from "./cadastro";

export default class CadastroVenda extends Cadastro {
    private vendas: Array<Venda> = [];
    private clientes: Array<Cliente> = [];
    private produtos: Array<Produto> = [];
    private servicos: Array<Servico> = [];
    private entrada: Entrada = new Entrada();

    constructor(vendas: Array<Venda>, clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        super();
        this.vendas = vendas;
        this.clientes = clientes;
        this.produtos = produtos;
        this.servicos = servicos;
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro da venda`);

        let comprador;
        let itens = [];
        let servicos = [];

        let nome = this.entrada.receberTexto(`Por favor, informe o cpf do cliente: `);
        for (let cliente of this.clientes) {
            if ((cliente.getCpf).getValor == nome) {
                comprador = cliente;
                break;
            }else{
                console.log(`Cliente não cadastrado, por favor cadastre o cliente antes de realizar a venda.\n`);
                return;
            }
        }

        let Produto = this.entrada.receberTexto(`Por favor, informe o código do produto: `);
        for (let produto of this.produtos) {
            if (produto.getCodigo == Produto) {
                if (produto.getQuantidade == 0) {
                    console.log(`Produto sem estoque.\n`);
                    return;
                }
                let quantidadeComprada = this.entrada.receberNumero(`Por favor, informe a quantidade que gostaria de comprar do produto (Quantidade disponivel: ${produto.getQuantidade}): `);
                if (quantidadeComprada > produto.getQuantidade) {
                    console.log(`Quantidade maior que a disponível.\n`);
                    return;
                }
                produto.atualizarQuantidade(produto.getQuantidade - quantidadeComprada);
                break;
            }else{
                console.log(`Produto não cadastrado, por favor cadastre o produto antes de realizar a venda.\n`);
                return;
            }
        }


        let venda = new Venda(comprador, itens, servicos);
        this.vendas.push(venda);

        console.log(`\nCadastro concluído :)\n`);
    }
}
