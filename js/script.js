
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
            end: "bottom 80%",
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
    repeat: -1,
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

const gnb = document.querySelector('#gnb');
const btn = document.querySelector('#hamburger');
const mainLinks = document.querySelectorAll('#gnb > ul > li > a');
btn.onclick = function (e) {
    e.preventDefault();
    e.stopPropagation();


    gnb.classList.toggle('on');
};


mainLinks.forEach(link => {
    link.onclick = function (e) {
        if (window.innerWidth <= 1024) {
            const subMenu = this.nextElementSibling;

            if (subMenu && subMenu.classList.contains('sub')) {

                e.preventDefault();
                e.stopPropagation();

                // 이미 열려있는 다른 서브메뉴를 닫고 싶다면 아래 코드 활성화 (선택)
                /*
                document.querySelectorAll('.sub').forEach(s => {
                    if(s !== subMenu) s.classList.remove('active');
                });
                */

                subMenu.classList.toggle('active');
            }
        }
    };
});

// 3. 외부 영역 클릭 시 메뉴 닫기 (이걸 넣어줘야 꼬이지 않음)
document.addEventListener('click', (e) => {
    if (!gnb.contains(e.target) && gnb.classList.contains('on')) {
        gnb.classList.remove('on');
        document.querySelectorAll('.sub').forEach(s => s.classList.remove('active'));
    }
});




