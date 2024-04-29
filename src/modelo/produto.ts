export default class Produto {
    public nome!: string
    public preco!: number
    public codigo!: string

    constructor(nome: string, preco: number, codigo: string) {
        this.nome = nome
        this.preco = preco
        this.codigo = codigo
    }
}