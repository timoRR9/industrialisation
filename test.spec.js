"use strict";

const User = require("./User");
const expect = require('chai').expect

describe("User module", () => {
  describe("up", () => {
    it("should be a function", () => {
      expect(User.up).to.be.a("function");
    }),
    it("hould return a Promise", () => {
      const usersUpResult = User.up();
      expect(usersUpResult.then).to.be.a("Function");
      expect(usersUpResult.catch).to.be.a("Function");
    });
  })
})
