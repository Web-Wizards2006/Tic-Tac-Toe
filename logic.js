let btn=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newbtn=document.querySelector("#newgame");
let msgcontainer=document.querySelector(".win");
let msg=document.querySelector("#msg");


let winPattrens=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let count=0;
let turn0=true;

const resetGame=()=>{
    turn0=true;
    enableAllButtons();
    btn.forEach((element) => {
        element.innerText = ""; // Clear the text for each button
    });
    msgcontainer.classList.add("hide");
}
newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);

btn.forEach((element) => {
    element.addEventListener("click",()=>{
        if(turn0){
            element.innerText="O";
            turn0=false;
            count++
        }
        else{
            element.innerText="X";
            turn0=true;
            count++
        }
        element.disabled=true;
        checkwinner();
        if(count==9){
            resetGame();
        }
    })
});

const checkwinner = () => {
    for (let pat of winPattrens) { 
        let p1 = btn[pat[0]].innerText;
        let p2 = btn[pat[1]].innerText;
        let p3 = btn[pat[2]].innerText;

        if (p1 !== "" && p2 !== "" &&  p3 !==""){
         if( p1 === p2 && p2 === p3) {
            console.log(`Winner is player ${p1}`);
            showWinner(p1);
            disableAllButtons(); 
            return;
        }
    }
}};

const disableAllButtons = () => {
    btn.forEach((element) => {
        element.disabled = true; 
    });
};

const enableAllButtons = () => {
    btn.forEach((element) => {
        element.disabled = false; 
    });
};


const showWinner=(winner)=>{
    msg.innerText=`Congratulations winner is ${winner}`
    msgcontainer.classList.remove("hide");
}

const changeTheme=()=>{
   btn.classList.add("box1");
 };

btn.forEach((element)=>{
    btn.addEventListener("click",()=>{
        theme.classList.add("box1");
    })
});



