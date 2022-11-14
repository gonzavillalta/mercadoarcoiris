// let nombreUsuario = prompt("Ingrese su nombre").toLowerCase();
// let apellidoUsuario = prompt("ingrese su apellido").toLowerCase();

// // Se solicita al usuario ingresar su nombre y apellido

// if (nombreUsuario == "" && apellidoUsuario == "") {
//   alert("No ingresaste el nombre y apellido de usuario");
// } else {
//   alert("Hola! " + nombreUsuario + " " + apellidoUsuario);
// }

// // Se solicita al usuario ingresar su clave

// let claveUsuario = prompt("Ingrese su clave");

// while (claveUsuario != 1234) {
//   claveUsuario = prompt("clave incorrecta. vuelva a intentarlo");

//   if (claveUsuario == 1234) {
//     alert("Bienvenid@! " + nombreUsuario + " " + apellidoUsuario);
//   }
// }

let precio = prompt("Ingrese el precio");
while (precio != parseFloat(precio)) {
  alert("precio incorrecto. vuelva a intentarlo");
  precio = prompt("Ingrese nuevo precio");
}

let cantidad = prompt("Ingrese la cantidad");
while (cantidad != parseInt(cantidad)) {
  alert("cantidad incorrecta. vuelva a intentarlo");
  cantidad = prompt("Ingrese nueva cantidad");
}

function calcularPrecioFinal(precio, cantidad) {
  const iva = 21;
  let descuento = "";
  let precioFinal = 0;

  if (cantidad >= 2 && cantidad <= 3) {
    descuento = "10";
  } else if (cantidad > 4 && cantidad <= 6) {
    descuento = "15";
  } else if (cantidad > 6) {
    descuento = "20";
  } else {
    descuento = "0";
  }

  let precioCantidad = precio * cantidad;
  console.log(precioCantidad);

  let precioDescuento = (precioCantidad * descuento) / 100;
  console.log(precioDescuento);

  let precioIva = ((precioCantidad - precioDescuento) * iva) / 100;
  console.log(precioIva);

  precioFinal = precioCantidad - precioDescuento + precioIva;
  console.log(precioFinal);

  return precioFinal;
}

alert("El valor del producto es " + calcularPrecioFinal(precio, cantidad));

// Constructor Productos Corporativos
class Corporativo {
  constructor(categoria, id, nombre, precio, cantidad, descripcion) {
    this.categoria = categoria;
    this.id = id.toUpperCase();
    this.nombre = nombre;
    this.precio = parseInt(precio);
    this.cantidad = cantidad;
    this.descripcion = descripcion;
  }
}

const corporativo1 = new Corporativo(
  "tech",
  "TE-01",
  "cargador carro",
  1000,
  "a completar"
);
const corporativo2 = new Corporativo(
  "tech",
  "TE-02",
  "pila recargable",
  1200,
  "a completar"
);
const corporativo3 = new Corporativo(
  "tech",
  "TE-03",
  "soporte pump",
  500,
  "a completar"
);
const corporativo4 = new Corporativo(
  "tech",
  "TE-04",
  "cargador inalambrico",
  1500,
  "a completar"
);

// Array Lista Productos Corporativos
const listaCorporativo = [
  corporativo1,
  corporativo2,
  corporativo3,
  corporativo4,
];

for (const corporativo of listaCorporativo) {
  console.log(corporativo.categoria);
  console.log(corporativo.id);
  console.log(corporativo.nombre);
  console.log(corporativo.precio);
}

// Constructor Productos Sostenibles
class Sostenible {
  constructor(categoria, id, nombre, precio, cantidad, descripcion) {
    this.categoria = categoria;
    this.id = id.toUpperCase();
    this.nombre = nombre;
    this.precio = parseInt(precio);
    this.cantidad = cantidad;
    this.descripcion = descripcion;
  }
}

const sostenible1 = new Sostenible(
  "escritura",
  "ECO-01",
  "recilapiz",
  400,
  "a completarz"
);
const sostenible2 = new Sostenible(
  "escritura",
  "ECO-02",
  "recilapiz germinable",
  700,
  "a completar"
);
const sostenible3 = new Sostenible(
  "eco friendly",
  "ECO-03",
  "lunch set",
  700,
  "a completar"
);
const sostenible4 = new Sostenible(
  "eco friendly",
  "ECO-04",
  "pitillo",
  700,
  "a completar"
);

// Array Lista Productos Sostenibles
const listaSostenible = [sostenible1, sostenible2, sostenible3, sostenible4];

for (const sostenible of listaSostenible) {
  console.log(sostenible.categoria);
  console.log(sostenible.id);
  console.log(sostenible.nombre);
  console.log(sostenible.precio);
}


// Constructor productos de Regalos
class Regalos {
  constructor(categoria, id, nombre, precio, cantidad, descripcion) {
    this.categoria = categoria;
    this.id = id.toUpperCase();
    this.nombre = nombre;
    this.precio = parseInt(precio);
    this.cantidad = cantidad;
    this.descripcion = descripcion;
  }
}

const regalos1 = new Regalos(
  "llaveros",
  "LL-01",
  "destapador",
  300,
  "a completar"
);
const regalos2 = new Regalos(
  "llaveros",
  "LL-02",
  "linterna puck",
  800,
  "a completar"
);
const regalos3 = new Regalos(
  "termos",
  "TO-01",
  "metalico urban travel",
  1200,
  "a completar"
);
const regalos4 = new Regalos(
  "termos",
  "TO-03",
  "metalico hans neon",
  1000,
  "a completar"
);

// Array lista de Regalos
const listaRegalos = [regalos1, regalos2, regalos3, regalos4];

for (const regalos of listaRegalos) {
  console.log(regalos.categoria);
  console.log(regalos.id);
  console.log(regalos.nombre);
  console.log(regalos.precio);
}

// array de todas las categorias existentes
const todasCategorias = listaCorporativo.concat(listaSostenible, listaRegalos);
console.log(todasCategorias);

// buscador por palabras
const metodoFilter = todasCategorias.filter((todasCategorias) =>
  todasCategorias.nombre.includes("")
);
console.log(metodoFilter);

// ordena lista de regalos por precio
listaRegalos.sort((a, b) => a.precio - b.precio);
console.log(listaRegalos);


// inclusion en HTML de las Cards
const carContainer = document.querySelector("#cardContainer")

listaRegalos.forEach((Regalos) => {
  const newCard = document.createElement("div");
  newCard.className = "card";
  newCard.innerHTML = `
  <h3 class="cardTitle"> ${Regalos.nombre}</h3>
  <p class="id"> ${Regalos.id} </p>
  <span class="precio"> ${Regalos.precio} </span>
  <button class="buttonCTA"> Agregar al carrito </button>  
  `
  carContainer.append(newCard)
});
