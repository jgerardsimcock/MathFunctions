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
 return z + q;
}

function test_subtract_1(){
  var x = 5;
  var y = 4;
  var q = subtract(x,y);  
  return q;   
}

function test_subtract_2(){
  var x = 5;
  var y = 4;
  var z = 3;
  var q = subtract(x,y);
  return z - q;
}

+var mul10 = multiply(
 +                      multiply(
 +                                add(1,2),
 +                                subtract(8,4)
 +                                ), 
 +                      multiply(
 +                                add(
 +                                    test_add_1(), 
 +                                    test_subtract_1()
 +                                    ), 
 +                                subtract(
 +                                      test_add_2(), 
 +                                      test_subtract_2()
 +                                    )
 +                                )
 +                      );
