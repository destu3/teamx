//by team 3-virtual companion
// Function to speak text
function speakText(text) {
    // Check if the SpeechSynthesis API is available
    if ('speechSynthesis' in window) {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);

        // Optionally, you can configure the voice and other settings here
        // utterance.voice = synth.getVoices()[0]; // Choose a specific voice
        // utterance.rate = 1.0; // Adjust speech rate (1.0 is the default)

        // Speak the text
        synth.speak(utterance);
    } else {
        console.error('Text-to-speech is not supported in this browser.');
    }
}


export default speakText;