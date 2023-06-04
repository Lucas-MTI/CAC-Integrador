const selector = document.querySelector(".cantidad__input");
const resumenBtn = document.querySelector(".button_resumen");
const cajaPrecio = document.querySelector(".parrafo-total");
const precioInicial = 200;
let precioFinal;
let seleccion;


const establecerPrecioFinal = () => {
    seleccion = selector.value
    
    if (seleccion == "trainee") {
        precioFinal = precioInicial - (precioInicial * 0.80)
    } else if (seleccion == "estudiante") {
        precioFinal = precioInicial - (precioInicial * 0.50)
    } else if (seleccion == "junior") {
        precioFinal = precioInicial - (precioInicial * 0.15)
    }
}

selector.addEventListener("change", establecerPrecioFinal)

resumenBtn.addEventListener("click", (e) => {
    e.preventDefault();
    cajaPrecio.textContent = "Total a pagar: $" + precioFinal;
    console.log(e);
})


