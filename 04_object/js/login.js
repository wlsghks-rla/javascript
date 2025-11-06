// login.js
const db = [
  { userId: "user01", password: "1111" },
  { userId: "user02", password: "2222" },
  { userId: "user03", password: "3333" },
];
// document
//   .querySelector('form[name="loginForm"]')
//   .addEventListener("submit", (e) => {
//     e.preventDefault();
//     let id = document.querySelector('input[name="userId"]').value;
//     let password = document.querySelector('input[name="password"]').value;

//     let isExist = false;
//     // for(let i = 0; i< db.length; i++) {
//     //   if(db[i].userId == id && db[i].password === pw){
//     //     isExist = true;
//     //     break; // 반복문 종료. forEach사용시 사용불가(함수)
//     //   }
//     // }

//     for (let user of db) {
//       // db에 들어있는 배열 갯수만큼 반복
//       if (user.userId == id && user.password == password) {
//         isExist = true;
//         break;
//       }
//     }
//     console.log(isExist);

//     if (isExist) {
//       // console.log("존재.");
//       location.href = "form.html";
//     } else {
//       // console.log("없음.");
//       alert("Id,Pw 확인하세요");
//       location.reload();
//     }
//   });

// form 이벤트.

document
  .querySelector('form[name="loginForm"]')
  .addEventListener("submit", (e) => {
    e.preventDefault();
    let id = document.querySelector('input[name="userId"]').value;
    let password = document.querySelector("#password").value;
    // console.log(id, password);

    let result = false;
    for (let i = 0; i < db.length; i++) {
      if (id == db[i].userId && password === db[i].password) {
        result = true;
        break;
      }
    }
    location.href = "form.html";
  });
