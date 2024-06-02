// script.js
document.addEventListener("DOMContentLoaded", function() {
    let parallax = document.getElementById('parallax');
    let layers = parallax.children;

    function moveLayersDependOnMouse(e) {
        let initialX = window.innerWidth / 2 - e.pageX;
        let initialY = window.innerHeight / 2 - e.pageY;

        [].slice.call(layers).forEach(function(layer, index) {
            let divider = index / 100;
            let positionX = initialX * divider;
            let positionY = initialY * divider;
            let bottomPosition = (window.innerHeight / 2) * divider;
            let transformString = 'translate(' + positionX + 'px,' + positionY + 'px)';
            let image = layer.firstElementChild;
            let layerStyle = layer.style;

            layerStyle.transform = transformString;
            image.style.bottom = '-' + bottomPosition + 'px';
        });
    }

    document.addEventListener('mousemove', function(e) {
        moveLayersDependOnMouse(e);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const watchTrailerBtn = document.getElementById('watch-trailer-btn');
    const trailerVideo = document.getElementById('trailer-video');

    watchTrailerBtn.addEventListener('click', function () {
        trailerVideo.style.display = 'block';
        trailerVideo.play();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const galleryImages = document.querySelectorAll('.gallery img');
    
    window.addEventListener('scroll', function () {
        galleryImages.forEach((image, index) => {
            if (isElementInViewport(image)) {
                if (index % 2 === 0) {
                    image.classList.add('animate-left');
                } else {
                    image.classList.add('animate-right');
                }
            }
        });
    });

    // Function to check if element is in viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});

