const windowInnerWidth = window.innerWidth;
const windowInnerHeight = window.innerHeight;
var h = window.innerHeight / 2;
var w = window.innerWidth / 2;
let scaleProsent;
let xProsentTitle;
let yProsent;
let topBurger;
let scrubSpeed;
var body = document.querySelector(".body");

if (windowInnerWidth > 1200) {
  scaleProsent = 1.5;
  yProsent = 6;
  xProsentTitle = 2;
} else {
  scaleProsent = 2;
  yProsent = 8;
  xProsentTitle = 3;
}

if (windowInnerWidth > 868) {
  scrubSpeed = 2.5;
} else {
  scrubSpeed = "none";
}

// Preloader
window.onload = function () {
  document.body.classList.add("loaded_hiding");
};
window.setTimeout(function () {
  document.body.classList.add("loaded");
  document.body.classList.remove("loaded_hiding");
}, 1500);

topBurger = windowInnerWidth > 868 ? -34 : 0;

// tl - animations for header
var tl = gsap.timeline();
if (windowInnerWidth > 868) {
  tl.from(
    ".title",
    {
      x: windowInnerHeight / xProsentTitle,
      y: -windowInnerHeight / 4,
      duration: 0.8,
    },
    1
  );
} else {
  tl.from(
    ".title",
    {
      opacity: 0,
      scale: 0,
      duration: 0.8,
    },
    1
  );
}

tl.to(".stars", {
  opacity: 1,
  delay: 0.7,
  stagger: 0.04,
})
  .from(".women", { y: -900 }, 1.2)
  .from(
    ".field",
    {
      y: 400,
      opacity: 0,
    },
    1.2
  )
  .from(
    ".moon",
    {
      scale: 0,
      duration: 2,
    },
    1.5
  )
  .from(
    ".women",
    {
      rotate: 15,
      duration: 1.3,
      ease: "bounce.out",
    },
    1.6
  )
  .from(
    ".subtitle",
    {
      opacity: 0,
    },
    1.8
  )
  .from(
    ".kye__box",
    {
      y: "-100vh",
      duration: 1.4,
    },
    2
  )
  .to(
    ".kye__box",
    {
      rotate: 20,
      duration: 2.8,
      ease: CustomEase.create(
        "custom",
        "M0,0 C0.004,0.06 0.17,0.234 0.244,0.234 0.356,0.234 0.344,-0.13 0.434,-0.13 0.508,-0.13 0.492,0.076 0.566,0.076 0.608,0.076 0.617,-0.046 0.66,-0.046 0.699,-0.046 0.721,0.034 0.77,0.034 0.806,0.034 0.817,-0.021 0.868,-0.022 0.89,-0.023 0.904,0.011 0.938,0.016 0.968,0.016 1,0 1,0 "
      ),
    },
    2
  )
  .from(
    ".nav__ul li",
    {
      x: "-100vw",
      stagger: 0.1,
    },
    "-=1"
  );

let viewHeight = Math.min(
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.offsetHeight,
  document.body.clientHeight,
  document.documentElement.clientHeight
);

//BUrger
const menuBtn = document.querySelector(".menu__btn");
const menu = document.querySelector("#burger__menu");
const menuArr = document.querySelector("#menu");
const openBurger = () => {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
};
menuBtn.addEventListener("click", openBurger);
// массив с сыками
const links = Array.from(menuArr.children);
// при клике  на любую ссылку вызываем функцию
links.forEach((link) => {
  link.addEventListener("click", openBurger);
});

let backBlueYellowStart = windowInnerWidth > 868 ? "centet" : "-=400";

gsap
  .timeline()
  .from(".who__what__second__text", {
    scrollTrigger: {
      // markers: true,
      trigger: ".section__who__what",
      start: "+=30",
      end: "+=200",
      scrub: scrubSpeed,
    },
    y: 270,
  })
  .to(".back__dlue", {
    scrollTrigger: {
      // markers: true,
      trigger: ".back__dlue",
      start: `${backBlueYellowStart} bottom`,
      end: "+=1200",
      scrub: 1,
    },
    scale: 150,
  })
  .to(".back__yellow", {
    scrollTrigger: {
      // markers: true,
      trigger: ".back__yellow",
      start: `${backBlueYellowStart} bottom`,
      end: "+=1000",
      scrub: 1,
    },
    scale: 150,
  });

var ifYouWantText = gsap.timeline();
var ifYouWantImg = gsap.timeline();

