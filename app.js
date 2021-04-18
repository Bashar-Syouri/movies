console.log('hello');

console.log('Welcome to my Page');

alert('Welcome To My Movie Page ')


var userName = prompt("Please enter your name");

var userAge = prompt("Please enter you age");

var timeNow = prompt("please enter the time now");

if (timeNow >= 18) {
  document.write("Good Evening");
  document.write(
    '<img src="https://i.ytimg.com/vi/mxRgBBIacGc/hqdefault.jpg">'
  );
} else if (timeNow >= 12) {
  document.write("Good Afternoon");
  document.write(
    '<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/14ee75b7-d544-4bc9-993f-854eac083213/d5y1m7g-e8569699-de6e-4850-a7a8-1db8df702fe9.png/v1/fill/w_1153,h_693,q_70,strp/beautiful_evening_by_shini_smurf_d5y1m7g-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04MDgiLCJwYXRoIjoiXC9mXC8xNGVlNzViNy1kNTQ0LTRiYzktOTkzZi04NTRlYWMwODMyMTNcL2Q1eTFtN2ctZTg1Njk2OTktZGU2ZS00ODUwLWE3YTgtMWRiOGRmNzAyZmU5LnBuZyIsIndpZHRoIjoiPD0xMzQzIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.1F8tnCzXJLcPBUged-lG5z8ynok1uQrq7kMkMqP0vEY">'
  );
} else if (timeNow >= 0) {
  document.write("Good Morning");
  document.write(
    '<img src="https://i.pinimg.com/originals/48/47/62/484762b63c2a8458c6accc211e1e6fd8.png">'
  );
}

if (userAge >= 15 && userAge <= 30) {
  document.write('You can see the web page, Welcome');
} else if (userAge < 15 || userAge > 30) { document.write('You cannot see my wwb page, So Sorry'); } else if (userAge < 15 || userAge > 30) { document.write('You cannot see my web page, So Sorry');}
else{
  alert('Please enter your age as a number');
}

var smurfsName = prompt("Hello enter your vaf char name from smurfs movie!");

while(smurfsName !== "smurfette" && smurfsName !== "brainy" && smurfsName !== "papa" && smurfsName !== "baby" && smurfsName !== "harmony" && smurfsName !== "hefty"){ smurfsName = prompt("Please enter the name smurfette or brainy or papa or baby or harmony or hefty");
}

var userChoose;

if (smurfsName === "smurfette") { userChoose = "<img src='https://d2rd7etdn93tqb.cloudfront.net/wp-content/uploads/2017/07/smurfette-wont-be-labeled-071117.jpg'>";
} else if (smurfsName === "brainy") {
  userChoose = '<img src="https://images-na.ssl-images-amazon.com/images/I/71ya05Ti%2BCL._AC_SX425_.jpg">';
} else if (smurfsName === "papa") {
  userChoose = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvIi_2_s3jzZOLefFysWWXYdZJUe6DnXHDpA&usqp=CAU">';
} else if (smurfsName === 'harmony') {
  userChoose = '<img src="https://pbs.twimg.com/profile_images/432990870300667904/qZ9GKxdU_400x400.jpeg">';
} else if (smurfsName === 'baby') {
  userChoose = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDt2Yn7ET7EkGRf8xPvJB8G9hyv5XfVikj4g&usqp=CAU">';
} else if (smurfsName === 'hefty') {
  userChoose = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWS1KouCmVjWRzsOaWdvc8WvaNNKpfmGTgJA&usqp=CAU">';
}

var imagesNumber = prompt('How many image do you want ?');

for (var i = 0; i < imagesNumber; i++) {
  document.write(userChoose);
}