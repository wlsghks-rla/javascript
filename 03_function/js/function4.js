// setTimeout 함수.
// 비동기함수 vs. 동기함수.
// 초기값 => 10 더하기 => *2 => 5를 뺀 결과를 계산.
let initValue = 10;

/*let result = initValue + 10; // 1번
result = result * 2; // 2번
result = result - 5;// 3번
console.log(result); // 동기함수 : 순서대로 계산하는 함수*/
let result = 0;

setTimeout(function () {
  result = initValue + 10;
  console.log(`첫번째 ${result}`);
}, 2000); // 2000ms 이후 출력

setTimeout(function () {
  result = result * 2;
  console.log(`두번째 ${result}`);
}, 1500); // 2000ms 이후 출력

setTimeout(function () {
  result = result - 5;
  console.log(`세번째 ${result}`);
}, 1000); // 2000ms 이후 출력

console.log(`최종결과: ${result}`); // setTimeout(비동기방식)보다 먼저 처리함

// 위에를 순서대로 실행하는 방법
setTimeout(function () {
  result = initValue + 10;
  console.log(`첫번째 ${result}`);

  setTimeout(function () {
    result = result * 2;
    console.log(`두번째 ${result}`);

    setTimeout(function () {
      result = result - 5;
      console.log(`세번째 ${result}`);
    }, 1000);
  }, 1500);
}, 2000);
