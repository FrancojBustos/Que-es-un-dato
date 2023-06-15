let estrellas = document.getElementsByClassName("estrella");
console.log(estrellas);

var contador;
      function calificacion(item) {
        console.log(item);
        contador = item.id[0];
        let nombre = item.id.subtring(1);
        for (let i = 0; i < estrellas.length; i++) {
          if (i < contador) {
            estrellas[i + 1 + nombre].style = {"color": "orange"};
          } else {
            estrellas[i + 1 + nombre].style = {"color": "black"};
          }
        }
      }
      function mensaje() {
        alert("Muchas gracias por calificar el post " + contador);
      }