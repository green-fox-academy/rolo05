/* Create a Cohort class that has the following

fields:
name: the name of the cohort
students: a list of Students
mentors: a list of Mentors
methods:
addStudent(Student): adds the given Student to students list
addMentor(Mentor): adds the given Mentor to mentors list
info(): prints out 'The name cohort has students.size students and mentors.size mentors.'
The Cohort class has the following constructors:

Cohort(name): beside the given parameter, it sets students and mentors as empty lists */

'use strict'

import{ Person } from "./person";
import{ Student } from "./student";
import{ Mentor } from  "./mentor";

class Cohort{
    name:string;
    students:any[];
    mentors:any[];

    constructor(name:string,student:any[],mentor:any[]){
        this.name = name;
        this.students = student;
        this.mentors = mentor;
    }
    addStudent(Student){
        this.students.push(Student);
    }
    addMentor(Mentor){
        this.mentors.push(Mentor);
    }
    info(){
        return `The name cohort has ${this.students.length} students and ${this.mentors.length} mentors.`
    }
}
let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);

let jane = new Person();
people.push(jane);

let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

let student = new Student();
people.push(student);

let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

let mentor = new Mentor();
people.push(mentor);


for (let person of people) {
  person.introduce();
  person.getGoal();
}

let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();