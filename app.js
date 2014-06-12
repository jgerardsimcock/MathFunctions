function add(op1, op2) {
  return op1 + op2;
}


function subtract(op1, op2) {
  return op1 - op2;
}

function multiply(a,b) {
  return a*b;
}

function divide(a,b){
  return a/b;
}

function power(b, a) {

  var result = 1
  for (var i = 0; i < a; i++) 
         result *= b;
  return result;
  
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
 return 
}