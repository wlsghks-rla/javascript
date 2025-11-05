// Math 객체.(p.605)
let now = new Date(); // Date의 인스턴스. now는 인스턴스
now.getFullYear(); // 인스턴스 메소드.

let randVal = Math.random(); // 정적(static)메소드.
let result = Math.floor(randVal * 10);
result = Math.min(10, 20); // 둘중에 작은값.
result = Math.max(10, 20); // 둘중에 큰값.

// 문제. 임의의 값을 생성 0 <= x < 10 => 소수점 2자리
// 3.54643563546 => 3.54
randVal = Math.floor(Math.random() * 10 * 100) / 100;
console.log(randVal);

// 클래스.
class Student {
  constructor(sno, sname, score) {
    // constructor는 생성자
    this.sno = sno;
    this.sname = sname;
    this.score = score; // this는 객체에서 자기자신
  }
}

let stud1 = new Student(100, "홍길동", 80); // 인스턴스 생성.
let stud2 = {}; // 인스턴스 생성.
