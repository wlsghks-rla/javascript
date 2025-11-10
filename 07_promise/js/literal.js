//
let name = "홍길동";
let age = 20;
let msg;
if (age >= 20) {
  msg = "성인입니다";
} else {
  msg = "미성년입니다";
}

console.log("이름은 " + name + "이고, 나이는 " + age + "입니다 " + msg);
console.log(
  `이름은 ${name}이고, 나이는 ${age}입니다 ${
    age >= 20 ? "성인입니다" : "미성년입니다"
  }`
);

let score = 78;
// 홍길동은 합격입니다.
console.log(`${name}은 ${score >= 60 ? "합격" : "불합격"}입니다.`);

let numAry = [60, 70, 55, 80, 49]; // forEach(반환값x), filter, map, reduce -> 3개는 반환값 존재
let result = numAry.filter((elem) => elem >= 60);
// console.log(`<span> ${result.join("</span><span>")}</span>`);
console.log(
  `<span> ${numAry.filter((elem) => elem >= 60).join("</span><span>")}</span>`
);

// map(ping) A => A'
// result = numAry.map((elem, idx, ary) => {
result = numAry.map((elem, idx) => {
  const obj = {}; // []도 가능.
  // `순번은 ${idx} => 값은 ${elem}`;
  obj.ord = idx;
  obj.val = elem;
  return obj;
});
console.log(result);
console.log(`${numAry.map((elem) => "<span>" + elem + "</span").join("")}`);
