

/* Create a Student class that has the same fields and methods as the Person class, and has the following additional

fields:
previousOrganization: the name of the student’s previous company / school
skippedDays: the number of days skipped from the course
methods:
getGoal(): prints out "Be a junior software developer."
introduce(): "Hi, I'm name, a age year old gender from previousOrganization who skipped skippedDays days from the course already."
skipDays(numberOfDays): increases skippedDays by numberOfDays
The Student class has the following constructors:

Student(name, age, gender, previousOrganization): beside the given parameters, it sets skippedDays to 0
Student(): sets name to Jane Doe, age to 30, gender to female, previousOrganization to The School of Life, skippedDays to 0 */

'use strict'

import { Person } from "./Person";

class Student extends Person {

    previousOrganization: string;
    skippedDay: number = 0;

    constructor(
        name: string = 'Joe Doe',
        age: number = 30,
        gender: string = 'female',
        previousOrganization: string = 'School of Life',
        skippedDay: number = 0,

    ) {
        super(name, age, gender);
        this.previousOrganization = previousOrganization;
        this.skippedDay = skippedDay;
    }
    public introduce () :any {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.}.`);
      }
      public getGoal() :any {
        console.log('My goal is: Live for the moment!');
      }
}
const student1 = new Student();

export{Student};