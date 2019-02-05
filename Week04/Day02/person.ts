/* Create a Person class with the following fields:

name: the name of the person
age: the age of the person (whole number)
gender: the gender of the person (male / female)
And the following methods:

introduce(): prints out "Hi, I'm name, a age year old gender."
getGoal(): prints out "My goal is: Live for the moment!"
And the following constructors:

Person(name, age, gender)
Person(): sets name to Jane Doe, age to 30, gender to female */

'use strict'

class Person{
    
    name:string;
    age:number;
    gender:string;

    constructor(a:string,b:number,c:string){
        this.name = a;
        this.age = b;
        this.gender = c;
    }

    introduce(name:string){
        return `Hi,Im ${this.name}, a ${this.age} years old ${this.gender}.`;
    }
    getGoal(){
        return 'My goal is: Live for the moment!'
    }

}
const person1 = new Person('Joe',30,'female');

const person2 = new Person('Roli',27,'male');

export{Person};
