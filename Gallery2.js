document.addEventListener("DOMContentLoaded", function() {
    const lbAlbum = document.querySelector(".lb-album");
    const imagenes = [];

    // Obtener lista de archivos de la carpeta de imágenes
    fetch('images/thumbs/thumbsEspejos/')
        .then(response => response.text())
        .then(text => {
            const parser = new DOMParser();
            const htmlDocument = parser.parseFromString(text, 'text/html');
            const anchors = Array.from(htmlDocument.querySelectorAll('a'));
            anchors.forEach(anchor => {
                const href = anchor.getAttribute('href');
                if (href.endsWith('.jpg')) {
                    imagenes.push(href);
                }
            });

            // Ordenar las imágenes numéricamente
            imagenes.sort((a, b) => {
                const numA = parseInt(a.split('/').pop().split('.jpg')[0]);
                const numB = parseInt(b.split('/').pop().split('.jpg')[0]);
                return numA - numB;
            });

            // Crear elementos de la galería en el orden correspondiente
            imagenes.forEach((imagen, index) => {
                const i = index + 1;
                const listItem = document.createElement("li");
                const anchor = document.createElement("a");
                anchor.setAttribute("href", `#image-${i}`);
                const image = document.createElement("img");
                image.setAttribute("src", imagen);
                image.setAttribute("alt", `image${i}`);
                const span = document.createElement("span");
                span.textContent = `Photo ${i}`;
                anchor.appendChild(image);
                anchor.appendChild(span);
                listItem.appendChild(anchor);
                image.setAttribute("class", "thumbnail-image");

                // Crear lbOverlay y otros elementos como en tu código original
                // Omitido por brevedad

                lbAlbum.appendChild(listItem);
            });
        });
});

