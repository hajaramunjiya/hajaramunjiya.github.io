// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function() {
    // Get the parallax element and its child layers
    let parallax = document.getElementById('parallax');
    let layers = parallax.children;

    // Function to move layers based on mouse position
    function moveLayersDependOnMouse(e) {
        // Calculate the initial position differences from the center of the window
        let initialX = window.innerWidth / 2 - e.pageX;
        let initialY = window.innerHeight / 2 - e.pageY;

        // Convert layers NodeList to an array and iterate over each layer
        [].slice.call(layers).forEach(function(layer, index) {
            let divider = index / 100; // Determine how much each layer should move
            let positionX = initialX * divider; // Calculate horizontal movement
            let positionY = initialY * divider; // Calculate vertical movement
            let bottomPosition = (window.innerHeight / 2) * divider; // Calculate bottom position
            let transformString = 'translate(' + positionX + 'px,' + positionY + 'px)'; // Create transform string
            let image = layer.firstElementChild; // Get the first child element (image) of the layer
            let layerStyle = layer.style;

            // Apply the transformation to the layer
            layerStyle.transform = transformString;
            // Adjust the bottom position of the image
            image.style.bottom = '-' + bottomPosition + 'px';
        });
    }

    // Add a mousemove event listener to the document to track the mouse movement
    document.addEventListener('mousemove', function(e) {
        moveLayersDependOnMouse(e);
    });
});

// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {
    // Get the button and video elements
    const watchTrailerBtn = document.getElementById('watch-trailer-btn');
    const trailerVideo = document.getElementById('trailer-video');

    // Add a click event listener to the button
    watchTrailerBtn.addEventListener('click', function () {
        // Show the video and play it
        trailerVideo.style.display = 'block';
        trailerVideo.play();
    });
});

// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {
    // Get all images in the gallery
    const galleryImages = document.querySelectorAll('.gallery img');
    
    // Add a scroll event listener to the window
    window.addEventListener('scroll', function () {
        // Iterate over each gallery image
        galleryImages.forEach((image, index) => {
            // Check if the image is in the viewport
            if (isElementInViewport(image)) {
                // Apply animation class based on the index (even or odd)
                if (index % 2 === 0) {
                    image.classList.add('animate-left');
                } else {
                    image.classList.add('animate-right');
                }
            }
        });
    });

    // Function to check if an element is in the viewport
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
