import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();

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
        this.negociacoes.adiciona(negociacao);

        negociacao.data.setDate(12);   // Teste de privacidade do atributo data

        console.log(this.negociacoes.lista());
        this.limparFormulario();
    };

    limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';

        this.inputData.focus();
    };
};
