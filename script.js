const playBtn = document.getElementById('playBtn');
const errorMsg = document.getElementById('errorMsg');
const videoUrl = document.getElementById('videoUrl');
const video = document.getElementById('myVideo');
const volumeUp = document.getElementById('volumeUp');
const volumeDown = document.getElementById('volumeDown');
const brightnessUp = document.getElementById('brightnessUp');
const brightnessDown = document.getElementById('brightnessDown');
const darkModeBtn = document.getElementById('darkModeBtn');
const body = document.body;

let currentBrightness = 100;

playBtn.addEventListener('click', () => {
  if (!videoUrl.value) {
    errorMsg.textContent = "Please enter a video URL.";
    video.style.display = 'none';
    return;
  }

  video.src = videoUrl.value;
  video.style.display = 'block';
  video.load();
  video.play().catch(e => {
    errorMsg.textContent = "Error playing the video. Please check the URL.";
    video.style.display = 'none';
    console.error("Error playing video: ", e);
  });
});

volumeUp.addEventListener('click', () => {
  video.volume = Math.min(1, video.volume + 0.1);
});

volumeDown.addEventListener('click', () => {
  video.volume = Math.max(0, video.volume - 0.1);
});

brightnessUp.addEventListener('click', () => {
  if (currentBrightness <= 190) {
    currentBrightness += 10;
    video.style.filter = `brightness(${currentBrightness}%)`;
  }
});

brightnessDown.addEventListener('click', () => {
  if (currentBrightness >= 10) {
    currentBrightness -= 10;
    video.style.filter = `brightness(${currentBrightness}%)`;
  }
});

darkModeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});
