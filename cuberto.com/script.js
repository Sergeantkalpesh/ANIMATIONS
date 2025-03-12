Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", 
    {videos: ["./0.mp4", "./2.mp4", "./3.mp4"],
});

gsap.to(".fleftelm", {
    scrollTrigger: {
        trigger: "#fimages",         // Trigger element
        pin: true,                   // Pin the element
        start: "top top",            // Start when the top of the trigger hits the top of the viewport
        end: "bottom bottom",        // End when the bottom of the trigger hits the bottom of the viewport
        endTrigger: ".last",         // The ScrollTrigger for the last section
        scrub: 1,                // Smooth scroll effect
    },
    y: "-300%",                      // Move the element vertically
    ease: Power1,                    // Easing effect
});

let sections = document.querySelectorAll(".fleftelm");
Shery.imageEffect(".images", {
    style: 5,
    slideStyle: (setScroll) => {
        sections.forEach(function(section, index){
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                scrub: 1,
                onUpdate: function(prog){
                    setScroll(prog.progress + index);
                },
            });
        });
    },
});
