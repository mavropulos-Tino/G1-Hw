function Student(firstName, lastName, birthYear, academy, grades) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.birthYear = birthYear,
    this.academy = academy,
    this.grades = grades,

    this.getAge = function() {
        let currentYear = new Date().getFullYear();
        return currentYear - birthYear;
    },
    this.getInfo = function() {
        return `This is student ${this.firstName} ${this.lastName} from the academy ${this.academy}!`;
    },
    this.getGradesAverage = function() {
        let count = 0;
        for(let i=0; i<this.grades.length; i++) {
            count += i;
        }
        return count / this.grades.length;
    }

}


const student1 = new Student("Ana", "Petrovska", 2003, "Web Development", [9, 10, 8, 9]);
const student2 = new Student("Marko", "Stojanov", 2002, "Software Engineering", [8, 7, 9, 8]);
const student3 = new Student("Elena", "Ilievska", 2004, "Data Science", [10, 9, 9, 10]);



console.log(`getAge: ${student1.getAge()}, getInfo: ${student1.getInfo()}, getGradeAvrage: ${student1.getGradesAverage()}`);
console.log(`getAge: ${student2.getAge()}, getInfo: ${student2.getInfo()}, getGradeAvrage: ${student2.getGradesAverage()}`);
console.log(`getAge: ${student3.getAge()}, getInfo: ${student3.getInfo()}, getGradeAvrage: ${student3.getGradesAverage()}`);