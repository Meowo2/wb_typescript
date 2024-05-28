import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaCliente from "./listaCliente";
import ListaProdutos from "./listaProdutos";
import ListaServicos from "./listaServicos";
import Listagem from "./listagem";
import FormularioCadastroVenda from "./formularioCadastroVenda";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="purple lighten-4" botoes={['Clientes', 'Produtos', 'Serviços', 'Cadastrar Venda', 'Listagem']} />
        switch (this.state.tela) {
            case 'Clientes':
            return (
                <>
                {barraNavegacao}
                <ListaCliente tema="purple lighten-4" />
                </>
            );
            case 'Produtos':
            return (
                <>
                {barraNavegacao}
                <ListaProdutos tema="purple lighten-4" />
                </>
            );
            case 'Serviços':
            return (
                <>
                {barraNavegacao}
                <ListaServicos tema="purple lighten-4" />
                </>
            );
            case 'Cadastrar Venda':
            return (
                <>
                {barraNavegacao}
                <FormularioCadastroVenda tema="purple lighten-4" />
                </>
            );
            case 'Listagem':
            return (
                <>
                {barraNavegacao}
                <Listagem tema="purple lighten-4" />
                </>
            );
            default:
            return (
                <>
                {barraNavegacao}
                </>
            );
        }

    }
}