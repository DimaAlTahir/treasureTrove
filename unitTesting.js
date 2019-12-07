// document.getElementById("unit1").onload = getLeaderboard();
// document.getElementById("unit2").onload = getApiList();
const API_LEADERBOARD = "https://codecyprus.org/th/api/leaderboard";
const TEST_API_LEADERBOARD = "https://codecyprus.org/th/test-api/leaderboard";
let leaderboardLimit = document.getElementById("limitImput");
let leaderboardElement= document.getElementById("leaderboard");
let sorted;

function loadUnsorted(sorted){
    console.log("value of check; "+ sorted);
}

function getlimit() {
    let html = "";
    limit = leaderboardLimit.value;
    console.log("limit is: "+ getTestLeaderboard(limit));
    sorted="&sorted";
    window.h
}

// function getTestLeaderboard(size) {
//     document.getElementById("LeadrContainer").style.display = "block";
//     fetch(TEST_API_LEADERBOARD + sorted + "&hasPrize&size=" + size)
//         .then(response => response.json())
//         .then(jsonObject => {
//             document.getElementById("endMessage").style.display = "none";
//             if (jsonObject.status === false){
//                 document.getElementById("test").innerHTML = jsonObject.errorMessages;
//             } else return jsonObject.numOfPlayers;
//
//             let leaderboardArray =jsonObject.leaderboard;
//             for (let i = 0; i < jsonObject.limit; i++)
//             {
//                 let listleaderboard = document.createElement("li");
//                 listleaderboard.innerHTML = "<b>Name: </b>" + leaderboardArray[i].player + "<br><b> Score: </b>" + leaderboardArray[i].score + "<br>" +
//                     "<b> Completed in: </b>" + convert2date(leaderboardArray[i].completionTime);
//                 leaderboardElement.appendChild(listleaderboard);
//             }
//         });
// }
let options = { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit',
    second: '2-digit' };

function convert2date(ms) {
    let date = new Date(ms);
    return date.toLocaleDateString((options));
}



// const params = new URLSearchParams(location.search);
