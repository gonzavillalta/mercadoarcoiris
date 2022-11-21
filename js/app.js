
// function calcularPrecioFinal(precio, cantidad) {
//   const iva = 21;
//   let descuento = "";
//   let precioFinal = 0;

//   if (cantidad >= 2 && cantidad <= 3) {
//     descuento = "10";
//   } else if (cantidad > 4 && cantidad <= 6) {
//     descuento = "15";
//   } else if (cantidad > 6) {
//     descuento = "20";
//   } else {
//     descuento = "0";
//   }

//   let precioCantidad = precio * cantidad;
//   console.log(precioCantidad);

//   let precioDescuento = (precioCantidad * descuento) / 100;
//   console.log(precioDescuento);

//   let precioIva = ((precioCantidad - precioDescuento) * iva) / 100;
//   console.log(precioIva);

//   precioFinal = precioCantidad - precioDescuento + precioIva;
//   console.log(precioFinal);

//   return precioFinal;
// }

// alert("El valor del producto es " + calcularPrecioFinal(precio, cantidad));

// for (const corporativo of listaCorporativo) {
//   console.log(corporativo.categoria);
//   console.log(corporativo.id);
//   console.log(corporativo.nombre);
//   console.log(corporativo.precio);
// }

// for (const sostenible of listaSostenible) {
//   console.log(sostenible.categoria);
//   console.log(sostenible.id);
//   console.log(sostenible.nombre);
//   console.log(sostenible.precio);
// }

// for (const regalos of listaRegalos) {
//   console.log(regalos.categoria);
//   console.log(regalos.id);
//   console.log(regalos.nombre);
//   console.log(regalos.precio);
// }

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


// // inclusion en HTML de las Cards
const productContainer = document.querySelector("#productContainer")

listaRegalos.forEach((Regalos) => {
  const nuevaCard = document.createElement("div");
  nuevaCard.className = "card"
  nuevaCard.innerHTML = `
  <h5 class="cardTitle">${Regalos.nombre}</h5>
  <p class="id"> ${Regalos.id} </p>
  <span class="precio"> ${Regalos.precio} </span>
  <button class="buybutton"> Agregar al carrito </button>  
  `
  productContainer.append(nuevaCard)
});

listaSostenible.forEach((Sostenible) => {
  const nuevaCard = document.createElement("div");
  nuevaCard.className = "card"
  nuevaCard.innerHTML = `
  <h5 class="cardTitle">${Sostenible.nombre}</h5>
  <p class="id"> ${Sostenible.id} </p>
  <span class="precio"> ${Sostenible.precio} </span>
  <button class="buybutton"> Agregar al carrito </button>  
  `
  productContainer.append(nuevaCard)
});

listaCorporativo.forEach((Corporativo) => {
  const nuevaCard = document.createElement("div");
  nuevaCard.className = "card"
  nuevaCard.innerHTML = `
  <h5 class="cardTitle">${Corporativo.nombre}</h5>
  <p class="id"> ${Corporativo.id} </p>
  <span class="precio"> ${Corporativo.precio} </span>
  <button class="buybutton"> Agregar al carrito </button>  
  `
  productContainer.append(nuevaCard)
});