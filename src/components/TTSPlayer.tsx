import React from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

interface TTSPlayerProps {
  text: string;
}

const TTSPlayer: React.FC<TTSPlayerProps> = ({ text }) => {
  const { speak, cancel } = useSpeechSynthesis();

  const handlePlay = () => {
    cancel(); // Cancel any ongoing speech
    speak({ text });
  };

  return (
    <div className="tts-player">
      <button onClick={handlePlay}>Ouvir Versículo</button>
    </div>
  );
};

export default TTSPlayer;