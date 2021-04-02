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
    let tl = anime.timeline({
        duration: 700,
        loop:true
    });
    tl.add({
        targets: '.waveVisual svg path',
        easing: 'easeInOutCubic',
        strokeDashoffset: [0, anime.setDashoffset],
        duration: 350,
        direction: 'alternate',
    }).add({
        /*180도 돌려서 Dashoffset조작.*/
    })
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
    const $imgSlide = document.body.querySelector('.imgSlide')
    const $prevBtn = document.body.querySelector('.prevImg')
    const $nextBtn = document.body.querySelector('.nextImg')

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
    
    let imgSlideSet = 0;
    let imgPos;
    const imgWidth = $imgSlide.clientWidth/3;
    console.log(imgWidth)
    const next = function(){
        /*console.log("뒤로")*/
        /*this - "뒤로버튼"엘리먼트를 나타냄*/
        imgSlideSet--;
        if (imgSlideSet<-2){
            imgSlideSet = 0;
        }
        imgPos = imgWidth*imgSlideSet
        gsap.to($imgSlide, {
            x:imgPos,
            duration:0.5,
            ease:"back.out(1.7)"
        })
    }
    const prev = function(){
        /*console.log("뒤로")*/
        /*this - "뒤로버튼"엘리먼트를 나타냄*/
        imgSlideSet++;
        if (imgSlideSet>0){
            imgSlideSet = -2;
        }
        imgPos = imgWidth*imgSlideSet
        gsap.to($imgSlide, {
            x:imgPos,
            duration:0.5,
            ease:"back.out(1.7)"
        })
    }
    $prevBtn.addEventListener("click", prev)
    $nextBtn.addEventListener("click", next)
}