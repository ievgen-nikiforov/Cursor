const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
// task 1 create couples boy+girl
// first couple
const couples=[];
const boys=[];
const girls=[];
 boys[0]=students.indexOf("Олександр");
girls[0]=students.indexOf("Олена");
//second couple
boys[1]=students.indexOf("Ігор");
girls[1]=students.indexOf("Іра");
//third couple
 boys[2]=students.indexOf("Олексій");
girls[2]=students.indexOf("Світлана");
function makeCouples(boys, girls){
for (let i=0; i<(students.length)/2;  i++) {
    couples[i]=[];
    couples[i].push(students[boys[i]]);
    couples[i].push(students[girls[i]]);  
}
return couples;
}
const pairs = makeCouples(boys, girls);
console.log("Couples ", pairs);

// task 2 - couple with Project
function coupleWithProject(couples, themes){
let couplesWithProject=[];
for (let i=0; i<(students.length)/2;  i++) {
    couplesWithProject[i]=[];
    couplesWithProject[i].push(couples[i].join(" i "));
    couplesWithProject[i].push(themes[i])
    
}
return couplesWithProject
}
const couplesWithProject= coupleWithProject(pairs, themes);
console.log("Couples with project: ",couplesWithProject)

// task 3 - put a mark to each student
function studentsWithMarks(students, marks){
const studentsWithMarks=[];
for (let index = 0; index < students.length; index++) {
   studentsWithMarks[index]=[];
   studentsWithMarks[index].push(students[index])
   studentsWithMarks[index].push(marks[index])
    
}
return studentsWithMarks
}
const evaouatedStudents=studentsWithMarks(students, marks);
console.log("Students with marks", evaouatedStudents );

//4 task - students couple with project and with marks
 function randomMark (couples, themes){
    let couplesWithMark=[];
    for (let i=0; i<(students.length)/2;  i++) {
        couplesWithMark[i]=[];
        couplesWithMark[i].push(couples[i].join(" i "));
        couplesWithMark[i].push(themes[i])
        const minMark=1
        const maxMark=5
        couplesWithMark[i].push (Math.round(Math.random() * (maxMark - minMark) + minMark))
    }
    return couplesWithMark
    }
    const coupleWithMark=randomMark(pairs, themes)
    console.log("Couples with marks", coupleWithMark)

