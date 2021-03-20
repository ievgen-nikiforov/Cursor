class Student {
    constructor(university, course, fullName) {
      this.university = university;
      this.course = course;
      this.fullName = fullName;   
    }
    //task 3 - marks
    marks=[5, 4, 4, 5]
    get marks() {
        this.marks = marks;
        return this.marks;
      }
       //set new mark
    set setMarks (value){
        this.marks.push(value);
        return this.marks
    }
    getAverageMark(){
    const marks = this.marks;
    const sum = marks.reduce(function(sum, current) {
        return sum + current;
      }, 0);
      return this.avarageMark = sum / marks.length;

    }
    }

  
  const user = new Student ("KPI", "4", "Test Testerok")
  console.log(user);
  console.log("Marks are ", user.marks)
  user.setMarks = 5;
  console.log("Marks are ", user.marks)
  console.log("Marks are ", user.getAverageMark())
