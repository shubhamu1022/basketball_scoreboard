// let home_one = document.getElementById("home_one");
// let home_two = document.getElementById("home_two");
// let home_three = document.getElementById("home_three");
// let guest_one = document.getElementById("guest_one");
// let guest_two = document.getElementById("guest_two");
// let gues_three = document.getElementById("guest_three");
// let home_reset = document.getElementById("home_reset");
// let guest_reset = document.getElementById("guest_reset");
let home_score = document.getElementById("home-score");
let guest_score = document.getElementById("guest-score");

function homePlusOne(){
    let newScore = Number(home_score.innerText) + 1;
    home_score.innerText = newScore;

}

function homePlusTwo(){
    let newScore = Number(home_score.innerText) + 2;
    home_score.innerText = newScore;
}

function homePlusThree(){
    let newScore = Number(home_score.innerText) + 3;
    home_score.innerText = newScore;
}

function homeReset(){
    home_score.textContent = 00;
}

function guestPlusOne(){
    let newScore = Number(guest_score.innerText) + 1;
    guest_score.innerText = newScore;

}

function guestPlusTwo(){
    let newScore = Number(guest_score.innerText) + 2;
    guest_score.innerText = newScore;
}

function guestPlusThree(){
    let newScore = Number(guest_score.innerText) + 3;
    guest_score.innerText = newScore;
}

function guestReset(){
    guest_score.textContent = 00;
}