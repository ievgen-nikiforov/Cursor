const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
// task 1 create couples 
function makeCouples(students) {
    const couples = [];
    for (let i = 0; i < (students.length) / 2; i++) {
        couples[i] = [students[i], students[students.length - i - 1]];
    }
    return couples;
}
const pairs = makeCouples(students);
console.log("Couples ", pairs);

// task 2 - couple with Project
function coupleWithProject(couples, themes) {
    let couplesWithProject = [];
    for (let i = 0; i < (students.length) / 2; i++) {
        couplesWithProject[i] = [couples[i].join(" i "), themes[i]];
    }
    return couplesWithProject
}
const couplesWithProject = coupleWithProject(pairs, themes);
console.log("Couples with project: ", couplesWithProject)

// task 3 - put a mark to each student
function studentsWithMarks(students, marks) {
    const studentsWithMarks = [];
    for (let index = 0; index < students.length; index++) {
        studentsWithMarks[index] = [students[index], marks[index]];

    }
    return studentsWithMarks
}
const evaouatedStudents = studentsWithMarks(students, marks);
console.log("Students with marks", evaouatedStudents);

//4 task - students couple with project and with marks
function randomMark(couples, themes) {
    let couplesWithMark = [];
    const minMark = 1
    const maxMark = 5
    for (let i = 0; i < (students.length) / 2; i++) {
        couplesWithMark[i] = [couples[i].join(" i "),themes[i]];   
        couplesWithMark[i].push(Math.round(Math.random() * (maxMark - minMark) + minMark))
    }
    return couplesWithMark
}
const coupleWithMark = randomMark(pairs, themes)
console.log("Couples with marks", coupleWithMark)