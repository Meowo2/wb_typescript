import { URI } from "./uri";
import Atualizar from "./atualizar";

class AtualizarCliente implements Atualizar {
    atualizar(objeto: Object): void {
        fetch(URI.ATUALIZAR_CLIENTE, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objeto)
        })
    }

}
export default AtualizarCliente