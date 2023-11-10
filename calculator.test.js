const calculator = require('./calculator')

describe("Calculation TestCases", () => {

test("Add 2 numbers", () => {
    
    //Call function of Add
    
    var sum = calculator.Add(1,2)
    
   // assertions
    
   expect(sum).toBe(3);
    
    });
    
test("Subtract 2 numbers", () => {
    
    //Call function of Subtract
    
    var subtract = calculator.subtract(10,8)
    
    // assertion
    expect(subtract).toBe(2); 
    
    });
    
     test("Multiple 2 numbers", () => {
    
       // Call function of Subtract
    
       var multiple = calculator.multiple(2,8)
    
       // assertion
    
       expect(multiple).toBe(16);
    
     });
    
     test("Divide 2 numbers", () => {
    
      // Call function to divide the number
    
      var divide = calculator.divide(24,8)
    
      // assertion
    
      expect(divide).toBe(3);
    
    });
    
    })