let numbers = document.querySelectorAll('.button-number');
let operations = document.querySelectorAll('.button-option');
let eq = document.getElementById('equ');
let ac = document.getElementById('ac');
let c = document.getElementById('c');
let screen = document.querySelector('.screen-value');
let current = '';
let a = '';
let b = '';
let action = '';

for ( let i = 0; i < numbers.length; i++){
    let num = numbers[i];
    num.addEventListener('click', function (e) {
        numberPress(num.id);
    })
}

for ( let i = 0; i < operations.length; i++) {
    let ops = operations[i];
    ops.addEventListener('click', function (e){
        optionPress(ops.id);
    })
}

ac.addEventListener('click', function (e){
    current = '';
    screen.value = current;
    a = '';
    b = '';
    action = '';
});

c.addEventListener('click', function (e){
    current = current.substring(0, current.length - 1);
    screen.value = current;
});

eq.addEventListener('click', function (e) {
    onEqPress(a,current,action);
});

function numberPress (id) {
    switch(id){
        case 'one':
            current+='1';
            break;
        case 'two':
            current+='2';
            break;
        case 'three':
            current+='3';
            break;
        case 'four':
            current+='4';
            break;
        case 'five':
            current+='5';
            break;
        case 'six':
            current+='6';
            break;
        case 'seven':
            current+='7';
            break;
        case 'eigth':
            current+='8';
            break;
        case 'nine':
            current+='9';
            break;
        case 'zzero':
            current+='0';
            break;
        case 'dott':
            current+='.';
            break;
    }
    screen.value = current;
}

function optionPress(id) {
        action = id;
        a = screen.value;
        current = '';
}

function onEqPress(a,total,action){
    b = total;
    if (action === 'plus'){
        total = Number(a) + Number(b);
        b = '';
        a = total.toString();
        screen.value = total.toString();
    }
    if (action === 'minus'){
        total = Number(a) - Number(b);
        b = '';
        a = total.toString();
        screen.value = total.toString();
    }
    if (action === 'multiply'){
        total = Number(a) * Number(b);
        b = '';
        a = total.toString();
        screen.value = total.toString();
    }
    if (action === 'divide'){
        total = Number(a) / Number(b);
        b = '';
        a = total.toString();
        screen.value = total.toString();
    }

}