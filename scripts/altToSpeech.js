const Allimages = document.querySelectorAll("#altToSpeech");
let synth = speechSynthesis,
  isSpeaking = true;
// choıx de la langue turque
let turkishVoice = window.speechSynthesis.getVoices().find((v) => v.lang === "tr" || v.lang === "tr-TR");
if (turkishVoice) {
  synth.lang = "en";
} else {
  synth.lang = "en-US";
}


// Lecture de la description alternative
Allimages.forEach((image) => {
  image.addEventListener("click", (e) => {
    e.preventDefault();
    let textimage = e.target.alt;
    let textReading = new SpeechSynthesisUtterance(textimage);
    textReading.lang = "en"; // Utiliser le code de langue ISO pour le turc
    textReading.pitch = 0.75; // Hauteur de la voix (entre 0 et 2, 1 étant normal)
    textReading.rate = 1; // Vitesse de la voix (1 est normal, plus élevé est plus rapide)
    textReading.volume = 1.0; // Volume de la voix (entre 0 et 1)

    // Vérifier si une voix turque est disponible
    let turkishVoice = window.speechSynthesis.getVoices().find((v) => v.lang === "en-US" || v.lang === "en");

    if (turkishVoice) {
      textReading.voice = turkishVoice;
    } else {
      // Si aucune voix turque n'est disponible, utiliser la première voix disponible compatible avec le turc
      let compatibleVoice = window.speechSynthesis.getVoices().find((v) => v.lang.startsWith("en-US") || v.voiceURI.includes("US") || v.voiceURI.includes("eng"));
      if (compatibleVoice) {
        textReading.voice = compatibleVoice;
      } else {
        // Si aucune voix turque n'est disponible, utiliser la première voix disponible
        textReading.voice = window.speechSynthesis.getVoices()[0];
      }
    }

    speechSynthesis.speak(textReading);
  });
});
