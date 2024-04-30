export default class Produto {
    public nome!: string
    public preco!: number
    public codigo!: string
    public quantidade!: number

    constructor(nome: string, preco: number, codigo: string, quantidade: number) {
        this.nome = nome
        this.preco = preco
        this.codigo = codigo
        this.quantidade = quantidade
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

    public get getQuantidade(): number {
        return this.quantidade;
    }

    public atualizarQuantidade(quantidade: number): void {
        this.quantidade = quantidade;
    }
}