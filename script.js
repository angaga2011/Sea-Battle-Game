let singleplayerButton = document.getElementById("singleplayer");
let multiplayerButton = document.getElementById("multiplayer");

singleplayerButton.addEventListener("mouseover", function(){
    singleplayerButton.className = "buttonHover";
})
singleplayerButton.addEventListener("mouseout", function(){
    singleplayerButton.removeAttribute("class");
})
multiplayerButton.addEventListener("mouseover", function(){
    multiplayerButton.className = "buttonHover";
})
multiplayerButton.addEventListener("mouseout", function(){
    multiplayerButton.removeAttribute("class");
})

// singleplayerButton.addEventListener("click", startSingle());

multiplayerButton.addEventListener("click", startMulti);

// startSingle(){

// }

function startMulti(){
    let popUpBackground = document.createElement("div")
    popUpBackground.className = "popUpBackground"
    document.body.appendChild(popUpBackground);
    let popUp = document.createElement("div");
    popUp.className = "popUp"
    document.body.appendChild(popUp);
    let popUpCancelButton = document.createElement("button.popUpCancelButton")
    popUpCancelButton.innerText="X";
    popUp.appendChild(popUpCancelButton);
    popUpCancelButton.addEventListener("click", function(){
        popUpCancelButton.remove();
        popUp.remove();
        popUpBackground.remove();
    })
}

    // multiplayerButton.style.display = "none";