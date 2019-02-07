
let test = require('tape').test;
import { Apple } from './apple';

test('applestring', t => {
    const obj1 = new Apple()
    const actual = obj1.getApple();
    const expected = 'apple'

    t.equal(actual, expected);
    t.end();
});