ifYouWantText
  .to(".if__you__want__buttom__one", {
    scrollTrigger: {
      // markers:true,
      trigger: ".who__what__three__text",
      start: "1400 center",
      end: "+=30",
      scrub: scrubSpeed,
    },
    opacity: 0,
  })
  .from(".if__you__want__buttom__two", {
    scrollTrigger: {
      // markers:true,
      trigger: ".who__what__three__text",
      start: "1500 center",
      end: "+=200",
      scrub: scrubSpeed,
    },
    opacity: 0,
    y: 60,
  })
  .to(".if__you__want__buttom__two", {
    scrollTrigger: {
      // markers: true,
      trigger: ".who__what__three__text",
      start: "2000 center",
      end: "+=20",
      scrub: scrubSpeed,
    },
    opacity: 0,
  })
  .from(".if__you__want__buttom__three", {
    scrollTrigger: {
      // markers: true,
      trigger: ".who__what__three__text",
      start: "2100 center",
      end: "+=200",
      scrub: scrubSpeed,
    },
    opacity: 0,
    y: 60,
  })
  .to(".if__you__want__buttom__three", {
    scrollTrigger: {
      // markers:true,
      trigger: ".who__what__three__text",
      start: "2600 center",
      end: "+=20",
      scrub: scrubSpeed,
    },
    opacity: 0,
  })
  .from(".if__you__want__buttom__four", {
    scrollTrigger: {
      // markers:true,
      trigger: ".who__what__three__text",
      start: "2700 center",
      end: "+=200",
      scrub: scrubSpeed,
    },
    opacity: 0,
    y: 60,
  });

ifYouWantImg
  .to(".vector__stars", {
    scrollTrigger: {
      // markers:true,
      trigger: ".who__what__three__text",
      start: "100 center",
      end: "+=1000",
      scrub: scrubSpeed,
    },
    x: 1100,
  })
  .to(".vector__stars", {
    scrollTrigger: {
      // markers: true,
      trigger: ".who__what__three__text",
      start: "100 center",
      end: "+=700",
      scrub: scrubSpeed,
    },
    ease: "none",
    y: 400,
  })
  .from(".if__you__want__buttom__one", {
    scrollTrigger: {
      // markers: true,
      trigger: ".who__what__three__text",
      start: "400 center",
      end: "+=400",
      scrub: scrubSpeed,
    },
    y: 400,
  })
  .from(".eyes", {
    scrollTrigger: {
      // markers: true,
      trigger: ".who__what__three__text",
      start: "600 center",
      end: "+=100",
      scrub: scrubSpeed,
    },
    opacity: 0,
  })
  .to(".vector__stars", {
    scrollTrigger: {
      // markers:true,
      trigger: ".who__what__three__text",
      start: "900 center",
      end: "+=300",
      scrub: scrubSpeed,
    },
    opacity: 0,
  })
  .to(".vector__moon", {
    scrollTrigger: {
      // markers:true,
      trigger: ".who__what__three__text",
      start: "1400 center",
      end: "+=1500",
      scrub: scrubSpeed,
    },
    x: 1100,
  })
  .to(".vector__moon", {
    scrollTrigger: {
      // markers:true,
      trigger: ".who__what__three__text",
      start: "2300 center",
      end: "+=300",
      scrub: scrubSpeed,
    },
    opacity: 0,
  })
  .to(".if__you__want__buttom", {
    scrollTrigger: {
      // markers:true,
      trigger: ".who__what__three__text",
      start: "3100 center",
      end: "+=200",
      scrub: scrubSpeed,
    },
    opacity: 0,
  });

ScrollTrigger.create({
  // markers: true,
  trigger: ".section__if__you__want",
  pin: ".section__if__you__want",
  start: "top top",
  end: "+=2600",
});

if (windowInnerWidth > 868) {
  ScrollTrigger.create({
    // markers: true,
    trigger: ".section__if__you__want",
    pin: ".section__if__you__want",
    start: "bottom bottom",
    end: "+=400",
  });

  ifYouWantImg
    .from(".it__is__me__star", {
      scrollTrigger: {
        // markers: true,
        trigger: ".who__what__three__text",
        start: "4000 center",
        end: "+=200",
        scrub: scrubSpeed,
      },
      x: 900,
      y: -300,
      opacity: 0,
    })
    .from(".it__is__me__title", {
      scrollTrigger: {
        // markers: true,
        trigger: ".who__what__three__text",
        start: "4100 center",
        end: "+=200",
        scrub: 1.5,
      },
      opacity: 0,
    })
    .from(".it__is__me__foto", {
      scrollTrigger: {
        // markers: true,
        trigger: ".who__what__three__text",
        start: "4200 center",
        end: "+=100",
        scrub: 1,
      },
      scaleY: 0,
    });
}

