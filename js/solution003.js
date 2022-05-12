// DNA to RNA Conversion (5/12/22)

function DNAtoRNA(dna) {
  let arr = dna.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "T") {
      arr[i] = "U";
    }
  }
  return arr.join("");
}
