document.addEventListener('DOMContentLoaded', function () {
  const goodSound = document.getElementById('goodBackgroundMusic');
  const badSound = document.getElementById('badBackgroundMusic');
  const jacobButton = document.querySelector('.jacob');
  const kmarxButton = document.querySelector('.kmarx');
  const prompt = document.getElementById('prompt');

  // Function to start playing music
  function playGoodMusic() {
    badSound.pause();  // Stop the other sound first
    badSound.currentTime = 0;  // Reset the other sound to beginning
    goodSound.play()
      .catch(error => {
        console.log("Audio playback failed:", error);
      });
  }

  function playBadMusic() {
    goodSound.pause();  // Stop the other sound first
    goodSound.currentTime = 0;  // Reset the other sound to beginning
    badSound.play()
      .catch(error => {
        console.log("Audio playback failed:", error);
      });
  }

  // Add click listeners to both buttons
  jacobButton.addEventListener('click', () => {
    playGoodMusic();
    prompt.innerText = "damn right.";
  });
  kmarxButton.addEventListener('click', () => {
    playBadMusic();
    prompt.innerText = "oWAo oWAo oWao oWAo oWAo oWao";
  });
});
