// Cambios generales
/**
 * Se quita el uso de var
 * Se renombran funciones para mayor claridad.
 * Se renombran funciones, para ser consistente con la nomenclatura en inglés del resto del código.
 * */

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

/**
 * Se cambia a querySelector para seleccionar el contenedor de productos (#lista-de-productos), 
 * por ser más específico y adecuado que getElementsByName
 */

const productsList = document.querySelector("#lista-de-productos");

/** 
* Se incorpora la función readInput para capturar el valor de entrada, homogenizar la entrada(en minúsculas),
* simplificando la lectura y mejorando la reutilización del código.
*/
function readInput() {
  const userInput = document.querySelector('input');
  return userInput.value.toLowerCase();
}

// Se elimino el código repetido y se mantiene en la función displayProducts

/**
 * Se reemplaza blucle while por un innerhtml para limpiar el contenedor de productos
 * antes de renderizar los nuevos elementos filtrados.
 */

function displayProducts(filterArray) {
  productsList.innerHTML = '';

  filterArray.forEach(product => {
    const productContainer = document.createElement("div");
    productContainer.classList.add("producto")

    const productName = document.createElement("p");
    productName.textContent= product.nombre;
    productContainer.appendChild(productName);

    const productImage = document.createElement("img");
    productImage.setAttribute('src', product.img);
    productImage.setAttribute('alt', product.nombre);
    productContainer.appendChild(productImage);

    productsList.appendChild(productContainer);
  });
}

const filtered = (products, text) => {
  return products.filter(product => product.tipo.includes(text) || product.color.includes(text));
}  

const filterButton = document.querySelector("button");
/**
 * Se usa addEventListener('click', ...) en lugar de onlick, para agregar el evento de clic al botón.
 * Al ser más versátil y permitir agregar múltiples listeners al mismo evento si es necesario. 
 */
filterButton.addEventListener('click', ()=> {
  const productosFiltrados = filtered(productos, readInput());
  displayProducts(productosFiltrados);
  document.querySelector('input').value = '';
})