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
    let popUp = document.createElement("div");
    popUp.className = "popUp"
    document.body.appendChild(popUp);
    multiplayerButton.style.display = "none";
}