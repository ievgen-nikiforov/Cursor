class Student {
    constructor(university, course, fullName) {
      this.university = university;
      this.course = course;
      this.fullName = fullName;   
    }

    // task 2 - getInfo()
    getInfo(){
        const info = "Student of the "+this.course+" course in "+this.university+", "+this.fullName;
        return info
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
    dismiss(){
        this.oldMarks=this.marks
        this.marks = null;
    }
    recover(){

        this.marks=this.oldMarks;
        return "Student is recovered"
    }
    }

  
  const user = new Student ("KPI", "4", "Test Testerok")
  console.log( user.constructor);
  console.log("getInfo >", user.getInfo())
  console.log("Marks are ", user.marks)
  user.setMarks = 5;
  console.log("When 5 added, marks are ", user.marks)
  console.log("Avarage mark is ", user.getAverageMark())
  user.dismiss();
  console.log("After user was dismissed, marks =", user.marks)
  console.log (user.recover());
  console.log("Marks which student had before dismissing ", user.marks)
