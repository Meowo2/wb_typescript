import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Venda from "../modelo/venda";
import Cadastro from "./cadastro";

export default class CadastroVenda extends Cadastro {
    private vendas: Array<Venda>;
    private clientes: Array<Cliente>;
    private produtos: Array<Produto>;
    private servicos: Array<Servico>;
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

        let cancelar = 0
        let comprador;
        let produtosComprados: Array<Produto> = [];
        let servicosComprados: Array<Servico> = [];
        let quantidadeProduto: Array<number> = [];
        let quantidadeServico: Array<number> = [];

        //let produtosComprados: Array<{ codigoProduto: Produto, quantidade: number, precoIndividual: number }> = [];
        //let servicosComprados: Array<{ codigoServico: Servico, quantidade: number, precoIndividual: number }> = [];

        //Cliente
        let nome = this.entrada.receberTexto(`Por favor, informe o cpf do cliente (123.456.789-00): `);
        let achou = false;
        for (let cliente of this.clientes) {
            if (cliente.getCpf == nome) {
                achou = true;
                comprador = cliente;
                break;
            }
        }
        if (!achou){
            console.log(`Cliente não cadastrado, por favor cadastre o cliente antes de realizar a venda.\n`);
            return;
        }

        //Produtos
        let continuarAdicionando = 's';
        do {
            let achou = false;
            let Produto = this.entrada.receberTexto(`Por favor, informe o código do produto (000 para cancelar): `);
            if (Produto == '000'){
                cancelar =+ 1
                break;
            }
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
                    produtosComprados.push(produto);
                    quantidadeProduto.push(quantidadeComprada);
                    achou = true;
                    break;
                }
            }
            if (!achou){
                console.log(`Produto não cadastrado, por favor cadastre o produto antes de realizar a venda.\n`);
                return;
            }
            continuarAdicionando = this.entrada.receberTexto(`Deseja adicionar mais produtos? (s/n): `);
        } while (continuarAdicionando.toLowerCase() == 's');

        //Serviços
        continuarAdicionando = 's';
        do {
            let achou = false;
            let Servico = this.entrada.receberTexto(`Por favor, informe o código do serviço (000 para cancelar): `);
            if (Servico == '000'){
                cancelar =+ 1
                break;
            }
            for (let servico of this.servicos) {
                if (servico.getCodigo == Servico) {
                    let quantidadeComprada = this.entrada.receberNumero(`Por favor, informe a quantidade que gostaria de comprar do serviço: `);
                    servicosComprados.push(servico);
                    quantidadeServico.push(quantidadeComprada);
                    achou = true;
                    break;
                }
            }
            if (!achou){
                console.log(`Serviço não cadastrado, por favor cadastre o serviço antes de realizar a venda.\n`);
                return;
            }
            continuarAdicionando = this.entrada.receberTexto(`Deseja adicionar mais serviços? (s/n): `);
        } while (continuarAdicionando.toLowerCase() == 's');

        if (cancelar == 2){
            return
        }
        let venda = new Venda(comprador, produtosComprados, servicosComprados, quantidadeProduto, quantidadeServico);
        comprador.addProdutoConsumido(produtosComprados);
        comprador.addQuatidadeProduto(quantidadeProduto);
        comprador.addServicoConsumido(servicosComprados);
        comprador.addQuantidadeServico(quantidadeServico);
        comprador.addValorCompras(venda.getTotal());
        this.vendas.push(venda);

        console.log(`\nCadastro da venda concluída :)\n`);
    }

    public get getVendas(): Array<Venda> {
        return this.vendas;
    }

    public get getClientes(): Array<Cliente> {
        return this.clientes;
    }

    public get getProdutos(): Array<Produto> {
        return this.produtos;
    }

    public get getServicos(): Array<Servico> {
        return this.servicos;
    }
}
