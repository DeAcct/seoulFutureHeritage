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
    const $mapA = document.querySelectorAll('.mapRight svg>a')
    const $locaHeading = document.querySelector('.mapLeft h3')

    anime({
        targets:'.mapInner .mapVisual svg',
        easing: 'easeInOutCubic',
        strokeDashoffset: [0, anime.setDashoffset],
        duration: 600,
        loop:true
    })

    $mapA.forEach(target => {
        target.addEventListener('mouseenter', function(){
            /*console.log(`${this.dataset.loca}`)*/
            $locaHeading.innerText=this.dataset.loca
        })
    });
}
else if (hasClass(document.body.classList, 'detail')){
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".sumPic", {
        backgroundPosition:100,
        scrollTrigger:{
            trigger: ".summeryWrap",
            start: "top center",
            scrub:2
        }
    })
    const mapContainer = document.body.querySelector('.infoMLeft')// 지도를 표시할 div  
    // 주소-좌표 변환 객체를 생성합니다
    const geocoder = new kakao.maps.services.Geocoder();
    // 주소로 좌표를 검색합니다
    geocoder.addressSearch('서울 용산구 남산공원길 105', function(result, status) {
        // 정상적으로 검색이 완료됐으면 
        if (status === kakao.maps.services.Status.OK) {
            let mapOption = {
                center: new kakao.maps.LatLng(result[0].y, result[0].x), // 지도의 중심좌표
                level: 5 // 지도의 확대 레벨
            }
            let markerPosition = new kakao.maps.LatLng(result[0].y, result[0].x); 
            // 마커를 생성합니다
            let marker = new kakao.maps.Marker({
                position: markerPosition
            });
            let map = new kakao.maps.Map(mapContainer, mapOption); 
            marker.setMap(map);
            
        } 
    });  
}