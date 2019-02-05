// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).
'use strict'
export { };
 function elSum(n:number){
    let k = n;
        if(n.toString().length > 1) {
        k = k / 10 ** (n.toString().length - 1);
        k = Math.floor(k);
        //k = n - k * 10**(n.toString().length -1);
        //console.log(n);
        return k + elSum(n % 10**(n.toString().length -1));
        }
    else if(n.toString().length===1){
        return n;
    }
    else{
        return 0;
    }
}
console.log(elSum(111111));

/* function elSum(n:number){
    let k = n;
    if(n.toString().length > 0){
        n.
    }

} */