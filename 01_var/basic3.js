//배열. 순번이 0부터 시작(index)
// let foods = [];//기본형식
let foods = ['감자탕', '짜장면', '탕수육', '햄버거'];
console.log(foods[0], foods[1]);

//배열요소의 변경.
foods[1] = '짬뽕';
console.log(foods);//출력시 목록에 뒤에 추가하는 삼겹살도 보임(0.0001초만에 확인하면 안보임)

//배열요소 추가.
foods[4] = '삼겹살';
console.log(foods);

//Math.random() - 실수 0 <= x < 1 
console.log(Math.floor(Math.random() * 101), Math.ceil(Math.random()*100))//0 <= x <= 100, Math.ceil,floor : 올림,내림
console.log('임의의 값 : ' + Math.random());

let points = [Math.floor(Math.random() * 101),
              Math.floor(Math.random() * 101),
              Math.floor(Math.random() * 101),
              Math.floor(Math.random() * 101)];
let result = points[0] + points[3];
console.log(result);

console.log(points.length-1)//마지막번째라는 뜻(length는 배열의 크기)

let numbers = [];
//prompt를 활용해서 숫자를 3번 입력.-> 배열추가
// result에 대입. console에 result 출력.
numbers[numbers.length] = prompt('숫자를 입력하세요');
numbers[numbers.length] = prompt('숫자를 입력하세요');
numbers[numbers.length] = prompt('숫자를 입력하세요');

result = parseInt(numbers[0]) + parseInt(numbers[1]) + parseInt(numbers[2]);
console.log(result);
  