// 매개밗으로 number, string, array, function 사용.
function doItFunction(param) {
  let x = 10;
  let result = param(x);
  console.log(result);
}

//매개값의 2배를 반환.
const get2Times = (n) => {
  let result = n * 2
  return result;
}

//매개값의 4배를 반환.
const get4Times = (n) => {
  let result = n * 4
  return result;
}

doItFunction(get2Times);
doItFunction(get4Times);
