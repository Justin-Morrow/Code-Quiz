var highscores = [];
var myScores = document.getElementById("list-of-scores");

function loadPage() {
    console.log("page has loaded")
    var highScores = JSON.parse(localStorage.getItem("highscores")) || [];
    
    //for loop to add scores
    for(let i=0; i < highScores.length; i++) {
        var li = document.createElement("li");
        var h4 = document.createElement("h4");
        var h5 = document.createElement("h5");
        h4.innerText = "Name: " + highScores[i].userName;
        h5.innerText = "Score: " + highScores[i].score; 

        //add the list of data under the myStudents box
        myScores.appendChild(li).appendChild(h4).appendChild(h5);
    }
}

//after page is loaded 
document.addEventListener("DOMContentLoaded", loadPage);
