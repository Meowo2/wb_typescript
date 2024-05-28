import { Component } from "react";

type Props = {
    tema: string;
};

export default class FormularioCadastroServico extends Component<Props> {
    render() {
        const buttonStyle = `btn waves-effect waves-light ${this.props.tema}`;
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="service_name" type="text" className="validate" />
                            <label htmlFor="service_name">Nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="service_price" type="text" className="validate" />
                            <label htmlFor="service_price">Preço</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="service_code" type="text" className="validate" />
                            <label htmlFor="service_code">Código</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className={buttonStyle} type="submit" name="action">
                                Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}