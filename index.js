const alwaysLower = ["i"];
const alwaysUpper = ["l"];

const mockify = function (text = "") {
  let i = 0;
  return text
    .toLowerCase()
    .split("")
    .map((char) => {
      if (char === " ") {
        i = 0;
        return char;
      }

      if (alwaysLower.includes(char)) {
        i += 1;
        return char.toLowerCase();
      }

      if (alwaysUpper.includes(char)) {
        i += 1;
        return char.toUpperCase();
      }
      const newChar = i % 2 ? char.toUpperCase() : char.toLowerCase();
      i += 1;
      return newChar;
    })
    .join("");
};

module.exports = mockify;
