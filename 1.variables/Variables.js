let apple=15.678;
let bread=123.965;
let candy=90.2345;
// max value

console.log("max value", (Math.max(apple, bread, candy)));
// min value
console.log("min value",Math.min(apple, bread, candy));
// summ
let summ=apple+bread+candy;
console.log("summ of all values is summ=",summ);
// summ of rounded to the floow numbers
let roundSummValue=Math.floor(apple)+Math.floor(bread)+Math.floor(candy)
console.log("summ of floor values",roundSummValue );

console.log("round to the hundreds", Math.round(roundSummValue/100)*100);

console.log("boolean value if the floor summ is odd", Boolean(Math.floor(summ)%2));
console.log("change amount of 500 minus summ of prices", 500 -summ);
console.log("rounded avarage price", Math.round((summ/3)*100)/100);
let discountPercent=Math.random();
console.log("discount is", discountPercent);
let realCost=summ/2;
console.log("real Cost of the products is", realCost);
let discountValue=summ*discountPercent;
console.log("the value of discount", discountValue);
reducedProfit=realCost-discountValue;
console.log("the reduced profit after discount is", reducedProfit);
console.log("price to pay rounded", (Math.round((summ-discountValue)*100))/100);