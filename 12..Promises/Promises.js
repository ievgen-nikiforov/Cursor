function waitSomeTime() {
  return new Promise(resolve => {
    setTimeout(
     resolve
    , 50);
  });
}
async function getRandomChinese (length){
  let chineseLetters="";
for (let index = 0; index < length; index++) {
  await waitSomeTime();
  let date = Date.now().toString().substring(8);
 chineseLetters += String.fromCharCode(date)
  
}
return chineseLetters
}
console.log(getRandomChinese(6).then (result => console.log(result)))