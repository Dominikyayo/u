document.getElementById("btnClick").addEventListener("click", function() {
    document.getElementById("btnClick").style.display = "none";
    document.getElementById("videoContainer").style.display = "block";
    const video = document.querySelector('video');
    video.play();

    video.addEventListener('ended', function() {
        document.getElementById("btnClick").style.display = "block";
        document.getElementById("videoContainer").style.display = "none";
        video.pause(); 
        video.currentTime = 0;
    });
});

