describe("add", function() {
  var result;

  it("should add two operators", function() {
    result = add(2,3);
    expect(result).toBe(5);
 });

});

describe("subtract", function() {
  var result;

  it("should add subtract op2 from op1", function() {
    result = subtract(3,2);
    expect(result).toBe(1);
 });

});


describe("multiply", function() {
  var result;

  it("should multiply a and b", function() {
    result = multiply(3,2);
    expect(result).toBe(6);
 });

});

describe("divide", function() {
  var result;

  it("should divide a by b", function() {
    result = divide(3,2);
    expect(result).toBe(3/2);
 });

});

describe("power", function() {
  var result;

  it("should raise a base by the exponent", function() {
    result = power(3,3);
    expect(result).toBe(27);
 });

});

describe("test_add_1", function() {
  var result;

  it("should add two variables ", function() {
    result = test_add_1(5,4);
    expect(result).toBe(9);
 });

});