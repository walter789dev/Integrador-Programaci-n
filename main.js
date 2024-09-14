import { renderCategories } from "./src/services/categories.js";
import { formInput } from "./src/services/product.js";
import { handlerSearchProductId } from "./src/services/searchBar.js";
import { closeModal, openModal } from "./src/view/modal.js";
import { handlerGetProducts } from "./src/view/store.js";

// ==== Application ===
export let categoriaActiva = null;
export let productoActivo = null;

export const setCategoriaActiva = (categoriaIn) => {
  categoriaActiva = categoriaIn;
};

export const setProductoActivo = (productoIn) => {
  productoActivo = productoIn;
};

handlerGetProducts();
renderCategories();

// ==== PopUp ===
const popUp = document.querySelector(".header__btn");
popUp.addEventListener("click", () => openModal());

const close = document.getElementById("cancel");
close.addEventListener("click", () => closeModal());

formInput()
// === ButtonSearch ===
const buttonSearch = document.querySelector(".header__searchBtn");
buttonSearch.addEventListener("click", () => {
   handlerSearchProductId()
})
