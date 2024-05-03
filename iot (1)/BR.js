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
// Kết nối đèn với firebase
    function toggleDenOff() {
        var slider = document.getElementById('denon');
        var checkboxLamp = document.getElementById('checkbox_lamp');
        
        if (checkboxLamp.checked) {
            database.ref("bedroom").update({
                "Den" : 0 // Tắt đèn khi slider được nhấn
            });
            slider.id = 'denoff'; // Đặt id "denoff" cho slider
        } else {
            database.ref("bedroom").update({
                "Den" : 1 // Bật đèn khi slider được nhấn
            });
            slider.id = 'denon'; // Đặt id "denon" cho slider
        }
    }
    // kết nối quạt với firebase
    function toggleFanOff() {
        var slider = document.getElementById('fanon');
        var checkboxFan = document.getElementById('checkbox_fan');
        
        if (checkboxFan.checked) {
            database.ref("bedroom").update({
                "quat" : 0 // Tắt đèn khi slider được nhấn
            });
            slider.id = 'fanoff'; // Đặt id "denoff" cho slider
        } else {
            database.ref("bedroom").update({
                "quat" : 1 // Bật đèn khi slider được nhấn
            });
            slider.id = 'fanon'; // Đặt id "denon" cho slider
        }
    }
    // kết nối điều hòa với firebase
    function toggleCor_Off() {
        var slider = document.getElementById('cor_on');
        var checkboxCor = document.getElementById('checkbox_cordinator');
        
        if (checkboxCor.checked) {
            database.ref("bedroom").update({
                "dieu hoa" : 0 // Tắt điều hòa khi slider được nhấn
            });
            slider.id = 'cor_off'; // Đặt id "cor_off" cho slider
        } else {
            database.ref("bedroom").update({
                "dieu hoa" : 1 // Bật điều hòa khi slider được nhấn
            });
            slider.id = 'cor_on'; // Đặt id "cor_on" cho slider
        }
    }