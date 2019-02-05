/* Create a Mentor class that has the same fields and methods as the Person class, and has the following additional

fields:
level: the level of the mentor (junior / intermediate / senior)
methods:
getGoal(): prints out "Educate brilliant junior software developers."
introduce(): "Hi, I'm name, a age year old gender level mentor."
The Mentor class has the following constructors:

Mentor(name, age, gender, level)
Mentor(): sets name to Jane Doe, age to 30, gender to female, level to intermediate */

'use strict'

import { Person } from "./person";

class Mentor extends Person{
    level:string;

    constructor(
    a: string = 'Joe Doe',
    b: number = 30,
    c: string = 'female',
    d: string = 'intermediate',

    ){
    super(a,b,c);

    this.level = d;
    }
    getGoal(){
        return 'Educate brilliant junior software developer!'
    }

    introduce(){
        return `Hi, Im${this.name} , a  ${this.age} year old ${this.gender} level mentor.`
    }

}
const mentor1 = new Mentor();
export{Mentor};