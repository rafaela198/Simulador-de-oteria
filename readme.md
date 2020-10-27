# Simulador de Loteria

Esse projeto é um simulador da *mega sena*, onde o usuário digite seis números e sorteamos aleatóriamente outros seis números e comparamos para verificar quantos números você acertou.

**Não é para jogos oficiais**

## Tecnológias utilizadas
 1. **HTML:** HTML é uma linguagem de marcação utilizada na construção das estruturas das páginas na Web.
 2. **CSS:** Cascading Style Sheets (CSS) é um mecanismo para adicionar estilo (cores, fontes, espaçamento, etc.) a um documento web.
 3.**JS:** JavaScript (frequentemente abreviado como JS) é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma (protótipos, orientado a objeto, imperativo e, funcional).
 4.~~**Jquery**~~: não foi utilizado.

 ## Funções principais
 Aqui será apresentado as duas funções principais do código do site.

 ### Sorteio de números
 Nessa função os números são sorteados aleatóriamente.
```
function sortear() {
  numSort =[];
  for (var i = 0; i < 6; i++) {
    let sort;
    do {
      sort = Math.ceil(Math.random()*60);
      sort = (sort ==0 )? 1: sort;
    } while (numSort.includes(sort));

    numSort.push(sort);
  }
}
```
### Lendo os números digitados
Ler as entradas dos números digitados pelo usuário.
```
function addList(num, pos) {
  if (num.length == 2 ) {


  if(numEsc.includes(num)){
    alert("Número escolhido anteriormente! Digite outro número.");
  }else if (parseInt(num) > 60) {
    alert("O número digitado não pode ser maior que 60.");
  }
  else {
    numEsc[pos-1]=num;
  }
  }

}
```
## Como rodar o código
> Simplesmente baixe o código e abra o arquivo **_index.html_** no seu navegador.
``
## Exemplo de tabela
|Exemplo     | Valor do exemplo | quantidade  |
| ---------- |------------------|----------   |
| Exemplo 1  |  R$ 10           |      5      |
| Exemplo 2  |  R$ 8            |      4      |
| Exemplo 3  |  R$ 7            |      25     |
| Exemplo 4  |  R$ 7            |      27     |

##Imagens da tela

Tela 1: Tela de abertura
![](/imagens/tela1.png)

Tela 2: 6 números digitados e 1 acerto
![](/imagens/tela2.png)

###Referências
* HTML: [Wikipedia](https://pt.wikipedia.org/wiki/HTML)
* CSS: [wikipedia](https://pt.wikipedia.org/wiki/Cascading_Style_Sheets)
* JavaScript: [wikipedia](https://pt.wikipedia.org/wiki/JavaScript)
