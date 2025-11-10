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
  document.querySelector("#list").innerHTML = "";

  bookList.forEach(elem => {
    console.log(elem);
    let { bookNo, title, author, price } = elem;
    let fields = [
      '<input type="checkbox" class="chk">',
      bookNo,
      title,
      author,
      price,
    ];
    console.log(fields);
    let tr = document.createElement("tr");
    tr.innerHTML = `${fields.map(field => "<td>" + field + "</td>").join("")}`;
    console.log(tr.innerHTML);
    document.querySelector("#list").appendChild(tr);
  });
}
showBookList();

document.querySelector("#checkHead").addEventListener("click", e => {
  const ischecked = document.querySelector("#checkHead").checked;
  if (ischecked) {
    const checkboxes = document.querySelectorAll(".chk");

    for (let checkbox of checkboxes) {
      checkbox.checked = true;
    }
  } else {
    const checkboxes = document.querySelectorAll(".chk");

    for (let checkbox of checkboxes) {
      checkbox.checked = false;
    }
  }
});

document.querySelector(".register").addEventListener("submit", e => {
  e.preventDefault();
  let bookNo = document.querySelector("input[name = 'bookNo']").value;
  let title = document.querySelector('input[name = "title"]').value;
  let author = document.querySelector('input[name = "author"]').value;
  let price = document.querySelector('input[name = "price"]').value;
  bookList.push({ bookNo, title, author, price });
  showBookList();
  document.querySelector('input[name = "bookNo"]').value = "";
  document.querySelector('input[name = "title"]').value = "";
  document.querySelector('input[name = "author"]').value = "";
  document.querySelector('input[name = "price"]').value = "";
});
