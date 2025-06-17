class StringCalculator {
  Add(input) {
    if (input === "") return 0;

    const delimiters = [",", "\n"];
    const splitRegex = new RegExp(delimiters.join("|"));
    const numberStrings = input.split(splitRegex);
    const numbers = numberStrings
      .map((n) => parseInt(n, 10))
      .filter((n) => !isNaN(n));

    const negatives = numbers.filter((n) => n < 0);
    if (negatives.length > 0) {
      throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
    }

    const sum = numbers.reduce((a, b) => a + b, 0);
    return sum;
  }
}

module.exports = StringCalculator;
