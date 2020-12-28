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
    assert.equal("liGhT", mockify("light"));
  });

  it("Ugly char in second position in sentence", function () {
    assert.equal("tHe liGhT", mockify("the light"));
  });

  it("Don't capitalize the first letter of a word", function () {
    assert.equal("tHeY liGhT", mockify("they light"));
  });

  it("Weird chars", function () {
    assert.equal("pEuT-ÊtRe qU'iL", mockify("peut-être qu'il"));
  });
});
