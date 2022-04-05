// Only change code below this line
var sum = 0;
function addThree(){
    sum = sum + 3;
    console.log("sum from addThree: " + sum);
}
addThree();

function addFive(){
    sum = sum + 5;
  console.log("sum from addFive: " + sum);
}
addFive();
// Only change code above this line
module.exports = {

addThree,
addFive
};