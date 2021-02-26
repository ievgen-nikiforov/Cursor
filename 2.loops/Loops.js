
let startNumberOfRange=null;
while (!Number.isInteger(startNumberOfRange)||!startNumberOfRange)
{ 
    startNumberOfRange = +prompt("Please input proper integer N=");
} 
console.log("N=", startNumberOfRange);

let endNumberOfRange=null;

    while (!Number.isInteger(endNumberOfRange)||!endNumberOfRange)
{ 
    endNumberOfRange = +prompt("Please input proper integer M=");
    
} 
console.log("M=", endNumberOfRange);


   const  omitEven = confirm("Should we omit even numbers?");
     let Summ=0;
     for (let i=startNumberOfRange; i<=endNumberOfRange; i++){
       if (omitEven&&i%2===0){
            continue }    
           
           Summ+=i; 
    }
    console.log("Summ =", Summ);
    
