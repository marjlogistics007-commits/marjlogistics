import { useEffect } from "react";

function AutoMusic() {
  useEffect(() => {
    const audio = new Audio("/music.mp3");
    audio.loop = true;

    const toggleMusic = () => {
      if (audio.paused) {
        audio.play().catch(() => {});
      } else {
        audio.pause();
        audio.currentTime = 0; // starts from beginning next time
      }
    };

    document.addEventListener("click", toggleMusic);

    return () => {
      document.removeEventListener("click", toggleMusic);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return null;
}

export default AutoMusic;