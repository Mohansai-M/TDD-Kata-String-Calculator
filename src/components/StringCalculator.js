class StringCalculator {
  Add(input) {
    if (input === "") return 0;

    let delimiters = [",", "\n"];
    let numbersPart = input;

    if (input.startsWith("//")) {
      const delimiter = input[2];
      delimiters.push(delimiter);
      numbersPart = input.slice(4);
    }
    
    const splitRegex = new RegExp(delimiters.map((d) => d.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")).join("|"));
    const numberStrings = numbersPart.split(splitRegex);
     const numbers = numberStrings
     .map((n) => parseInt(n, 10))
     .filter((n) => !isNaN(n));

    const negatives = numbers.filter((n) => n < 0);
    if (negatives.length > 0) {
      throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
    }

   const sum = numbers
    .filter((n) => n <= 1000)
    .reduce((a, b) => a + b, 0);
    return sum;
  }
}

module.exports = StringCalculator;
