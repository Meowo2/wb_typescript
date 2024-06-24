import { URI } from "./uri";
import Cadastrar from "./cadastrar";

class CadastrarCliente implements Cadastrar {
    cadastrar(objeto: Object): void {
        fetch(URI.CADASTRAR_CLIENTE, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objeto)
        })
    }

}
export default CadastrarCliente