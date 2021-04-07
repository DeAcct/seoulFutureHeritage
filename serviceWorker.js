const cacheName = 'seoulFutureHeritagePWA-v1';
const assets = [
    './',
    './css/main.css',
    './css/sub.css',
    './css/reset.css',
    './css/font/NanumBarunGothic.woff',
    './css/font/NanumBarunGothicBold.woff',
    './css/font/NanumBarunGothicLight.woff',
    './js/anime.min.js',
    './js/main.js',
    './js/sub.js',
    './detail.html',
    './find.html',
    './index.html',
    './tcDetail.html',
    './tourCourse.html',
    './wallpaper.html',
    './yongsan.html',
    './img/apple-touch-icon-192.png',
    './img/detail-imgSlide1.jpg',
    './img/detail-imgSlide2.jpg',
    './img/detail-imgSlide3.jpg',
    './img/detail-transport-bus.svg',
    './img/detail-transport-subway.svg',
    './img/downBtn.svg',
    './img/download.svg',
    './img/find.svg',
    './img/find-recommended-1.JPG',
    './img/find-recommended-2.jpg',
    './img/hamburger.svg',
    './img/icon-32.png',
    './img/icon-192.png',
    './img/icon-512.png',
    './img/logo.svg',
    './img/nextBtn.svg',
    './img/prevBtn.svg',
    './img/search.svg',
    './img/selection.svg',
    './img/suggest.svg',
    './img/tcDetail-bumin1.jpg',
    './img/tcDetail-bumin2.jpg',
    './img/tcDetail-bumin3.jpg',
    './img/tcDetail-distance1.jpg',
    './img/tcDetail-distance2.jpg',
    './img/tcDetail-distance3.jpg',
    './img/tcDetail-LeeSunShin1.jpg',
    './img/tcDetail-LeeSunShin2.jpg',
    './img/tcDetail-LeeSunShin3.jpg',
    './img/tcDetail-SejongCulture1.jpg',
    './img/tcDetail-SejongCulture2.jpg',
    './img/tcDetail-SejongCulture3.jpg',
    './img/tcDetail-seoulSquare1.jpg',
    './img/tcDetail-seoulSquare2.jpg',
    './img/tcDetail-seoulSquare3.jpg',
    './img/tcDetail-seoulSta2.jpg',
    './img/tcDetail-seoulSta3.jpg',
    './img/tcDetail-sesil1.jpg',
    './img/tcDetail-sesil2.jpg',
    './img/tcDetail-sesil3.jpg',
    './img/tourCourse-2.jpg',
    './img/tourCourse-3.jpg',
    './img/tourCourse-4.jpg',
    './img/upBtn.svg',
    './img/wallpaper-artNamsan.png',
    './img/wallpaper-BoK.png',
    './img/wallpaper-hannok.png',
    './img/wallpaper-sejongCulture.png',
    './img/wallpaper-sunsin.png',
    './img/wallpaper-worldCupPark.png',
    './img/what-chonggye.jpg',
    './img/what-hannok.jpg',
    './img/what-kingsejong.jpg',
    './img/yongsan-location-antique.jpg',
    './img/yongsan-location-banpo.jpg',
    './img/yongsan-location-bookmark.svg',
    './img/yongsan-location-cheilchurch.jpg',
    './img/yongsan-location-jamsu.jpg',
    './img/yongsan-location-like.svg',
    './img/yongsan-location-namsan.jpg',
    './img/yongsan-location-share.svg',
    './img/yongsan-location-sunguisa.jpg',
    './img/yongsan-location-sunringang.jpg',
    './img/yongsan-location-sunrintree.jpg',
    './img/yongsan-location-wondaegu.jpg',
    './img/yongsan-location-wonsam.jpg',
    './img/yongsan-visual.jpg',
]

self.addEventListener('install', (event)=>{
    event.waitUntil((async () =>{
        const cache = await caches.open(cacheName);
        await cache.addAll(assets)
    }))
})

self.addEventListener('fetch', (event)=>{
    event.respondWith((async () =>{
        const r = await caches.match(event.request);
        if (r){
            return r;
        }
        const response = await fetch(e.request);
        const cache = await caches.open(cacheName);
        cache.put(event.request, response.clone());
        return response;
    })())
})

