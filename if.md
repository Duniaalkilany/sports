/* if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
} */





/*
If statement:
if(condition){
  the if block code
}
*/

// if

// if(8 == '8'){
//   console.log('the if block executed');
//   console.log('correct');
// }

// if else
// if(8 === '8'){
//   console.log('the if block executed');
//   console.log('correct');
// } else {
//   console.log('the else block executed');
//   console.log('not correct');
// }

// var numOne=12;
// if (numOne ===1){
//   console.log('the number is ', 1);
// }else{
//   console.log('the number is not', 1, 'it is ', numOne);
// }

// // alert
// alert('Hello Alert');

// // prompt
// var userName = prompt('please enter your name');
// console.log(userName);

// prompt, alert and if statement

// var userAge=prompt('please enter your Age');

// if(userAge >= 18){
//   alert('you can see my website');
// }else{
//   alert('sorry you are under age');
//   alert('please come back when you are 18');
// }

// this will write the msg in the html, not in the console
// document.write('hello I am from javascript file, you will see me in the html');

// document.write('<h3>'+' h3 from js file '+'</h3>');

// if prompt document.write

var timeNow = prompt("please enter the time now");

if (timeNow >= 18) {
  document.write("Good Evening");
  document.write(
    '<img src="https://i.pinimg.com/originals/6c/04/c6/6c04c6b013470efcb9474cf8e8f0456e.jpg">'
  );
} else if (timeNow >= 12) {
  document.write("Good Afternoon");
  document.write(
    '<img src="https://i.pinimg.com/originals/4e/86/86/4e8686f7ef038e941f81bc7504e6ab66.png">'
  );
} else if (timeNow >= 0) {
  document.write("Good Morning");
  document.write(
    '<img src="https://miro.medium.com/max/1600/1*oqFofdQ4wai3BkHAY6M-Rw.jpeg">'
  );
}


console.log('bara\'ah');
console.log('khaled'=='khaled');