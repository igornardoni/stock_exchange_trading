export class Negociacao {
     private _data;       //   Criação dos atributos privados
     private _quantidade;
     private _valor;

    constructor(data, quantidade, valor) {
        this._data = data;                   //   Criação dos valores
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }
}

 