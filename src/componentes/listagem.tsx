/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
}

export default class Listagem extends Component<props> {
    constructor(props: props) {
        super(props);
    }

    render() {
        let estilo = `collection-item active ${this.props.tema}`;
        return (
            <>
                <div className="row">
        
    
                    {/* Clientes que mais consumiram */}
                    <div id="clientesMaisConsumiram" className="col s12">
                        <div className="row">
                        <h3 className="text-align: center">Clientes que mais consumiram produtos e serviços (quantidade) </h3>
                            <div className="col s12" >
                                <table className="centered responsive-table ">
                                    <thead>
                                        <tr>
                                            <th>N°</th>
                                            <th>Nome</th>
                                            <th>Qtd produtos consumidos</th>
                                            <th>Qtd serviços utilizados</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Cliente 1</td>
                                            <td>17</td>
                                            <td>12</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Cliente 2</td>
                                            <td>10</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Cliente 3</td>
                                            <td>9</td>
                                            <td>7</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Cliente 4</td>
                                            <td>7</td>
                                            <td>3</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="row">
                        <h3 className="text-align: center">Clientes que mais consumiram produtos e serviços (valor) </h3>
                            <div className="col s12" >
                                <table className="centered responsive-table ">
                                    <thead>
                                        <tr>
                                            <th>N°</th>
                                            <th>Nome</th>
                                            <th>Valor total de produtos consumidos</th>
                                            <th>Valor total de serviços utilizados</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Cliente 1</td>
                                            <td>R$15.000</td>
                                            <td>R$10.000</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Cliente 2</td>
                                            <td>R$12.000</td>
                                            <td>R$8.000</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Cliente 3</td>
                                            <td>R$900</td>
                                            <td>R$900</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Cliente 4</td>
                                            <td>R$500</td>
                                            <td>R$120</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    
                    {/* Clientes por gênero */}
                    <div id="generoClientes" className="col s12">
                        <div className="row">
                        <h3 className="text-align: center">Todos os clientes por gênero</h3>
                            <div className="col s12" >
                                <table className="centered responsive-table ">
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Gênero</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr>
                                            <td>Cliente 1</td>
                                            <td>F</td>
                                        </tr>
                                        <tr>
                                            <td>Cliente 2</td>
                                            <td>F</td>
                                        </tr>
                                        <tr>
                                            <td>Cliente 3</td>
                                            <td>M</td>
                                        </tr>
                                        <tr>
                                            <td>Cliente 4</td>
                                            <td>M</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <hr></hr>
                        <h3 className="text-align: center">Produtos e serviços mais consumidos por gênero</h3>
                        <div className="row">
                            <div className="col s6" >
                                <table className="centered responsive-table ">
                                    <thead>
                                        <tr>
                                            <th>Produto</th>
                                            <th>Gênero</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr>
                                            <td>Produto 1</td>
                                            <td>F</td>
                                        </tr>
                                        <tr>
                                            <td>Produto 2</td>
                                            <td>M</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
    
                            <div className="col s6" >
                                <table className="centered responsive-table ">
                                    <thead>
                                        <tr>
                                            <th>Serviço</th>
                                            <th>Gênero</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr>
                                            <td>Serviço 1</td>
                                            <td>F</td>
                                        </tr>
                                        <tr>
                                            <td>Serviço 2</td>
                                            <td>M</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
    
                    {/* Produtos e serviços mais consumidos */}
                    <div id="produtosServicosMaisConsumidos" className="col s12">
                        <div className="row" >
                        <h3 className="text-align: center">Produtos mais consumidos</h3>
                            <div className="col s12">
                                <table className="centered responsive-table ">
                                    <thead>
                                        <tr>
                                            <th>Produto</th>
                                            <th>Qtd de pedidos</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr>
                                            <td>Produto 1</td>
                                            <td> 250
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Produto 2</td>
                                            <td>25</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </div>
                            <hr></hr>
                            <div className="row">
                            <h3 className="text-align: center">Serviços mais consumidos</h3>
                            <div className="col s12">
                                <table className="centered responsive-table ">
                                    <thead>
                                        <tr>
                                            <th>Serviço</th>
                                            <th>Qtd de pedidos</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr>
                                            <td>Serviço 3</td>
                                            <td>700</td>
                                        </tr>
                                        <tr>
                                            <td>Serviço 4</td>
                                            <td>170</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
    
                    {/* Produtos e serviços menos consumidos */}
                    <div id="clientesMenosConsumiram" className="col s12">
                    <div className="row">
                    <h3 className="text-align: center">Clientes que menos consumiram</h3>
                                <div className="col s12">
                                    <table className="centered responsive-table ">
                                        <thead>
                                            <tr>
                                                <th>N°</th>
                                                <th>Nome</th>
                                                <th>Qtd produtos consumidos</th>
                                                <th>Qtd serviços utilizados</th>
                                            </tr>
                                        </thead>
    
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Cliente 4</td>
                                                <td>7</td>
                                                <td>3</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Cliente 2</td>
                                                <td>9</td>
                                                <td>7</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Cliente 1</td>
                                                <td>10</td>
                                                <td>10</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                    </div>
                </div>
            </>
            );
    }
}