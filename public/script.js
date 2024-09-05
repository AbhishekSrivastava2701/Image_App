const imageUpload = document.getElementById('imageUpload');
const backgrounds = document.querySelectorAll('.background');
const customBackground = document.getElementById('customBackground');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let uploadedImage = new Image();
let selectedBackground = null;

imageUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();

    reader.onload = (e) => {
        uploadedImage.src = e.target.result;
        uploadedImage.onload = () => {
            drawCanvas();
        };
    };

    reader.readAsDataURL(file);
});


backgrounds.forEach(background => {
    background.addEventListener('click', () => {
        selectedBackground = background.src;
        drawCanvas();
    });
});

customBackground.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();

    reader.onload = (e) => {
        selectedBackground = e.target.result;
        drawCanvas();
    };

    reader.readAsDataURL(file);
});


function drawCanvas() {
    if (selectedBackground) {
        const bg = new Image();
        bg.src = selectedBackground;
        bg.onload = () => {

            canvas.width = bg.width;
            canvas.height = bg.height;
            ctx.drawImage(bg, 0, 0);

            if (uploadedImage.src) {
                const centerX = (canvas.width - uploadedImage.width) / 2;
                const centerY = (canvas.height - uploadedImage.height) / 2;
                ctx.drawImage(uploadedImage, centerX, centerY);
            }
        };
    }
}

document.getElementById('downloadBtn').addEventListener('click', () => {
    if (!selectedBackground || !uploadedImage.src) {
        alert("Please upload a background image and an uploaded image before downloading.");
        return;
    }

    const link = document.createElement('a');
    link.download = 'image.png';
    link.href = canvas.toDataURL();
    link.click();
});