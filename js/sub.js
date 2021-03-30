if (hasClass(document.body.classList, 'tourCourse')){
    const $section = document.querySelectorAll('.tourCourse main a')
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#st .coursePic", {
        y:100,
        scrollTrigger:{
            trigger: "#st .coursePicWrap",
            start: "top center",
            scrub:2
        }
    })
    gsap.to("#nd .coursePic", {
        y:100,
        scrollTrigger:{
            trigger: "#nd .coursePicWrap",
            start: "top center",
            scrub:2
        }
    })
    gsap.to("#rd .coursePic", {
        y:100,
        scrollTrigger:{
            trigger: "#rd .coursePicWrap",
            start: "top center",
            scrub:2
        }
    })
    gsap.to("#th .coursePic", {
        y:100,
        scrollTrigger:{
            trigger: "#th .coursePicWrap",
            start: "top center",
            scrub:2
        }
    })
    const linedraw = anime({
        targets: '.waveVisual svg path',
        easing: 'easeInOutCubic',
        strokeDashoffset: [0, anime.setDashoffset],
        duration: 500,
        direction: 'alternate'
    })
    linedraw.pause();
    $section.forEach(target => {
        target.addEventListener('mouseenter', function(){
            linedraw.play()
        })
    });
}
else if (hasClass(document.body.classList, 'find')){
    const $mapRight = document.querySelector('.mapRight')
    const $mapA = document.querySelectorAll('.mapRight svg>a')
    const $locaHeading = document.querySelector('.mapLeft h3')
    const $cursor = document.querySelector('.mapRight .cursor')
    $mapA.forEach(target => {
        target.addEventListener('mouseenter', function(){
            /*console.log(`${this.dataset.loca}`)*/
            $locaHeading.innerText=this.dataset.loca
        })
    });
    $mapRight.addEventListener('mousemove', function(e){
        /*console.log(`${e.layerX}, ${e.layerY}`)*/
        $cursor.style.transform = `translate(${e.layerX}px, ${e.layerY}px)`;
    })

}