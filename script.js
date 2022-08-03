const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const audio = document.querySelector("audio");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

// Music
const songs = [
  {
    name: "jacinto-1",
    displayName: "Electric chill Machine",
    artist: "Jacinto Design",
  },
  {
    name: "jacinto-2",
    displayName: "Seven Nation Army (Remix)",
    artist: "Jacinto Design",
  },
  {
    name: "jacinto-3",
    displayName: "Goodnight, Disco Queen",
    artist: "Jacinto Design",
  },
  {
    name: "jacinto-4",
    displayName: "Front Row (Remix)",
    artist: "Jacinto Design",
  },
];

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

// Update DOM
const loadSong = (song) => {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  audio.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
};

// Current Song
let audioIndex = 0;

// Previous Audio
const playPrev = () => {
  audioIndex--;
  if (audioIndex < 0) {
    audioIndex = songs.length - 1;
  }
  loadSong(songs[audioIndex]);
  playAudio();
};

// Next Audio
const playNext = () => {
  audioIndex++;
  if (audioIndex > songs.length - 1) {
    audioIndex = 0;
  }
  loadSong(songs[audioIndex]);
  playAudio();
};

// On Load
loadSong(songs[audioIndex]);

// Event Listeners
prevBtn.addEventListener("click", playPrev);
nextBtn.addEventListener("click", playNext);
