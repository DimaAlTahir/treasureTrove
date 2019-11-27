let challengesElement = document.getElementById("treasureHuntChallenges");


fetch("https://codecyprus.org/th/api/list")
    .then(response => response.json())
    .then(jsonObject =>
    {
        let treasureHuntsArray = jsonObject.treasureHunts;

        for (let i = 0; i < treasureHuntsArray.length; i++) {
            let listChallenge = document.createElement("li");
            listChallenge.innerHTML = "<a id='linksChallenges' href='https://codecyprus.org/th/api/start?player=jimk&app=Team5&treasure-hunt-id=" + treasureHuntsArray[i].uuid + "'>" + treasureHuntsArray[i].name + "</a>"
                                                                + "<ul>"
                                                                + "<li class='innerListChallenge'>" + "<b>" + "Description: " + "</b>" + treasureHuntsArray[i].description  + "</li>"
                                                                + "<li class='innerListChallenge'>" + "<b>" + "Starts on: " + "</b>" + treasureHuntsArray[i].startsOn +  "</li>"  // TODO TIME CONVERSION
                                                                + "<li class='innerListChallenge'>" + "<b>" + "Lasts: " + "</b>" + treasureHuntsArray[i].maxDuration + "</li>"  // TODO TIME CONVERSION
                                                                + "</ul>";

            challengesElement.appendChild(listChallenge);
        }
    });




// for(let i = 0; i < json.treasureHunts.length; i++) {
//     let name = json.treasureHunts[i].name;
//     let uuid = json.treasureHunts[i].uuid;
// t.innerHTML += "<li>" + name + " (<a href='javascript:start(\"" + uuid + "\")'>" + uuid + "</a>)</li>"
// }