// Categorize New Member

function openOrSenior(data) {
  // P: Array of arrays, with each individual array containing a pair of integers, first integer is the age and the second integer is their handicap
  // R: An array of string values 'Open' or 'Senior' depending on their age and handicap data
  // E: openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]) returns ['Open', 'Senior', 'Open', 'Senior']
  // P:
  // Create a new empty array for strings
  // Loop through arrays within the array to check if the first number is over 55, and if the second number is over 7
  // Push a 'Open' or 'Senior' string based on the pairs of numbers for each member
  // Return the array of strings

  let openSenior = [];

  data.forEach((x) => {
    if (x[0] >= 55 && x[1] > 7) {
      openSenior.push("Senior");
    } else {
      openSenior.push("Open");
    }
  });

  return openSenior;
}
