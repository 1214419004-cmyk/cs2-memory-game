console.log("Script started")

let guesses = 0;
let firstCardId = "";
let secondCardId = "";

function flipCard(cardId){
    console.log("Click");
    let P1 = document.getElementById(cardId);
    P1.style.color = "white";
    P1.style.backgroundColor = "Orange";

    if(firstCardId == "") {
        firstCardId = cardId;
    }
    else {
        secondCardId = cardId;

        setTimeout(checkForMatch, 500);
    }

}

function checkForMatch() {
    let card1 = document.getElementById(firstCardId);
    let card2 = document.getElementById(secondCardId);

    if (card1.innerText == card2.innerText) {
        console.log("Match");   
        card1.style.backgroundColor = "lightgreen";
        card2.style.backgroundColor = "lightgreen";
    }
    else {
        card1.style.backgroundColor = "purple";
        card2.style.backgroundColor = "purple";
        card1.style.color = "purple";
        card2.style.color = "purple";
    }

    firstCardId = "";
    secondCardId = "";
}