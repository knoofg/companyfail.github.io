// SISTEMA DE CAOS INTERACTIVO
function triggerChaos() {
    document.body.style.background = `repeating-linear-gradient(
        45deg,
        ${getRandomColor()},
        ${getRandomColor()} 10px,
        ${getRandomColor()} 10px,
        ${getRandomColor()} 20px
    )`;
    
    Array.from(document.getElementsByClassName('meme-item')).forEach(item => {
        item.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;
    });

    new Audio('assets/sounds/error-sound.mp3').play();
}

// GENERADOR DE COLORES TÓXICOS
function getRandomColor() {
    const colors = ['#ff3b3b', '#ffe600', '#ff69b4', '#00ff88'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// EFECTO DE TECLADO ROTO
document.addEventListener('keydown', (e) => {
    if (e.key === 'Alt') {
        document.querySelector('.hidden-message').style.color = getRandomColor();
    }
});

// MOVIMIENTO PARANOICO DE RATÓN
document.addEventListener('mousemove', (e) => {
    const glitchBox = document.querySelector('.glitch-box');
    glitchBox.style.left = `${e.clientX}px`;
    glitchBox.style.top = `${e.clientY}px`;
});
