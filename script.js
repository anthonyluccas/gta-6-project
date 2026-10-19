let characterName = document.querySelector(".character-name")
let characterImage = document.querySelector(".character-image")

function chooseCharacter(name, image, color) {
    characterName.innerHTML = name;
    characterImage.src = image;
    characterName.style.color = color;
}

function photoSelect(photo) {
    let reader = new FileReader();

    reader.readAsDataURL(photo.files[0]);

    reader.onload = async function () {

        let design = await puter.ai.txt2img("Transforme a pessoa desta foto em um personagem de videogame: contorno preto grosso, cores vivas, meio corpo, mantendo o rosto parecido. Fundo totalmente transparente: sem cenário, sem chão e sem sombra.",
            {
                model: "replicate:openai/gpt-image-2.5-flare",
                provider: "openai",
                input_image: reader.result,
                quality: "medium",
                providerOptions: { background: "transparent" }
            });

        chooseCharacter("Você", design, '#b9b604')
    }
}