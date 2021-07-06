document.addEventListener("readystatechange", function (event) {
    if (event.target.readyState == "interactive") {
        document.querySelector("body").classList.add("js");

        // Click noise
        document.addEventListener("click", function (event) {
            var sound = this.getElementById('click');
            sound.playbackRate = 2;
            sound.play();
        });

        // Expand
        let featuresExpandButtons = document.querySelectorAll("#activity article .expand-button a");
        for (let button of featuresExpandButtons) {
            button.addEventListener("click", function (event) {
                this.parentElement.parentElement.classList.add("expanded");
                event.preventDefault();
            });
        }
    }
});

// Carousel
var index = 1;
var prev = document.getElementsByClassName('prev');
var next = document.getElementsByClassName('next');

showSlides(index);

function plusSlides(n) {
    showSlides(index += n);
}

function currentSlide(n) {
    showSlides(index = n);
}

prev.addEventListener("click", () => {
    plusSlides(-1);
})

next.addEventListener("click", () => {
    plusSlides(1);
})

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        index = 1
    }
    if (n < 1) {
        index = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[index - 1].style.display = "block";
    dots[index - 1].className += " active";
}