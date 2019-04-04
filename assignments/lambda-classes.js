// CODE here for your Lambda Classes
class Person {
    constructor(obj) {
        this.name = obj.name;
        this.location = obj.location;
        this.age = obj.age;
        this.gender = obj.gender;
    }

    speak() { console.log(`Hello my name is ${this.name}, I am from ${this.location}`) };
}

class Instructor extends Person {
    constructor(obj) {
        super(obj);
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    }

    demo(subject) { console.log(`Today we are learning about ${subject}`) };
    grade(student, subject) { console.log(`${student.name} receives a perfect score on ${subject}`) };
    updateGrade(student) {student.grade += 10*Math.random()-5};
}

class Student extends Person {
    constructor(obj) {
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;
        this.grade = obj.grade;
    }

    listsSubjects() { console.log(`My favorite subjects are: ${this.favSubjects}`) };
    PRAssignment(subject) { console.log(`${this.name} has submitted a PR for ${subject}`) };
    sprintChallenge(subject) { console.log(`${this.name} has begun sprint challenge on ${subject}`) };
    isGraduating() {return (this.grade > 70? true: false)};

}

class ProjectManagers extends Instructor {
    constructor(obj) {
        super(obj);
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    }

    standUp(channel) { console.log(`${this.name} announces to ${channel}, @channel standy times!`) };
    debugsCode(student, subject) { console.log(`${this.name} debugs ${student.name}'code on ${subject}`) };
}

const Joe = new Person({
    name: 'joe',
    location: 'Hayward',
    age : 45,
    gender: 'M'
});


const Nancy = new Student({
    name: 'Nancy',
    location: 'Fremont',
    age : 24,
    gender: 'F',
    previousBackground: 'Art',
    className: "Data Science",
    favSubjects: ['BlockChains', 'AI', 'TypeScript'],
    grade: 59
});

const Fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'M',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const Paul = new ProjectManagers( {
    name: 'Paul',
    location: 'Milpitas',
    age: 29,
    gender: 'M',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    gradClassName: 'CS1',
    favInstructor: 'Fred'
})

console.log("************** Person tests *****************")
Joe.speak();

console.log("************** Student tests *****************")
Nancy.speak();
Nancy.listsSubjects();
Nancy.PRAssignment('JavaScript');
Nancy.sprintChallenge('Flex Box');

console.log("************** Instructor tests *****************")
Fred.speak();
Fred.demo('Math');
Fred.grade(Nancy, 'Math');

console.log("************** ProjectManager tests *****************")
Paul.speak();
Paul.demo('Science');
Paul.grade(Nancy, 'Science');
Paul.standUp('Web19');
Paul.debugsCode(Nancy, 'JavaScript');


console.log("************** Stretch Goals *****************")

console.log("Instructor Fred is updating Nancy's grade");
console.log(`Before Nancy had: ${Nancy.grade}`);
Fred.updateGrade(Nancy);
console.log(`Now she has: ${Nancy.grade}`)

console.log("PM Paul is also updating Nancy's grade");
console.log(`Before Nancy had: ${Nancy.grade}`);
Paul.updateGrade(Nancy);
console.log(`Now she has: ${Nancy.grade}`)

console.log("**********Grading more aasignments until graduation or failure***************")
while(!Nancy.isGraduating()) {
    console.log(`Not ready to graduate yet, ${Nancy.name}'s grade is: ${Nancy.grade}`);
    Paul.updateGrade(Nancy);
    if (Nancy.grade < 50) break;
}

if (Nancy.isGraduating())
    console.log(`Nancy has finally graduated with a grade of ${Nancy.grade}`);
else
    console.log(`Sorry you have failed too many times your grade is now below 50: ${Nancy.grade} `);


