// Local deer huvisagch zarlah
let score = JSON.parse(localStorage.getItem("score")) || {
    yalalt: 0,
    ylagdal: 0,
    tentssen: 0,
}

updateScoreElement();

document.querySelector(".js-haich-button").addEventListener("click", ()=> {
    playGame("scissor")
});

document.querySelector(".js-chuluu-button").addEventListener("click", ()=> {
    playGame("rock")
});


document.querySelector(".js-daavuu-button").addEventListener("click", ()=> {
    playGame("paper")
});

function playComputer(){
    const randomNumber = Math.random();
    let computerMove = "";
    if(randomNumber >=0 && randomNumber <1/3){
        computerMove = "scissor";
    } else if (randomNumber >= 1/3 && randomNumber <2/3) {
        computerMove = "rock";
    } else if(randomNumber >= 2/3 && randomNumber <1){
        computerMove = "paper";
    }

    return computerMove;
}

function playGame(playUser){
    let result = "";
    const computer = playComputer();
    
    if(playUser === "scissor"){
        if(computer === "scissor"){
            result = "Тэнцлээ";
        } else if (computer === "rock"){
            result = "Та хожигдлоо";
        } else if (computer === "paper"){
            result = "Та хожлоо";
        }
    } else if (playUser === "rock") {
    
    if(playUser === "rock"){
        if(computer === "scissor"){
            result = "Та хожлоо";
        } else if (computer === "rock"){
            result = "Тэнцлээ";
        } else if (computer === "paper"){
            result = "Та хожигдлоо";
        }
    } }else if (playUser === "paper"){
    
        if(playUser === "paper"){
            if(computer === "scissor"){
                result = "Та хожигдлоо";
            } else if (computer === "rock"){
                result = "Та хожлоо";
            } else if (computer === "paper"){
                result = "Тэнцлээ";
            }}
    }

    // huvisagchiin utga olgoh
    if (result === "Та хожлоо"){
        score.yalalt +=1;
    } else if (result === "Та хожигдлоо"){
        score.ylagdal +=1;
    } else if (result === "Тэнцлээ"){
        score.tentssen +=1;
    }

    updateScoreElement();

    document.querySelector(
        ".result"
    ).innerHTML = result;
    document.querySelector(
        ".js-moves"
    ).innerHTML = `Та
    <img src="images/${playUser}-emoji.PNG" class="move-icon" >
    <img src="images/${computer}-emoji.PNG" class="move-icon" > Компьютер`
    ;
}

function updateScoreElement(){
    document.querySelector(
        ".js-score"
    ).innerHTML = `Ялалт: ${score.yalalt} , Ялагдал: ${score.ylagdal} , Тэнцсэн: ${score.tentssen} `
}

let isAutoPlaying = false;
let intervalId;
function autoPlay(){
    if(!isAutoPlaying){
        intervalId = setInterval(()=>{
            const playerMove = playComputer();
            playGame(playerMove);
        }, 1000);

        isAutoPlaying = true;
    } else{
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
}