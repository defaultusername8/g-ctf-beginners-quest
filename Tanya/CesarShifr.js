let str = "Naljnl";

var a = 97;

function makeCharArray(shiftStep) {
  let charArray = {};
  for (var i = 0; i < shiftStep; i++)
    charArray[String.fromCharCode(a + i)] = String.fromCharCode(
      a + i + shiftStep
    );
  for (var i = shiftStep; i < 26; i++)
    charArray[String.fromCharCode(a + i)] = String.fromCharCode(
      a + i - shiftStep
    );
  return charArray;
}
let arr = str.toLowerCase().split("");
console.log("arr=", arr);

let unchifrArr = [];

for (let j = 0; j < 26; j++) {
  let cycleCharArray = makeCharArray(j);
  console.log(j, cycleCharArray);
  arr.forEach((el, id) => {
    unchifrArr.push(cycleCharArray[el]);
    // console.log('');
  });
  console.log(unchifrArr.join(""));
  unchifrArr = [];
}
