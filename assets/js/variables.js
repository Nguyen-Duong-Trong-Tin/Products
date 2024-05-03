import { drawProducts } from "./drawProducts.js";

// Param
export const param = {
  search: "",
  sort: {
    keySort: "",
    orderSort: ""
  },
  paginate: {
    page: 1,
    limit: 8
  },
  category: ""
};
// End Param

// Search
export const textSearch = document.querySelector(".products .text-search");
export const buttonSearch = document.querySelector(".products .button-search");

export const search = () => {
  param.search = textSearch.value.trim();
  drawProducts();
}
// End Search

// Sort
export const sortSelect = document.querySelector(".products .sort");
// End Sort

// Pagination
export const buttonPrev = document.querySelector(".products .button-prev");
export const buttonNext = document.querySelector(".products .button-next");
export const page = document.querySelector(".products .page");

export const paginate = () => {
  page.innerHTML = param.paginate.page;
  drawProducts();
}
// End Pagination