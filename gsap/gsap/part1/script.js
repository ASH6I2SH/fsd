var lt= gsap.timeline();

lt.from("h2",{
    opacity: 0,
    y: -20,
    duration: 1,
    delay:1
})

lt.from("h4",{
    opacity: 0,
    y: -20,
    duration: 0.2,
    stagger: 0.2
})

