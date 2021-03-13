function getMaxDigit(number) {
  return Math.max(...Array.from(String(number)).map((item) => parseInt(item)))
}
console.log("Max value in 087678908767890 is",getMaxDigit(087678908767890));

function getNumberDegree(number, degree) {
  let numberDegree = 1;
  let i = 0;
  if (degree >= 0) {
      while (i < degree) {
          numberDegree = numberDegree * number;
          i++;
      }
  }
  while (i > degree) {
      numberDegree = numberDegree * (1 / number);
      i--;
  }
  return numberDegree;
}
console.log("3 in 5 degree is", getNumberDegree(3, 5))

function nameFormating(str) {
  const lowerCaseString = str.toLowerCase()
  const firstLetter=lowerCaseString.charAt(0).toUpperCase();
  const replaceLetter=lowerCaseString.charAt(0)
  const formattedString=lowerCaseString.replace(replaceLetter, firstLetter);
return formattedString
}
console.log("Formated name is", nameFormating("iEVGEn"));

function incomeWithoutTax(salary) {
  const income = +salary;
  const taxPercent = 0.18 + 0.015;
  const netIncome = income - (income * taxPercent)
  return netIncome
}

console.log("Salary witout taxes is", incomeWithoutTax(1000));

function getRandomNumber(startNumber, endNumber) {
  const randomNumber = Math.round(Math.random() * (endNumber - startNumber)) + startNumber
return randomNumber;
}

console.log("Random number from the range between 5 and 10 is ", getRandomNumber(5, 10))


function countLetter(letter, str) {
   const strLowerCase=str.toLowerCase();
  const letterLowerCase=letter.toLowerCase();
  const stringLength = str.length;
  let counter = 0;
  let i = 0;
  while (i < stringLength) {
      if (strLowerCase.charAt(i) === letterLowerCase) {
          counter++
      }
      i++;
  }
  return counter;
}

console.log("The a is repeted in Afghjkertyui fnrtyu bxcvbnaa",countLetter("a", "afghjkertyui fnrtyu bxcvbnaa")+" times");