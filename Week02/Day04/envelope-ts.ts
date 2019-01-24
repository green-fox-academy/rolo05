'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function part1(){
    let x= 300;
    let y= 30;
    for(let i=0;i<15;i++){
        ctx.beginPath();
        ctx.moveTo(300,y);
        ctx.lineTo(x,300);
        ctx.stroke();
        ctx.strokeStyle = 'green';

        x = x - 20;
        y = y + 20;
    }

    function part2(){
        let x = 300;
        let y = 30;

    for(let i=0;i<15;i++){
        ctx.beginPath();
        ctx.moveTo(300,y);
        ctx.lineTo(x,300);
        ctx.stroke();
        ctx.strokeStyle = 'green';

        x = x + 20;
        y = y + 20;
    }
    }
    part2();

    
}
part1();

function part3(){
    let x = 300;
    let y = 570;
    for(let i=0;i<15;i++){

        ctx.beginPath();
        ctx.moveTo(300,y);
        ctx.lineTo(x,300);
        ctx.stroke();
        ctx.strokeStyle='green';
        x = x-20;
        y = y-20;
    }
}
part3();

function part4(){
    let x = 300;
    let y = 570;

    for(let i=0; i< 15; i++){

        ctx.beginPath();
        ctx.moveTo(300,y);
        ctx.lineTo(x,300);
        ctx.stroke();
        ctx.strokeStyle='green';
        x = x+20;
        y = y-20;

    }
}
part4();
