console.log("js running...");

// let cont = document.querySelector("#elem1");
// console.log(cont);
// let fxdimg = cont.getAttribute("data-image");
// console.log(fxdimg);
let cont = document.querySelector("#page5-outcont");
let fxdimg = document.querySelector("#fixed-image");
cont.addEventListener("mouseenter", function () {
    // fxdimg.style = "display:block"; 
    fxdimg.style.display = "block";
})
cont.addEventListener("mouseleave", function () {
    // fxdimg.style = "display:none"; 
    fxdimg.style.display = "none";
})

/*let elem1 = document.querySelector("#elem1");
elem1.addEventListener("mouseenter",function(){
    let hoverimg = elem1.getAttribute("data-image");
    fxdimg.style.backgroundImage = `url(${hoverimg})`
})
let elem2 = document.querySelector("#elem2");
elem1.addEventListener("mouseenter",function(){
    let hoverimg = elem2.getAttribute("data-image");
    fxdimg.style.backgroundImage = `url(${hoverimg})`
})
let elem3 = document.querySelector("#elem3");
elem1.addEventListener("mouseenter",function(){
    let hoverimg = elem3.getAttribute("data-image");
    fxdimg.style.backgroundImage = `url(${hoverimg})`
})
let elem4 = document.querySelector("#elem4");
elem1.addEventListener("mouseenter",function(){
    let hoverimg = elem4.getAttribute("data-image");
    fxdimg.style.backgroundImage = `url(${hoverimg})`
})
let elem5 = document.querySelector("#elem5");
elem1.addEventListener("mouseenter",function(){
    let hoverimg = elem5.getAttribute("data-image");
    fxdimg.style.backgroundImage = `url(${hoverimg})`
})
*/

// THE BEST AND TRUE WAY OF DOING THIS IS AS FOLLOWS:

let conts = document.querySelectorAll(".pg5-cont");
// console.log(conts);
conts.forEach((e) => {
    // console.log(e);
    e.addEventListener("mouseenter", function () {
        let hoverimg = e.getAttribute("data-image");
        //    console.log(hoverimg);
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
    }, 3800);

}
swiperAnimation()
scrollAnimation()
loaderAnimation()


