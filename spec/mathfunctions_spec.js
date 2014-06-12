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

