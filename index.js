let color1='green';
let cells=[
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function checkClick (cell, x, y){
        if (
        document.getElementById(cell).style.background !== 'green' &&
        document.getElementById(cell).style.background !=='red'
    ) {
        document.getElementById(cell).style.background = color1;
        cells[x][y]=color1;
    }

    //CheckColor
    if (color1==='green') {
        color1='red';
    } else if (color1==='red') {
        color1='green';
    }

    //CheckWinner
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
    }
}

document.getElementById('1').onclick = function () {
   checkClick('1', 0, 0);
        };

document.getElementById('2').onclick =function () {
    checkClick('2', 1, 0);
    };

document.getElementById('3').onclick =function () {
    checkClick('3', 2, 0);
    };

document.getElementById('4').onclick =function () {
    checkClick('4', 0, 1);
    };

document.getElementById('5').onclick =function () {
    checkClick('5', 1, 1);
    };

document.getElementById('6').onclick =function () {
    checkClick('6', 2, 1);
    };

document.getElementById('7').onclick =function () {
    checkClick('7', 0, 2);
    };

document.getElementById('8').onclick =function () {
    checkClick('8', 1, 2);
    };

document.getElementById('9').onclick =function () {
    checkClick('9', 2, 2);
    };
