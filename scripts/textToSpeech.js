// Sélection de tous les boutons avec l'id "textToSpeech"
const allButtons = document.querySelectorAll("#textToSpeech");
// Initialisation de la synthèse vocale
const synth = window.speechSynthesis;

// Détection de la langue turque
let turkishVoice = synth.getVoices().find((v) => v.lang === "en-US");
// Définition de la langue par défaut
let defaultLang = "en-US"; // Turc turc (Turquie)
if (turkishVoice) {
  defaultLang = "en";
}

// Ajout d'un écouteur à chaque bouton pour la synthèse vocale
allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // Récupération du texte du bouton cliqué
    let textToSpeak = e.target.textContent;

    // Création de l'objet de synthèse vocale
    let speechUtterance = new SpeechSynthesisUtterance(textToSpeak);
    speechUtterance.lang = defaultLang; // Utilisation de la langue par défaut

    // Ajustement des propriétés pour une voix plus fluide
    speechUtterance.pitch = 0.75; // Hauteur de la voix (entre 0 et 2, 1 étant normal)
    speechUtterance.rate = 0.85; // Vitesse de la voix (1 est normal, plus élevé est plus rapide)
    speechUtterance.volume = 1.0; // Volume de la voix (entre 0 et 1)

    // Recherche d'une voix turque spécifique
    let voice = synth.getVoices().find((v) => v.lang === defaultLang);
    if (!voice) {
      // Si aucune voix turque n'est disponible, recherche d'une voix compatible avec le turc
      voice = synth.getVoices().find((v) => v.lang.startsWith("en-US")
        || v.voiceURI.includes("US") || v.voiceURI.includes("English")
        || v.voiceURI.includes("en-US"));
    }
    // Utilisation de la première voix disponible si aucune voix turque n'est trouvée
    speechUtterance.voice = voice || synth.getVoices()[0];

    // Arrêt de la synthèse vocale précédente si elle est en cours
    if (synth.speaking) {
      synth.cancel();
    }

    // Synthèse vocale du texte
    synth.speak(speechUtterance);
  });
});

