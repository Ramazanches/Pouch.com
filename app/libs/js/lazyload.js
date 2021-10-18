//src первой картинки должна быть заполнена
//пример <div><img src="1.webp" data="1.webp" alt=""></div>
//нужно указать ширину img

const images = document.querySelectorAll('img');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
}

function handleImg(myImg, observer) {
    myImg.forEach(myImgSingle => {
        console.log(myImgSingle.intersectionRatio);
        if (myImgSingle.intersectionRatio > 0) {
            loadImage(myImgSingle.target);
        }
    })
}

function loadImage(image) {
    image.src = image.getAttribute('data');
    observer.unobserve(image);
}

const observer = new IntersectionObserver(handleImg, options);

images.forEach (img => {
    observer.observe(img);
})
