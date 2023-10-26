from datetime import datetime
# negociacao.ts in negociacao.py (main.py)


class Negociacao:
    
    def __init__(self, data, quantidade, valor):
        self.__data = data
        self.__quantidade = quantidade
        self.__valor = valor
        
    @property
    def data(self):
        return self.__data
    
    @property
    def quantidade(self):
        return self.__quantidade
    
    @property
    def valor(self):
        return self.__valor
    
    @property
    def volume(self):
        return self.__quantidade * self.__valor
    

# Controller.ts ==> Views.py 
  
class NegociacaoController:

    def __init__(self):
        self.inputData = input("Digite a data (no formato YYYY-MM-DD): ")
        self.inputQuantidade = input("Digite a quantidade: ")
        self.inputValor = input("Digite o valor: ")

    def criandoNegociacao(self):
        # Realizando conversões de tipo necessárias
        data = self.inputData.replace('-', ',')
        data = datetime.strptime(data, '%Y,%m,%d')
        quantidade = int(self.inputQuantidade)
        valor = float(self.inputValor)
        
        return Negociacao(data, quantidade, valor)
    
    def adiciona(self):
        negociacao = self.criandoNegociacao()
        print(negociacao)
