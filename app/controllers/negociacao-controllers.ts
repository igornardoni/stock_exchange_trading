import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    
    criandoNegociacao(): Negociacao {              // Realiazando conversões de tipo necessárias
        const regex = /-/g;
        const data = new Date(this.inputData.value.replace(regex, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        
        return new Negociacao(data, quantidade, valor);
        
    };
    
    adiciona(): void {
        const negociacao = this.criandoNegociacao();
        console.log(negociacao);
        this.limparFormulario();
    };

    limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';

        this.inputData.focus();
    };
};
