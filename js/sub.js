if (hasClass(document.body.classList, "tourCourse")) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to("#st .coursePic", {
    y: 100,
    scrollTrigger: {
      trigger: "#st .coursePicWrap",
      start: "top center",
      scrub: 2,
    },
  });
  gsap.to("#nd .coursePic", {
    y: 100,
    scrollTrigger: {
      trigger: "#nd .coursePicWrap",
      start: "top center",
      scrub: 2,
    },
  });
  gsap.to("#rd .coursePic", {
    y: 100,
    scrollTrigger: {
      trigger: "#rd .coursePicWrap",
      start: "top center",
      scrub: 2,
    },
  });
  gsap.to("#th .coursePic", {
    y: 100,
    scrollTrigger: {
      trigger: "#th .coursePicWrap",
      start: "top center",
      scrub: 2,
    },
  });
} else if (hasClass(document.body.classList, "find")) {
  const $mapA = document.querySelectorAll(".mapRight svg>a");
  const $locaHeading = document.querySelector(".mapLeft h3");
  const $smaller = document.querySelector(".smaller");
  const $larger = document.querySelector(".larger");
  const $mapRight = document.querySelector(".mapRight");

  anime({
    targets: ".mapVisLine",
    easing: "easeInOutQuad",
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 9000,
    direction: "alternate",
    loop: true,
  });

  $mapA.forEach((target) => {
    target.addEventListener("mouseenter", function () {
      $locaHeading.innerText = this.dataset.loca;
    });
  });
  $larger.addEventListener("click", () => {
    $mapRight.classList.add("larger");
  });
  $smaller.addEventListener("click", () => {
    $mapRight.classList.remove("larger");
  });
} else if (hasClass(document.body.classList, "detail")) {
  const $imgSlide = document.body.querySelector(".imgSlide");
  const $prevBtn = document.body.querySelector(".prevImg");
  const $nextBtn = document.body.querySelector(".nextImg");
  const $viewMore = document.body.querySelector(".viewMore");
  const hiddens = document.body.querySelectorAll(".summeryWrap .hidden");

  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".sumPic", {
    backgroundPosition: 100,
    scrollTrigger: {
      trigger: "body",
      start: "top center",
      scrub: 2,
    },
  });

  $viewMore.addEventListener("click", () => {
    hiddens.forEach((target) => {
      if (hasClass(target.classList, "hidden")) {
        target.classList.remove("hidden");
        $viewMore.innerText = "??????";
      } else {
        target.classList.add("hidden");
        $viewMore.innerText = "?????????";
      }
    });
  });

  const mapContainer = document.body.querySelector(".infoMap");
  const geocoder = new kakao.maps.services.Geocoder();
  geocoder.addressSearch(
    "?????? ????????? ??????????????? 105",
    function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        let mapOption = {
          center: new kakao.maps.LatLng(result[0].y, result[0].x),
          level: 5,
        };
        let markerPosition = new kakao.maps.LatLng(result[0].y, result[0].x);
        let marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        let map = new kakao.maps.Map(mapContainer, mapOption);
        marker.setMap(map);
      }
    }
  );

  let imgSlideSet = 0;
  let imgPos = 0;
  let imgWidth = $imgSlide.clientWidth / 3;
  const imgMove = function () {
    imgPos = imgWidth * imgSlideSet;
    gsap.to($imgSlide, {
      x: imgPos,
      duration: 0.5,
      ease: "back.out(1.7)",
    });
  };
  window.addEventListener("resize", function () {
    imgWidth = $imgSlide.clientWidth / 3;
    imgPos = imgWidth * imgSlideSet;
    $imgSlide.style.transform = `translateX(${imgPos}px)`;
  });
  const next = function () {
    imgSlideSet--;
    if (imgSlideSet < -2) {
      imgSlideSet = 0;
    }
    imgMove();
  };
  const prev = function () {
    imgSlideSet++;
    if (imgSlideSet > 0) {
      imgSlideSet = -2;
    }
    imgMove();
  };
  $prevBtn.addEventListener("click", prev);
  $nextBtn.addEventListener("click", next);
} else if (hasClass(document.body.classList, "tcDetail")) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".picMask", {
    width: "100%",
    height: 900,
    y: "-173px",
    scrollTrigger: {
      trigger: ".picMask",
      start: "center center",
      end: "main",
      scrub: 0,
    },
  });

  let scrollAmount = Math.round(window.scrollY);
  const $main = document.body.querySelector("main");
  const $footer = document.body.querySelector("footer");
  let mainTop = $main.offsetTop;
  let mainbottom = $footer.offsetTop + 135;
  const $tcMap = document.body.querySelector("#tcDetailMap");

  const $prevImg = document.body.querySelector(".prevImg");
  const $nextImg = document.body.querySelector(".nextImg");
  const cards = document.body.querySelectorAll(`main section`);
  const locations = document.body.querySelectorAll(`.location`);
  let cardTop = [];
  const getCard = function () {
    while (cardTop.length > 0) {
      cardTop.pop();
    }
    cards.forEach((target) => {
      cardTop.push(target.offsetTop - 122);
    });
  };

  getCard();
  window.addEventListener("resize", function () {
    getCard();
    mainTop = $main.offsetTop;
    mainbottom = $footer.offsetTop + 135;
  });

  const mapContainer = document.body.querySelector("#tcDetailMap .map");
  const geocoder = new kakao.maps.services.Geocoder();
  let mapOption, markerPosition, marker, map;
  const mapMarker = function () {
    locations.forEach((target) => {
      geocoder.addressSearch(target.innerText, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          markerPosition = new kakao.maps.LatLng(result[0].y, result[0].x);
          marker = new kakao.maps.Marker({
            position: markerPosition,
          });
          marker.setMap(map);
        }
      });
    });
  };
  const mapMake = function () {
    geocoder.addressSearch("????????? ???????????? 405", (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        mapOption = {
          center: new kakao.maps.LatLng(result[0].y, result[0].x),
          level: 2, // ????????? ?????? ??????
        };
      }
      map = new kakao.maps.Map(mapContainer, mapOption);
    });
    mapMarker();
  };
  const mapMove = function (location) {
    geocoder.addressSearch(location.innerText, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        moveLatLon = new kakao.maps.LatLng(result[0].y, result[0].x);
        map.setCenter(moveLatLon);
      }
    });
  };
  window.addEventListener("load", function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    mapMake();
    mapMove("????????? ???????????? 405");
  });

  let mapCont = 0;
  let oldScroll = window.scrollY,
    scrollDirection;
  window.addEventListener("scroll", function () {
    scrollAmount = Math.round(window.scrollY);
    scrollDirection = scrollAmount >= oldScroll ? 1 : -1;
    if (
      scrollAmount + 208 >= mainTop &&
      scrollAmount + window.innerHeight <= mainbottom
    ) {
      $tcMap.classList.remove("bottomReach");
      if (!hasClass($tcMap.classList, "topReach")) {
        $tcMap.classList.add("topReach");
      }
    } else {
      $tcMap.classList.remove("topReach");
      if (scrollAmount + window.innerHeight > mainbottom) {
        $tcMap.classList.add("bottomReach");
      }
    }

    if (scrollAmount > $main.offsetTop) {
      if (scrollDirection === 1) {
        if (scrollAmount - cardTop[mapCont] < 0) {
          mapMove(locations[mapCont]);
        } else {
          mapCont++;
        }
      } else {
        if (scrollAmount + window.innerHeight - cardTop[mapCont] > 0) {
          mapMove(locations[mapCont - 1]);
        } else {
          mapCont--;
        }
      }
    }
    oldScroll = this.pageYOffset;
  });

  let moveTo = cardTop[0];
  $prevImg.addEventListener("click", function (e) {
    for (let i = 0; i < cardTop.length; i++) {
      if (scrollY + 150 > cardTop[i]) {
        moveTo = cardTop[i - 1];
      }
    }
    if (moveTo === undefined) {
      alert("??? ???????????????");
    }
    window.scrollTo({
      top: moveTo,
      left: 0,
      behavior: "smooth",
    });
  });
  $nextImg.addEventListener("click", function (e) {
    for (let i = cardTop.length; i >= 0; i--) {
      if (scrollY + 150 > cardTop[i]) {
        moveTo = cardTop[i + 1];
        break;
      }
    }
    if (moveTo === undefined) {
      alert("????????? ???????????????");
    }
    window.scrollTo({
      top: moveTo,
      left: 0,
      behavior: "smooth",
    });
  });
}
