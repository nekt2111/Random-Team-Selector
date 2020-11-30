

let allPlayers = []
let tempArray = []

let teamA = []
let teamB = []


function addPlayer(name) {
    if (!allPlayers.includes(name)) {
        allPlayers.push(name)
        document.getElementById("all-players").innerText += "     " + name;
    }
    if(allPlayers.length === 10){
        document.getElementById("pick-players").style.display = "none";
        document.getElementById("generate-team").appendChild(document.createElement("button"));
        document.getElementById("generate-team").firstChild.id = "generate"
        document.getElementById("generate-team").firstChild.textContent = "Сгенерировать"
       document.getElementById("generate").onclick = function getTeams(){

            document.getElementById("TeamA").innerText = ""
            document.getElementById("TeamB").innerText = ""

           tempArray = allPlayers.slice()
           teamA.length = 0
           teamB.length = 0

           let max = 10

           for(let i =0; i < 5;i++){
               let randomInt = getRandomInt(max)
               teamA.push(tempArray[randomInt])
               tempArray.splice(randomInt,1)
               max = max - 1
           }



           teamB = tempArray
           document.getElementById("TeamA").innerText += "TeamA - "
           for (let i = 0; i <teamA.length ; i++) {
               document.getElementById("TeamA").innerText += " " + teamA[i]
           }

           document.getElementById("TeamB").innerText += "TeamB - "
           for (let i = 0; i <teamB.length ; i++) {
               document.getElementById("TeamB").innerText += " " + teamB[i]
           }


       }

    }
}



function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}






