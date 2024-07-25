let singleplayerButton = document.getElementById("singleplayer");
let multiplayerButton = document.getElementById("multiplayer");

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

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

singleplayerButton.addEventListener("click", startSingle);

multiplayerButton.addEventListener("click", startMulti);

function startSingle(){
    alert("single game starts");
}

function startMulti(){
    let popUpBackground = document.createElement("div")
    popUpBackground.className = "popUpBackground"
    document.body.appendChild(popUpBackground);

    let popUp = document.createElement("div");
    popUp.className = "popUp"
    document.body.appendChild(popUp);

    // create a cancel button
    let popUpCancelButton = document.createElement("button")
    popUpCancelButton.className="popUpCancelButton";
    popUpCancelButton.innerText="Cancel";
    popUp.appendChild(popUpCancelButton);

    //input boxes
    let inputs = document.createElement("div");
    inputs.className = "inputs";
    popUp.appendChild(inputs);

    let gameNameInput = document.createElement("input");
    gameNameInput.className="input";
    gameNameInput.setAttribute('type', 'text');
    gameNameInput.setAttribute('placeholder', 'Enter your game name');
    inputs.appendChild(gameNameInput);
    
    let nicknameInput = document.createElement("input");
    nicknameInput.className="input";
    nicknameInput.setAttribute('type', 'text');
    nicknameInput.setAttribute('placeholder', 'Enter your nickname');
    inputs.appendChild(nicknameInput);

    //create submit button
    let popUpSubmitButton = document.createElement("button");
    popUpSubmitButton.className="popUpSubmitButton";
    popUpSubmitButton.innerText="Submit";
    popUp.appendChild(popUpSubmitButton);

    popUpCancelButton.addEventListener("click", clearPopUpWindow);

    popUpSubmitButton.addEventListener("click", function(){
        let gameName;
        let nickname;

        if(gameNameInput.value == "" || nicknameInput.value == ""){
            alert("Please fill all fields");
            return;
        } else {
            gameName = gameNameInput.value;
            nickname = nicknameInput.value;
            clearPopUpWindow();
            console.log(gameName, nickname);
        }
    })

    function clearPopUpWindow(){
        popUpSubmitButton.remove();
        popUpCancelButton.remove();
        popUp.remove();
        popUpBackground.remove();
    }
}

    // multiplayerButton.style.display = "none";