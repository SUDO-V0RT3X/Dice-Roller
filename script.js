/* 
Dice faces:

    1: &#9856;
    2: &#9857;
    3: &#9858;
    4: &#9859;
    5: &#9860;
    6: &#9861;
*/

const button = document.getElementById("rollDice");
const mainDice = document.getElementById("dice");
const rollHistory = document.getElementById("rolls");
let history = [];

rollHistory.innerHTML = "";

function getDiceFace(roll) {
    switch (roll) {
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";

        default:
            return "";
    }
}

function rollDice() {
    const res = Math.floor(Math.random() * 6) + 1;
    console.log("Dice rolled: " + res);

    const face = getDiceFace(res);
    console.log("Face: ", face);

    mainDice.innerHTML = face;

    history.push(res);
    updateHistory();
}

function updateHistory() {
    rollHistory.innerHTML = "";

    for (let i = 0; i < history.length; i++) {
        let listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(history[i])}</span>`;
        rollHistory.appendChild(listItem);
    }
}



button.addEventListener("click", () => {
    console.log("Button CLICKED");
    mainDice.classList.add("roll-animation");

    setTimeout(() => {
        mainDice.classList.remove("roll-animation");
        rollDice();
    }, 1000)
})

