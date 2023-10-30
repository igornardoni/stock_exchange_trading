
# ==> Uma negociação não pode ser modificada após ser criada.

# ==> Obrigatoriamente tem uma data, quantidade e valor.

# ==> Seu volume é calculdado, multiplicando-se a quantidade negociada no dia, pelo valor negociado.


Em negociacao.ts:

```ts
get data(): Date {
        const data_fake = new Date(this._data.getTime());
        return data_fake;
} 
// Note in md .....
```
# ==> Programação defensiva:

# Essa data que eu estou retornando é idêntica à data que eu tenho encapsulada dentro da minhanegociação, porém uma nova referência. Se você fizer o set date ou fizer qualquer coisa, você nãovai mudar na data da minha negociação. E eu preciso te retornar uma data de qualquer maneira,porque senão você não tem como ler, saber que data que meu date tem.

# Isso que fizemos nós chamamos de programação defensiva, eu estou evitando que quando você chameum método ou um getter da minha classe você tenha acesso a uma referência de algo que eu guardeipara ninguém botar a mão, mas que eu não quero que você modifique. 

# Nem sempre o readonly resolve problemas como esse, então um método ou até mesmo um getter, comovimos aqui, pode resolver essa questão da nossa classe.

# Com quantidade e valor, são tipos literais do JavaScript, você só tem como modificar atribuindo, você não tem uma referência para eles, então nós conseguimos aqui blindar a nossa negociação.