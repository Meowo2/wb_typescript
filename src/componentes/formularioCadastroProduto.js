import React from "react";

function FormularioCadastroProduto(props) {
    const buttonStyle = `btn waves-effect waves-light ${props.tema}`;
    return (
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input id="product_name" type="text" className="validate" />
                        <label htmlFor="product_name">Nome</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="price" type="number" className="validate" />
                        <label htmlFor="price">Preço</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <textarea id="product_code" className="materialize-textarea"></textarea>
                        <label htmlFor="product_code">Código</label>
                    </div>
                    <div className="input-field col s12">
                        <textarea id="product_amount" className="materialize-textarea"></textarea>
                        <label htmlFor="product_amount">Quantidade</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <button className={buttonStyle} type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FormularioCadastroProduto;
