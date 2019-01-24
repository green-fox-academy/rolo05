'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function lineplay(){
    let x = 50;
    let y = 0;

    for(let i = 0; i<25; i++)
    { 
        ctx.beginPath();
        ctx.moveTo(x,0);
        ctx.lineTo(600,y);
        ctx.stroke();
        x = x + 30;
        y = y + 30;
    }

}
lineplay();

function lineplay2(){
    let x = 0;
    let y = 50;

    for(let i = 0; i<25; i++){

        ctx.beginPath();
        ctx.moveTo(0,y);
        ctx.lineTo(x,600);
        x = x + 30;
        y = y + 30;
        ctx.stroke();
        ctx.strokeStyle = 'red';

       
    }
}
lineplay2();

