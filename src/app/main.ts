import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/cadastroCliente";
import ListagemClientes from "../negocio/listagemClientes";
import CadastroProduto from "../negocio/cadastroProduto";
import ListagemProdutos from "../negocio/listagemProdutos";
import CadastroServico from "../negocio/cadastroServico";
import ListagemServicos from "../negocio/listagemServicos";
import CadastroVenda from "../negocio/cadastroVenda";
import ListagemVendas from "../negocio/listagemVendas";



console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true


let cadastroCliente = new CadastroCliente(empresa.getClientes);
cadastroCliente.preCadastrados();
empresa.atualizarClientes(cadastroCliente.getClientes);

let cadastroProduto = new CadastroProduto(empresa.getProdutos);
cadastroProduto.preCadastrados();
empresa.atualizarProdutos(cadastroProduto.getProdutos);

let cadastroServico = new CadastroServico(empresa.getServicos);
cadastroServico.preCadastrados();
empresa.atualizarServicos(cadastroServico.getServicos);

let cadastroVenda = new CadastroVenda(empresa.getVendas, empresa.getClientes, empresa.getProdutos, empresa.getServicos)
empresa.atualizarVendas(cadastroVenda.getVendas)

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Cadastrar produto`);
    console.log(`4 - Listar todos os produtos`);
    console.log(`5 - Cadastrar serviço`);
    console.log(`6 - Listar todos os serviços`);
    console.log(`7 - Cadastrar venda`);
    console.log(`8 - Listar todas as vendas`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            //let cadastroCliente = new CadastroCliente(empresa.getClientes)
            cadastroCliente.cadastrar()
            empresa.atualizarClientes(cadastroCliente.getClientes)
            break;
        case 2:
            let listagemClientes = new ListagemClientes(empresa.getClientes)
            listagemClientes.listar()
            break;
        case 3:
            //let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            empresa.atualizarProdutos(cadastroProduto.getProdutos)
            break;
        case 4:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
            listagemProdutos.listar()
            break;
        case 5:
            //let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            empresa.atualizarServicos(cadastroServico.getServicos)
            break;
        case 6:
            let listagemServicos = new ListagemServicos(empresa.getServicos)
            listagemServicos.listar()
            break;
        case 7:
            //let cadastroVenda = new CadastroVenda(empresa.getVendas, empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            cadastroVenda.cadastrar()
            empresa.atualizarVendas(cadastroVenda.getVendas)
            break;
        case 8:
            let listagemVendas = new ListagemVendas(empresa.getVendas)
            listagemVendas.listar() 
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}