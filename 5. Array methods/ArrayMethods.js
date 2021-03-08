//function number 1 - getRandomArray
function getRandomArray(length, min, max) {
    const randomArray = [];
    for (let index = 0; index < length; index++) {
      randomArray[index] = Math.round(Math.random() * (max - min)) + min;
    }
    return randomArray;
  }
  const arr = getRandomArray(5, 10, 20);
  console.log("getRandomArray with 5 numbers with min = 10 and max=20)=", arr);
  
  // function number 3 getAverage(...numbers)
  function getAverage(...numbers) {
    let numbersLength = 0;
    let sum = 0;
    let avarage;
    for (let number of numbers) {
      if (Number.isInteger(+number)) {
        sum = sum + number;
        numbersLength++;
      } else {
        continue;
      }
    }
    avarage = sum / numbersLength;
    return avarage;
  }
  const avarageValue = getAverage(
    6,
    2,
    55,
    11,
    78,
    2,
    55,
    77,
    57,
    87,
    23,
    2,
    56,
    3,
    2
  );
  console.log(
    "Avarage for (6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) is ",
    avarageValue
  );
  
  //function 4 - getMedian(...numbers)
  function getMedian(...numbers) {
    const array = [];
    let mediana;
    for (let number of numbers) {
      if (Number.isInteger(number)) {
        array.push(number);
      } else {
        continue;
      }
    }
    // sort array to asc
    array.sort(function (a, b) {
      return a - b;
    });
    if (array.length % 2 === 0) {
      mediana = (array[array.length / 2 - 1] + array[array.length / 2]) / 2;
    } else {
      mediana = array[Math.floor(array.length / 2)];
    }
  
    return mediana;
  }
  const calculateMediana = getMedian(
    6,
    2,
    55,
    11,
    78,
    2,
    55,
    77,
    57,
    87,
    23,
    2,
    56,
    3,
    2
  );
  console.log(
    "Mediana of 6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2 is ",
    calculateMediana
  );
  
  // function 5 filters the even numbers
  
  function filterEvenNumbers(...numbers) {
    const array = [];
    for (let number of numbers) {
      if (!(+number % 2 === 0)) {
        array.push(number);
      }
    }
    return array;
  }
  console.log(
    "Filtered numbers 1, 2, 3, 4, 5, 6 without even numbers is ",
    filterEvenNumbers(1, 2, 3, 4, 5, 6)
  );
  
  // function #6 count positive numbers
  function countPositiveNumbers(...numbers) {
    let counter = 0;
    for (let number of numbers) {
      if (number > 0) {
        counter++;
      }
    }
    return counter;
  }
  const positiveNumbersCount = countPositiveNumbers(1, -2, 3, -4, -5, 6);
  console.log(
    "Number of positive numbers in 1, -2, 3, -4, -5, 6 is ",
    positiveNumbersCount
  );
  
  //function #7  - getDividedByFive(...numbers)
  
  function getDividedByFive(...numbers) {
    const array = [];
    for (let number of numbers) {
      if (number % 5 === 0) {
        array.push(number);
      }
    }
    return array;
  }
  const arrayDevidedByFive = getDividedByFive(
    6,
    2,
    55,
    11,
    78,
    2,
    55,
    77,
    57,
    87,
    23,
    2,
    56,
    3,
    2
  );
  console.log(
    " from 6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2 only ",
    arrayDevidedByFive,
    "divided by five"
  );
  