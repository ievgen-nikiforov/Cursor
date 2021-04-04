
console.log ("Task 1")
function* createIdGenerator(){
    let i = 0;
 while (true){
   i++;
  yield i;
 }
}
const idGenerator = createIdGenerator()
console.log ("idGenerator.next().value >",idGenerator.next().value)
console.log ("idGenerator.next().value >",idGenerator.next().value)
console.log ("idGenerator.next().value >",idGenerator.next().value)
console.log ("idGenerator.next().value >",idGenerator.next().value)

console.log ("Task 2")
function* newFontGenerator(font){
while (true){
    current =font;
    let changeFont = yield current;
    if (changeFont === "up"){
        font = font+2;
    }
    if (changeFont === "down"){
        font = font-2;
    }
    }
}
const fontGenerator = newFontGenerator(14);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next().value);
