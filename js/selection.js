document.getElementById("btn-selection").addEventListener("click", function () {
    const name = document.getElementById("player-1");
    const player = name.innerText;
    const placelist = document.getElementById("player-list");
    const li = document.createElement('li');
    li.innerText = player;
    placelist.appendChild(li);
})