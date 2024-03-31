document.addEventListener("DOMContentLoaded", function() {
    const lbAlbum = document.querySelector(".lb-album");
    const lbNav = document.querySelector(".lb-nav");
    const lbPrev = document.querySelector(".lb-prev");
    const lbNext = document.querySelector(".lb-next");
    
    lbAlbum.addEventListener("click", function(event) {
        const target = event.target;
        if (target.tagName === "IMG") {
            lbNav.style.display = "block";
        }
    });

    lbNav.addEventListener("click", function(event) {
        const target = event.target;
        if (target.classList.contains("lb-prev")) {
            // Lógica para mostrar la imagen anterior
        } else if (target.classList.contains("lb-next")) {
            // Lógica para mostrar la siguiente imagen
        }
    });

    // Función para ocultar las flechas cuando se cierra la imagen
    function hideNav() {
        lbNav.style.display = "none";
    }

    // Código para cerrar la imagen y ocultar las flechas
    const lbClose = document.querySelectorAll(".lb-close");
    lbClose.forEach(function(closeButton) {
        closeButton.addEventListener("click", hideNav);
    });
});