let total = 200 
let opcion = document.getElementById("categoria")
let cantidad = document.getElementById("cantidad")

let buscarTotal = document.getElementById("botonTotal");
buscarTotal.addEventListener("click", calcularPrecio);

let mostrarTotal = document.getElementById("totalPagar");

function calcularPrecio (precio){
    if (opcion.value === "Estudiante" && cantidad.value >0){
        precio = cantidad.value*total*0.2
        mostrarTotal.innerHTML = "Total a pagar: $" + precio; 
    } else if (opcion.value === "Trainee" && cantidad.value > 0) {
      precio = cantidad.value * total * 0.5;
      mostrarTotal.innerHTML = "Total a pagar: $" + precio;
    } else if (opcion.value === "Junior" && cantidad.value > 0) {
      precio = cantidad.value * total * 0.85;
      mostrarTotal.innerHTML = "Total a pagar: $" + precio;
    } else if (cantidad.value>0) {
      precio = cantidad.value * total;
      mostrarTotal.innerHTML = "Total a pagar: $" + precio;
    } else {
        alert("Por favor ingrese una cantidad de entradas mayor a 0")
    }

}

let borrarTotal = document.getElementById("botonReset");
borrarTotal.addEventListener(
  "click",
  () => (mostrarTotal.innerHTML = "Total a pagar: $")
);