export default class Produto {
    private nome!: string
    private preco!: number
    private codigo!: string
    private quantidade!: number

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

    public setNome(nome: string) {
        this.nome = nome;
    }
    public setPreco(preco: number) {
        this.preco = preco;
    }
    public setQuantidade(quantidade: number) {
        this.quantidade = quantidade;
    }
    
    public atualizarQuantidade(quantidade: number): void {
        this.quantidade = quantidade;
    }
    
}