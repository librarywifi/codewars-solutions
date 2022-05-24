// Vowel Count

// P: string
// R: integer, number of vowels not including y
// E: getCount("hello") returns 2
// P:
// Create a variable to count number of vowels
// Loop through string and check if letter is a vowel
// Increase vowel count by one for each vowel found
// Return vowel count

function getCount(str) {
  let vowelsCount = 0;

  // enter your majic here

  for (let i = 0; i < str.length; i++) {
    if (str[i].includes("a")) {
      vowelsCount++;
    }
    if (str[i].includes("e")) {
      vowelsCount++;
    }
    if (str[i].includes("i")) {
      vowelsCount++;
    }
    if (str[i].includes("o")) {
      vowelsCount++;
    }
    if (str[i].includes("u")) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}
