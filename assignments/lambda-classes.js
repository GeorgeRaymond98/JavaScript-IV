// CODE here for your Lambda Classes

class Person {
    constructor(attr) {
        this.name = attr.name,
        this.age = attr.age,
        this.location = attr.location
    }
    speak() {
        console.log( ` Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(attr) {
        super(attr);
        this.specialty = attr.specialty,
        this.favLanguage = attr.favLanguage,
        this.catchPhrase = attr.catchPhrase
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log( `${this.student} receives a perfect score on  ${subject}`);
    }
}

class Student extends Person {
    constructor(attr) {
        super(attr);
        this.previousBackground = attr.previousBackground,
        this.className = attr.className,
        this.favSubjects = attr.favSubjects
    }
    listsSubjects() {
        return this.favSubjects.forEach(function(item){
            return item;
        })
    }
    PRAssignment(subject) {
        console.log( `${this.student} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log( `${this.student} has begun sprint challenge on ${subject} `);
    }
}

class ProjectManger extends Instructor{
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName,
        this.favInstructor = attr.favInstructor
    }
    standUp(web25) {
        console.log( `${this.name} announces to ${web25} @channel standy times!`);
    }
    debugsCode(student,subject) {
        console.log( `${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}



const StudentOne = new Student({
    favSubjects: ['GYM','history','physics'],
    name: 'Shawn',
    previousBackground:'Ninja',
    className: 'Web25',
    age: 50,
    location: 'NYC',
    grade:60
  });

  const instructorOne = new Instructor({
    favSubjects: ['JavaScript','CSS','HTML'],
    name: 'Justin',
    catchPhrase:'How was your day',
    specialty: 'TL-ing',
    age: 26,
    location: 'Far Away',
  });

  const instructorTwo = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

instructorTwo.speak();
StudentOne.speak();
instructorOne.speak();