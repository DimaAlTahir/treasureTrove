// document.getElementById("unit1").onload = getLeaderboard();
// document.getElementById("unit2").onload = getApiList();
const API_LEADERBOARD = "https://codecyprus.org/th/api/leaderboard";
const TEST_API_LEADERBOARD = "https://codecyprus.org/th/test-api/leaderboard";
let leaderboardLimit = document.getElementById("limitImput");
let leaderboardElement = document.getElementById("leaderboard");



function getlimit() {
    limit = leaderboardLimit.value;
    console.log("limit is: "+ limit);
    document.getElementById("LeaderboardContainer").style.display = "block";
    getLeaderboard();
}

function getLeaderboard() {
    leaderboardElement.innerHTML="";
    fetch(TEST_API_LEADERBOARD + "?session=" + getCookie("sessionID") + "&sorted" + "&size=" + limit)
        .then(response => response.json())
        .then(jsonObject => {
            if (jsonObject.status === false){
                document.getElementById("test").innerHTML = jsonObject.errorMessages;
            }
            console.log(jsonObject);
            document.getElementById("endMessage").style.display = "none";
            let leaderboardArray = jsonObject.leaderboard;

            for (let i = 0; i < leaderboardArray.length; i++) {
                let listleaderboard = document.createElement("li");
                console.log(leaderboardArray.player);
                listleaderboard.innerHTML = "<b>Name: </b>" + leaderboardArray[i].player + "<br> <b> Score: </b>" + leaderboardArray[i].score + "<br>" +
                    "<b> Completed in: </b>" + convert2date(leaderboardArray[i].completionTime);
                leaderboardElement.appendChild(listleaderboard);
            }

        });
}

function convert2date(ms) {
    let date = new Date(ms);
    return date.toString();
}

function getCookie(cookieName) {
    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}// const params = new URLSearchParams(location.search);
