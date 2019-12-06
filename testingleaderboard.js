// document.getElementById("unit1").onload = getLeaderboard();
// document.getElementById("unit2").onload = getApiList();
const API_LEADERBOARD = "https://codecyprus.org/th/api/leaderboard";
const TEST_API_LEADERBOARD = "https://codecyprus.org/th/test-api/leaderboard";
let leaderboardLimit = document.getElementById("limitImput");

let sorted;

let testResults = [
    { size: -1, expected: 42 },
    { size: 0, expected: 0 },
    { size: 1, expected: 1 },
    { size: 10, expected: 10 },
    { size: 42, expected: 42 }
];

function loadUnsorted(sorted){
    console.log("value of check; "+ sorted);
}

function getlimit() {
    let html = "";
    limit = leaderboardLimit.value;
    console.log("limit is: "+ limit);
    sorted="&sorted";
    for (i in testResults) {
        let result = testResults[i];
        let actual = getTestLeaderboard(result.size);
        let passed = (actual === result.expected);
        html +=
            "<tr>\n" +
            "    <td>" + result.size + "</td>" +
            "    <td>" + result.expected + "</td>" +
            "    <td>" + actual + "</td>" +
            "    <td>" + (passed ? "YES" : "NO") + "</td>" +
            "</tr>";
    }
    document.getElementById("test-numNames").innerHTML += html;
}

function getTestLeaderboard(size) {
    fetch(TEST_API_LEADERBOARD + sorted + "&size=" + size)
        .then(response => response.json())
        .then(jsonObject => {
            if (jsonObject.status === false){
                document.getElementById("test").innerHTML = jsonObject.errorMessages;
            } else return jsonObject.numOfPlayers;
        });
}

function convert2date(ms) {
    let date = new Date(ms);
    return date.toString();
}

// const params = new URLSearchParams(location.search);
