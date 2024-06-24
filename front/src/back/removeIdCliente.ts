import RemoveId from "./removeId";

export default class RemoveIdCliente implements RemoveId {
    public remover(objeto: { id: string }[], id: string): { id: string }[] {
        let clientes = objeto.filter(elemento => elemento['id'] !== id)
        return clientes
    }
}