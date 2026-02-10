
// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger, ScrollSmoother)
    // gsap code here!
    const smoother = ScrollSmoother.create({
        smooth: 2,
        effects: true,
        smoothTouch: 0.1,
    })

    const effects = gsap.timeline({
        scrollTrigger: {
            trigger: "#c1",
            markers: false,
            start: "top 20%",
            toggleActions: "play none reset none",
        }


    });

    effects.fromTo(".c1_1", 2, { opacity: 0, y: 100 }, {
        opacity: 1, y: 0,
        ease: "elastic.out(1,0.3)",
    }).fromTo(".c1_2", 2, { opacity: 0, y: 100 }, {
        opacity: 1, y: 0,
        ease: "elastic.out(1,0.3)",
    }, "<0.5").fromTo(".c1_3", 2, { opacity: 0, y: 100 }, {
        opacity: 1, y: 0,
        ease: "elastic.out(1,0.3)",
    }, "<0.5");


    const finger = gsap.timeline({
        scrollTrigger: {
            trigger: "#c4",
          
            start: "top 50%",
            end: "bottom 50%",
            scrub: 1,
        }
    });

    finger.fromTo(".full", 1, { drawSVG: "0%" }, { drawSVG: "100%" });

});

var swiper = new Swiper(".swiper", {

    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,

    },

});

gsap.to(".wheel-item", {
    loop: true,
    keyframes: {
        y: [0, 80, -10, 30, 0],
        ease: "none", // <- ease across the entire set of keyframes (defaults to the one defined in the tween, or "none" if one isn't defined there)
        easeEach: "power2.inOut" // <- ease between each keyframe (defaults to "power1.inOut")
    },
    rotate: 0,
    ease: "elastic", // <- the "normal" part of the tween. In this case, it affects "rotate" because it's outside the keyframes
    duration: 3,
    stagger: 0.2,
    autoplay: {
        delay: 4000,
    },

});





