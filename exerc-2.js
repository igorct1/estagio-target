const phrase = "JavaScript é uma ÓTIMA linguagem, mas prefiro JAvA.";

function normalize(phrase) {
  return phrase.toLowerCase().trim().split("");
}

function countOcurrenceLetterA(phrase) {
  const normalizedPhrase = normalize(phrase);

  // utilizando função pronta
  // return normalizedPhrase.filter((n) => n === "a").length;

  // na mão
  let count = 0;
  normalizedPhrase.forEach((letter) => {
    if (letter === "a") {
      count++;
    }
  });

  return count;
}

const letterACount = countOcurrenceLetterA(phrase);

if (letterACount > 0) {
  console.log(`A letra 'a' aparece ${letterACount} vez(es)`);
}
