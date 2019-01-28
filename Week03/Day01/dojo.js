// game loop
let nowTX = initialTX;
let nowTY = initialTY;

while (true) {


const remainingTurns = parseInt(readline());

if(lightX > nowTX  && lightY < nowTY){
    nowTX++;
    nowTY--;
    print('NE');
}
if(lightX > nowTX && lightY > nowTY){
    nowTX++;
    nowTY++;
    print('SE');
}
if(lightX < nowTX && lightY > nowTY ){
    nowTX--;
    nowTY++;
    print('SW');
}
if(lightX < nowTX  && lightY < nowTY){
    nowTX--;
    nowTY--;
    print('NW');
}


if(lightY === nowTY && lightX < nowTX){
    nowTX--;
    //nowTY
    print('W');
}
if(lightY === nowTY && lightX > nowTX){
    nowTX++;
   // nowTY
    print('E');
}
if(lightX === nowTX && lightY > nowTY){
    //nowTX
    nowTY++;
    print('S');
}
if(lightX === nowTX && lightY < nowTY){
    //nowTX
    nowTY--;
    print('N');
}
}
