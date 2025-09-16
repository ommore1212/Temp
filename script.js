// Video 6-second loop
const video = document.getElementById("bg-video");

video.addEventListener("timeupdate", () => {
  if (video.currentTime > 6) {
    video.currentTime = 0; // rewind to start
    video.play();
  }
});
window.addEventListener("load", () => {
  const video = document.getElementById("bg-video");

  // Wait for video to be ready
  video.oncanplaythrough = () => {
    // Small delay for smooth transition
    setTimeout(() => {
      document.getElementById("preloader").style.display = "none";
      document.getElementById("main-content").style.display = "block";
    }, 1000);
  };
});

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

