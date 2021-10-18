
const images = document.querySelectorAll('source');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
}

function handleImg(myImg, observer) {
    myImg.forEach(myImgSingle => {
        if (myImgSingle.intersectionRatio > 0) {
            loadImage(myImgSingle.target);
        }
    })
}

function loadImage(image) {
    image.srcset = image.getAttribute('data');
    observer.unobserve(image);
}

const observer = new IntersectionObserver(handleImg, options);

images.forEach (source => {
    observer.observe(source);
});

