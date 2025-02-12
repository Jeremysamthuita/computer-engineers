// script.js
function showModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = 'none';
    }
}

// Sample form handling
document.getElementById('contact-form').onsubmit = function(e) {
    e.preventDefault();
    // Add form submission logic
    alert('Thank you for your enquiry! We will respond shortly.');
    closeModal('contact-modal');
};

// Initialize image carousel scrolling
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel-inner");
    const images = document.querySelectorAll(".carousel-inner img");
    let index = 0;
    let interval;

    function showImage(i) {
        if (i < 0) {
            index = images.length - 1;
        } else if (i >= images.length) {
            index = 0;
        } else {
            index = i;
        }
        carousel.style.transform = `translateX(${-index * 100}%)`;
    }

    function nextImage() {
        showImage(index + 1);
    }

    function startSlideshow() {
        interval = setInterval(nextImage, 3000);
    }

    function stopSlideshow() {
        clearInterval(interval);
    }

    carousel.addEventListener("wheel", function (event) {
        stopSlideshow();
        if (event.deltaY < 0) {
            showImage(index - 1);
        } else {
            showImage(index + 1);
        }
        startSlideshow();
    });

    startSlideshow();
});
