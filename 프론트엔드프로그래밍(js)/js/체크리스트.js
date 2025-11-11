let products = [];
document
  .querySelector("button") //
  .addEventListener("click", (e) => {
    e.preventDefault();
    const item = document.querySelector("#item").value;
    // 값이 없을 때 알림창
    if (item == "") {
      alert("값을 입력하세요.");
      return;
    }
    console.log(products);
    //중복값 있을 때 알림창
    if (products.indexOf(item) != -1) {
      alert("이미 목록에 존재합니다.");
      return;
    }
    products.push(item);

    // 입력값 목록에 추가
    let li = document.createElement("li");
    let ul = document.createElement("ul");
    let txt = document.createTextNode(item);
    li.appendChild(txt);
    ul.appendChild(li);

    document.querySelector("#item").value = "";
    document.querySelector("#item").focus();
    // 삭제버튼 만들기
    let btn = document.createElement("button");
    btn.innerText = "\u00D7";
    // 삭제 이벤트
    btn.addEventListener("click", (e) => {
      const idx = products.findIndex((product) => product == item);
      products.splice(idx, 1);
      e.target.parentElement.parentElement.remove();
    });
    li.appendChild(btn);
    ul.appendChild(li);

    document.querySelector("#itemList").appendChild(ul);
  });
