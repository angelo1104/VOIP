const speak =(sentence)=>{
    const utterance = new SpeechSynthesisUtterance(sentence);
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[3]
    speechSynthesis.speak(utterance);
}

export default speak;