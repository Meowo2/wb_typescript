export default class Servico {
    private nome!: string;
    private preco!: number;
    private codigo!: string;

    constructor(nome: string, preco: number, codigo: string) {
        this.nome = nome;
        this.preco = preco;
        this.codigo = codigo;
    }

    public get getNome(): string {
        return this.nome;
    }
    public get getPreco(): number {
        return this.preco;
    }
    public get getCodigo(): string {
        return this.codigo;
    }

    public setPreco(preco: number): void {
        this.preco = preco;
    }
}