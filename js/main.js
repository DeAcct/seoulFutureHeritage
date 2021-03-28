gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const $gnbOpen = document.getElementsByClassName('gnbOpen')[0];
const $menu = document.getElementsByClassName('menu')[0];
const hasClass = function(target, keyword){
    let isResult = false;
    for (const domClass of target) {
        isResult = domClass===keyword
    }
    return isResult;
}

$gnbOpen.addEventListener('click', function(){
    if (hasClass($menu.classList, 'open') && hasClass(this.classList, 'open')){
        /*console.log("open을 가지고 있어요");*/
        $menu.classList.remove('open');
        this.classList.remove('open')
    }
    else{
        $menu.classList.add('open');
        this.classList.add('open')
    }
})
const tl = anime.timeline({
    duration: 450,
    direction: 'alternate'
});
tl.add({
    targets: '.openSt',
    easing: 'easeInOutCubic',
    strokeDashoffset: [0, anime.setDashoffset],
    duration: 150
});
tl.add({
    targets: '.openNd',
    easing: 'easeInOutCubic',
    strokeDashoffset: [0, anime.setDashoffset],
    duration: 150
});
tl.add({
    targets: '.openRd',
    easing: 'easeInOutCubic',
    strokeDashoffset: [0, anime.setDashoffset],
    duration: 150
});
tl.pause()
$gnbOpen.addEventListener('mouseenter',function(){
    tl.play()
})

const tween = gsap.to(".whatVisual .arrow", {
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