// Поезд, космонафт и  текст

// ScrollTrigger.create({
//   // markers: true,
//   trigger: '.how__we__work',
//   start: 'bottom bottom',
//   // end: '+=2000',
//   pin: true,
// });

var scrollTrain = gsap.timeline().from(".how__we__work", {
  scrollTrigger: {
    // markers: true,
    trigger: ".how__we__work",
    start: "top top",
    end: "+=2000",
    scrub: true,
    pin: true,
  },
});

ifYouWantImg
  .from([".how__we__work__title , .how__we__work__not"], {
    scrollTrigger: {
      // markers: true,
      trigger: ".who__what__three__text",
      start: "4900 top",
      end: "+=50",
      scrub: 1,
    },
    y: 300,
    opacity: 0,
  })
  .from(".train", {
    scrollTrigger: {
      // markers: true,
      trigger: ".who__what__three__text",
      start: "5000 top",
      end: "+=100",
      scrub: 1,
    },
    x: "100vw",
  })
  .to([".how__we__work__title , .how__we__work__not"], {
    scrollTrigger: {
      // markers: true,
      trigger: ".who__what__three__text",
      start: "5200 top",
      end: "+=150",
      scrub: 1,
      invalidateOnRefresh: true,
    },
    opacity: 0,
  })
  .from(".text_grid_row_1", {
    scrollTrigger: {
      // markers: true,
      trigger: ".who__what__three__text",
      start: "5300 top",
      end: "+=100",
      scrub: 1,
    },
    y: 300,
    opacity: 0,
  })
  .from(".astronaut", {
    scrollTrigger: {
      // markers: true,
      trigger: ".who__what__three__text",
      start: "5300 top",
      end: "+=150",
      scrub: 1.5,
    },
    y: "100%",
  })
  .to(".text_grid_row_1", {
    scrollTrigger: {
      // markers: true,
      trigger: ".who__what__three__text",
      start: "5600 top",
      end: "+=100",
      scrub: 1,
      invalidateOnRefresh: true,
    },
    opacity: 0,
  })
  .from(".text_grid_row_2", {
    scrollTrigger: {
      // markers: true,
      trigger: ".who__what__three__text",
      start: "5700 top",
      end: "+=100",
      scrub: 1,
    },
    y: 300,
    opacity: 0,
  })
  .from(".stars__the__end", {
    scrollTrigger: {
      // markers: true,
      trigger: ".who__what__three__text",
      start: "5700 top",
      end: "+=150",
      scrub: 1.5,
    },
    opacity: 0,
  })
  .to(".text_grid_row_2", {
    scrollTrigger: {
      // markers: true,
      trigger: ".who__what__three__text",
      start: "6000 top",
      end: "+=100",
      scrub: 1,
      invalidateOnRefresh: true,
    },
    opacity: 0,
  })
  .to(".stars__the__end", {
    scrollTrigger: {
      // markers: true,
      trigger: ".who__what__three__text",
      start: "6000 top",
      end: "+=150",
      scrub: 1.5,
      invalidateOnRefresh: true,
    },
    opacity: 0,
  })
  .to(".astronaut", {
    scrollTrigger: {
      // markers: true,
      trigger: ".who__what__three__text",
      start: "6050 top",
      end: "+=150",
      scrub: 1.5,
      invalidateOnRefresh: true,
    },
    x: "100vw",
  })
  .to(".train", {
    scrollTrigger: {
      // markers: true,
      trigger: ".who__what__three__text",
      start: "6050 top",
      end: "+=150",
      scrub: 1.5,
      invalidateOnRefresh: true,
    },
    x: "100vw",
  })
  .from(".text_grid_row_3_top", {
    scrollTrigger: {
      // markers: true,
      trigger: ".who__what__three__text",
      start: "6100 top",
      end: "+=100",
      scrub: 1.5,
    },
    y: 300,
    opacity: 0,
  })
  .from(".price", {
    scrollTrigger: {
      // markers: true,
      trigger: ".who__what__three__text",
      start: "6200 top",
      end: "+=150",
      scrub: 1.5,
    },
    y: "50vh",
    opacity: 0,
  })
  .from(".blue__planet", {
    scrollTrigger: {
      // markers: true,
      trigger: ".who__what__three__text",
      start: "6200 top",
      end: "+=150",
      scrub: 1.5,
    },
    y: 300,
    opacity: 0,
  })
  .from(".call__my__box", {
    scrollTrigger: {
      // markers: true,
      trigger: ".who__what__three__text",
      start: "6200 top",
      end: "+=150",
      scrub: 1.5,
    },
    x: "100vw",
  })
  .to(".text_grid_row_3_top", {
    scrollTrigger: {
      // markers: true,
      trigger: ".who__what__three__text",
      start: "6800 top",
      end: "+=100",
      scrub: 1,
      invalidateOnRefresh: true,
    },
    opacity: 0,
  })
  .to(".price", {
    scrollTrigger: {
      // markers: true,
      trigger: ".who__what__three__text",
      start: "6800 top",
      end: "+=100",
      scrub: 1,
      invalidateOnRefresh: true,
    },
    opacity: 0,
  })
  .to(".blue__planet", {
    scrollTrigger: {
      // markers: true,
      trigger: ".who__what__three__text",
      start: "6800 top",
      end: "+=100",
      scrub: 1,
      invalidateOnRefresh: true,
    },
    opacity: 0,
  })
  .to(".call__my__box", {
    scrollTrigger: {
      // markers: true,
      trigger: ".who__what__three__text",
      start: "6800 top",
      end: "+=100",
      scrub: 1,
      invalidateOnRefresh: true,
    },
    opacity: 0,
  });

