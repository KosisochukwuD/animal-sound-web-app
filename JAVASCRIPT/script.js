const animals = document.querySelectorAll('.box img');

animals.forEach((animal) => {
  animal.addEventListener('click', () => {
    // Stop all other audios first
    document.querySelectorAll('audio').forEach(aud => {
      aud.pause();
      aud.currentTime = 0; // reset position
    });

    // Get only the audio inside the clicked box
    const audio = animal.parentElement.querySelector('audio');

    // Play it
    audio.play();
  });
});


