let container = document.querySelector(".container")

createGrid(16);

function clickButton(){
    let boxes=prompt("Enter a grid size:");
    while(boxes>100 || isNaN(boxes)){
        boxes=prompt("Invalid. Please enter a number between 1-100:")
    }
    if(boxes===null){}
    else{
    let del=document.querySelectorAll("#child")
    del.forEach((deleted)=>{
        container.removeChild(deleted)});
    createGrid(boxes)};
}

function createGrid(boxes){
for(let i=0; i<boxes; i++){
    let div=document.createElement("div");
    container.appendChild(div);
    div.setAttribute("id","child");
    for(let i=0; i<boxes; i++){
        let divChild=document.createElement("div");
        divChild.addEventListener('mouseover',function(){
            divChild.style.backgroundColor="black";
        })
        div.appendChild(divChild);
    }
}}



