let characterName = document.querySelector(".character-name")
let characterImage = document.querySelector(".character-image")

function chooseCharacter(name, image, color) {
    characterName.innerHTML = name;
    characterImage.src = image;
    characterName.style.color = color;
}