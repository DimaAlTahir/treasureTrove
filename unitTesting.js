
let leaderboardSize = document.getElementById("limitImput");
let scoreValue =document.getElementById("valueImput");
let sorted="&nothing";
let completed="&nothing";

function checkBoxSorted() {
    let checkBoxSorted = document.getElementById("sortedCheck");
    let textLeaderboard = document.getElementById("textLeaderboard");
    if (checkBoxSorted.checked === true){
        sorted= "&sorted";
        textLeaderboard.style.display = "block";
    } else {
        sorted="&nothing";
        textLeaderboard.style.display = "none";
    }
}
function checkBoxCompleted() {
    let checkBoxCompleted = document.getElementById("sortedCheck");
    let textScore = document.getElementById("textScore");
    if (checkBoxCompleted.checked === true){
        completed = "&completed";
        textScore.style.display = "block";
    } else {
        completed="&nothing";
        textScore.style.display = "none";
    }
}

function getlimit() {
    limit = leaderboardSize.value;
    console.log("limit is: "+ limit);
    setTimeout(function(){window.location.href = "Leaderboard.html?testL" + sorted + "&size=" + limit;},800);

}


function getValue() {
    value = scoreValue.value;
    console.log("Value is: "+ scoreValue);
    setTimeout(function(){window.location.href = "Leaderboard.html?testS" + completed + "&score=" + value;},800);

}
