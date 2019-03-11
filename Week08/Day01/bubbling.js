'use strict';

let nav = document.querySelector('nav');
    console.log(nav);
    let inspector = document.getElementsByTagName('img')[0];
    console.log(inspector);
    let counterX = 0;
    let counterY = 0;
    let counterZoom = 200;
    console.log(inspector);

    nav.addEventListener('click', (event) => {
      if (event.target.getAttribute("data-direction") === 'down') {
        inspector.style['background-repeat'] = 'no-repeat';
        inspector.style['background-position'] = `${counterX}px ${counterY += 10}px`;
      } else if (event.target.getAttribute("data-direction") === 'up') {
        inspector.style['background-repeat'] = 'no-repeat';
        inspector.style['background-position'] = `${counterX}px ${counterY -= 10}px`;
      } else if (event.target.getAttribute("data-direction") === 'right') {
        inspector.style['background-repeat'] = 'no-repeat';
        inspector.style['background-position'] = `${counterX += 10}px ${counterY}px`;
      } else if (event.target.getAttribute("data-direction") === 'left') {
        inspector.style['background-repeat'] = 'no-repeat';
        inspector.style['background-position'] = `${counterX -= 10}px ${counterY}px`;
      };
    });

    nav.addEventListener('click', (event) => {
      if (event.target.getAttribute("data-direction") === 'out') {
      inspector.style['background-repeat'] = 'no-repeat';
      inspector.style['background-size'] = `${counterZoom -= 20}%`;
      } else if (event.target.getAttribute("data-direction") === 'in') {
      inspector.style['background-repeat'] = 'no-repeat';
      inspector.style['background-size'] = `${counterZoom += 20}%`;
      }
    });