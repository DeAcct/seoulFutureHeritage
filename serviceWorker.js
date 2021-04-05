if('serviceWorker' in navigator){
    navigator.serviceWorker.register('serviceWorker.js').then(function(reg){
        const cacheName = 'sfhPwa-v1';
        const appShellFiles = [
            './',
            './index.html',
            './detail.html',
            './find.html',
            './tcDetail.html',
            './tourCourse.html',
            './wallpaper.html',
            './yongsan.html',
            './css/font/NanumBarunGothicBold.woff',
            './css/font/NanumBarunGothic.woff',
            './css/font/NanumBarunGothicLight.woff',
            './css/reset.css',
            './css/main.css',
            './css/sub.css',
            './img/icon-32.png',
            './img/icon-512.png',
            './img/apple-touch-icon-192.png',
            './js/main.js',
            './js/sub.js',
            './js/anime.min.js'            
        ]
        const appMedias = [
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
            './img/tcDetail-seoulStation2.jpg',
            './img/tcDetail-seoulStation3.jpg',
            './img/tcDetail-sesil1.jpg',
            './img/tcDetail-sesil2.jpg',
            './img/tcDetail-sesil3.jpg',
            './img/tourCourse-2.jpg',
            './img/tourCourse-3.jpg',
            './img/tourCourse-4.jpg',
            './img/upBtn.svg',
            './img/wallpaper-artNamsan.png',
            './img/wallpaper-Bok.png',
            './img/wallpaper-hannok.png',
            './img/wallpaper-sejongCulture.png',
            './img/wallpaper-sunsin.png',
            './img/wallpaper-CupPark.png',
            './img/what-chonggye.jpg',
            './img/what-hannok.jpg',
            './img/what-kingsejong.jpg',
            './img/yongsan-location-antique.jpg',
            './img/yongsan-location-banpo.jpg',
            './img/yongsan-location-bookmark.svg',
            './img/yongsan-location-cheilchurch.jpg',
            './img/yongsan-location-jamsu.jpg',
            './img/yongsan-location-like.jpg',
            './img/yongsan-location-namsan.jpg',
            './img/yongsan-location-share.svg',
            './img/yongsan-location-sunguisa.jpg',
            './img/yongsan-location-sunringang.jpg',
            './img/yongsan-location-sunrintree.jpg',
            './img/yongsan-location-wondaegu.jpg',
            './img/yongsan-location-wonsam.jpg',
            './img/yongsan-visual.jpg'
        ]
        const contentToCache = appShellFiles.concat(appMedias)
        self.addEventListener('install', (e)=>{
            e.waitUntil((async () => {
                const cache = await caches.open(cacheName);
                await cache.addAll(contentToCache)
            })())
        })
        self.addEventListener('fetch', (e)=>{
            e.respondWith((async () => {
                const r = await caches.match(e.request);
                if (r){
                    return r;
                }
                const response = await fetch(e.request);
                const cache = await caches.open(cacheName);
                cache.put(e.request, response.clone())
                return response;
            })())
        })
        self.addEventListener('activate', (e)=>{
            e.waitUntil(caches.keys().then((keyList)=>{
                Promise.all(keyList.map((key)=>{
                    if (key == cacheName){
                        return;
                    }
                    cacjes.delete(key)
                }))
            })())
        })
    })
}