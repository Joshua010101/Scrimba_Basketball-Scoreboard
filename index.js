const teamName1 = document.getElementById("team-1");
const teamName2 = document.getElementById("team-2");
const teamScore1 = document.getElementById("team-1-score");
const teamScore2 = document.getElementById("team-2-score");

let score1 = 0;
let score2 = 0;

function add1Team1() {
    score1 += 1;
    teamScore1.textContent = score1;
}

function add2Team1() {
    score1 += 2;
    teamScore1.textContent = score1;
}

function add3Team1() {
    score1 += 3;
    teamScore1.textContent = score1;
}

function add1Team2() {
    score2 += 1;
    teamScore2.textContent = score2;
    console.log("clicked")
}

function add2Team2() {
    score2 += 2;
    teamScore2.textContent = score2;
}

function add3Team2() {
    score2 += 3;
    teamScore2.textContent = score2;
}

function reset() {
    score1 = 0;
    score2 = 0;
    teamScore1.textContent = score1;
    teamScore2.textContent = score2;
}