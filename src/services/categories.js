import { categoriaActiva } from "../../main.js";
import { handleStorageProducts } from "../persistance/localStorage.js";
import { handlerRenderList } from "../view/store.js";

const handlerFilterProducts = (category) => {
  const products = handleStorageProducts();

  switch (category) {
    case categoriaActiva:
      handlerRenderList(products);
      break;
    case "todo":
      handlerRenderList(products);
      break;
    case "hamburguesas":
    case "papas":
    case "gaseosas":
      const result = products.filter((elm) => elm.categoria === category);
        handlerRenderList(result);
        break
     case "mayorPrecio":
        const mayorPrecio = products.sort((a, b) => b.precio - a.precio)
        handlerRenderList(mayorPrecio)
        break;
     case "menorPrecio":
        const menorPrecio = products.sort((a, b) => a.precio - b.precio);
        handlerRenderList(menorPrecio);
        break;
    default:
      break;
  }
};

export const renderCategories = () => {
  const classLi = "liActive";
  const ulList = document.querySelector(".list__filter");

  ulList.innerHTML = `
      <li class="list__item" id="todo">
      Todos los productos
      </li>
      <li class="list__item" id="hamburguesas">
      Hamburguesas
      </li>
      <li class="list__item" id="papas">
      Papas
      </li>
      <li class="list__item" id="gaseosas">
      Gaseosas
      </li>
      <li class="list__item" id="menorPrecio">
      Menor precio
      </li>
      <li class="list__item" id="mayorPrecio">
      Mayor precio
      </li>
   `;

  const liElement = ulList.querySelectorAll("li");

  liElement.forEach((item, i, items) => {
    item.addEventListener("click", () => {
      handlerFilterProducts(item.id);
      items.forEach((el) => {
        if (el.classList.contains(classLi)) el.classList.remove(classLi);
        else if (el === item) el.classList.add(classLi);
      });
    });
  });
};
