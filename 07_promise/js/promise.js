// Promise.js
// pending(요청) / fulfiled(정상) / rejected(실패). then, catch

// const promise = new Promise(function (resolve, reject) { // 매개변수 2개는 함수.
const promise = new Promise((resolve, reject) => {
  try {
    let num1 = 3 + 4;
    resolve(num1);
  } catch (err) {
    reject(err);
  }
}); // 프로미스 객체 호출.
promise
  // .then(function (result) {
  .then((result) => {
    console.log("성공시 : ", result);
  })
  // .catch(function (err) {
  .catch((err) => {
    console.log("실패시 : ", err);
  });

// 동기/비동식 방식 처리
function delayFunc(ms, message) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`${message}`);
      resolve(`${message}`);
    }, ms); // 1초
  });
}

delayFunc(1000, "1번 작업 처리")
  .then(() => delayFunc(1500, "2번 작업 처리"))
  .then(() => delayFunc(2000, "3번 작업 처리"))
  .then(() => {
    console.log("end of prog.");
  });

// 비동기방식 처리(setTimeout, fetch)
// setTimeout(function () {
//   console.log("1번처리.");
//   setTimeout(function () {
//     console.log("2번처리.");
//     setTimeout(function () {
//       console.log("3번처리.");
//     }, 600);
//   }, 1500);
// }, 1000);

// console.log("end of prog.");

// fetch("http://localhost:3000/comments") // get방식으로 요청. fetch함수의 결과값을 then 안의 resp 매개변수로 반환.
//   .then((resp) => {
//     return resp.json();
//   }) // promise 객체로 반환.
//   .then((result) => {
//     console.log(result); // 정상 처리 결과.
//   })
//   .catch((err) => {
//     console.log(err); // 예외시 처리 결과(실패).
//   });
