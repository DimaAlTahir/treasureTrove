let leaderboardSize = document.getElementById("limitImput");
let scoreValue = document.getElementById("valueImput");
let displayTLB = document.getElementById("testTLB");
let displayTS = document.getElementById("testTS");
let skip="&nothing";
let geolocation="&nothing";
let completedQuestions="&nothing";
let sorted = "&nothing";
let completed = "&nothing";
let hasPrize ="&nothing";
let elementQuestionType=document.getElementById("questionType");


function checkBoxHasPrice(){
    let checkBoxHasPrice =document.getElementById("HasPrice");
    let textPrize = document.getElementById("textLeaderboard2");
    if (checkBoxHasPrice.checked === true) {
        hasPrize = "&hasPrize";
        console.log(hasPrize);
        textPrize.style.display = "block";
    } else {
        hasPrize = "&nothing";
        console.log(hasPrize);
        textPrize.style.display = "none";
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

function checkBoxGeolocation() {
    let checkBoxGeolocation = document.getElementById("GeolocationCheck");
    let textGeolocation = document.getElementById("textGeolocation");
    if (checkBoxGeolocation.checked === true) {
        geolocation = "&requires-location";
        textGeolocation.style.display = "block";
    } else {
        geolocation = "&nothing";
        textGeolocation.style.display = "none";
    }
}

function checkBoxSkip() {
    let checkBoxSkip = document.getElementById("skipCheck");
    let textSkip = document.getElementById("textSkip");
    if (checkBoxSkip.checked === true) {
        skip = "&can-be-skipped";
        textSkip.style.display = "block";
    } else {
        skip = "&nothing";
        textSkip.style.display = "none";
    }
}

function checkBoxCompletedQuestions() {
    let checkBoxCompletedQuestions = document.getElementById("completedQCheck");
    let textQuestions = document.getElementById("textQuestions");
    if (checkBoxCompletedQuestions.checked === true) {
        completedQuestions = "&completed";
        textQuestions.style.display = "block";
    } else {
        completedQuestions = "&nothing";
        textQuestions.style.display = "none";
    }
}

function getlimit() {
    let limit = leaderboardSize.value;
    setTimeout(function () {
        window.location.href = "Leaderboard.html?testL" + sorted + hasPrize + "&size=" + limit;
    }, 500);
}


function getValue() {
    let value = scoreValue.value;
    setTimeout(function () {
        window.location.href = "Leaderboard.html?testS" + completed + "&score=" + value;
    }, 500);
}


function getType() {
    let type = elementQuestionType.value;
    console.log("Type is: " + scoreValue);
    return type;
}
function getQuestionParams(){
    setTimeout(function () {
        window.location.href="App.html?testQ" + completedQuestions + skip + geolocation  +"&question-type="+ getType();
    }, 500);
}

function goToIndex() {
    setTimeout(function () {
        window.location.href = "index.html";
    }, 500);
}

function goToUAT() {
    setTimeout(function () {
        window.location.href = "test.html";
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

