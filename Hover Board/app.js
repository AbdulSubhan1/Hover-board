const container = document.getElementById('container');
const colors = ['#e74c3c','#8e44ad','#3498db','#e67e22', '2ecc71'];
const squareNum = 500;

for(i = 0 ; i<squareNum; i++){
    const square = document.createElement('div');
    square.className = 'square';
    container.appendChild(square);

    square.addEventListener('mouseover', ()=>{
        setColor(square);
    });
    
    square.addEventListener('mouseout', ()=>{
        removeColor(square);
    });
    
}

function setColor(element){
    const color = setRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color} , 0 0 10px ${color}`;
}

function removeColor(element){
    element.style.background = '#444343';
	element.style.boxShadow = `0 0 2px #000`;

}

function setRandomColor(){
    return colors[Math.floor(Math.random()*colors.length)];
}