
function getinputvalueByID(inputID, playID) {

    const name = document.getElementById(inputID);
    const player = name.innerText;
    const placelist = document.getElementById(playID);
    const li = document.createElement('li');
    li.innerText = player;
    placelist.appendChild(li);

}


document.getElementById("btn-selection").addEventListener("click", function () {
    getinputvalueByID('player-1', 'player-list');

    disableButton("btn-selection");
})

document.getElementById("btn-selection2").addEventListener("click", function () {
    getinputvalueByID('player-2', 'player-list');

    disableButton("btn-selection2");
})
function disableButton(btnID) {
    const buttonName = document.getElementById(btnID)

    buttonName.disabled = true;
    buttonName.style.backgroundColor = "red";
}
