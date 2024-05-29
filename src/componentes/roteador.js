import React, { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaCliente from "./listaCliente";
import ListaProdutos from "./listaProdutos";
import ListaServicos from "./listaServicos";
import Listagem from "./listagem";
import FormularioCadastroVenda from "./formularioCadastroVenda";

function Roteador() {
    const [tela, setTela] = useState('Clientes');

    const selecionarView = (novaTela, evento) => {
        evento.preventDefault();
        console.log(novaTela);
        setTela(novaTela);
    };

    let barraNavegacao = <BarraNavegacao seletorView={selecionarView} tema="purple lighten-4" botoes={['Clientes', 'Produtos', 'Serviços', 'Cadastrar Venda', 'Listagem']} />;
    
    switch (tela) {
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

export default Roteador;