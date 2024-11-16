function initializeGallery() {
    const images = document.querySelectorAll('.gallery img');

    images.forEach((img) => {
        img.addEventListener('mouseover', () => {
            img.style.border = '2px solid blue';
        });

        img.addEventListener('mouseleave', () => {
            img.style.border = 'none';
        });

        img.addEventListener('focus', () => {
            img.style.border = '2px solid green';
            console.log('Image focused:', img.alt);
        });

        img.addEventListener('blur', () => {
            img.style.border = 'none';
            console.log('Image blurred:', img.alt);
        });
    });

    console.log('Galerie initialisée');
}