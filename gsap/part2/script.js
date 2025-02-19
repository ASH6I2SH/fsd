// gsap.from(".page1 .box", {
//     scale: 0,
//     duration: 1,
//     delay: 1,
//     rotate: 360
// })  
// gsap.from(".page2 .box", {
//     scale: 0,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     scrollTrigger: {
//         trigger: ".page2 .box",
//         scroller: "body",
//         markers: true,
//         start: "top 50%"
//     }
// })

// gsap.from(".page2 h1", {
//     opacity: 0,
//     duration: 3,
//     x: "75%",
//     scrollTrigger: {
//         trigger: ".page2 h1",
//         scroller: "body",
//         markers: true,
//         start: "top 60%"
//     }
// })
// gsap.from(".page2 h2", {
//     opacity: 0,
//     duration: 3,
//     x: "-75%",
//     scrollTrigger: {
//         trigger: ".page2 h2",
//         scroller: "body",
//         markers: true,
//         start: "top 60%"
//     }
// })

// gsap.from(".page2 .box", {
//     scale: 0, 
//     opacity: 0,
//     duration: 2,
//     rotate: 720,
//     scrollTrigger: {
//         trigger: ".page2 .box",
//         scroller: "body",
//         markers: true,
//         start: "top 60%",
//         end:"top 30%",
//         scrub: 4,
//         pin: true,
//     }
// })

gsap.to(".page2 h1", {
    Transform: "translate(-210%)",
    scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        scrub: 1,
        pin: true
    }

})