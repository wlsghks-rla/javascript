//
// <option value="전자기기">전자기기</option>
const categories = [];

// 중복없이 추가.
for (let product of products) {
  if (categories.indexOf(product.category) == -1) {
    categories.push(product.category);
  }
}
// select 태그로 하위요소 추가하기.
const categorySelect = document.querySelector("select.categories");
for (let category of categories) {
  const option = document.createElement("option"); // option 생성.
  option.value = category; // value 속성.
  option.textContent = category; // innerText 값 추가.
  categorySelect.appendChild(option); // 자식요소로 추가.
}

// 이벤트 등록.
categorySelect.addEventListener("change", (e) => {
  // console.log(e.target.value);
  const category = e.target.value;
  const filterProduct = [];
  for (let product of products) {
    // 카테고리가 동일한 상품이거나 전체(All) 선택일 경우
    if (product.category == category || category == "All") {
      filterProduct.push(product);
    }
  }
  // console.log(filterProduct);
  showProductList(filterProduct);
});

// 페이지 이벤트.
let page = 1;
document
  .querySelector("div.pagination") //
  .addEventListener("click", (e) => {
    let pagingProducts = [];
    // console.log(e.target);
    if (e.target.nodeName == "A") {
      // console.dir(e.target); // 번호 사이 눌러도 콘솔 출력됨.
      page = e.target.innerText;
      if (Number(page) * 3 == NaN) {
        return;
      }
      let start = 0,
        end = 0;
      start = (page - 1) * 5;
      end = page * 5;
      for (let i = start; i < end; i++) {
        // console.log(products[i]);
        pagingProducts.push(products[i]);
      }
      showProductList(pagingProducts); // 5개씩 출력
    } // end of if
  });

// 상품목록을 화면에 출력.
let target = document.querySelector("#list"); // tbody.
function showProductList(productAry = []) {
  target.innerHTML = "";
  // tr > td * 4 생성. => tbody에 appenChild
  const fields = ["productCode", "productName", "purchasePrice", "category"];
  let totalProduct = productAry;
  for (let product of totalProduct) {
    // 상품의 갯수만큼 반복
    let tr = document.createElement("tr");
    // 항목만큼 반복
    for (let field of fields) {
      let td = document.createElement("td");
      td.innerText = product[field]; // product['productCode ~ category']
      tr.appendChild(td); // tr 부모 - td 자식
    }
    target.appendChild(tr); // 최종목적지 tbody.
  }
}
showProductList();

// 페이징목록 생성함수.
let pagination = document.querySelector("div.pagination");
function showPagingList(totalCount = 50) {
  // 매개변수의 초기값 : 50으로 설정.
  pagination.innerHTML = "";
  // page = 5;
  let startPage = 0,
    endPage = 0;

  let prev = false,
    next = false;
  //시작, 마지막페이지
  endPage = Math.ceil(page / 10) * 10; // 현재 1페이지(위에 선언돼 있음.)라는 가정. 10 page
  startPage = endPage - 9;
  let realEnd = Math.ceil(totalCount / 5);
  if (endPage > realEnd) {
    endPage = realEnd; // 실제마지막 페이지 계산.
  }
  // 이전, 이후 페이지.
  if (startPage != 1) {
    prev = true;
  }
  if (endPage < realEnd) {
    next = true;
  }
  // <a href="#">1</a>
  // 이전페이지
  let tag = document.createElement("a");
  tag.innerHTML = "&laquo";
  tag.href = "#";
  tag.className = "disabled"; // 비활성화
  pagination.appendChild(tag);
  if (prev) {
    tag.className = ""; //활성화
  }
  // 페이징 목록.
  for (let p = startPage; p <= endPage; p++) {
    let tag = document.createElement("a");
    tag.innerText = p;
    tag.href = "#";
    if (p == page) {
      tag.className = "active";
    }
    pagination.appendChild(tag);

    tag = document.createElement("a");
    tag.innerHTML = "&raquo";
    tag.href = "#";
    pagination.appendChild(tag);
    tag.className = "disabled";
    if (next) {
      tag.className = "";
    }
  }
}
showPagingList(18); // 건수가 18건으로
