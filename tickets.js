let total = 200 
let opcion = document.getElementById("categoria")
let cantidad = document.getElementById("cantidad")

let buscarTotal = document.getElementById("botonTotal");
buscarTotal.addEventListener("click", calcularPrecio);

let mostrarTotal = document.getElementById("totalPagar");

function calcularPrecio (precio){
    if (opcion.value === "Estudiante"){
        precio = cantidad.value*total*0.2
        mostrarTotal.innerHTML = "Total a pagar: $" + precio; 
    } else if (opcion.value === "Trainee"){
        precio = cantidad.value * total * 0.5;
       mostrarTotal.innerHTML = "Total a pagar: $" + precio; 
    } else if (opcion.value === "Junior"){
        precio = cantidad.value * total * 0.85;
        mostrarTotal.innerHTML = "Total a pagar: $" + precio; 
    } else {
        precio = cantidad.value * total;
        mostrarTotal.innerHTML = "Total a pagar: $" + precio; 
    }

}

let borrarTotal = document.getElementById("botonReset");
borrarTotal.addEventListener(
  "click",
  () => (mostrarTotal.innerHTML = "Total a pagar: $")
);