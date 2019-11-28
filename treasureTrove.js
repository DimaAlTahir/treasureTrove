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
let playerName ="";

function getName() {
    let usernameTextbox = document.getElementById("username");
    playerName = usernameTextbox.value;
    console.log(playerName);
    elementPlayerNameForm.style.display = "none";
    getApiList();
}


function getApiList(){
    fetch("https://codecyprus.org/th/api/list")
        .then(response => response.json())
        .then(jsonObject =>
        {
            let treasureHuntsArray = jsonObject.treasureHunts;

            for (let i = 0; i < treasureHuntsArray.length; i++) {
                let listChallenge = document.createElement("li");
                console.log(treasureHuntsArray[i].uuid);
                listChallenge.innerHTML = "<a href='quizes.html?name=" + playerName + "&app=Team5" + "&" + treasureHuntsArray[i].uuid + "'>" + treasureHuntsArray[i].name + "</a>"
                                                                    + "<ul>"
                                                                    + "<li>"  + "Description: " + "</b>" + treasureHuntsArray[i].description  + "</li>"
                                                                    + "<li>"  + "Starts on: " + "</b>" + treasureHuntsArray[i].startsOn +  "</li>"  // TODO TIME CONVERSION
                                                                    + "<li>"  + "Lasts: " + "</b>" + treasureHuntsArray[i].maxDuration + "</li>"  // TODO TIME CONVERSION
                                                                    + "</ul>";

                challengesElement.appendChild(listChallenge);

            }
        });
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