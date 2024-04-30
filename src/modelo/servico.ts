export default class Servico {
    public nome!: string;
    public preco!: number;
    public codigo!: string;

    constructor(nome: string, preco: number, codigo: string) {
        this.nome = nome;
        this.preco = preco;
        this.codigo = codigo;
    }

    public getNome(): string {
        return this.nome;
    }

    public getPreco(): number {
        return this.preco;
    }

    public getCodigo(): string {
        return this.codigo;
    }
}