document.addEventListener('DOMContentLoaded', () => {
    const heart = document.getElementById('heart');
    const counter = document.getElementById('counter');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');
    const music = document.getElementById('music');
  
    let count = 0;
  
    heart.addEventListener('click', () => {
      count++;
      counter.textContent = count;
  
      if (count === 1) {
        music.play();
        music.volume = 0.1; // Set volume to 10%
      }
  
      if (count  === 50) {
        popup.style.display = 'block';
      }
    });
  
    closePopup.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  });