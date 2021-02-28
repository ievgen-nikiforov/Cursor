function getMaxDigit(number) {
    const originNumber=number;
    let currentNumber;
    let previousNumber=0;
    let maxValue;
    while ((number)/10>0){
currentNumber=number%10;
maxValue = Math.max(currentNumber, previousNumber);
previousNumber=maxValue;
number= Math.floor(number/10);
    }
    console.log("Maximum digit out of "+originNumber+" is", maxValue);
  }
  getMaxDigit(087678908767890);

function getNumberDegree (number, degree){
    let numberDegree=1;
    let i=0;
    if (degree>=0){
    while (i<degree){
    numberDegree=numberDegree*number;
    i++;
        }}
while(i>degree){
    numberDegree=numberDegree*(1/number);
    i--;
}
console.log("Number "+number+" in degree "+degree+" equals "+numberDegree);
  }
  getNumberDegree(3,5)

  function nameFormating (str){
const firstLetter=str.charAt(0).toUpperCase();
let i=1;
const stringLength= str.length;
formatedName=firstLetter;
while (i<stringLength){
formatedName+=str.charAt(i).toLowerCase();
i++;
}
console.log("Formated name is", formatedName);

  }
  nameFormating("iEVGEn");

  function incomeWithoutTax (salary){
    const income=+salary;
    const taxPercent=0.18 + 0.015;
    const netIncome = income - (income*taxPercent)
    console.log("Salary witout taxes is ", netIncome)
  }

  incomeWithoutTax(1000);

  function getRandomNumber(startNumber, endNumber){
      const randomNumber = Math.round(Math.random()*(endNumber-startNumber))+startNumber
      console.log("Random number from the range between "+startNumber+" and "+ endNumber+" is "+randomNumber)
  }

  getRandomNumber(5,10)

  function countLetter(letter, str){
    const stringLength= str.length;
    let counter=0;
    let i=0;
    while (i<stringLength){
    if (str.charAt(i)===letter) {counter++}
    i++;
    }
    console.log ("The "+letter+" is repeted "+counter+" times in the "+str);
  }

  countLetter("a", "afghjkertyui fnrtyu bxcvbnaa")

