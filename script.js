const answers_no = {
    english: [
    "Nie",
    "Na pewno?",
    "Na serio?",
    "Na serio na serio?",
    "Zastanów się jeszcze",
    "Nie wierzysz w drugią szanse?",
    "Czemu tak nie miło?",
    "Może pogadajmy?",
    "To już ostatni raz",
    "No kliknij tak",
    "Teraz to już przesada",
    "Po co mi to robisz?",
    "Daj mi chociaż szansę",
    "No weź, proszę",
    "NO KLIKNIJ"
    ],
};


let language = "english"; // Default language is English
const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 1;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    // Change banner source
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "nie.gif";
        refreshBanner();
    }
    clicks++;
    // increase button height and width gradually to 250px
    const sizes = [40, 50, 30, 35, 45]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    let total = answers_no[language].length;
    // change button text
    if (i < total - 1) {
        no_button.innerHTML = answers_no[language][i];
        i++;
} else if (i === total - 1) {
    // ostatnie kliknięcie "NIE"

    // usuń przycisk NIE
    no_button.style.display = "none";

    // YES na cały ekran
    yes_button.innerHTML = "TAK";
    yes_button.style.position = "fixed";
    yes_button.style.top = "0";
    yes_button.style.left = "0";
    yes_button.style.width = "101vw";
    yes_button.style.height = "100vh";
    yes_button.style.fontSize = "48px";
    yes_button.style.borderRadius = "0";
    yes_button.style.zIndex = "9999";
    yes_button.style.transition = "all 0.4s ease";
    yes_button.style.boxSizing = "border-box";
    yes_button.style.margin = "0";
   

    // opcjonalnie kolor
    yes_button.style.background = "green";
}
});

yes_button.addEventListener('click', () => {
    // change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "love.gif";
    refreshBanner();
    // hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    // show message div
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
     document.getElementById("question-heading").style.display = "none";
});
yes_button.addEventListener("click", () => {
    // sprawdź, czy audio już nie istnieje
    if (!document.getElementById("audio-container")) {
        // stwórz kontener audio
        const audioContainer = document.createElement("div");
        audioContainer.id = "audio-container";

        // pozycjonowanie
        audioContainer.style.position = "fixed";
        audioContainer.style.bottom = "20px";
        audioContainer.style.left = "50%";
        audioContainer.style.transform = "translateX(-50%)";
        audioContainer.style.zIndex = "10000";
        audioContainer.style.backgroundColor = "#000000"; // czerwone tło
        audioContainer.style.padding = "10px 20px";
        audioContainer.style.borderRadius = "12px";
        audioContainer.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
        audioContainer.style.marginBottom = "400px"

        // stwórz element audio z kontrolkami
        const audio = document.createElement("audio");
        audio.src = "nutka.mp3"; // Twój plik
        audio.controls = true;       // play/pause dostępne dla użytkownika

        // dodaj audio do kontenera
        audioContainer.appendChild(audio);

        // dodaj kontener do body
        document.body.appendChild(audioContainer);
    }
});

function refreshBanner() {
    // Reload banner gif to force load  
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}

