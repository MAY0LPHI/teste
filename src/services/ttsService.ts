import { useEffect } from 'react';

const TTSService = () => {
    const synth = window.speechSynthesis;

    const speak = (text) => {
        if (synth.speaking) {
            console.error('SpeechSynthesis is already speaking.');
            return;
        }
        if (text !== '') {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.onend = () => {
                console.log('Speech has finished.');
            };
            utterance.onerror = (event) => {
                console.error('SpeechSynthesisUtterance error:', event);
            };
            synth.speak(utterance);
        }
    };

    const stop = () => {
        if (synth.speaking) {
            synth.cancel();
        }
    };

    return { speak, stop };
};

export default TTSService;