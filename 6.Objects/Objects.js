const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

  // function 1 - get subjects of the students
  function getSubjects(student){
    const {subjects, ...other} = student;
    const subjectsKeys = Object.keys(subjects);
    const subjectsOnly=[];
    subjectsKeys.forEach(element =>{
    element = element.replace(element.charAt(0), element.charAt(0).toUpperCase());
    subjectsOnly.push( element.toString().replace('_', ' '));    
    });
     return subjectsOnly
  }
  console.log("student[0] has subjects",getSubjects(students[0]))

  // function 2 - get avarage mark for the particular student
  function getAverageMark(student){
    const {subjects, ...other} = student;
    const subjectsEntries = Object.values(subjects);
    const marksString = subjectsEntries.join(",");
    const marksArray = marksString.split(",")
    let summ=0;
    marksArray.forEach(element => summ+= +element)
    const avarageMark=Math.round((summ/marksArray.length)*100)/100;
    return avarageMark

  }
  console.log("student[0] has avarage mark",getAverageMark(students[0]))

  //Function 3 - student's general info
  function getStudentInfo(student){
    const studentInfo = new Object();
    studentInfo.course = student.course;
    studentInfo.name = student.name;
    function getAverageMark(student){
        const {subjects, ...other} = student;
        const subjectsEntries = Object.values(subjects);
        const marksString = subjectsEntries.join(",");
        const marksArray = marksString.split(",")
        let summ=0;
        marksArray.forEach(element => summ+= +element)
        const avarageMark=Math.round((summ/marksArray.length)*100)/100;
        return avarageMark
      }
    studentInfo.averageMark = getAverageMark(student)
    return studentInfo
  }
  console.log("Student info",getStudentInfo(students[0]))

  //function 4 - returns students names in alphabetical order
  function getStudentsNames(students){
    const studentNames=[]
    students.forEach(element =>{
     studentNames.push(element.name)
    })
    return studentNames.sort();
    }
  console.log("Student info",getStudentsNames(students))
