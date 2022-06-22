'use strict';

const wrapper = document.querySelector('.wrapper');
const tableList = document.querySelectorAll('td');
const table = document.querySelector('.table');
const span = document.createElement('span');

span.classList.add('span_text');
table.after(span);

function changeClass(element, nameClass, newClassName) {
    element.classList.remove(nameClass);
    element.classList.add(newClassName);

}

function generatorNumbers(min, max, count) {

    let numbers = [];

    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * (max - min)) + min)
    }
    return numbers;

}


wrapper.addEventListener('click', ({target}) => {

    if (target.classList.contains('square_item')) {
        const parent = target.parentNode;
        parent.removeChild(target);
        parent.appendChild(target);

    }

    if (target.classList.contains('square_empty')) {
        changeClass(target, 'square_empty', 'square_blue');

    } else if (target.classList.contains('square_blue')) {
        changeClass(target, 'square_blue', 'square_green');


    } else if (target.classList.contains('square_green')) {
        changeClass(target, 'square_green', 'square_yellow');


    } else if (target.classList.contains('square_yellow')) {
        changeClass(target, 'square_yellow', 'square_blue');


    }


})

let numberTable = generatorNumbers(1, 100, 9);

tableList.forEach((td, index) => {
    td.innerText = numberTable[index];
})


table.addEventListener('click', ({target}) => {
    if (target.nodeName === 'TD') {
        span.innerText = target.innerText;
    }
})


