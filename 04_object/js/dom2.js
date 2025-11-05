// dom2.js
let target = document.querySelector("div > ul");
console.log(target.innerHTML);
console.log(target.innerText);
console.log(target.textContent);

// 이미지 클릭 이벤트.
let width = 150;
document.querySelector("img").onclick = function (e) {
  width += 30;
  // 클릭하면 매개변수가 자동으로 입력됨
  console.dir(e.target);
  // e.target.src = "images/2.jpg"; // 클릭시 이미지 2번으로 변경
  let no = Math.ceil(Math.random() * 4);
  e.target.src = "images/" + no + ".jpg";
  e.target.width = width;
  console.assert((e.target.style.backgroundColor = "red"));
};
