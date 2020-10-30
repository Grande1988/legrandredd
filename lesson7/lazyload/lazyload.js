const imagesToLoad = document.querySelectorAll("img[data-src]");



const imgOptions = {
    threshold: 0.5
};

const loadImages = (large) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};


if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver ((items, imgObserver) =>){
        items.forEach((item) => {
            if (item.isIntersecting){
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    },imgOptions);


    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
 else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}