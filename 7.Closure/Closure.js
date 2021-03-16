const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };
//function 1 -> get the tax by the country and salary
function getMyTaxes(salary) {
  return this.tax * salary;
}
console.log(
  "For ukraine and salary 2000, the tax is",
  getMyTaxes.call(ukraine, 2000)
);

// function 2 -> avarage tax calculation
function getMiddleTaxes() {
  return this.tax * this.middleSalary;
}
console.log("For latvia avarage taxes are", getMiddleTaxes.call(latvia));

//function3 -  getTotalTaxes
function getTotalTaxes() {
  return this.tax * this.middleSalary * this.vacancies;
}
console.log(
  "Total amount of tax payment for litva is",
  getTotalTaxes.call(litva)
);

// function 4 - salary random object each 10 sex
function getMySalary() {
  const self = this;
  function callObject() {
    const salaryValue = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
    const taxes = self.tax * salaryValue;
    const salaryObject = {
      salary: salaryValue,
      taxes: taxes,
      profit: salaryValue - taxes,
    };
    console.log(salaryObject);
  }
  setInterval(function () {
    callObject();
  }, 10000);
}

getMySalary.call(ukraine);