gsap.utils.toArray(".call__my__box").forEach((h1) => {
  let hover = gsap.to(h1, {
    scale: 1.02,
    color: "blue",
    duration: 0.3,
    paused: true,
  });
  h1.addEventListener("mouseenter", () => hover.play());
  h1.addEventListener("mouseleave", () => hover.reverse());
});

const reviewsSection = gsap
  .timeline({
    scrollTrigger: {
      // markers: true,
      trigger: ".reviews",
      start: "top top",
      end: "+=800",
      scrub: "true",
      pin: ".reviews",
    },
  })
  .from(".price__stars", {
    scrollTrigger: {
      // markers: true,
      trigger: ".reviews",
      start: "top top",
      end: "+=400px ",
      scrub: 2,
    },
    opacity: 0,
  });

  // .from(".line", {
  //   scrollTrigger: {
  //     // markers: true,
  //     trigger: ".reviews",
  //     start: "top top",
  //     end: "+=100px",
  //     scrub: 2,
  //   },
  //   x: "-100vw",
  // });

const educationSection = gsap
  .timeline({
    scrollTrigger: {
      // markers: true,
      trigger: ".education",
      start: "top top",
      end: "+=300",
      scrub: "true",
      pin: ".education",
    },
  })
  .from(".education__title", {
    scrollTrigger: {
      // markers: true,
      trigger: ".education",
      start: "top top",
      end: "+=100px ",
      scrub: 2,
    },
    y: "10vw",
    opacity: 0,
  })
  .from(".education__text", {
    scrollTrigger: {
      // markers: true,
      trigger: ".education",
      start: "top top",
      end: "+=100px ",
      scrub: 2,
    },
    y: "20vw",
    opacity: 0,
  });

var diplom = document.querySelectorAll(".diplom");
var blackBG = document.querySelector(".black__bg");
var kye = document.querySelector(".kye__box");
var diplomBel = document.querySelector(".diplom__belorus");
var diplomCoach = document.querySelector(".diplom__coach");
var diplomClinic = document.querySelector(".diplom__clinic");
var diplomKurp = document.querySelector(".diplom__kurpatov");
var teacherEducation = document.querySelector(".teacher_education");
var retraining = document.querySelector(".retraining");
var retrainingCourse = document.querySelector(".retraining_course");
var thinking = document.querySelector(".thinking");

function letDiplom1() {
  diplomBel.classList.toggle("off");
  diplomCoach.classList.add("off");
  diplomClinic.classList.add("off");
  diplomKurp.classList.add("off");
  blackBG.classList.toggle("on__mobile");
}
function letDiplom2() {
  diplomBel.classList.add("off");
  diplomCoach.classList.toggle("off");
  diplomClinic.classList.add("off");
  diplomKurp.classList.add("off");
  blackBG.classList.toggle("on__mobile");
}
function letDiplom3() {
  diplomBel.classList.add("off");
  diplomCoach.classList.add("off");
  diplomClinic.classList.toggle("off");
  diplomKurp.classList.add("off");
  blackBG.classList.toggle("on__mobile");
}
function letDiplom4() {
  diplomBel.classList.add("off");
  diplomCoach.classList.add("off");
  diplomClinic.classList.add("off");
  diplomKurp.classList.toggle("off");
  blackBG.classList.toggle("on__mobile");
}

