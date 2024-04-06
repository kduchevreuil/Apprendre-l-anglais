const Allimages = document.querySelectorAll("#altToSpeech");
let synth = window.speechSynthesis;
let isSpeaking = false;

// Set language to American English
synth.lang = "en-US";
// séléctionner la voix masculine
let voices = synth.getVoices();
let voice = voices.find((v) => v.name === "Google US English");
synth.voice = voice;



// Reading alternative description
Allimages.forEach((image) => {
  image.addEventListener("click", (e) => {
    e.preventDefault();
    let textimage = e.target.alt;
    let textReading = new SpeechSynthesisUtterance(textimage);
    // Set the male language to English

    textReading.lang = "en-US";
    // Set
    textReading.pitch = 0.75; // Voice pitch (between 0 and 2, 1 being normal)
    textReading.rate = 1; // Voice speed (1 is normal, higher is faster)
    textReading.volume = 1.0; // Voice volume (between 0 and 1)

    // Check if an American English voice is available
    let americanVoice = window.speechSynthesis.getVoices().find((v) => v.lang === "en-US" || v.lang === "en");

    if (americanVoice) {
      // Use the American English voice if available
      textReading.voice = americanVoice;
    } else {
      // If no American English voice is available, use the first available voice compatible with English
      let compatibleVoice = window.speechSynthesis.getVoices().find((v) => v.lang.startsWith("en-US") || v.voiceURI.includes("US") || v.voiceURI.includes("eng"));
      if (compatibleVoice) {
        textReading.voice = compatibleVoice;
      } else {
        // If no American English voice is available, use the first available voice
        textReading.voice = window.speechSynthesis.getVoices()[0];
      }
    }

    speechSynthesis.speak(textReading);
  });
});
