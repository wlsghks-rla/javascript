// login.js
const db = [
  { userId: "user01", password: "1111" },
  { userId: "user02", password: "2222" },
  { userId: "user03", password: "3333" },
];

const students = [
  {
    sno: 100,
    sname: "홍길동",
    score: 90,
    phone: "010-1111-111",
    email: "hong@email.com",
  },
  {
    sno: 101,
    sname: "이순신",
    score: 95,
    phone: "010-2222-222",
    email: "lee@email.com",
  },
  {
    sno: 102,
    sname: "유관순",
    score: 98,
    phone: "010-3333-333",
    email: "yoo@email.com",
  },
];

// localStorage.setItem("name", "Honggilldong"); // 객체는 불가
// localStorage.getItem('name') => honggildong나옴, localStorage.clear 삭제

document
  .querySelector('form[name="loginForm"]')
  .addEventListener("submit", (e) => {
    e.preventDefault();

    let id = document.querySelector('input[name="userId"]').value;
    let pw = document.querySelector('input[name="password"]').value;

    let isExist = false;
    for (let user of db) {
      if (user.userId == id && user.password == pw) {
        isExist = true;
        break; // 반복문 종료. forEach사용시 사용불가(함수)
      }
    }
    console.log(students);
    console.log(isExist);

    if (isExist) {
      //로그인 성공.
      if (!localStorage.getItem("students")) {
        console.log(students);
        // 캐시 삭제가 없는 한 유지 하기 위해서
        localStorage.setItem("students", JSON.stringify(students));
      }

      // console.log("존재.");
      location.href = "form.html";
    } else {
      // console.log("없음.");
      alert("Id,Pw 확인하세요");
      location.reload();
    }
  });
