
//Referente ao exercicio da ementa

function obterEmenta() {
    var divGRID = document.querySelectorAll(".tab-grid-info"); // Selecionando as grids
    var ementas = []; // Array para guardardar as ementas e usamos para puxar
  
    for (let i = 0; i < divGRID.length; i++) {
      var pEMENTA = divGRID[i].querySelectorAll("p");
      ementas.push((pEMENTA[1].innerHTML).trim()); // Especificando a ementa [1], pois a pEmenta 0 pegaria o "objetivo"
    }
  
    return ementas;
  }