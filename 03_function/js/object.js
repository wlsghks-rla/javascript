// 객체.
// 함수(입금기능), 함수(출금기능) => 5만라인.
// 작은기능1, 작은기능2, 작은기능3 .... 작은기능n => 객체지향프로그래밍.
// 학생(객체 object): 학번, 이름, 점수, 시험, 공부, 잠자기 => 속성, 기능 => 개체(instance)
let obj = {
  name: "홍길동",
  age: 20,
  score: 80,
  showInfo: function () {
    // 메소드(함수)
    console.log(this);
    // console.log(`학생이름: ${obj.name}이고 점수는 ${obj.score} 입니다.`);
    // return `학생이름: ${obj.name}이고 점수는 ${obj.score} 입니다.`;
    return `학생이름: ${this.name}이고 점수는 ${this.score} 입니다.`; // obj안에서만 가능 밖에서는 window로 인식
  },
};
// obj.name = '김병지';
console.log(obj.name); // obj['name']
// obj.showInfo(); // 객체, 메소드 호출.
console.log(obj.showInfo()); // 객체, 메소드 호출.(return값)

// 객체의 속성들. (for .. in ..)
for (let prop in obj) {
  console.log(`prop => ${prop}, obj[prop] => ${obj[prop]}`);
}
