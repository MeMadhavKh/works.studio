function loading() {
    var tl = gsap.timeline()
    tl.to("#black", {
        top: "-100%",
        delay: 0.5,
        duration: 0.7,
        ease: "expo.out"// ease ke naamo ke liye gsap ease search kre
    })
    tl.from("#yellow2", {
        top: "100%",
        delay: 0.6,
        duration: 0.7,
        ease: "expo.out"
    }, "anim")
    tl.to("#loader h1", {
        delay: 0.6,
        duration: 0.7,
        color: "black"
    }, "anim")
    tl.to("#loader", {
        opacity: 0
    })
};
loading();
const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

function page2Animation() {
    var elems = document.querySelectorAll(".elem");
    var page2 = document.querySelector("#page2");
    elems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            var bgimg = elem.getAttribute("data-img");
            page2.style.backgroundImage = `url(${bgimg})`
        })
        elem.addEventListener("mouseleave", function () {
            var bgimg = elem.getAttribute("data-img")
        })
    })
}
page2Animation();

function back2top(){
    document.querySelector("#footer h3").addEventListener("click", ()=>{
        scroll.scrollTo(0);
    });
}
back2top();

document.querySelector("#scroll-down").addEventListener("click", ()=>{
    console.log("clicked");
})