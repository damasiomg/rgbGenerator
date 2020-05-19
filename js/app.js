window.addEventListener('load', start);
var rangeInputs = {};
var relationshipInput = {};
var boxColor = document.querySelector('#box-color');

function start(){
    rangeInputs['red-range'] = document.querySelector('#red-range');
    rangeInputs['green-range'] = document.querySelector('#green-range');
    rangeInputs['blue-range'] = document.querySelector('#blue-range');
    relationshipInput['red-range'] = document.querySelector('#red-input');
    relationshipInput['green-range'] = document.querySelector('#green-input');
    relationshipInput['blue-range'] = document.querySelector('#blue-input');
    init();
}

function setInputValue(e){
    relationshipInput[e.target.id].value = e.target.value;
    boxColor.style.backgroundColor = calcRGB();
}

function init(){
    Object.keys(rangeInputs).map(key => {
        relationshipInput[key].value = rangeInputs[key].value;
        boxColor.style.backgroundColor = calcRGB();
        rangeInputs[key].addEventListener('change', setInputValue);
    })
}

function calcRGB() {
    return `rgb(
        ${rangeInputs['red-range'].value}, 
        ${rangeInputs['green-range'].value},
        ${rangeInputs['blue-range'].value}
    )`;
}