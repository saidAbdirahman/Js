// 006 Javascript Variables Exercise
// Instructions
// Given the existing code below, can you write some code so that their values are switched around?

var a = "3";
var b = "8";
// So that the variable a holds the value "8".

// And the variable b holds the value "3".

// When the code is run, it should output:

// a is 8

// b is 3

// Do NOT change any of the existing code.

// You are NOT allowed to type any numbers.

// You should NOT redeclare the variables a and b.

// Hint: Use this code playground to run your code and see if it matches your expectations.

// Hint: The solution is just 3 lines of code.

// Test(s)
// Test 1
describe('Test', function() {
   it('a should be 8 and b should be 3', function() {
    var stdout = '';

    spyOn(console, 'log').and.callFake(function() {
        stdout += Array.prototype.slice.call(arguments).join(' ') + '\n';
    });

    test();

    expect(stdout).toEqual('a is 8\nb is 3\n');
    });
});
Solution(s)
// Solution 1
function test() {
    var a = "3";
    var b = "8";
    
/***********Do not change the code above 👆*******/
//Write your code on lines 7 - 9:
    var c = a;
    a = b;
    b = c;
/***********Do not change the code below 👇*******/

    console.log("a is " + a);
    console.log("b is " + b);
}