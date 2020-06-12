function myFunction() {
  var age= 16;
  age= document.getElementById("demo").value;
  age= +age;
  if (age==16) {
      alert("You got it!!!");
}
else if(age>16) {
    alert("Try again. Answer should be smaller");
}
else if(age<16) {
alert("Try again. Answer should be bigger");
}
}
   