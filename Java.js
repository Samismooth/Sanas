
let nombreServicio
let fechaDeTurno
let precioTotal = 0

let servicioA = "desgarro"
let precioA = 3000
let secionesA = 7

let servicioB = "extraccion de miembro"
let precioB = 5000
let secionesB = 3

let servicioC = "RPG"
let precioC = 7000
let secionesC = 10

let servicioConOrden = prompt ("¿Tiene una orden? ingrese SI para continuar")

if(servicioConOrden == "Si"){

let compra = prompt ("Ingrese que servicio necesita: \n1-Desgarro\n2-extraccion de miembro \n3-RPG\n4-Salir")

if (compra == 1){
    let cantidadA = prompt ("Cantidad de seciones para " + servicioA)
    if(cantidadA <= secionesA){
        precioTotal = cantidadA * precioA
        alert ("El precio total es: $" + precioTotal)
    }
    else
    alert("no es posible realizar esa cantidad de sesiones")
}

if (compra == 2){
    let cantidadB = prompt ("Cantidad de seciones para " + servicioB)
    if(cantidadB <= secionesB){
        precioTotal = cantidadB * precioB
        alert ("El precio total es: $" + precioTotal)
    }
    else
    alert("no es posible realizar esa cantidad de sesiones")
}

if (compra == 3){
    let cantidadC = prompt ("Cantidad de seciones para " + servicioC)
    if(cantidadC <= secionesC){
        precioTotal = cantidadC * precioC
        alert ("El precio total es: $" + precioTotal)
    }
    else
    alert("no es posible realizar esa cantidad de sesiones")
}

alert ("Su total es: $" + precioTotal)



}

else{
    alert ("¡gracias por su visita!")
}

function Datos (nombre, edad, domicilio){
    nombre = nombre;
    edad = edad;
    domicilio = domicilio;
}


Datos.nombre = prompt("Ingrese su nombre:")

Datos.edad = prompt("Ingrese su edad:")

Datos.domicilio = prompt("Ingrese su domicilio:")


alert ("Nombre: " + Datos.nombre + "\nEdad: " + Datos.edad + "\nDomicilio: " + Datos.domicilio)

let nombres = prompt ("ingrese como quiere ser llamad@")

   let nombreA = document.getElementsById ("nombreA")
   let card = document.createElement("div")
   card.className = "card"
   card.innerHTML ="<h2> Ruptura </h2> <p> Precio: $7000 </p>"
   
   nombreA.append(card)

   let precios = [3500, 4000, 5600]

   for (let i = 0; i < precios.length ; i++){
    console.log(precios [i])
   }

  
   for (const prod of servicios){
    let card = document.createElement("div")
    
    card.className = "card"

    card.innerHTML = '<h2> Rehab </h2>'
}

let catalogo = document.getElementsById ("catalogo")

nombre.innerText = "Bienveid@ " + nombre 

