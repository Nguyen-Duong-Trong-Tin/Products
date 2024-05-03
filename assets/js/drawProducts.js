import { PATH_PRODUCTS } from "./constant.js"
import { fetchApi } from "./helper/fetchApi.js"
import { param } from "./variables.js";

export const drawProducts = () => {
  fetchApi(`${PATH_PRODUCTS}?q=${param.search}&_sort=${param.sort.keySort}&_order=${param.sort.orderSort}&_page=${param.paginate.page}&_limit=${param.paginate.limit}${param.category !== "" ? `&category=${param.category}` : ``}`)
    .then(data => {
      let htmls = data.map(item => `
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
          <div class="item">
            <img class="img" src="${item.thumbnail}" alt="${item.title}">
            <div class="percent">${item.discountPercentage}%</div>
            <div class="inner-content">
              <h4 class="title">${item.title}</h4>
              <div class="price-stock">
                <p class="price">${item.price}$</p>
                <p class="stock">Stock: ${item.stock} sp</p>
              </div>
            </div>
          </div>
        </div>
      `).join("");
      document.querySelector(".products .row").innerHTML = htmls;
    })
}