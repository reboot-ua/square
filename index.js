let color1= 'green';
let cells =[[null, null, null],
            [null, null, null],
            [null, null, null]];

function checkColor() {
    if (color1 === 'green') {
        color1='red';
    } else if (color1 === 'red') {
        color1 = 'green';
    }
}

function checkWinner () {
    if(
        (cells[0][0] != null && cells[0][0] === cells[1][0] && cells[1][0] === cells[2][0]) ||
            (cells[0][1] != null && cells[0][1] === cells[1][1] && cells[2][1] === cells[1][1]) ||
            (cells[0][2] != null && cells[0][2] === cells[1][2] && cells[1][2] === cells[2][2]) ||
            (cells[0][0] != null && cells[0][0] === cells[0][1] && cells[0][1] === cells[0][2]) ||
            (cells[1][0] != null && cells[1][0] === cells[1][1] && cells[1][1] === cells[1][2]) ||
            (cells[2][0] != null && cells[2][0] === cells[2][1] && cells[2][1] === cells[2][2]) ||
            (cells[0][0] != null && cells[0][0] === cells[1][1] && cells[1][1] === cells[2][2]) ||
            (cells[0][2] != null && cells[0][2] === cells[1][1] && cells[1][1] === cells[2][0])
    ){
        document.getElementById('container').style.background = color1;
        alert('Winner '+ color1)
        }
}
// function endGame (){
// if (document.getElementById('container').style.background === color1) {
// alert('winner' + color1)
// }
// }
document.getElementById('1').onclick = function () {
    if (
        document.getElementById('1').style.background !== 'green' &&
        document.getElementById('1').style.background !=='red'
    ) {
        document.getElementById('1').style.background = color1;
        cells[0][0]=color1;
        checkWinner();
        checkColor();
        }
};

document.getElementById('2').onclick =function () {
    if (
        document.getElementById('2').style.background !== 'green' &&
        document.getElementById('2').style.background !=='red'
    ) {

        document.getElementById('2').style.background = color1;
        cells[1][0]=color1;
        checkWinner();
        checkColor();
    }
};

document.getElementById('3').onclick =function () {
    if (
        document.getElementById('3').style.background !== 'green' &&
        document.getElementById('3').style.background !=='red'
    ) {

        document.getElementById('3').style.background = color1;
        cells[2][0]=color1;
        checkWinner();
        checkColor();
    }
};

document.getElementById('4').onclick =function () {
    if (
        document.getElementById('4').style.background !== 'green' &&
        document.getElementById('4').style.background !=='red'
    ) {
        document.getElementById('4').style.background = color1;
        cells[0][1]=color1;
        checkWinner();
        checkColor();
    }
};

document.getElementById('5').onclick =function () {
    if (
        document.getElementById('5').style.background !== 'green' &&
        document.getElementById('5').style.background !=='red'
    ) {
        document.getElementById('5').style.background = color1;
        cells[1][1]=color1;
        checkWinner();
        checkColor();
    }
};

document.getElementById('6').onclick =function () {
    if (
        document.getElementById('6').style.background !== 'green' &&
        document.getElementById('6').style.background !=='red'
    ) {
        document.getElementById('6').style.background = color1;
        cells[2][1]=color1;
        checkWinner();
        checkColor();
    }
};

document.getElementById('7').onclick =function () {
    if (
        document.getElementById('7').style.background !== 'green' &&
        document.getElementById('7').style.background !=='red'
    ) {

        document.getElementById('7').style.background = color1;
        cells[0][2]=color1;
        checkWinner();
        checkColor();
    }
};

document.getElementById('8').onclick =function () {
    if (
        document.getElementById('8').style.background !== 'green' &&
        document.getElementById('8').style.background !=='red'
    ) {

        document.getElementById('8').style.background = color1;
        cells[1][2]=color1;
        checkWinner();
        checkColor();
    }
};

document.getElementById('9').onclick =function () {
    if (
        document.getElementById('9').style.background !== 'green' &&
        document.getElementById('9').style.background !=='red'
    ) {

        document.getElementById('9').style.background = color1;
        cells[2][2]=color1;
        checkWinner();
        checkColor();
    }
};
