class StringCalculator {
  constructor() {
    this.callCount = 0;
  }

  Add(input) {
    this.callCount++;
    if (input === "") return 0;

    let delimiters = [",", "\n"];
    let numbersPart = input;

    if (input.startsWith("//")) {
      const match = input.match(/^\/\/(\[.*\])+\n/);

      if (match) {
        const allDelimiters = [...match[1].matchAll(/\[([^\]]+)\]/g)].map(
          (m) => m[1]
        );
        delimiters = delimiters.concat(allDelimiters);
        numbersPart = input.slice(match[0].length);
      } else {
        const delimiter = input[2];
        delimiters.push(delimiter);
        numbersPart = input.slice(4);
      }
    }

    const splitRegex = new RegExp(
      delimiters
        .map((d) => d.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"))
        .join("|")
    );
    const numberStrings = numbersPart.split(splitRegex);
    const numbers = numberStrings
      .map((n) => parseInt(n, 10))
      .filter((n) => !isNaN(n));

    const negatives = numbers.filter((n) => n < 0);
    if (negatives.length > 0) {
      throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
    }

    const sum = numbers.filter((n) => n <= 1000).reduce((a, b) => a + b, 0);
    return sum;
  }
  GetCalledCount() {
    return this.callCount;
  }
}

module.exports = StringCalculator;
