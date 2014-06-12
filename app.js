/*function add(a,b) {
  return a + b;
}*/



function subtract(a,b) {
  return a - b;
}



/*function multiply(a,b) {
  return a*b;

}

console.log(multiply(3,4));*/


/*function power(b, a) {

  var result = 1;
  starting at 1 iterate for i=a times, after each iteration, multiply b times itself and reassign the value of be to the new value
  for (var i = 0; i < a; i++)   
       result *= b;
  return result;
  
}*/

/*function power(b,a) {
 if (a === 0) {
    return 1;
} else {
    return b * power(b, a - 1);
  } 
}

alert(power(4,4));


/*function absolute (x) {
  if (x < 0) {
    return -x;
  }
  else {
    return x;
  }
}*/

/*function test_add_1() {
    var x = 5;
    var y = 4;
    var add = function(){
      return x + y;
    }
      add();
    }
  alert(test_add_1);*/

  /*function test_add_2() {
    var x = 5;
    var y = 4; 
    var z = 3;
    var q = function(){
      add(5,4);
    }
  };*/

/*function test_subtract_1(){
  var x = 5;
  var y = 4;
  var q = function(){
    subtract(x,y);
  }
}*/

function test_subtract_2(){
  var x = 5;
  var y = 4;
  var z = 3;
  var q = function(){
    subtract(x,y);
  }
  return q - z;
}

console.log(test_subtract_2);


