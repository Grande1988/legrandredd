
const images = document.querySelectorAll("[data-src]");

const loadImages = (image) => {
    image.setAttribute("src",image.getAttribute("data-src"));
    image.onload = () => {image.removeAttribute("data-src")};
}

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 100px 0px"
};
if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImages(entry.target);
                imgObserver.unobserve(entry.target);
            }
        })
    }, imgOptions);
    images.forEach((img)=>{
        imgObserver.observe(img)
    })
} else {
    images.forEach(image => {
        loadImages(image)
        // imgObserver.observe(image);
    });
}