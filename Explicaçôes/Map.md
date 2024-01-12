# Map 

E um método para mapeamento de elemento de array , e parecido com _foreach()_ .
```javascript 

var numeros = [3,6,9,12];
// O map "mapeamento" o 1° parametro , criando o nome n para dae referencia de todos os indices 
// que vai ser percorrido , o segundo parametro e o cálculo 
// com método pow() usando arrow function , elevando a potencia em cada indice .
potencia = numeros.map(n=>Math.pow(n,3));
console.log(potencia);

```

> [!NOTE]
> <strong> Referência </strong> 
> * (LLP) - Leandro Luiz Pereira 