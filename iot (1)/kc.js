var audio = document.getElementById("audio");
var playPauseButton = document.getElementById("play-pause");

playPauseButton.addEventListener("click", function() {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = "Pause";
    } else {
        audio.pause();
        playPauseButton.textContent = "Play";
    }
});

audio.addEventListener("play", function() {
    playPauseButton.textContent = "Pause";
});

audio.addEventListener("pause", function() {
    playPauseButton.textContent = "Play";
});

