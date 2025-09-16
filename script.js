// Video 6-second loop
const video = document.getElementById("bg-video");
const video = document.getElementById("bg-video");
const preloader = document.getElementById("preloader");
const mainContent = document.getElementById("main-content");
const startBtn = document.getElementById("start-btn");

// Wait for video to load enough
video.oncanplaythrough = () => {
  startBtn.style.display = "block"; // Show button
};

// When user taps button
startBtn.addEventListener("click", () => {
  preloader.style.display = "none";   // Hide preloader
  mainContent.style.display = "block"; // Show site
  video.muted = false;                // Enable sound
  video.play();                       // Play with audio
});

video.addEventListener("timeupdate", () => {
  if (video.currentTime > 6) {
    video.currentTime = 0; // rewind to start
    video.play();
  }
});
window.addEventListener("load", () => {
  const video = document.getElementById("bg-video");

// Floating hearts (still works)
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 2 + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 400);



