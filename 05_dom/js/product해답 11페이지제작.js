// productPage.js
// <option value="전자기기">전자기기</option>
// 카테고리에 전체 상품에서 가져옴. 단 중복은 제거. 1번
console.log(products);

const categories = [];
for (let product of products) {
  // 중복없이 추가.
  if (categories.indexOf(product.category) == -1) {
    categories.push(product.category);
  }
}
// select 태그에 하위요소로 추가하기.
const categorySelect = document.querySelector("select.categories");
for (let category of categories) {
  const option = document.createElement("option"); // option 생성.
  option.value = category; // value 속성.
  option.textContent = category; // innerText 값 추가.
  categorySelect.appendChild(option); // 자식요소로 추가.
}

//변수선언 1107
let page = 1; // 페이지 저장 변수
let tempList = []; // 페이징 건수.
tempList = products; // 페이지 로드될 때ㅐ

// 이벤트 등록. 3번
categorySelect //
  .addEventListener("change", (e) => {
    //
    const category = e.target.value;
    // console.log(e.target.value);
    const filterProduct = [];
    for (let product of products) {
      // 카테고리가 동일한 상품 이거나 전체(All) 선택일 경우.
      if (product.category == category || category == "All") {
        filterProduct.push(product);
      }
    }
    tempList = filterProduct; // 조회된 결과를 tempList에 지정.
    page = 1; // 조회결과를 기준으로 1페이지부터
    showProductList(tempList.slice(0, 5)); // 상품목록.
    showPagingList(tempList.length); // 페이징목록. 1107
  });

// 페이지 이벤트. 4번
document
  .querySelector("div.pagination") //
  .addEventListener("click", (e) => {
    let pagingProducts = [];
    // 'A'태그일 경우에만 처리.
    if (e.target.nodeName == "A") {
      page = e.target.dataset.page;
      showPagingList(tempList.length); // 매개값을 설정해야 페이지 바꿀 때마다 유지됨.
      let start = 0,
        end = 0;
      start = (page - 1) * 5;
      end = page * 5;
      // for (let i = start; i < end; i++) {
      //   pagingProducts.push(products[i]); // 5개씩 배열에 담기.
      // }
      // showProductList(pagingProducts); // 5개씩 출력.

      showProductList(tempList.slice(start, end)); // 위에 반복문과 동일.
    } // end of if.
  });

// 상품목록을 화면에 출력. 2번
let target = document.querySelector("#list"); // tbody.
function showProductList(productAry = []) {
  console.log(target.innerHTML);
  target.innerHTML = ""; // 중첩 되는 것 방지
  // tr>td*4 생성. => tbody에 appendChild
  const fields = ["productCode", "productName", "purchasePrice", "category"];
  // let totalProduct = productAry;
  for (let product of productAry) {
    // 상품갯수만큼 반복.
    let tr = document.createElement("tr");
    // 항목만큼 반복.
    for (let field of fields) {
      let td = document.createElement("td");
      td.innerText = product[field];
      tr.appendChild(td); // tr부모-td자식
    }
    target.appendChild(tr); // 최종목적지 tbody.
  }
}
const product5 = tempList.slice(0, 5); //전체목록에서 5개 상품만 출력. 마지막

showProductList(product5);

// 페이징목록 생성함수. 4번
let pagination = document.querySelector("div.pagination");
function showPagingList(totalCount = 50) {
  pagination.innerHTML = "";
  let startPage = 0,
    endPage = 0;
  let prev = false,
    next = false;
  // 시작, 마지막 페이지.
  endPage = Math.ceil(page / 10) * 10; // 10page.
  startPage = endPage - 9;
  //r 건수를 계산한 마지막 페이지.
  let realEnd = Math.ceil(totalCount / 5); // 15page.
  if (endPage > realEnd) {
    endPage = realEnd; // 실제마지막 페이지를 계산.
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
  tag.className = "disabled";
  // 페이지 값을 담아놓는 속성. 1107 11페이지 안나오는 거 방지
  tag.setAttribute("data-page", startPage - 1);
  pagination.appendChild(tag);
  if (prev) {
    tag.className = ""; // 활성화.
  }
  // 페이징 목록.
  for (let p = startPage; p <= endPage; p++) {
    let tag = document.createElement("a");
    tag.innerText = p;
    tag.href = "#";
    // 페이지 값을 담아놓는 속성. 1107 11페이지 안나오는 거 방지
    tag.setAttribute("data-page", p);

    if (p == page) {
      tag.className = "active";
    }
    pagination.appendChild(tag);
  }
  // 이후페이지.
  tag = document.createElement("a");
  tag.innerHTML = "&raquo";
  tag.href = "#";
  tag.className = "disabled";
  // 페이지 값을 담아놓는 속성. 1107 11페이지 안나오는 거 방지 >>는 값이 없음
  tag.setAttribute("data-page", endPage + 1);
  pagination.appendChild(tag);

  if (next) {
    tag.className = "";
  }
}
showPagingList(tempList.length); // 설정 안하면 초기값인 50을 기준으로 보여줌
