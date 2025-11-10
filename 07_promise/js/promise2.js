// promise2.js (콜백지옥)
// 비동기방식처리. XMLHttpRequest()
const xhtp = new XMLHttpRequest();
xhtp.open("get", "http://localhost:3000/posts"); // 요청페이지 지정.
xhtp.send(); // 요청실행.
xhtp.onload = function () {
  console.log(xhtp);
  let data = JSON.parse(xhtp.responseText);
  let postId = data[0].id;

  const xhtp2 = new XMLHttpRequest();
  xhtp2.open("get", "http://localhost:3000/comments");
  xhtp2.send();
  xhtp2.onload = function () {
    let data2 = JSON.parse(xhtp2.responseText);
    let result = data2.filter((comment) => comment.postId == postId);
    console.log(postId);
  };
};
