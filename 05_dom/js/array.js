// array.js
console.log(products.length);
// for반복문, 상품코드, 상품명, 카테고리, 가격..만 콘솔에출력.
// 상품명에 "노트북" 포함
// for (let i = 0; i < products.length; i++) {
//   if (products[i]["productName"].indexOf("노트북") != -1) {
//     console.log(products[i].productCode);
//     console.log(products[i].productName);
//     console.log(products[i].category);
//     console.log(products[i].purchasePrice);
//   }
// }

// // products에 category를 중복 되지 않게 나열
// const categories = [];
// for (let product of products) {
//   if (categories.indexOf(product["category"]) == -1) {
//     categories.push(product["category"]);
//   }
// }
// console.log(categories);

/*//상품가격이 5만원 넘는 상품을 나열하세요.
let result = {
  over50000: [],
  under50000: [],
};
console.log(result.equal5000)
for (let product of products) {
  if (product.purchasePrice >= 50000) {
    result.over50000.push(product);
    // break; // 처음 1개만 추가 하고 싶을 때
  } else {
    result.under50000.push(product);
  }
}
console.log(result);*/

// 상품카테고리별: 상품합계금액 => 전자기기: 1700000, 음향기기: 5540000
let result = {};
// console.log(result["전자기기"]);
// result["전자기기"] = 0;
// result["음향기기"] = 0;
// console.log(result['equal50000']);

for (let product of products) {
  // 카테고리가 생성이 되었는지 여부 판단.
  // 없으면 카테고리 생성.
  if (result[product.cateogory] == undefined) {
    result[product.category] = 0; // {전자기기 : 0}
  }
  // 있으면 기존의 값에 가격을 누적.
  result[product.category] += product.purchasePrice;
  console.log(result);
}
console.log(result);
