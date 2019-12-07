
let leaderboardSize = document.getElementById("limitImput");
let leaderboardElement= document.getElementById("leaderboard");
let sorted;

function checkBoxSorted() {
    var checkBox = document.getElementById("sortedCheck");
    var text = document.getElementById("text");
    if (checkBox.checked === true){
        sorted= "&sorted";
        text.style.display = "block";
    } else {
        sorted="";
        text.style.display = "none";
    }
}

function getlimit() {
    limit = leaderboardSize.value;
    console.log("limit is: "+ limit);
    window.location.href = "Leaderboard.html?" + sorted +"&size=" + limit;
}






// const params = new URLSearchParams(location.search);
