// Complementary DNA

function DNAStrand(dna) {
  // P: String
  // R: String
  // E: DNAStrand('ATTGC') returns 'TAACG'
  // P:
  // Create new array for complementary DNA Strand
  // Split DNA strand into an array
  // For each 'A' on DNA strand push a 'T' on the complementary strand
  // For each 'G' on DNA strand push a 'C' on the complementary strand
  // For each 'C' on DNA strand push a 'G' on the complementary strand
  // For each 'A' on DNA strand push a 'T' on the complementary strand
  // Join new strand array into a string and return it

  let newStrand = [];
  let arr = dna.split("");
  arr.forEach((x) => {
    if (x === "A") {
      newStrand.push("T");
    } else if (x === "T") {
      newStrand.push("A");
    } else if (x === "G") {
      newStrand.push("C");
    } else {
      newStrand.push("G");
    }
  });
  return newStrand.join("");
}
