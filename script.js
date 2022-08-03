const audio = document.querySelector("audio");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

// Check if playing
let isPlaying = false;

// Play
const playAudio = () => {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
  audio.play();
};

// Pause
const pauseAudio = () => {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
  audio.pause();
};

// Play or Pause Event Listner
playBtn.addEventListener("click", () =>
  isPlaying ? pauseAudio() : playAudio()
);
