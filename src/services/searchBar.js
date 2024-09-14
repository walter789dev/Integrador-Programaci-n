import { handleStorageProducts } from "../persistance/localStorage";
import { handlerRenderList } from "../view/store";

export const handlerSearchProductId = () => {
   const inputHeader = document.querySelector(".header__searchInput");
   const products = handleStorageProducts()
   const results = products.filter(elm => elm.nombre.toLowerCase().includes(inputHeader.value.toLowerCase()))
   handlerRenderList(results)
}