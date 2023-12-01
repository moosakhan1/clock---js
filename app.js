// let a = new Date()
// let b = a.getHours()
// let c = a.getMinutes()
// let d = a.getSeconds()
// let e = a.getDate()
// console.log(b,c,d,e)
// console.log(a)

setInterval(function () {
  var clock = new Date();
  var a = clock.getHours();
  var b = clock.getMinutes();
  var c = clock.getSeconds();
//   console.log(a, b, c);

  var hour = document.getElementById("hour");
  var min = document.getElementById("min");
  var sec = document.getElementById("sec");
//   console.log(hour, min, sec);
  hour.innerHTML = a;
  min.innerHTML = b;
  sec.innerHTML = c;
}, 1000);

// let b = {
//     Name : "moosa",
//     last : "khan",
//     age : 14,
//     fatherName : "khan",
// }
// console.log(b)
