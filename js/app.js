'use strict'
var voteRecords = 0;
var winningVote = "";

function startOver() {
    voteRecords = 0;
    winningVote = "";
    var resultsContainer = document.getElementById('results');
    var voteContainer = document.getElementById('votes');
    var winningImageHolder = document.getElementById('winningImageHolder');
    document.getElementById("choiceA").src = "img/cheese.jpg";
    document.getElementById("choiceB").src = "img/pepperoni.jpg";
    winningImageHolder.innerHTML = "";
    voteContainer.classList.remove('hidden');
    resultsContainer.classList.add('hidden');
}

function imageClick(imgName, voteId) {
    voteRecords++;
    winningVote = imgName;
    console.log(imgName);
    console.log(voteRecords);
    var imageToSwap;
    if (voteId == "choiceA") {
        imageToSwap = document.getElementById("choiceB");
    } else {
        imageToSwap = document.getElementById("choiceA");
    }
    switch (voteRecords) {
        case 1:
            imageToSwap.src = 'img/vegitarian.jpg';
            break;
        case 2:
            imageToSwap.src = 'img/sausage.jpg';
            break;
        case 3:
            imageToSwap.src = 'img/taco.jpg';
            break;
        case 4:
            var resultsContainer = document.getElementById('results');
            var voteContainer = document.getElementById('votes');
            var winningImageHolder = document.getElementById('winningImageHolder');
            var img = document.createElement('img');
            img.src = imgName;
            img.id = "winningImage";
            img.classList.add('winningImage');
            winningImageHolder.appendChild(img);
            voteContainer.classList.add('hidden');
            resultsContainer.classList.remove('hidden');
            break;
    }
}