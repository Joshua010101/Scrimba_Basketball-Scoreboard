const teamInput1 = document.getElementById("team-1");
const teamInput2 = document.getElementById("team-2");
const teamScore1 = document.getElementById("team-1-score");
const teamScore2 = document.getElementById("team-2-score");
const teamNameBtn1 = document.querySelector(".teamname-btn1");
const teamNameBtn2 = document.querySelector(".teamname-btn2");
const teamP1 = document.querySelector(".team-name1");
const teamP2 = document.querySelector(".team-name2");


let score1 = 0;
let score2 = 0;

teamNameBtn1.addEventListener("click", () => {
    if (teamInput1.style.display === "none" || teamInput1.value === "") {
        teamP1.style.display = "none";
        teamInput1.style.display = "block";
    }
    else {
        teamP1.style.display = "block";
        teamInput1.style.display = "none";
        teamP1.textContent = teamInput1.value;
    }
})

teamNameBtn2.addEventListener("click", () => {
    if (teamInput2.style.display === "none" || teamInput2.value === "") {
        teamP2.style.display = "none";
        teamInput2.style.display = "block";
    }
    else {
        teamP2.style.display = "block";
        teamInput2.style.display = "none";
        teamP2.textContent = teamInput2.value;
    }
})

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