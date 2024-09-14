import { setProductoActivo } from "../../main.js";
import { handleStorageProducts } from "../persistance/localStorage.js";
import { openModal } from "./modal.js";

const renderProductGroup = (products, title) => {
  if (products.length > 0) {
    const productsHTML = products.map((product, index) => {
      return `
         <div class="store__item" id="product-${product.categoria}-${index}">
            <div>
               <img class="store__img" src="${product.imagen}" />
               <div>
                  <h2>${product.nombre}</h2>
               </div>
               <div class="store__info">
                  <p><b>Precio: $ ${product.precio}</b></p>
                  <p><b>Categoria: ${product.categoria.toUpperCase()}</b></p>
               </div>
            </div>
          </div>
      `;
    });
    return `
         <section class="store__section">
            <div class="store__title_princ">
               <h3 class="store__title">${title}</h3>
            </div>
            <div class="store__container">
               ${productsHTML.join()}
            </div>
         </section>
      `;
  } else {
    return "";
  }
};

const addEvents = (productsIn) => {
  productsIn.forEach((elm, i) => {
    const productContainer = document.getElementById(
      `product-${elm.categoria}-${i}`
    );
    productContainer.addEventListener("click", () => {
      setProductoActivo(elm);
      openModal();
    });
  });
};

export const handlerRenderList = (products) => {
  const appContainer = document.querySelector(".store");

  const hamburguesa = products.filter((elm) => elm.categoria === "hamburguesas");
  const papa = products.filter((elm) => elm.categoria === "papas");
  const gaseosa = products.filter((elm) => elm.categoria === "gaseosas");

  appContainer.innerHTML = `
      ${renderProductGroup(hamburguesa, "Hamburguesas")}
      ${renderProductGroup(papa, "Papas")}
      ${renderProductGroup(gaseosa, "Gaseosas")}
   `;

  addEvents(hamburguesa);
  addEvents(papa);
  addEvents(gaseosa);
};

export const handlerGetProducts = () => {
  const products = handleStorageProducts();
  handlerRenderList(products);
};
