// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function addOne(num:number){
    console.log(num);
    if(num ===0){
        return 0;
    }
    else{
        return num + addOne(num-1);
    }
}
console.log(addOne(5));