var chai = require('chai');
var expect = chai.expect;
const calculator = require('../app/calculator');

//test cases
describe('Calculator', () => {

    //addition
    it("should return 4", () => {
        expect(calculator.add(2,2)).to.equal(4);
    });
    //fail test
    it("should return 4 - expects a different value to fail intentionally", () => {
        expect(calculator.add(1,3)).to.equal(5);
    });
    //multiplication
    it("should return 6", () => {
        expect(calculator.mul(2,3)).to.equal(6);
    });
    //fail test
    it("should return 6 - expects a different value to fail intentionally", () => {
        expect(calculator.mul(2,3)).to.equal(9);
    });
    //division
    it("should return 2", () => {
        expect(calculator.div(6,3)).to.equal(2);
    });
    //fail test
    it("should return 2 - expects a different value to fail intentionally", () => {
        expect(calculator.div(6,3)).to.equal(3);
    });
    //subtraction
    it("should return 2", () => {
        expect(calculator.sub(5,3)).to.equal(2);
    });
    //fail test
    it("should return 2 - expects a different value to fail intentionally", () => {
        expect(calculator.sub(5,3)).to.equal(3);
    });
}
);
