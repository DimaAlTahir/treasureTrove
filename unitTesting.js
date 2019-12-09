let leaderboardSize = document.getElementById("limitImput");
let scoreValue = document.getElementById("valueImput");
let displayTLB = document.getElementById("testTLB");
let displayTS = document.getElementById("testTS");
let sorted = "&nothing";
let completed = "&nothing";
let hasPrize ="&nothing";

function checkBoxHasPrice(){
    let checkBoxHasPrice =document.getElementById("sortedHasPrice");
    let textLeaderboard = document.getElementById("textLeaderboard2");
    if (checkBoxHasPrice.checked === true) {
        hasPrize = "&hasPrize";
        console.log(hasPrize);
        textLeaderboard.style.display = "block";
    } else {
        hasPrize = "&nothing";
        console.log(hasPrize);
        textLeaderboard.style.display = "none";
    }
}

function checkBoxSorted() {
    let checkBoxSorted = document.getElementById("sortedCheck");
    let textLeaderboard = document.getElementById("textLeaderboard");
    if (checkBoxSorted.checked === true) {
        sorted = "&sorted";
        textLeaderboard.style.display = "block";
    } else {
        sorted = "&nothing";
        textLeaderboard.style.display = "none";
    }
}

function checkBoxCompleted() {
    let checkBoxCompleted = document.getElementById("completedCheck");
    let textScore = document.getElementById("textScore");
    if (checkBoxCompleted.checked === true) {
        completed = "&completed";
        textScore.style.display = "block";
    } else {
        completed = "&nothing";
        textScore.style.display = "none";
    }
}

function getlimit() {
    limit = leaderboardSize.value;
    console.log("limit is: " + limit);
    setTimeout(function () {
        window.location.href = "Leaderboard.html?testL" + sorted + hasPrize + "&size=" + limit;
    }, 500);
}


function getValue() {
    value = scoreValue.value;
    console.log("Value is: " + scoreValue);
    setTimeout(function () {
        window.location.href = "Leaderboard.html?testS" + completed + "&score=" + value;
    }, 500);
}

function goToIndex() {
    setTimeout(function () {
        window.location.href = "index.html";
    }, 500);
}

function goToUnitTesting() {
    setTimeout(function () {
        window.location.href = "unitTesting.html";
    }, 500);
}


function hideLBTable() {
    if (displayTLB.style.display !== "block") {
        displayTLB.style.display = "block";
    } else {
        displayTLB.style.display = "none";
    }
}

function hideScore(){
    if (displayTS.style.display !== "block") {
        displayTS.style.display = "block";
    } else {
        displayTS.style.display = "none";
    }
}