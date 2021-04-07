if ('serviceWorker' in navigator){
    try{
        navigator.serviceWorker.register('serviceWorker.js')
        console.log("서비스워커 등록됨")
    }
    catch(error){
        console.log("서비스워커 등록실패")
    }
}
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
    let scrollPos;
    const header = document.body.querySelector('header')

    const headerStyle = function(){
        requestAnimationFrame(headerStyle)
        scrollPos  = window.scrollY;
        if (scrollPos !== 0){
            header.classList.add('on')
        }
        else{
            header.classList.remove('on')
        }
    }
    headerStyle();

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
    gsap.from(".visualInner h2 span",{
        letterSpacing:"2rem",
        ease:"back.out(1.7)"
    })
}


