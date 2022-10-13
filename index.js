let counter = 0

const cookie = document.querySelector("#cookie");
const count = document.createElement("count");
const cookiePic = document.querySelector("#cookie-pic");
cookiePic.style.alignText = "center";
count.textContent = 0;
cookie.appendChild(count);

cookiePic.addEventListener("click", function () {
    count.textContent++;
})

// ------------------------------
FontSize = 24;

const magnify = document.querySelector("#magnify-glass");
const magPar = document.createElement("p");
magPar.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
magPar.style.fontSize = FontSize + "px";
magnify.appendChild(magPar);
const biggerButton = document.createElement("button");
magnify.appendChild(biggerButton)
biggerButton.textContent = "Bigger";
const smallerButton = document.createElement("button");
smallerButton.textContent = "Smaller";
magnify.appendChild(smallerButton);


biggerButton.addEventListener("click", function () {
    if (FontSize < 100) {
        FontSize++;
        currentFontSize = FontSize + "px";
        magPar.style.fontSize = currentFontSize;
    }
})


smallerButton.addEventListener("click", function () {
    if (FontSize > 0) {
       FontSize--;
       currentFontSize = FontSize + "px";
       magPar.style.fontSize = currentFontSize 
    }    
})


const body = document.querySelector("body");
body.style.backgroundColor = "green"
const greenScreen = document.createElement("gs");
greenScreen.id = "green-screen";
greenScreen.style.border = "solid"
greenScreen.style.backgroundColor = "green";
body.appendChild(greenScreen);


const textInput = document.createElement("input");
textInput.id = "text-input";
greenScreen.appendChild(textInput);


const colorButton = document.createElement("button");
colorButton.textContent = "Pick a Color";
colorButton.addEventListener("click", function () {
    let inputVal = document.getElementById("text-input").value;
    console.log(greenScreen.style.backgroundColor);
    body.style.backgroundColor = inputVal;
    console.log(greenScreen.style.backgroundColor);
})

greenScreen.appendChild(colorButton);
body = document.querySelector("body");
body.style.height = "100vh";
body.style.weight = "100vh"
body.style.border = "solid";

// const crane = document.querySelector("img");
// crane.style.height = "20%";
// crane.style.width = "auto";
// crane.style.border = "solid";

// document.addEventListener("keydown", function (event){
//     if (event.keyCode == "ArrowDown") {
//         console.log("hello") 
//     }
// })






