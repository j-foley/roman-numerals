const romanKeys = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

/**
 * Converts a number to a Roman numeral
 * @param {Number} num
 * @returns {String} roman numeral
 */
const toRoman = (num) => {
  let result = [];

  const keyValuesPairs = Object.entries(romanKeys).sort(
    ([a, b], [x, y]) => y - b
  );

  for (const [key, value] of keyValuesPairs) {
    while (value <= num) {
      num -= value;
      result.push(key);
    }
  }
  return result.join("");
};

/**
 * Converts a Roman numeral to a number
 * @param {String} string - Roman numeral
 * @returns {Number}
 */
const fromRoman = (string) => {
  let result = 0;
  const array = string.split("");
  const set = new Set(["I", "X", "C"]);

  for (let i = 0; i < string.length; i++) {
    const char = array[i];
    if (set.has(char) && i !== string.length - 1) {
      const str = `${char}${array[i + 1]}`;
      if (romanKeys[str]) {
        result += romanKeys[str];
        i++;
        continue;
      }
    }
    result += romanKeys[char];
  }
  return result;
};

/**
 * Validates whether or not a string is a valid Roman numeral using an established regex solution
 * https://www.oreilly.com/library/view/regular-expressions-cookbook/9780596802837/ch06s09.html
 * @param {String} string - Roman numeral
 * @returns {Boolean} True if valid, otherwise false
 */
const isValidRoman = (string) => {
  const regex =
    /^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/;
  return regex.test(string);
};

export const RomanNumerals = {
  toRoman: toRoman,
  fromRoman: fromRoman,
  isValidRoman: isValidRoman,
};
