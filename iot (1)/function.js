var video = document.getElementById("myVideo");
    var playPauseButton = document.getElementById("playPauseButton");

    playPauseButton.addEventListener("click", function() {
        if (video.paused) {
            video.play();
            playPauseButton.textContent = "Pause";
        } else {
            video.pause();
            playPauseButton.textContent = "Play";
        }
    });

    video.addEventListener("play", function() {
        playPauseButton.textContent = "Pause";
    });

    video.addEventListener("pause", function() {
        playPauseButton.textContent = "Play";
    });

    
    