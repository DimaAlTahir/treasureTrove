const question=document.getElementById('question');
const answer=document.getElementById('answer');
const startbtn=document.getElementById('start');
const nextbtn=document.getElementById('next');
const skipbtn=document.getElementById('skip');

startbtn.addEventListener('click', startQuiz)
nextbtn.addEventListener('click', ()=>{
    current++;
    callNextQuestion()
})

function startQuiz(){
    startbtn.classList.add('hide')
    fetch("https://codecyprus.org/th/api/question?session=ag9nfmNvZGVjeXBydXNvcmdyFAsSB1Nlc3Npb24YgICAoMa0gQoM")
        .then(response => response.json())
        .then(jsonObject =>{})
    callNextQuestion()
}

function callNextQuestion(){

}

let challengesElement = document.getElementById("treasureHuntChallenges");


fetch("https://codecyprus.org/th/api/list")
    .then(response => response.json())
    .then(jsonObject =>
    {
        let treasureHuntsArray = jsonObject.treasureHunts;

        for (let i = 0; i < treasureHuntsArray.length; i++) {
            let listChallenge = document.createElement("li");
            listChallenge.innerHTML = "<a href='https://codecyprus.org/th/api/start?player=jimk&app=TreasureTroveApp&treasure-hunt-id=" + treasureHuntsArray[i].uuid + "'>" + treasureHuntsArray[i].name + "</a>";
            challengesElement.appendChild(listChallenge);
        }
    });


// for(let i = 0; i < json.treasureHunts.length; i++) {
//     let name = json.treasureHunts[i].name;
//     let uuid = json.treasureHunts[i].uuid;
// t.innerHTML += "<li>" + name + " (<a href='javascript:start(\"" + uuid + "\")'>" + uuid + "</a>)</li>"
// }

