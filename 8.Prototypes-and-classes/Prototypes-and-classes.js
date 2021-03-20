class Student {
    constructor(university, course, fullName) {
      this.university = university;
      this.course = course;
      this.fullName = fullName;   
    }
    //task 3 - marks
    marks = [5, 4, 4, 5];
    get marks() {
        this.marks=marks;
        return this.marks;
      }
    }
  
  
  const user = new Student("KPI", "4", "Test Testerok")
  console.log(user);
  console.log("Marks are ", user.marks)