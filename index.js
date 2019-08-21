let color1 = 'green';
let cells=[null,null, null, null, null, null, null, null, null];

function checkColor() {
    if (color1==='green') {
        color1='red';
    } else {
        color1='green';
    }
}
function checkWinner() {
//CheckWinner
    if(
        checkLine(0,1,2) ||
        checkLine(3,4,5) ||
        checkLine(6,7,8) ||
        checkLine(0,3,6) ||
        checkLine(1,4,7) ||
        checkLine(2,5,8) ||
        checkLine(0,4,8) ||
        checkLine(2,4,6)
    ){
        document.getElementById('container').style.background = color1;
        alert('Winner ' +color1);
        reset();

    }
}
function checkClick (event){
    const element = event.target;
    //CheckColor
    const id =element.getAttribute('id');
    if (
        cells[id]===null
    )
    {  element.style.background = color1;
        cells[id]=color1;
        checkColor();
        checkWinner();
        computerMove();
    }

}

function computerMove(id) {

    id = Math.ceil(Math.random() * cells.length) - 1;
    cells.forEach(function(cell){
        if (cell==null) {
            cells[id] = color1;
        }
    });
checkColor();
checkWinner();
}
function checkLine(x, y, z) {
        return cells[x] != null && cells[x] === cells[y] && cells[y] === cells[z];
}
const element = document.getElementById('container');
element.addEventListener('click', checkClick,);



function reset () {
    cells=[null,null, null, null, null, null, null, null, null];
    for(let i = 0; i<9; i++){
            document.getElementById(i).style.background=''
    }
     document.getElementById('container').style.background='';
}
document.getElementById('resetGame').addEventListener('click', reset);





