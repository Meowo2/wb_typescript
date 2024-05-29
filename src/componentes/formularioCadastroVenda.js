import React from "react";

function FormularioCadastroVenda(props) {
    let estiloBotao = `btn waves-effect waves-light ${props.tema}`
    return (
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input id="full_name" type="text" className="validate" />
                        <label htmlFor="full_name">CPF do Cliente</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="social_name" type="text" className="validate" />
                        <label htmlFor="social_name">Produtos</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="cpf" type="text" className="validate" />
                        <label htmlFor="cpf">Serviços</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <button className={estiloBotao} type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormularioCadastroVenda;
