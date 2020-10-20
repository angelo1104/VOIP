const speak =(sentence)=>{
    const utterance = new SpeechSynthesisUtterance(sentence);
    const voices = speechSynthesis.getVoices();
    utterance.rate = 0.9;
    utterance.voice = voices[4]
    speechSynthesis.speak(utterance);
}

export default speak;