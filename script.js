document.getElementById("btnClick").addEventListener("click", function() {
    document.getElementById("btnClick").style.display = "none";
    document.getElementById("videoContainer").style.display = "block";
    const video = document.querySelector('video');
    video.play();

    // Adicionar um ouvinte de evento para detectar o término da reprodução do vídeo
    video.addEventListener('ended', function() {
        document.getElementById("btnClick").style.display = "block";
        document.getElementById("videoContainer").style.display = "none";
        video.pause(); // Pausa o vídeo
        video.currentTime = 0; // Reinicia o vídeo para o início
    });
});

