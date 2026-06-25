import { useEffect } from "react";

function AutoMusic() {
  useEffect(() => {
    const audio = new Audio("/music.mp3");
    audio.loop = true;

    const startMusic = () => {
      audio.play().catch(() => {});
      document.removeEventListener("click", startMusic);
    };

    document.addEventListener("click", startMusic);

    return () => {
      document.removeEventListener("click", startMusic);
    };
  }, []);

  return null;
}

export default AutoMusic;