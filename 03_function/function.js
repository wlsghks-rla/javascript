// function.js (p.575)
// 함수표현식 정의.

/*function sum(x,y) {
  let result = x + y;
  console.log(`${x}, ${y}의 합은 ${result}`);
}*/

// 위의 함수 선언식은 아래와 같다.

/*let sum = function(x, y) {
  let result = x + y;
  console.log(`${x}, ${y}의 합은 ${result}`);
}
// console.log(sum)*/

let sum = (x, y) => { // 화살표함수.(함수명 : sum)
  let result = x + y;
  // console.log(`${x}, ${y}의 합은 ${result}`);
  return result; // 반환 후 종료. 함수 1개에 1값 반환
}
// console.log(sum)

let result = sum(10, 20);
console.log(result); 

// let sum = 0; // 위에서 이미 선언했기 때문에 오류 남

let sum2 = sum;
sum2(100, 200);

result = sum(sum(10, 20), sum2(100, 200));
console.log(`sum(10, 20), sum2(100, 200) => ${result}`);
// let input = prompt('값을 입력'); // prompt는 결과값 반환