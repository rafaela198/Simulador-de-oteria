var numSort = [];
var numEsc = [];

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

function verificar(){
  sortear();
  let cont=0;
  if (numEsc.length!=6) {
    alert("A quantidade de números digitados é menor que 6./n Digite seis números de 0 á 60 com dois dígitos ");
  }else {
    for (var i = 0; i < 6; i++) {
      if (numSort.includes(parseInt(numEsc[i]))) {
        cont++;
      }
    }
    printNumSort();
    document.getElementById('total').innerHTML ="O total de acertos foi " + cont +".";
  }

}
function printNumSort() {
  document.getElementById('numSort').innerHTML ="";
for (var i = 0; i < numSort.length; i++) {
  let li = document.createElement("li");
  li.append(numSort[i]);
  li.classList.add("result");
  document.getElementById('numSort').append(li);
}
}
