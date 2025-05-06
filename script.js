let Box=document.querySelectorAll("#box");
let resetbtn= document.querySelector("#reset");
let NewBtn = document.querySelector("#new");
let msgcontainer = document.querySelector(".msg");
let para= document.querySelector("#msgg")
let count=0;
let turnO = true;
 const winpattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

Box.forEach((boxes)=>{
    boxes.addEventListener("click",()=>{
        count++;
        if(turnO){
            boxes.innerText="O";
            turnO=false;
            boxes.style.color="red";
        }
        else{
            boxes.innerText="X";
            boxes.style.color="blue";
            turnO=true;

        }
        boxes.disabled=true; 
        checkWinner();
    });
}) ;


const resetGame=()=>{
    turnO=true;
    count=0;
    enaableBox();
    msgcontainer.classList.add("hide");
};

const disableBox=()=>{
    for(let Boxes of Box){
        Boxes.disabled=true;
    }
}

const enaableBox=()=>{
    for(let Boxes of Box){
        Boxes.disabled=false;
        Boxes.innerText="";
    }
}

const showWinner=(winner)=>{
para.innerText=`Congratulations,Winner is ${winner}`;
msgcontainer.classList.remove("hide");
disableBox();
};

const checkWinner=()=>{
    let WinnerFound = false;
    for( let pattern of winpattern){
         let pos1val = Box[pattern[0]].innerText;
         let pos2val = Box[pattern[1]].innerText;
         let pos3val = Box[pattern[2]].innerText;
        
           if(pos1val !="" && pos2val!="" && pos3val != "" ){
            if(pos1val === pos2val && pos2val===pos3val){
                console.log("Winner",pos1val);
                showWinner(pos1val);
                WinnerFound = true;
                break;
            }
           }
        }
        if(!WinnerFound && count===9){
            para.innerText="It's a Draw ";
            msgcontainer.classList.remove("hide");
        }

    };
    
  NewBtn.addEventListener("click",resetGame);
  resetbtn.addEventListener("click",resetGame);