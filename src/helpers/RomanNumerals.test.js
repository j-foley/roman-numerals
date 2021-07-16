import { RomanNumerals } from "./RomanNumerals";
describe("RomanNumerals Helper", () => {
  test("It should convert a Roman numeral to an number", () => {
    expect(RomanNumerals.fromRoman("III")).toBe(3);
    expect(RomanNumerals.fromRoman("IV")).toBe(4);
    expect(RomanNumerals.fromRoman("V")).toBe(5);
    expect(RomanNumerals.fromRoman("VIII")).toBe(8);
    expect(RomanNumerals.fromRoman("IX")).toBe(9);
    expect(RomanNumerals.fromRoman("X")).toBe(10);
    expect(RomanNumerals.fromRoman("XL")).toBe(40);
    expect(RomanNumerals.fromRoman("L")).toBe(50);
    expect(RomanNumerals.fromRoman("XC")).toBe(90);
    expect(RomanNumerals.fromRoman("C")).toBe(100);
    expect(RomanNumerals.fromRoman("CD")).toBe(400);
    expect(RomanNumerals.fromRoman("D")).toBe(500);
    expect(RomanNumerals.fromRoman("CM")).toBe(900);
    expect(RomanNumerals.fromRoman("M")).toBe(1000);
    expect(RomanNumerals.fromRoman("MMXXI")).toBe(2021);
  });
  test("It should convert a number to a Roman numeral", () => {
    expect(RomanNumerals.toRoman(3)).toBe("III");
    expect(RomanNumerals.toRoman(4)).toBe("IV");
    expect(RomanNumerals.toRoman(5)).toBe("V");
    expect(RomanNumerals.toRoman(8)).toBe("VIII");
    expect(RomanNumerals.toRoman(9)).toBe("IX");
    expect(RomanNumerals.toRoman(10)).toBe("X");
    expect(RomanNumerals.toRoman(40)).toBe("XL");
    expect(RomanNumerals.toRoman(50)).toBe("L");
    expect(RomanNumerals.toRoman(90)).toBe("XC");
    expect(RomanNumerals.toRoman(100)).toBe("C");
    expect(RomanNumerals.toRoman(400)).toBe("CD");
    expect(RomanNumerals.toRoman(500)).toBe("D");
    expect(RomanNumerals.toRoman(900)).toBe("CM");
    expect(RomanNumerals.toRoman(1000)).toBe("M");
    expect(RomanNumerals.toRoman(2021)).toBe("MMXXI");
  });
});
