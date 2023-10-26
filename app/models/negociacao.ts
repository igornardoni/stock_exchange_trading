export class Negociacao {
     private _data: Date;       //   Criação dos atributos privados
     private _quantidade: number;
     private _valor: number;

    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data;                   //   Criação dos valores
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get data(): Date {
        return this._data;
    }

    get quantidade(): Number {
        return this._quantidade;
    }

    get valor(): Number {
        return this._valor;
    }

    get volume(): Number {
        return this._quantidade * this._valor;
    }
}

 