

let allPlayers = []
let tempArray = []

let teamA = []
let teamB = []
const lines = ["top","jng","mid","adc","sup"]

function addPlayerWithInput(){
    if(document.getElementById("addPlayerInput").value.length !== 0 && !allPlayers.includes(document.getElementById("addPlayerInput").value) &&
        allPlayers.length < 10){
        allPlayers.push(document.getElementById("addPlayerInput").value)
        document.getElementById("all-players").innerText += "     " + document.getElementById("addPlayerInput").value
    }
    if(allPlayers.length === 10){
        startRandom()
    }

}
function addPlayerWithButton(name) {
    if (!allPlayers.includes(name) && allPlayers.length < 10) {
        allPlayers.push(name)
        document.getElementById("all-players").innerText += "     " + name;
    }
    if(allPlayers.length === 10){
        startRandom()
    }
}


function startRandom() {
    if (allPlayers.length === 10) {
        document.getElementById("pick-players").style.display = "none";
        document.getElementById("game").style.display = "block"
        document.getElementById("game-pick").appendChild(document.createElement("button"))
        document.getElementById("game-pick").firstChild.id = "cs"
        document.getElementById("game-pick").firstChild.textContent = "Cs"
        document.getElementById("game-pick").firstChild.style.marginRight = "20px"
        document.getElementById("cs").onclick = function (){
            document.getElementById("game-pick").style.display = "none";
            document.getElementById("picked-game").innerText = "Cs"
            addGenerateBtn()
            document.getElementById("generate").onclick = function getTeams() {
                generateRandomTeams()
                printTeams()
            }
        }

        document.getElementById("game-pick").appendChild(document.createElement("button"))
        document.getElementById("game-pick").firstChild.nextSibling.id = "lol"
        document.getElementById("game-pick").firstChild.nextSibling.textContent = "League"
        document.getElementById("lol").onclick = function (){
            document.getElementById("game-pick").style.display = "none";
            document.getElementById("picked-game").innerText = "League"
            addGenerateBtn()
            document.getElementById("generate").onclick = function getTeams() {
                generateRandomTeams()
                printTeamsWithRoles()
            }
        }

    }
}

function addGenerateBtn(){
    document.getElementById("generate-team").appendChild(document.createElement("button"));
    document.getElementById("generate-team").firstChild.id = "generate"
    document.getElementById("generate-team").firstChild.textContent = "Сгенерировать"
}


function generateRandomTeams(){
    document.getElementById("TeamA").innerText = ""
    document.getElementById("TeamB").innerText = ""

    tempArray = allPlayers.slice()
    teamA.length = 0
    teamB.length = 0

    let max = 10
    for (let i = 0; i < 5; i++) {
        let randomInt = getRandomInt(max)
        teamA.push(tempArray[randomInt])
        tempArray.splice(randomInt, 1)
        max = max - 1
    }


    teamB = tempArray
}

function printTeams(){
    document.getElementById("TeamA").innerText += "TeamA - "
    for (let i = 0; i < teamA.length; i++) {
        document.getElementById("TeamA").innerText += " " + teamA[i]
    }

    document.getElementById("TeamB").innerText += "TeamB - "
    for (let i = 0; i < teamB.length; i++) {
        document.getElementById("TeamB").innerText += " " + teamB[i]
    }
}

function printTeamsWithRoles(){
    let max1 = 5
    let max2 = 5
    let tempLines1 = lines.slice()
    let tempLines2 = lines.slice()
    document.getElementById("TeamA").innerText += "TeamA - "
    for (let i = 0; i < teamA.length; i++) {
        let randomInt1 = getRandomInt(max1)
        document.getElementById("TeamA").innerText += " " + teamA[i] + "(" + tempLines1[randomInt1]+")"
        tempLines1.splice(randomInt1,1)
        max1 = max1 - 1
    }

    document.getElementById("TeamB").innerText += "TeamB - "
    for (let i = 0; i < teamB.length; i++) {
        let randomInt2 = getRandomInt(max2)
        document.getElementById("TeamB").innerText += " " + teamB[i] + "(" + tempLines2[randomInt2]+")"
        tempLines2.splice(randomInt2,1)
        max2 = max2 - 1
    }
}


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

startRandom()




