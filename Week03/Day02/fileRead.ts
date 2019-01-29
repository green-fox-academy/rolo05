'use strick'
let =

try{
        
    if (fileContent !== undefined) {
        console.log(fileContent);
    }else {
        throw new Error('Zour file is empty');
    }
}catch(error){
    console.log(error.message);
}finally{
    console.log('I am still here!');
}