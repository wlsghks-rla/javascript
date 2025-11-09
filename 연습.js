const categories = [];
for (let product of products) {
  if (categories.indexOf(product.category) == -1) {
    categories.push(product.category);
  }
}

const categorySelect = document.querySelector("select.categories");
for (let category of categories) {
  const option = document.createElement("option");
  option.value = category;
  option.textContent = category;
  categorySelect.appendChild(option);
}

categorySelect.addEventListener("change", e => {
  const category = e.target.value;
  const filterProduct = [];
  for (let product of products) {
    if (product.category == category || category == "All") {
      filterProduct.push(product);
    }
  }
  page = 1;
  showProductList(filterProduct);
  console.log(e.target.value);
});

document.querySelector("div.pagination").addEventListener("click", e => {
  let pagingProducts = [];
  if (e.target.nodeName == "A") {
    page = e.target.dataset.page;
  }
});

let target = document.querySelector("#list");
function showProductList(productAry = []) {
  target.innerHTML = "";
  const fields = ["productCode", "productName", "purchasePrice", "category"];
  for (let product of productAry) {
    let tr = document.createElement("tr");
    for (let field of fields) {
      let td = document.createElement("td");
      td.innerText = product[field];
      tr.appendChild(td);
    }
    target.appendChild(tr);
  }
}

let pagination = document.querySelector("div.pagination");
