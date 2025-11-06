// 반환값.
/*let count2Times = (x) => {
  let result = x * 2;
  return result; // 반환.
}

count2Times = 10; // let일 때 가능
console.log(count2Times);*/

const count2Times = (x) => {
  let result = x * 2;
  return result; // 반환.
}// 함수 때는 변수는 const로 지정

let result = count2Times(10); // 함수 안의 result와 다름

const name = 'Hong';
// name = 'Hawng'; // 상수변수 값을 재할당X

// 매개값을 x, y 가지는 함수: addNumbers(x, y)
// x ~ y 사이의 정수를 합한 결과를 반환.
const addNumbers = (x, y) => {
  let sum = 0;
  for(let i = x; i <= y; i++){ // 매개값 x, y를 활용.
    sum += i;
  }
  return sum;
}
result = addNumbers(10, 20);
console.log(`10부터 20까지의 합은: ${result}`);

// 매개값을 [10, 20, 30] 가지는 함수: sumArray(array)
// 배열의 전체값을 다 더한 결과를 반환.
const sumArray = (array) => {
  let sum = 0;
 for (let i = 0; i < array.length; i++) {
  sum += array[i];
 }
 return sum; // sum은 함수 범위안에서만 작용(지역변수) variable
}
result = sumArray([10,20,30]); // 전역변수 global
console.log(`sumArray([10,20,30])의 결과: ${result}`);

