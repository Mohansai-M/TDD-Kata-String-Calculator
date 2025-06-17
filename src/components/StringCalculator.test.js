const StringCalculator = require("./StringCalculator");

describe("StringCalculator Basic", () => {
  let sc;

  beforeEach(() => {
    sc = new StringCalculator();
  });

  test("empty string returns 0", () => {
    expect(sc.Add("")).toBe(0);
  });

  test("one number returns that number", () => {
    expect(sc.Add("1")).toBe(1);
  });

  test("two numbers returns their sum", () => {
    expect(sc.Add("1,2")).toBe(3);
  });

  test("unknown amount of numbers", () => {
    expect(sc.Add("1,2,3,4,5")).toBe(15);
  });

  test("new lines as delimiter", () => {
    expect(sc.Add("1\n2,3")).toBe(6);
  });

  test("throws on single negative number", () => {
    expect(() => sc.Add("1,-2,3")).toThrow("negatives not allowed: -2");
  });

  test("throws on multiple negatives", () => {
    expect(() => sc.Add("1,-2,-3")).toThrow("negatives not allowed: -2, -3");
  });

  test("numbers greater than 1000 are ignored", () => {
    expect(sc.Add("2,1001")).toBe(2);
  });
  test("support single character custom delimiter", () => {
    expect(sc.Add("//;\n1;2")).toBe(3);
  });
});
