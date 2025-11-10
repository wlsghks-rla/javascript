// book.js
const bookList = [
  {
    bookNo: "001",
    title: "모던 자바스크립트 기초",
    author: "김모던",
    price: 20000,
  },
  {
    bookNo: "002",
    title: "자바스크립트 핵심가이드",
    author: "알베르토",
    price: 22000,
  },
];

// 페이지 로딩 실행.
function showBookList() {
  // 기존목록을 지우고.
  document.querySelector("#list").innerHTML = "";
  // 배열의 값만큼 화면출력.
  bookList.forEach((elem) => {
    console.log(elem); // 객체{}.
    let { bookNo, title, author, price } = elem; // 객체 디스트럭칭
    let fields = ['<input type="checkbox">', bookNo, title, author, price];
    let tr = document.createElement("tr");
    tr.innerHTML = `${fields
      .map((field) => "<td>" + field + "</td>")
      .join("")}`;
    document.querySelector("#list").appendChild(tr);
  });
  document
    .querySelector("#select") //
    .addEventListener("change", function () {
      console.log();
      document
        .querySelectorAll("tbody input")
        .forEach((elem) => (elem.checked = ture));
    });
}
showBookList();

// form에 submit 이벤트 등록
document.querySelector(".register").addEventListener("submit", function (e) {
  e.preventDefault();
  // 사용자 입력값을 화면에 추가.
  let bookNo = document.querySelector('input[name = "bookNo"]').value;
  let title = document.querySelector('input[name = "title"]').value;
  let author = document.querySelector('input[name = "author"]').value;
  let price = document.querySelector('input[name = "price"]').value;
  bookList.push({ bookNo, title, author, price });
  showBookList();
  document.querySelector('input[name = "bookNo"]').value = "";
  document.querySelector('input[name = "title"]').value = "";
  document.querySelector('input[name = "author"]').value = "";
  document.querySelector('input[name = "price"]').value = "";
  // let fields = [bookNo, title, author, price];
  // let tr = document.createElement("tr");
  // tr.innerHTML = `${fields.map((field) => "<td>" + field + "</td>").join("")}`;
  // document.querySelector("#list").appendChild(tr);
});
