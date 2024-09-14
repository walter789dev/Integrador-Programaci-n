import { productoActivo } from "../../main.js";
import { handlerDeleteProduct } from "../services/product.js";

const resetModal = () => {
  const nombre = document.getElementById("nombre"),
    imagen = document.getElementById("imagen"),
    precio = document.getElementById("precio"),
    categoria = document.getElementById("categoria");

  nombre.value = "";
  precio.value = 0;
  imagen.value = "";
  categoria.value = "Seleccione una categoria";
};

export const closeModal = () => {
  const modal = document.querySelector(".popUp");
  modal.style.display = "none";
  resetModal();
};

export const openModal = () => {
  const modal = document.querySelector(".popUp");
   modal.style.display = "flex";
   const buttton = document.getElementById("delete");

   
   if (productoActivo) {
      buttton.style.display = "block"
   } else {
      buttton.style.display = "none";
   }

  if (productoActivo) {
    const nombre = document.getElementById("nombre"),
      imagen = document.getElementById("imagen"),
      precio = document.getElementById("precio"),
      categoria = document.getElementById("categoria");

    nombre.value = productoActivo.nombre;
    precio.value = productoActivo.precio;
    imagen.value = productoActivo.imagen;
    categoria.value = productoActivo.categoria;
  }
};

const deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click", () => {
   handlerDeleteProduct()
   closeModal()
} );