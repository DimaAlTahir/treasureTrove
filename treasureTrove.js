// const question=document.getElementById('question');
// const answer=document.getElementById('answer');
// const startbtn=document.getElementById('start');
// const nextbtn=document.getElementById('next');
// const skipbtn=document.getElementById('skip');
//
// startbtn.addEventListener('click', startQuiz)
// nextbtn.addEventListener('click', ()=>{
//     current++;
//     callNextQuestion()
// })
//
// function startQuiz(){
//     startbtn.classList.add('hide')
//     fetch("https://codecyprus.org/th/api/question?session=ag9nfmNvZGVjeXBydXNvcmdyFAsSB1Nlc3Npb24YgICAoMa0gQoM")
//         .then(response => response.json())
//         .then(jsonObject =>{})
//     callNextQuestion()
// }
//
// function callNextQuestion(){
//
// }


let elementPlayerNameForm = document.getElementById("playerNameForm");
let challengesElement = document.getElementById("treasureHuntChallenges");
let elementlistHunts = document.getElementById("listHunts");
let playerName ="";

function getName() {
    let usernameTextbox = document.getElementById("username");
    playerName = usernameTextbox.value;
    console.log(playerName);
    elementPlayerNameForm.style.display = "none";
    getApiList();
    elementlistHunts.style.display = "block";
}


function getApiList(){
    fetch("https://codecyprus.org/th/api/list")
        .then(response => response.json())
        .then(jsonObject =>
        {
            let treasureHuntsArray = jsonObject.treasureHunts;

            for (let i = 0; i < treasureHuntsArray.length; i++) {

                let listChallenge = document.createElement("li");
                listChallenge.innerHTML = "<a id='linksChallenges' href='https://codecyprus.org/th/api/start?player='"+username+"&app=Team5&treasure-hunt-id=" + treasureHuntsArray[i].uuid + "'>" + treasureHuntsArray[i].name + "</a>"
                + "<ul>"
                                                                    + "<li class='innerListChallenges'>" + "<b>" + "Description: " + "</b>" + treasureHuntsArray[i].description  + "</li>"
                                                                    + "<li class='innerListChallenges'>" + "<b>" + "Starts on: " + "</b>" + convert2date(treasureHuntsArray[i].startsOn) +  "</li>"
                                                                    + "<li class='innerListChallenges'>" + "<b>" + "Lasts: " + "</b>" + convert2minutes(treasureHuntsArray[i].maxDuration )+ "</li>"
                                                                    + "</ul>";

                challengesElement.appendChild(listChallenge);

            }
        });
}

function convert2date(taken){
    let date = new Date(taken);
    let convertedDate = date.toString();
    return convertedDate;
}

function convert2minutes(ms){
    min = Math.floor((ms/1000/60) << 0);
    return min+" mins";
}
// function getApiStart(){
//     fetch("https://codecyprus.org/th/api/list")
//         .then(response => response.json())
//         .then(jsonObject =>



// for(let i = 0; i < json.treasureHunts.length; i++) {
//     let name = json.treasureHunts[i].name;
//     let uuid = json.treasureHunts[i].uuid;
// t.innerHTML += "<li>" + name + " (<a href='javascript:start(\"" + uuid + "\")'>" + uuid + "</a>)</li>"
// }