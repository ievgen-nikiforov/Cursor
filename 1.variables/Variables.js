const applePrice=15.678;
const breadPrice=123.965;
const candyPrice=90.2345;
// max value

console.log("max value", (Math.max(applePrice, breadPrice, candyPrice)));
// min value
console.log("min value",Math.min(applePrice, breadPrice, candyPrice));
// summ
const summ=applePrice+breadPrice+candyPrice;
console.log("summ of all values is summ=",summ);
// summ of rounded to the floow numbers
const roundSummValue=Math.floor(applePrice)+Math.floor(breadPrice)+Math.floor(candyPrice)
console.log("summ of floor values",roundSummValue );

console.log("round to the hundreds", Math.round(roundSummValue/100)*100);

console.log("boolean value if the floor summ is odd", Boolean(Math.floor(summ)%2));
console.log("change amount of 500 minus summ of prices", 500 -summ);
console.log("rounded avarage price", Math.round((summ/3)*100)/100);
const discountPercent=Math.random();
console.log("discount is", discountPercent);
const realCost=summ/2;
console.log("real Cost of the products is", realCost);
const discountValue=summ*discountPercent;
console.log("the value of discount", discountValue);
reducedProfit=realCost-discountValue;
console.log("the reduced profit after discount is", reducedProfit);
console.log("price to pay rounded", (Math.round((summ-discountValue)*100))/100);