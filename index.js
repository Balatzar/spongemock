const uglies = ["i"];

const mockify = function (text = "") {
  console.log(text);
  let i = 0;
  return text
    .split("")
    .map((char) => {
      if (char === " ") {
        i = 0;
        return char;
      }

      if (uglies.includes(char)) {
        return char.toLowerCase();
      }
      const newChar = i % 2 ? char.toUpperCase() : char.toLowerCase();
      i += 1;
      return newChar;
    })
    .join("");
};

module.exports = mockify;
