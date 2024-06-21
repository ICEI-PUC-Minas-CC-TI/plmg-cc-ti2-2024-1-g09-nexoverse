(function() {
    if (!("mediaDevices" in navigator) || !("getUserMedia" in navigator.mediaDevices)) {
        alert("O browser não pode abrir a câmera");
        return;
    }

    const video = document.querySelector("#video");
    const canvas = document.querySelector("#canvas");

    const constraints = {
        video: {
            width: {
                min: 1280,
                ideal: 1920,
                max: 2560,
            },
            height: {
                min: 720,
                ideal: 1080,
                max: 1440,
            },
        },
    };

    let useFrontCamera = true;
    let videoStream;

    var play = function() {
        video.play();
    };

    var processFace = function() {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
        const imgDataUrl = canvas.toDataURL("image/png");
        makeBlob(imgDataUrl).then(blob => {
            processImage(blob);
        }).catch(error => {
            console.error("Erro ao converter para Blob:", error);
        });
    };

    async function initializeCamera() {
        constraints.video.facingMode = useFrontCamera ? "user" : "environment";

        try {
            videoStream = await navigator.mediaDevices.getUserMedia(constraints);
            video.srcObject = videoStream;
            video.addEventListener('loadedmetadata', play); // Espera até o vídeo estar pronto
        } catch (err) {
            alert("Sem acesso à câmera");
        }
    }

    async function makeBlob(dataURL) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = function() {
                const canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                canvas.toBlob(resolve, "image/png");
            };
            img.onerror = reject;
            img.src = dataURL;
        });
    }

    initializeCamera();

    // Processa um frame inicial depois de 2 segundos
    setTimeout(function() {
        processFace();
    }, 2000);

    // Processa frames periodicamente a cada 5 segundos
    setInterval(function() {
        processFace();
    }, 5000);

})();
