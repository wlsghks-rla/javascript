// fetch -> then -> then -> then
// 게시글 목록.
// async, await (잘 기억할 것)

async function postList() {
  try {
    const result = await fetch("http://localhost:3000/posts");
    const data = await result.json(); // 자바스크립트 객체변경.(.json)
    console.log(data); // 배열.
    // for (let post of data) {
    for (let { id, title, author } of data) {
      // 디스트럭처링.
      let li = document.createElement("li");
      let btn = document.createElement("button");
      let fields = [id, title, author];
      // li.innerHTML = `<span>${post.id}</span> <span>${post.title}</span> <span>${post.author}</span>`;
      // li.innerHTML = `<span>${id}</span> <span>${title}</span> <span>${author}</span>`;
      li.innerHTML = `${fields
        .map((elem) => "<span>" + elem + "</span>")
        .join(" ")}`;
      btn.innerText = "삭제";
      li.appendChild(btn);
      console.log(li);
      document.querySelector("#list").appendChild(li);
      btn.setAttribute("onclick", `deleteData(${id})`);
    }
  } catch (err) {
    console.log("예외발생:", err);
  }
}

postList();

function deleteData(id) {
  fetch(`http://localhost:3000/posts/${id}`, {
    method: "delete",
  });
}
// fetch("http://localhost:3000/posts")
// .then((resp) => resp.json())
// .then((data) => {
//   console.log(data);
//   for (let post of data) {
//     let li = document.createElement("li");
//     li.innerHTML = `<span>${post.id}</span> <span>${post.title}</span> <span>${post.author}</span>`;
//     document.querySelector("#list").appendChild(li);
//   }
// })
// .catch((err) => {
//   console.log("예외발생: ", err);
// });
