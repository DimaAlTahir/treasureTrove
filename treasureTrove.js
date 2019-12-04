const API_LIST="https://codecyprus.org/th/api/list";
let elementPlayerNameForm = document.getElementById("playerNameForm");
let challengesElement = document.getElementById("treasureHuntChallenges");
let elementlistHunts = document.getElementById("listHunts");
let playerName ="";

function getName() {
    let usernameTextbox = document.getElementById("username");
    playerName = usernameTextbox.value;
    elementPlayerNameForm.style.display = "none";
    getApiList();
    elementlistHunts.style.display = "block";
}


function getApiList(){
    fetch(API_LIST)
        .then(response => response.json())
        .then(jsonObject =>
        {
            let treasureHuntsArray = jsonObject.treasureHunts;

            for (let i = 0; i < treasureHuntsArray.length; i++) {

                let listChallenge = document.createElement("li");
                listChallenge.innerHTML = "<a  href='app.html?player=" + playerName + "&app=TreasureTrove&treasure-hunt-id=" + treasureHuntsArray[i].uuid + "'>" + treasureHuntsArray[i].name + "</a>"
                                                                    + "<ul>"
                                                                    + "<li>" + "<b>" + "Description: " + "</b>" + treasureHuntsArray[i].description  + "</li>"
                                                                    + "<li>" + "<b>" + "Starts on: " + "</b>" + convert2date(treasureHuntsArray[i].startsOn) +  "</li>"
                                                                    + "<li>" + "<b>" + "Lasts: " + "</b>" + convert2minutes(treasureHuntsArray[i].maxDuration )+ "</li>"
                                                                    + "</ul>";

                challengesElement.appendChild(listChallenge);
            }

        });
}



function convert2date(ms){
    let date = new Date(ms);
    return date.toString();
}

function convert2minutes(ms){
   let min = Math.floor((ms/1000/60) << 0);
    return min + " mins";
}

// for(let i = 0; i < json.treasureHunts.length; i++) {
//     let name = json.treasureHunts[i].name;
//     let uuid = json.treasureHunts[i].uuid;
// t.innerHTML += "<li>" + name + " (<a href='javascript:start(\"" + uuid + "\")'>" + uuid + "</a>)</li>"
// }