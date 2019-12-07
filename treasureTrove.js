const API_LIST="https://codecyprus.org/th/api/list";
let elementPlayerNameForm = document.getElementById("playerNameForm");
let challengesElement = document.getElementById("treasureHuntChallenges");
let elementlistHunts = document.getElementById("listHunts");
let playerName ="";
const params = new URLSearchParams(location.search);

function showRestart() {
    if(params.has("restart")){
       document.getElementById("restart").innerHTML="If you want to Restart the: " +"<span style='font-style: italic'>"+ getCookie("nameOfGame")
           +"</span>" + " Game,  provide a new Playername.";
       console.log(getCookie("nameOfGame"));
       document.getElementById("restart").style.display="block";
    }   else document.getElementById("restart").style.display="none";
}


function continueGame() {
    let result = confirm("There is an ongoing Game ( " + getCookie("nameOfGame" ) + " ) with that Playername! \nPressing Ok lets you continue the Game" +
        " \nPressing Cancel will take you back to provide a new Playername and terminate the ongoing Game");
    if (result === true) {
        getApiList();
    } else {
        document.cookie = "gameSaved=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        window.location.href="Signin.html?restart"
    }
}

function getName() {
    let usernameTextbox = document.getElementById("username");
    playerName = usernameTextbox.value;
    elementPlayerNameForm.style.display = "none";
    if ((getCookie("gameSaved") === "true") && (getCookie("playerName") === playerName)) {
        continueGame();
    } else getApiList();
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
                listChallenge.innerHTML = "<a  href='app.html?player=" + playerName + "&app=TreasureTrove&treasure-hunt-id=" + treasureHuntsArray[i].uuid
                    + '&time='+ treasureHuntsArray[i].maxDuration + '&nameOfGame='+ treasureHuntsArray[i].name+"'>" + treasureHuntsArray[i].name + "</a>"
                                                                    + "<ul>"
                                                                    + "<li>" + "<b>" + "Description: " + "</b>" + treasureHuntsArray[i].description  + "</li>"
                                                                    + "<li>" + "<b>" + "Starts on: " + "</b>" + convert2date(treasureHuntsArray[i].startsOn) +  "</li>"
                                                                    + "<li>" + "<b>" + "Lasts: " + "</b>" + convert2minutes(treasureHuntsArray[i].maxDuration)+ "</li>"
                                                                    + "</ul>";

                challengesElement.appendChild(listChallenge);
            }

        });
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
}

function convert2date(ms){
    let date = new Date(ms);
    return date.toLocaleDateString(("en-UK", options));
}

function convert2minutes(ms){
   let min = Math.floor((ms/1000/60) << 0);
    return min + " mins";
}
options = { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit',
    second: '2-digit' };
