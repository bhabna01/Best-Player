
function getinputvalueByID(inputID, playID) {
    // const inputField = document.getElementById(inputID);
    // const inputFieldString = inputField.innerText;
    // return inputFieldString;
    const name = document.getElementById(inputID);
    const player = name.innerText;
    const placelist = document.getElementById(playID);
    const li = document.createElement('li');
    li.innerText = "1." + player;
    placelist.appendChild(li);

}


document.getElementById("btn-selection").addEventListener("click", function () {
    // const name = document.getElementById("player-1");
    // const player = name.innerText;
    // const placelist = document.getElementById("player-list");
    // const li = document.createElement('li');
    // li.innerText = "1." + player;
    // placelist.appendChild(li);
    getinputvalueByID('player-1', 'player-list');
    // disableButton();
})
function disableButton() {

    document.getElementById("btn-selection").disabled = true;
}
