import { URI } from "./uri";
import Buscar from "./buscar";

export default class BuscarClientes implements Buscar {
    public async buscar() {
        let json = await fetch(URI.CLIENTES).then(resposta => resposta.json())
        return json
    }
}