teacherEducation.addEventListener("click", letDiplom1);
retraining.addEventListener("click", letDiplom2);
retrainingCourse.addEventListener("click", letDiplom3);
thinking.addEventListener("click", letDiplom4);

let xPercentWidth;
if (windowInnerWidth > 1200) {
  xPercentWidth = -20;
} else {
  xPercentWidth = -50;
}

if (windowInnerWidth > 560) {
  // затемнение BG
  diplom.forEach(function (item, idx) {
    item.addEventListener("mouseenter", function () {
      blackBG.classList.remove("off");
    });
    item.addEventListener("mouseleave", function () {
      blackBG.classList.add("off");
    });
    item.addEventListener("click", function () {
      item.classList.toggle("off");
    });
  });
} else {
  diplom.forEach(function (item, idx) {
    item.addEventListener("click", function () {
      item.classList.toggle("off");
      blackBG.classList.toggle("on__mobile");
    });
    blackBG.addEventListener("click", function () {
      item.classList.add("off");
      blackBG.classList.remove("on__mobile");
    });
  });
}

kye.addEventListener("click", kyeGo);

function kyeGo() {
  gsap.to(".kye__box", {
    rotate: 30,
    duration: 2,
    ease: CustomEase.create(
      "custom",
      "M0,0 C0.004,0.06 0.124,0.234 0.198,0.234 0.3,0.234 0.331,-0.13 0.412,-0.13 0.486,-0.13 0.492,0.076 0.566,0.076 0.608,0.076 0.617,-0.046 0.66,-0.046 0.699,-0.046 0.721,0.034 0.77,0.034 0.806,0.034 0.817,-0.021 0.868,-0.022 0.89,-0.023 0.904,0.011 0.938,0.016 0.968,0.016 1,0 1,0 "
    ),
  });
}

var education = document.querySelector(".education");
let cellMeWhite = windowInnerWidth > 868 ? 90 : 10;

if (windowInnerWidth > 460) {
  gsap
    .timeline({
      scrollTrigger: {
        // markers: true,
        trigger: ".left__panel__burger",
        start: `${topBurger} top`,
        endTrigger: ".education",
        end: "top -300",
        pin: ".left__panel__burger",
        scrub: true,
      },
    })
    .to(".left__panel__burger", { zIndex: 100 })
    .to(".left__panel__burger", {
      scrollTrigger: {
        trigger: ".how__we__work",
        // markers: true,
        start: "-60",
        end: "+=2650",
        onEnter: () => gsap.to(".menu__btn span", { backgroundColor: "white" }),
        onLeave: () => gsap.to(".menu__btn span", { backgroundColor: "black" }),
        onLeaveBack: () =>
          gsap.to(".menu__btn span", { backgroundColor: "black" }),
        onEnterBack: () =>
          gsap.to(".menu__btn span", { backgroundColor: "white" }),
      },
    })
    .to(".cell__me__left a", {
      scrollTrigger: {
        // markers: true,
        trigger: ".how__we__work",
        start: `top ${cellMeWhite}%`,
        end: "+=20",
        scrub: true,
      },
      color: "white",
    })
    .to(".cell__me__left span", {
      scrollTrigger: {
        // markers: true,
        trigger: ".how__we__work",
        start: `top ${cellMeWhite}%`,
        end: "+=20",
        scrub: true,
      },
      backgroundColor: "white",
      color: "white",
    })
    .to(".cell__me__left", {
      scrollTrigger: {
        // markers: true,
        trigger: ".education",
        start: "top top",
        scrub: true,
      },
      x: "-20vw",
    })
    .to(".left__panel__burger", {
      scrollTrigger: {
        // markers: true,
        trigger: ".education",
        start: "-60",
        onEnter: () => gsap.to(".menu__btn span", { backgroundColor: "white" }),
        onLeave: () => gsap.to(".menu__btn span", { backgroundColor: "black" }),
        onLeaveBack: () =>
          gsap.to(".menu__btn span", { backgroundColor: "black" }),
        onEnterBack: () =>
          gsap.to(".menu__btn span", { backgroundColor: "white" }),
      },
    });
} else {
  gsap
    .timeline({
      scrollTrigger: {
        // markers: true,
        trigger: ".left__panel__burger",
        start: `${topBurger} top`,
        endTrigger: ".education",
        end: "top -300",
        pin: ".left__panel__burger",
        scrub: true,
      },
    })
    .to(".left__panel__burger", { zIndex: 100 })
    .to(".left__panel__burger", {
      scrollTrigger: {
        trigger: ".main",
        // markers: true,
        start: "-60",
        endTrigger: how__we__work,
        end: "10",
        onEnter: () => gsap.to(".menu__btn span", { backgroundColor: "black" }),
        onLeave: () => gsap.to(".menu__btn span", { backgroundColor: "white" }),
        onLeaveBack: () =>
          gsap.to(".menu__btn span", { backgroundColor: "white" }),
        onEnterBack: () =>
          gsap.to(".menu__btn span", { backgroundColor: "black" }),
      },
    })
    .to(".left__panel__burger", {
      scrollTrigger: {
        trigger: ".how__we__work",
        // markers: true,
        start: "-60",
        end: "+=2700",
        onEnter: () => gsap.to(".menu__btn span", { backgroundColor: "white" }),
        onLeave: () => gsap.to(".menu__btn span", { backgroundColor: "black" }),
        onLeaveBack: () =>
          gsap.to(".menu__btn span", { backgroundColor: "black" }),
        onEnterBack: () =>
          gsap.to(".menu__btn span", { backgroundColor: "white" }),
      },
    })
    .to(".left__panel__burger", {
      scrollTrigger: {
        // markers: true,
        trigger: ".education",
        start: "-60",
        onEnter: () => gsap.to(".menu__btn span", { backgroundColor: "white" }),
        onLeave: () => gsap.to(".menu__btn span", { backgroundColor: "black" }),
        onLeaveBack: () =>
          gsap.to(".menu__btn span", { backgroundColor: "black" }),
        onEnterBack: () =>
          gsap.to(".menu__btn span", { backgroundColor: "white" }),
      },
    });
}

