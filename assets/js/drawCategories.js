import { PATH_CATEGORIES } from "./constant.js";
import { drawProducts } from "./drawProducts.js";
import { fetchApi } from "./helper/fetchApi.js";
import { param } from "./variables.js";

export const drawCategories = () => {
  fetchApi(PATH_CATEGORIES)
    .then(data => {
      let htmls = data.map(item => `
      <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
        <div class="item">${item}</div>
      </div>
      `).join("");

      document.querySelector(".categories .row").innerHTML = htmls;

      const categories = document.querySelectorAll(".categories .item");
      categories.forEach(item => {
        item.addEventListener("click", () => {
          param.category = item.innerHTML !== "all" ? item.innerHTML : "";
          drawProducts();
        })
      }) 
    })
}