const colorName = document.getElementById("colorName");
const body = document.body;

const colors = [
    "Crimson",
    "DeepSkyBlue",
    "Gold",
    "Orchid",
    "Tomato",
    "SlateBlue",
    "OrangeRed",
    "DarkTurquoise",
    "HotPink",
    "LimeGreen",
    "RoyalBlue",
    "IndianRed",
    "Coral",
    "DarkViolet",
    "DodgerBlue"
];

function changeColor() {

    const randomIndex = Math.floor(Math.random() * colors.length);

    body.style.backgroundColor = colors[randomIndex];

    colorName.textContent = colors[randomIndex];

    colorName.style.color = colors[randomIndex];
}   