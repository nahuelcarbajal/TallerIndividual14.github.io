var btnOpciones = document.getElementById("btnOpciones");
var opcionesDiv = document.getElementById("opcionesDiv");


btnOpciones.addEventListener("click", function() {
if (opcionesDiv.classList.contains("d-none")) {
    opcionesDiv.classList.remove("d-none");
} else {
    opcionesDiv.classList.add("d-none");
}
});