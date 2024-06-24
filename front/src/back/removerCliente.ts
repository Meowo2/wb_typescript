import { URI } from "./uri";
import Remover from "./remover";

export default class RemoverCliente implements Remover {
    public remover(objeto: { id: string }): void {
        let json = { id: objeto['id'] }
        fetch(URI.DELETAR_CLIENTE, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json)
        })
    }
}