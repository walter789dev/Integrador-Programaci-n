import Swal from "sweetalert2";
import { productoActivo} from "../../main.js";
import { handleStorageProducts, setProductStorage } from "../persistance/localStorage.js";
import { closeModal } from "../view/modal.js";
import { handlerGetProducts, handlerRenderList } from "../view/store.js";



export const formInput = () => {
   const acceptButton = document.getElementById("accept");
   acceptButton.addEventListener("click", () => {

     const nombre = document.getElementById("nombre").value,
       imagen = document.getElementById("imagen").value,
       precio = document.getElementById("precio").value,
       categoria = document.getElementById("categoria").value;

     let object = null;

     if (productoActivo) {
       object = {
         ...productoActivo,
         nombre,
         precio,
         categoria,
         imagen,
       };
     } else {
       object = {
         id: new Date().toISOString(),
         nombre,
         precio,
         categoria,
         imagen,
       };
      }
      Swal.fire({
        title: "Correcto",
        text: "Producto Guardado Correctamente",
        icon: "success",
      });

     setProductStorage(object);
     handlerGetProducts();
     closeModal();
   });
}

export const handlerDeleteProduct = () => {
   Swal.fire({
     title: "¿Desea eliminar elementos?",
     text: "Si lo eliminas sera permanentemente",
     icon: "warning",
     showCancelButton: true,
     confirmButtonColor: "#3085d6",
     cancelButtonColor: "#d33",
     confirmButtonText: "Si, eliminar",
   }).then((result) => {
     if (result.isConfirmed) {
       const products = handleStorageProducts();
       const result = products.filter((elm) => elm.id !== productoActivo.id);
       localStorage.setItem("productos", JSON.stringify(result));
       const otherProducts = handleStorageProducts();
        handlerRenderList(otherProducts);
        closeModal()
     } else {
        closeModal()
     }
   });
}