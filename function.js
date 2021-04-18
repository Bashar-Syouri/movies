var getAge = function () {
  console.log('my age is 20 years');
}
getAge();


function getUserName() {
  var name = prompt('Hello, could you please tell me your name??');
  console.log(name);
}

function getAvg(mark1, mark2){
  var avg = (mark1+mark2)/2;
  console.log(avg);
}

getAvg(50, 60);
getAvg(100, 40);