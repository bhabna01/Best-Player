
function getinputvalueByID(inputID, playID) {
    const name = document.getElementById(inputID);
    const player = name.innerText;
    const placelist = document.getElementById(playID);

    const element = document.getElementById(playID);
    let numb = element.childNodes.length;
    if (numb > 5) {
        alert("You Can't Add more than 5 players");
        disableButton(false);
    }
    else {
        {
            let li = document.createElement('li');
            li.innerText = player;
            placelist.appendChild(li);
        }


    }

}


document.getElementById("btn-selection").addEventListener("click", function () {
    getinputvalueByID('player-1', 'player-list');

    disableButton("btn-selection");
})

document.getElementById("btn-selection2").addEventListener("click", function () {
    getinputvalueByID('player-2', 'player-list');

    disableButton("btn-selection2");
})
document.getElementById("btn-selection3").addEventListener("click", function () {
    getinputvalueByID('player-3', 'player-list');

    disableButton("btn-selection3");
})
document.getElementById("btn-selection4").addEventListener("click", function () {
    getinputvalueByID('player-4', 'player-list');

    disableButton("btn-selection4");
})
document.getElementById("btn-selection5").addEventListener("click", function () {
    getinputvalueByID('player-5', 'player-list');

    disableButton("btn-selection5");
})
document.getElementById("btn-selection6").addEventListener("click", function () {
    getinputvalueByID('player-6', 'player-list');

    disableButton("btn-selection6");
})
function disableButton(btnID) {
    const buttonName = document.getElementById(btnID)
    buttonName.disabled = true;
    buttonName.style.backgroundColor = "red";
}