if (windowInnerWidth > 868) {
  gsap.to(".cell__me__left", {
    scrollTrigger: {
      // markers: true,
      trigger: ".section__who__what",
      start: "top top",
      scrub: true,
    },
    y: `${viewHeight - 350}`,
  });
  gsap.to(".cell__me__left", {
    scrollTrigger: {
      // markers: true,
      trigger: ".blue__planet",
      start: "top bottom",
      scrub: true,
      invalidateOnRefresh: true,
    },
    y: "100vh",
  });
} else {
  gsap.to(".cell__me__left", {
    scrollTrigger: {
      // markers: true,
      trigger: ".blue__planet",
      start: "top bottom",
      scrub: true,
      invalidateOnRefresh: true,
    },
    opacity: 0,
  });
}

let eyesLeft = document.querySelector(".eyes__one");
let eyesRight = document.querySelector(".eyes__two");

setInterval(function () {
  eyesLeft.classList.toggle("eyes__off");
  eyesRight.classList.toggle("eyes__off");
}, 2000);

// Создаем новый observer (наблюдатель)
let observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      [...document.getElementsByClassName("diplom")].forEach((i) =>
        i.classList.add("off")
      );
      blackBG.classList.add("off");
      blackBG.classList.remove("on__mobile");
    }
  });
});

// Задаем элемент для наблюдения
let el = document.querySelector(".education__foto");
// Прикрепляем его к «наблюдателю»
observer.observe(el);

Fancybox.bind('[data-fancybox="gallery-1"]', {
  //
});
Fancybox.bind('[data-fancybox="gallery-2"]', {
  //
});
Fancybox.bind('[data-fancybox="gallery-3"]', {
  //
});
Fancybox.bind('[data-fancybox="gallery-4"]', {
  //
});


$(function() {
  $('.main-slider ').slick({
    slidesToShow:4,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});



 $(function(){
    $('.slick-cloned [data-fancybox]').each(function(){
      let attr = $(this).attr('data-fancybox');
      $(this).removeAttr('data-fancybox').attr('data-fancybox-trigger',attr);
  });
});

$('.main-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.slick-cloned [data-fancybox]').each(function(){
        let attr = $(this).attr('data-fancybox');
        $(this).removeAttr('data-fancybox').attr('data-fancybox-trigger',attr);
    });

});

// $().fancybox({
//   selector : '.slick-slide:not(.slick-cloned)',
//   hash     : false
// });

Fancybox.bind('[data-fancybox="gallery-5"]', {
  selector : '.slick-slide:not(.slick-cloned)',
  hash     : false
});
