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
let visibilityOfForm = document.getElementById("formID");
function getName() {
    let usernameTextbox = document.getElementById("username");
    let username = usernameTextbox.value;
    console.log(username);
    visibilityOfForm.style.display = "none";
}
let challengesElement = document.getElementById("treasureHuntChallenges");



function getApiList(){
    fetch("https://codecyprus.org/th/api/list")
        .then(response => response.json())
        .then(jsonObject =>
        {
            let treasureHuntsArray = jsonObject.treasureHunts;
            for (let i = 0; i < treasureHuntsArray.length; i++) {
                let date = new Date(treasureHuntsArray[i].startsOn);
                let convertedDate = date.toString();

                date.setTime(date.getTime() + (treasureHuntsArray[i].maxDuration  * 24 * 60 * 60 * 1000));
                let quizExpires =  date.toUTCString();

                let listChallenge = document.createElement("li");
                listChallenge.innerHTML = "<a id='linksChallenges' href='https://codecyprus.org/th/api/start?player='"+username+"&app=Team5&treasure-hunt-id=" + treasureHuntsArray[i].uuid + "'>" + treasureHuntsArray[i].name + "</a>"
                + "<ul>"
                                                                    + "<li class='innerListChallenges'>" + "<b>" + "Description: " + "</b>" + treasureHuntsArray[i].description  + "</li>"
                                                                    + "<li class='innerListChallenges'>" + "<b>" + "Starts on: " + "</b>" + convertedDate +  "</li>"
                                                                    + "<li class='innerListChallenges'>" + "<b>" + "Lasts: " + "</b>" + quizExpires + "</li>"
                                                                    + "</ul>";

                challengesElement.appendChild(listChallenge);
            }
        });
}
getApiList();


// for(let i = 0; i < json.treasureHunts.length; i++) {
//     let name = json.treasureHunts[i].name;
//     let uuid = json.treasureHunts[i].uuid;
// t.innerHTML += "<li>" + name + " (<a href='javascript:start(\"" + uuid + "\")'>" + uuid + "</a>)</li>"
// }