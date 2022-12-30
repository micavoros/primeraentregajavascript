
//calcular el precio total de los productos
function sumar (producto1, producto2) {
    return producto1 + producto2
}
let primerProducto = Number(prompt("Ingresa el primer precio a sumar"))
let segundoProducto = Number(prompt("Ingresa el segundo precio a sumar"))
let precioFinal = sumar(primerProducto, segundoProducto)
alert(precioFinal)
console.log ("El valor a pagar es " + precioFinal)

//calcular precio de productos con envio
//compras mayores a 15000 tienen envio gratis, sino el envio tiene un costo de 500
// precioConEnvio = precioFinal + precioEnvio;
let precioConEnvio = Number(prompt ("Precio total de los productos"))
if (precioFinal >= 15000) {
    precioConEnvio = precioFinal + 0 
    alert ("El envio de los productos es gratis")
}else {
    precioConEnvio = precioFinal + 500
    alert ("El envio de los productos tiene un costo de 500 pesos")
}

//calcular intentos para aplicar el codigo de descuento
const codigoDesc1 = "BALTER31"

let intentos = 3
while (intentos > 0){
    let codigo1 = prompt("Si tiene codigo de descuento escribalo");
    if (codigo1 == codigoDesc1) {
        alert ("Se ha aplicado el codigo de descuento correctamente")
        break;
    }
    intentos --;
    alert ("Codigo no valido. Te quedan "+ intentos + "intentos");
}
if (intentos <= 0){
    alert ("Codigo bloqueado. No podras ingresar mas codigos de descuentos");

}

//calcular precio de productos con cupon de descuento de 600 pesos
const BALTER31 = 600;
function restar (precioConEnvio, codigoDesc1) {
    return precioConEnvio - codigoDesc1
}
let precioConCodigo = restar (productoConEnvio, BALTER31)
alert (ultimoPrecio)
console.log ("El monto a abonar es "+ ultimoPrecio)










