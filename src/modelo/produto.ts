export default class Produto {
    public nome!: string
    public preco!: number
    public codigo!: string

    constructor(nome: string, preco: number, codigo: string) {
        this.nome = nome
        this.preco = preco
        this.codigo = codigo
    }

    public get getPreco(): number {
        return this.preco
    }

    public get getNome(): string {
        return this.nome;
    }

    public get getCodigo(): string {
        return this.codigo;
    }
}