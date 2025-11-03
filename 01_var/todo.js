let students=[
  {num : 1, name : '신짱구', english : 95, math : 80},
  {num : 2, name : '김철수', english : 85, math : 60},
  {num : 1, name : '김맹구', english : 75, math : 65}
]

let average = [
  (students[0]['english'] + students[0]['math']) / 2,
  (students[1]['english'] + students[1]['math']) / 2,
  (students[2]['english'] + students[2]['math']) / 2,
];

let result = (average[0] + average[1] + average[2]) / 3;

console.log('각 학생들의 점수 평균 : ' + average);

console.log('영어 + 수학 점수의 평균은 : ' + result);