const mockify = require("./index");
const assert = require("assert").strict;

describe("basic assert", function () {
  it("Empty param", function () {
    assert.equal("", mockify());
  });

  it("Basic word", function () {
    assert.equal("bOnJoUr", mockify("bonjour"));
  });

  it("Capitalized word", function () {
    assert.equal("bOnJoUr", mockify("Bonjour"));
  });

  it("Simple sentence", function () {
    assert.equal("bOnJoUr vOuS", mockify("Bonjour vous"));
  });

  it("Ugly char in second position", function () {
    assert.equal("LigHt", mockify("light"));
  });

  it("Ugly char in second position in sentence", function () {
    assert.equal("tHe LigHt", mockify("the light"));
  });

  it("Don't capitalize the first letter of a word", function () {
    assert.equal("tHeY LigHt", mockify("they light"));
  });

  it("Weird chars", function () {
    assert.equal("pEuT-ÊtRe qU'iL", mockify("peut-être qu'il"));
  });

  it("L's should not be lowercase", function () {
    assert.equal("hOLA qUé tAL", mockify("hola qué tal"));
  });
});
