const applePrice=15.678;
const breadPrice=123.965;
const candyPrice=90.2345;
// max value
const maxProductPrice=(Math.max(applePrice, breadPrice, candyPrice));
console.log("max value",maxProductPrice);
// min value
const minProductPrice=Math.min(applePrice, breadPrice, candyPrice)
console.log("min value",minProductPrice);
// summ
const summ=applePrice+breadPrice+candyPrice;
console.log("summ of all values is summ=",summ);
// summ of rounded to the floow numbers
const roundSummValue=Math.floor(applePrice)+Math.floor(breadPrice)+Math.floor(candyPrice)
console.log("summ of floor values",roundSummValue );
const roundToHundredsSummValue=Math.round(roundSummValue/100)*100
console.log("round to the hundreds", roundToHundredsSummValue);
const checkSummOdd=Boolean(Math.floor(summ)%2)
console.log("boolean value if the floor summ is odd",checkSummOdd );
const avaibleMoney=500;
const changeFromAvaiableMoney=avaibleMoney-summ;
console.log("change amount of 500 minus summ of prices", changeFromAvaiableMoney);
const roundedAvaragePrice=Math.round((summ/3)*100)/100
console.log("rounded avarage price", roundedAvaragePrice);
const realCost=summ/2;
console.log("real Cost of the products is", realCost);
const minDiscount=0;
const maxDiscount = summ;
const discountValue=Math.floor(Math.random() * (maxDiscount - minDiscount + 1)) + minDiscount;
console.log("the value of discount", discountValue);
reducedProfit=realCost-discountValue;
console.log("the reduced profit after discount is", reducedProfit);
const priceToPay=Math.round(((summ-discountValue)*100))/100;
console.log("price to pay rounded", priceToPay);