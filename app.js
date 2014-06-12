function add(a,b) {
  return a + b;
}


console.log(add(1,2));
console.log(add(1,add(2,3)));
console.log(add(add(1,2),add(3,4)));


function subtract(a,b) {
  return a - b;
}


console.log(subtract(10,9));
console.log(subtract(10, subtract(19,10)));
console.log(subtract(subtract(20,10), subtract(19,10)));


function multiply(a,b) {
  return a*b;
}

console.log(multiply(2,3));
console.log(multiply(2, multiply(1,3)));
console.log(multiply(multiply(1,2), multiply(3,4)));

function divide(a,b){
  return a/b;
}

function power(b, a) {

  var result = 1;
  for (var i = 0; i < a; i++)   
       result *= b;
  return result;
  
}


function power1(b,a) {
 if (a === 0) {
    return 1;
} else {
    return b * power1(b, a - 1);
  } 
}

function absolute (x) {
  if (x < 0) {
    return -x;
  }
  else {
    return x;
  }
}

function test_add_1() {
    var x = 5;
    var y = 4;
    return add(x,y)
    }

function test_add_2() {
 var x = 5;
 var y = 4; 
 var z = 3;
 var q = add(x,y);
 return z + q;
}
  
function test_subtract_1(){
  var x = 5;
  var y = 4;
  var q = subtract(x,y);  
  return q;   
}
console.log(test_subtract_1());

function test_subtract_2(){
  var x = 5;
  var y = 4;
  var z = 3;
  var q = subtract(x,y);
  return z-q;
}

console.log(test_subtract_2());

var mul10 = multiply(
                      multiply(
                                add(1,2),
                                subtract(8,4)
                                ), 
                      multiply(
                                add(
                                    test_add_1(), 
                                    test_subtract_1()
                                    ), 
                                subtract(
                                      test_add_2(), 
                                      test_subtract_2()
                                    )
                                )
                      );
console.log(mul10);