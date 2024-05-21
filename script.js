function scroller() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,
        getDirection: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
scroller();

// document.addEventListener("DOMContentLoaded", function() {
//     const canvas = document.querySelector("canvas");
//     const triggerElements = document.querySelectorAll(".main");

//     // Function to check if the cursor is over any of the trigger elements
//     function isCursorOverTriggerElement(event) {
//         for (const element of triggerElements) {
//             if (element.contains(event.target)) {
//                 return true;
//             }
//         }
//         return false;
//     }

//     // Event listener for mousemove to toggle the visibility of the canvas
//     document.addEventListener("mousemove", function(event) {
//         if (isCursorOverTriggerElement(event)) {
//             canvas.style.display = "none"; // Show the WebGL canvas
//         } else {
//             canvas.style.display = "block"; // Hide the WebGL canvas
//         }
//     });
// });


document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.part1 h1', { duration: 1, y: -50, opacity: 0, ease: 'bounce' });
    gsap.from('.part2 h1', { duration: 1, y: 50, opacity: 0, delay: 0.5 });
    gsap.from('.part2 p', { duration: 1, scale: 0, opacity: 0, delay: 1 });

    gsap.from('container1', {
        scrollTrigger: {
            trigger: '.par1 .part2',
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
        },
        y: 50,
        opacity: 0,
        stagger: 0.2
    });
});

var main=document.querySelector(".main");
var crsr=document.querySelector(".cursor");
var crsr2=document.querySelector(".cursor-blur");
main.addEventListener("mousemove",function(tre){
  crsr.style.left=tre.x+"px";
  crsr.style.top=tre.y+"px";
  crsr2.style.left=tre.x-50+"px";
  crsr2.style.top=tre.y-50+"px";

})