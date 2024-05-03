import { drawProducts } from "./drawProducts.js";
import { buttonNext, buttonPrev, buttonSearch, paginate, param, search, sortSelect, textSearch } from "./variables.js";

// Draw Products
drawProducts();
// End Draw Products

// Search
/*
  Click the button
*/
buttonSearch.addEventListener("click", () => {
  search();
});

/*
  Enter the input
*/
textSearch.addEventListener("keydown", (e) => {
  if (e.key === 'Enter') {
    search();
  }
});

/*
  Keydown
*/
textSearch.addEventListener("keydown", () => {
  search();
});
// End Search

// Sort
sortSelect.addEventListener("change", () => {
  if (sortSelect.value == "price low to high") {
    param.sort.keySort = "price";
    param.sort.orderSort = "";
  }
  else if (sortSelect.value == "price high to low") {
    param.sort.keySort = "price";
    param.sort.orderSort = "desc";
  }
  else if (sortSelect.value == "percent descending") {
    param.sort.keySort = "discountPercentage";
    param.sort.orderSort = "desc";
  }
  else {
    param.sort.keySort = "";
    param.sort.orderSort = "";
  }
  drawProducts();
})
// End Sort

// Paginate
buttonPrev.addEventListener("click", () => {
  if (param.paginate.page > 1) {
    --param.paginate.page;
    paginate();
  }
});

buttonNext.addEventListener("click", () => {
  if (param.paginate.page < 4) {
    ++param.paginate.page;
    paginate();
  }
})
// End Paginate