/* Create a Counter class
which has an integer property
when creating it should have a default value 0 or we can specify it when creating
we can add(number) to increase the counter's value by a whole number
or we can add() without parameters just increasing the counter's value by one
and we can get() the current value as string
also we can reset() the value to the initial value */
'use strict'


export { };
class Counter {
    i = 0;
    k = 0;
    constructor(index: number) {
        this.i = index;
        this.k = index;
    }
    add(addnumber: number) {
        this.i + addnumber;
    }
    addByOne() {
        this.i++;
    }
    getvalue() {
        return this.i.toString();
    }
    resetcurrent() {
        this.i = this.k;
    }
}
const obj1 = new Counter(5);

