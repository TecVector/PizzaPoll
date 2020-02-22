'use strict'
var voteRecords = 0;
var winningVote = "";

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
            var img = document.createElement('img');
            img.src = imgName;
            img.classList.add('winningImage');
            resultsContainer.appendChild(img);
            voteContainer.classList.add('hidden');
            resultsContainer.classList.remove('hidden');
            break;
    }
}