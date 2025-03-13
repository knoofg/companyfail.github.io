document.addEventListener("DOMContentLoaded", function() {
    const botonLoco = document.getElementById("botonLoco");
    const meme = document.getElementById("meme");
    const memes = ["meme1.jpg", "meme2.jpg", "meme3.jpg"];
    const botonesSonido = document.querySelectorAll(".boton-sonido");

    botonLoco.addEventListener("mouseover", function() {
        let x = Math.random() * (window.innerWidth - botonLoco.clientWidth);
        let y = Math.random() * (window.innerHeight - botonLoco.clientHeight);
        botonLoco.style.position = "absolute";
        botonLoco.style.left = `${x}px`;
        botonLoco.style.top = `${y}px`;
    });

    botonLoco.addEventListener("click", function() {
        alert("JAJA, ¿pensaste que haría algo útil?");
        meme.src = memes[Math.floor(Math.random() * memes.length)];
    });

    botonesSonido.forEach(boton => {
        boton.addEventListener("click", function() {
            let sonido = new Audio(boton.getAttribute("data-sonido"));
            sonido.play();
        });
    });

    document.addEventListener("mousemove", function(event) {
        let x = event.clientX;
        let y = event.clientY;
        let span = document.createElement("span");
        span.classList.add("cursor-efecto");
        span.style.left = `${x}px`;
        span.style.top = `${y}px`;
        document.body.appendChild(span);
        setTimeout(() => span.remove(), 500);
    });
});
