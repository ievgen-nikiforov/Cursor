let a=15.678;
let b=123.965;
let c=90.2345;
// max value

console.log("max value", (Math.max(a, b, c)));
// min value
console.log("min value",Math.min(a, b, c));
// summ
let summ=a+b+c;
console.log("summ of all values is summ=",summ);
// summ of rounded to the floow numbers
let roundSummValue=Math.floor(a)+Math.floor(b)+Math.floor(c)
console.log("summ of floor values",roundSummValue );

console.log("round to the hundreds", Math.ceil(roundSummValue/100)*100);

    

