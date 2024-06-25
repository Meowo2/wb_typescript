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
import EditarCliente from "../negocio/editarCliente";
import EditarProduto from "../negocio/editarProduto";
import EditarServico from "../negocio/editarServico";
import ExcluirCliente from "../negocio/excluirCliente";
import ExcluirProduto from "../negocio/excluirProduto";
import ExcluirServico from "../negocio/excluirServico";
import ListagemConsumo from "../negocio/listagemConsumo";



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
    
    empresa.atualizarVendas(cadastroVenda.getVendas)
    empresa.atualizarServicos(cadastroServico.getServicos);
    empresa.atualizarProdutos(cadastroProduto.getProdutos);
    empresa.atualizarClientes(cadastroCliente.getClientes);

    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Editar cliente`)
    console.log(`4 - Excluir cliente`)

    console.log(`5 - Cadastrar produto`);
    console.log(`6 - Listar todos os produtos`);
    console.log(`7 - Editar produto`);
    console.log(`8 - Excluir cliente`)

    console.log(`9 - Cadastrar serviço`);
    console.log(`10 - Listar todos os serviços`);
    console.log(`11 - Editar serviço`);
    console.log(`12 - Excluir cliente`)

    console.log(`13 - Cadastrar venda`);
    console.log(`14 - Listar todas as vendas`);
    console.log(`15 - Listagens de consumos`);
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
            let editarCliente = new EditarCliente(empresa.getClientes)
            editarCliente.editar()
            empresa.atualizarClientes(editarCliente.getClientes)
            break;
        case 4:
            let excluirCliente = new ExcluirCliente(empresa.getClientes)
            excluirCliente.excluir()
            empresa.atualizarClientes(excluirCliente.getClientes)
            break;
        case 5:
            //let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            empresa.atualizarProdutos(cadastroProduto.getProdutos)
            break;
        case 6:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
            listagemProdutos.listar()
            break;
        case 7:
            let editarProduto = new EditarProduto(empresa.getProdutos)
            editarProduto.editar()
            empresa.atualizarProdutos(editarProduto.getProdutos)
            break;
        case 8:
            let excluirProduto = new ExcluirProduto(empresa.getProdutos)
            excluirProduto.excluir()
            empresa.atualizarProdutos(excluirProduto.getProdutos)
            break;
        case 9:
            //let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            empresa.atualizarServicos(cadastroServico.getServicos)
            break;
        case 10:
            let listagemServicos = new ListagemServicos(empresa.getServicos)
            listagemServicos.listar()
            break;
        case 11:
            let editarServico = new EditarServico(empresa.getServicos)
            editarServico.editar()
            empresa.atualizarServicos(editarServico.getServicos)
            break;
        case 12:
            let excluirServico = new ExcluirServico(empresa.getServicos)
            excluirServico.excluir()
            empresa.atualizarServicos(excluirServico.getServicos)
            break;
        case 13:
            //let cadastroVenda = new CadastroVenda(empresa.getVendas, empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            cadastroVenda.cadastrar()
            empresa.atualizarVendas(cadastroVenda.getVendas)
            empresa.atualizarClientes(cadastroVenda.getClientes)
            empresa.atualizarProdutos(cadastroVenda.getProdutos)
            empresa.atualizarServicos(cadastroVenda.getServicos)
            break;
        case 14:
            let listagemVendas = new ListagemVendas(empresa.getVendas)
            listagemVendas.listar() 
            break;
        case 15:
            let listagem = new ListagemConsumo(empresa.getClientes)
            listagem.listar()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}