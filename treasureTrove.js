let challengesElement = document.getElementById("treasureHuntChallenges");


fetch("https://codecyprus.org/th/api/list")
    .then(response => response.json())
    .then(jsonObject =>
    {
        let treasureHuntsArray = jsonObject.treasureHunts;

        for (let i = 0; i < treasureHuntsArray.length; i++) {
            let listChallenge = document.createElement("li");
            listChallenge.innerHTML = "<a href='https://codecyprus.org/th/api/start?player=jimk&app=Team5&treasure-hunt-id=" + treasureHuntsArray[i].uuid + "'>" + treasureHuntsArray[i].name + "</a>\n"
                                                                + "<ul>"
                                                                + "<i>" + "<b>" + "Description: " + "</b>" + treasureHuntsArray[i].description  + "</i>\n"
                                                                + "<i>" + "<b>" + "Starts on: " + "</b>" + treasureHuntsArray[i].startsOn +  "</i>"  // TODO TIME CONVERSION
                                                                +"</ul>";

            challengesElement.appendChild(listChallenge);
        }
    });



// for(let i = 0; i < json.treasureHunts.length; i++) {
//     let name = json.treasureHunts[i].name;
//     let uuid = json.treasureHunts[i].uuid;
// t.innerHTML += "<li>" + name + " (<a href='javascript:start(\"" + uuid + "\")'>" + uuid + "</a>)</li>"
// }