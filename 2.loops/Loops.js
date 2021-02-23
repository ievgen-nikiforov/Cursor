let N = prompt("Please input integer N=");
numberN=Number(N);
while (!Number.isInteger(numberN)||isNaN(numberN)||N==="")
{ 
    N = prompt("Please input proper integer N=");
    numberN=Number(N);
} 
console.log("N=", numberN);

let M = prompt("Please input integer M=");
numberM=Number(M);

    while (!Number.isInteger(numberM)||isNaN(numberM)||M==="")
{ 
    M = prompt("Please input proper integer M=");
    numberM=Number(M);
    
} 
console.log("M=", numberM);


   let  omitEven = confirm("Should we omit even numbers?");
     let Summ=0;
     for (let i=numberN; i<=numberM; i++){
       if (omitEven===true){
           if (i%2===1){
        Summ=Summ+i;}
        else
        {continue}
       }
        else {
            Summ=Summ+i;
        }
        

    }
    console.log("Summ =", Summ);
    
