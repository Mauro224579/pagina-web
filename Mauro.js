function fecha() {

const fechaInput = document.getElementById("fecha").value;
const fecha = new Date(fechaInput);
const hoy = new Date();
let edad = hoy.getFullYear() - fecha.getFullYear();
const mes = hoy.getMonth() - fecha.getMonth();

if (mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())) {
edad--;
}
if (edad >= 18) {
alert("Eres mayor de edad.");
} else {
alert("Eres menor de edad.");
}
}
function cumple1() {

var fechaActual = new Date();
fechaActual.setUTCHours(0, 0, 0, 0);

var fechaCumple= new Date(document.getElementById("fechaCumpleaños").value);

fechaCumple.setFullYear(fechaActual.getFullYear());


if (fechaCumple > fechaActual) {

var diferencia = fechaCumple.getTime() - fechaActual.getTime();


var dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));

document.getElementById("resultado").textContent = "Faltan " + dias + " días para tu próximo cumpleaños.";
} else {
fechaCumple.setFullYear(fechaActual.getFullYear() + 1);

var diferencia = fechaCumple.getTime() - fechaActual.getTime();
var dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));

document.getElementById("resultado").textContent = "Faltan " + dias + " días para tu próximo cumpleaños.";
}
}