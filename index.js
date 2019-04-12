let color1='green';
let cells=[
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
function checkClick (event){
    const element = event.target;
    //CheckColor
    if (color1==='green') {
        color1='red';
    } else if (color1==='red') {
        color1='green';
    }
    if (
        element.style.background !== 'green' &&
        element.style.background !=='red'
    ) {
        element.style.background = color1;
        cells[element.getAttribute('x')][element.getAttribute('y')]=color1;
    }
    //CheckWinner
    if(
        checkLine(0,0,1,0,2,0) ||
        checkLine(0,1,1,1,2,1) ||
        checkLine(0,2,1,2,2,2) ||
        checkLine(0,0,0,1,0,2) ||
        checkLine(1,0,1,1,1,2) ||
        checkLine(2,0,2,1,2,2) ||
        checkLine(0,0,1,1,2,2) ||
        checkLine(0,2,1,1,2,0)
    ){
        document.getElementById('container').style.background = color1;
    }
}
function checkLine(x1, x2, y1, y2, z1, z2) {
        return cells[x1][x2] != null && cells[x1][x2] === cells[y1][y2] && cells[y1][y2] === cells[z1][z2];
}
const element = document.getElementById('container');
element.addEventListener('click', checkClick);
function reset () {
    cells=[
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    for(let i = 1; i<10; i++){
            document.getElementById(i).style.background=''
    }
     document.getElementById('container').style.background='';
}
document.getElementById('resetGame').addEventListener('click', reset);