// Test File for app.js

const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
const { app, Calculator } = require("../app.js");

chai.use(chaiHttp);

describe("Calculator", () => {
  const calc = new Calculator();

  it("should add two numbers correctly", () => {
    expect(calc.add(2, 3)).to.equal(5);
    expect(calc.add(-1, 1)).to.equal(0);
  });

  it("should multiply two numbers correctly", () => {
    expect(calc.multiply(2, 3)).to.equal(6);
    expect(calc.multiply(-2, 3)).to.equal(-6);
  });

  it("should divide two numbers correctly", () => {
    expect(calc.divide(6, 2)).to.equal(3);
    expect(calc.divide(5, 0)).to.equal("Cannot divide by zero");
  });
});

describe("API", () => {
  it("should respond with hello world", (done) => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.text).to.equal("Hello World!");
        done();
      });
  });
});
