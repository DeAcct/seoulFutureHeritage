const cacheName = 'seoulFutureHeritagePWA-v4';
const assets = [
    './',
    './manifest.json',
    './css/main.css',
    './css/sub.css',
    './css/reset.css',
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
    'https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff',
    'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;900&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/ScrollTrigger.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/MotionPathPlugin.min.js'
]

self.addEventListener('install', (event)=>{
    event.waitUntil(
        caches.open(cacheName).then((cache)=>{
            return cache.addAll(assets)
        })
    )
})
self.addEventListener('activate', (event)=>{
    event.waitUntil(
        caches.keys().then(keys => Promise.all(
            keys.map(key=>{
                if (!cacheName.includes(key)){
                    return caches.delete(key)
                }
            })
        ))
    )
})
self.addEventListener('fetch', (event)=>{
    event.respondWith(
        caches.match(event.request).then((r)=>{
            return r || fetch(event.request).then((response)=>{
                return caches.open(cacheName).then((cache)=>{
                    cache.put(event.request, response.clone());
                    return response
                })
            })
        })
    )
})
