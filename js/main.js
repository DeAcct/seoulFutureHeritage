const $gnbOpen = document.querySelector('.gnbOpen');
const $menu = document.querySelector('.menu');
const hasClass = function(target, keyword){
    let isResult = false;
    for (const domClass of target) {
        isResult = domClass===keyword
    }
    return isResult;
}

const menuTl = anime.timeline({
    duration: 450,
    direction: 'alternate'
});
menuTl.add({
    targets: '.openSt',
    easing: 'easeInOutCubic',
    strokeDashoffset: [0, anime.setDashoffset],
    duration: 150
});
menuTl.add({
    targets: '.openNd',
    easing: 'easeInOutCubic',
    strokeDashoffset: [0, anime.setDashoffset],
    duration: 150
});
menuTl.add({
    targets: '.openRd',
    easing: 'easeInOutCubic',
    strokeDashoffset: [0, anime.setDashoffset],
    duration: 150
});
menuTl.pause()

$gnbOpen.addEventListener('click', function(){
    if (hasClass($menu.classList, 'open') && hasClass(this.classList, 'open')){
        $menu.classList.remove('open');
        this.classList.remove('open')
    }
    else{
        $menu.classList.add('open');
        this.classList.add('open')
    }
    menuTl.play()
})

if (hasClass(document.body.classList, 'index')){
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
    gsap.to(".whatVisual .arrow", {
        motionPath:{
            path: ".whatVisual .line",
            align: ".whatVisual .line",
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
        },
        scrollTrigger:{
            trigger: ".whatVisual",
            start: "top center",
            scrub:-3
        }
    })
}


