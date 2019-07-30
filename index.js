let color1 = 'green';
// let cells=[
//     [null, null, null],
//     [null, null, null],
//     [null, null, null]
// ];

let cells=[null,null, null, null, null, null, null, null, null];

//[0,1,2
// 3 4 5
// 6 7 8
//      ]

function checkColor() {
    if (color1==='green') {
        color1='red';
    } else {
        color1='green';
    }
}
function computerMove() {

}
function randomId(){
   return  Math.floor(Math.random()* Math.floor(9));
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
    }
    //CheckWinner
    if(
        checkLine(0,1,2) ||
        checkLine(3,4,5) ||
        checkLine(0,) ||
        checkLine(0,) ||
        checkLine(1,) ||
        checkLine(2,) ||
        checkLine(0,) ||
        checkLine(0,)
    ){
        document.getElementById('container').style.background = color1;
        alert('Winner ' +color1);
        reset();

    }
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





