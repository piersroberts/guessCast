const guessCast = require("./main");

const cases = [
  ["true", true],
  ["TRUE", true],
  ["True", true],
  ["False", false],
  ["false", false],
  ["FALSE", false],
  ["1", 1],
  ["1.1", 1.1],
  ["-10", -10],
  ["-1.1", -1.1],
  ["0.2", 0.2],
  ["0.222", 0.222],
  ["12", 12],
  ["-100", -100],
  ["-9", -9],
  ["-0", -0],
  ["0", 0],
  ["1111111.111111", 1111111.111111],
  ["1+1", "1+1"],
  ["1x1", "1x1"],
  ["10x10", "10x10"],
  ["x1", "x1"],
  ["12.123.123", "12.123.123"],
  ["192.168.0.1", "192.168.0.1"],
  ["100.3000", 100.3],
  [".", "."],
  ["1,000", "1,000"],
  ["1+1", "1+1"],
  ["Infinity", "Infinity"],
  ["$100", "$100"],
  ["NaN", "NaN"],
  ["foo", "foo"],
  ["The Quick Brown Fox", "The Quick Brown Fox"],
  ["True Romance", "True Romance"],
];

describe("guesses value by type", () => {
  test.each(cases)("given %p arguments, returns %p", (arg, expectedResult) => {
    const result = guessCast(arg);
    expect(result).toEqual(expectedResult);
  });
});
