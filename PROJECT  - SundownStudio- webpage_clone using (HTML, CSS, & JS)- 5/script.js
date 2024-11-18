console.log("js running...");


let cont = document.querySelector("#page5-outcont");
let fxdimg = document.querySelector("#fixed-image");
cont.addEventListener("mouseenter", function () {
    fxdimg.style.display = "block";
})
cont.addEventListener("mouseleave", function () {
    fxdimg.style.display = "none";
});

let conts = document.querySelectorAll(".pg5-cont");
conts.forEach((e) => {
    e.addEventListener("mouseenter", function () {
        let hoverimg = e.getAttribute("data-image");
        fxdimg.style.backgroundImage = `url(${hoverimg})`;
    })
});

function scrollAnimation() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#wrapper'),
        smooth: true
    });
}
function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}
function loaderAnimation(){

    let loader = document.querySelector("#loader");

    setTimeout(() => {
        loader.style.top = "-100%"
    }, 3500);

}
swiperAnimation()
// scrollAnimation()
loaderAnimation()


