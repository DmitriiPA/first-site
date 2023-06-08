// var tl = gsap.timeline();
// tl.to(
//   '.heder__stars__box img',  {
//     opacity: 1, 
//     delay: 0.7, 
//     stagger: 0.04,
//   }
// )
// .from(
//   '.title',
//   {
//     y: -220,
//     x: 400,
//     duration: 0.8
//   },
//   1
// )
// .from(
//   '.women', {y: -900},
//   1.2
// )
// .from(
//   '.field', {
//     y: 400,
//     opacity: 0,
//   },
//   1.2
// )
// .from(
//   '.moon', {
//     scale: 0,
//     duration: 2,
//    },
//   1.5
// )
// .from(
//   '.women', {
//     rotate: 15,
//     duration: 1.3,
//     ease: "bounce.out",
//   },
//   1.7
// )
// .from(
//   '.subtitle',
//   {
//     opacity: 0
//   },
//   1.8
// )
// .from(
//   '.kye__box', {
//     y: -600,
//     duration: 1.4,
//   },
//   2
// )
// .from(
//   '.kye__box', {
//     rotate: 20,
//     duration: 2.6,
//     ease: Elastic.easeOut,
//   },
//   2
// )
// .from(
//   '.nav__ul li', {
//     x: -600,
//     stagger: 0.1
//   }, 
//   '-=1'
// )

const who = gsap.timeline()

who.from ('.who__what__second__text', {
  scrollTrigger: {
    // markers: true,
    trigger: '.section__who__what',
    start: '+=30',
    end: '+=200',
    scrub: true,
  },
  y: 270,
})
.to ('.back__dlue', {
  scrollTrigger: {
    // markers: true,
    trigger: '.section__who__what',
    start: '0',
    end: '+=600',
    scrub: true,
  },
  scale: 100
})
.to ('.back__yellow', {
  scrollTrigger: {
    // markers: true,
    trigger: '.back__yellow',
    start: '-=120 bottom',
    end: '+=700',
    scrub: true,
  },
  scale: 100
})
.to ('.main', {
  scrollTrigger: {
    // markers: true,
    trigger: '.back__yellow',
    start: '-=120 bottom',
    end: '50',
    scrub: 'true',
  },
  css: {
    backgroundColor: "#FFCE7D"
  },
})


const ifYouWantText = gsap.timeline()
const ifYouWantImg = gsap.timeline()

ifYouWantText
.to ('.if__you__want__buttom__one', {
  scrollTrigger: {
    // markers:true,
    trigger: '.who__what__three__text',
    start: '1400 center',
    end: '+=30',
    scrub: true,
  },
  opacity: 0,
})
.to ('.if__you__want__buttom__two', {
  scrollTrigger: {
    // markers:true,
    trigger: '.who__what__three__text',
    start: '1400 center',
    end: '+=200',
    scrub: true,
  },
  opacity: 1,
  y: -60,
})
.to ('.if__you__want__buttom__two', {
  scrollTrigger: {
    // markers: true,
    trigger: '.who__what__three__text',
    start: '2000 center',
    end: '+=20',
    scrub: true,
  },
  opacity: 0,
})
.to ('.if__you__want__buttom__three', {
  scrollTrigger: {
    // markers: true,
    trigger: '.who__what__three__text',
    start: '2000 center',
    end: '+=200',
    scrub: true,
  },
  opacity: 1,
  y: -145,
})
.to ('.if__you__want__buttom__three', {
  scrollTrigger: {
    // markers:true,
    trigger: '.who__what__three__text',
    start: '2500 center',
    end: '+=20',
    scrub: true,
  },
  opacity: 0,
})
.to ('.if__you__want__buttom__four', {
  scrollTrigger: {
    // markers:true,
    trigger: '.who__what__three__text',
    start: '2400 center',
    end: '+=200',
    scrub: true,
  },
  opacity: 1,
  y: -245,
})



ifYouWantImg
.to ('.vector__stars', {
  scrollTrigger: {
    // markers:true,
    trigger: '.who__what__three__text',
    start: '100 center',
    end: '+=2000',
    scrub: true,
  },
  x: 1100,
})
.to ('.vector__stars', {
  scrollTrigger: {
    // markers: true,  
    trigger: '.who__what__three__text',
    start: '250 center',
    end: '+=500',
    scrub: true,
  },
  ease: "none",
  y: 400,
})
.from ('.if__you__want__buttom__one', {
  scrollTrigger: {
    // markers: true,
    trigger: '.who__what__three__text',
    start: '400 center',
    end: '+=400',
    scrub: true,
  },
  y: 400,
})
.from ('.eyes', {
  scrollTrigger: {
    // markers: true,
    trigger: '.who__what__three__text',
    start: '600 center',
    end: '+=100',
    scrub: true,
  },
  opacity: 0
})
.to ('.vector__stars', {
  scrollTrigger: {
    // markers:true,
    trigger: '.who__what__three__text',
    start: '1300 center',
    end: '+=300',
    scrub: true,
  },
opacity: 0,
})
.to('.eyes', {
  scrollTrigger: {
    // markers: true,  
    trigger: '.who__what__three__text',
    start: '1400 center',
    scrub: true,
  },
  attr: { src: './images/eyes.png' },
})
.to ('.vector__moon', {
  scrollTrigger: {
    // markers:true,
    trigger: '.who__what__three__text',
    start: '1400 center',
    end: '+=1500',
    scrub: true,
  },
  x: 1100,
})
.to('.eyes', {
  scrollTrigger: {
    // markers: true,  
    trigger: '.who__what__three__text',
    start: '1900 center',
    scrub: true,
  },
  attr: { src: './images/eyes_left.png' },
})
.to ('.vector__moon', {
  scrollTrigger: {
    // markers:true,
    trigger: '.who__what__three__text',
    start: '2300 center',
    end: '+=300',
    scrub: true,
  },
opacity: 0,
})
.to('.eyes', {
  scrollTrigger: {
    // markers: true,  
    trigger: '.who__what__three__text',
    start: '2500 center',
    scrub: true,
  },
  attr: { src: './images/eyes.png' },
})
.to('.if__you__want__buttom', {
  scrollTrigger: {
    // markers:true,
    trigger: '.who__what__three__text',
    start: '3000 center',
    end: '+=200',
    scrub: true,
  },
  opacity: 0,
})
.to('.if__you__want__buttom', {
  scrollTrigger: {
    // markers:true,
    trigger: '.who__what__three__text',
    start: '3000 center',
    end: '+=200',
    scrub: true,
  },
  opacity: 0,
})
.from('.it__is__me__foto', {
  scrollTrigger: {
    // markers: true,
    trigger: '.who__what__three__text',
    start: '4000 center',
    end: '+=300',
    scrub: true,
  },
  scaleY: 0
})
.from('.it__is__me__star', {
  scrollTrigger: {
    // markers: true,
    trigger: '.who__what__three__text',
    start: '4000 center',
    end: '+=200',
    scrub: true,
  },
  x: 900,
  y: -300,
  opacity: 0,
})


ScrollTrigger.create({
    // markers: true,
    trigger: ".if__you__want__buttom",
    pin: ".section__if__you__want",
    start: '0 center',
    end: "+=2800"
});

ScrollTrigger.create({
  // markers: true,
  trigger: ".section__if__you__want",
  pin: ".section__if__you__want",
  start: 'bottom bottom',
  end: "+=300"
});



// Поезд и космонафт

const work = gsap.timeline({
  ease: 'none',
  scrollTrigger: {
    // markers: true,
    trigger: '.how__we__work',
    start: 'top top', 
    end: '+=3000',  
    scrub: 0.05,
    anticipatePin: 1,
    pin: '.how__we__work',
  }
})
.to ('.main', {
  scrollTrigger: {
    // markers: true,
    trigger: '.how__we__work',
    start: '-=120 bottom',
    end: '50',
    scrub: 'true',
  },
  css: {
    backgroundColor: "#E9E9E9"
  },
})
// .from('.train', {
//   scrollTrigger: {
//     // markers: true,
//     trigger: '.how__we__work',
//     start: '200 center',
//     end: '+=300',
//     scrub: true,
//   },
//   scale: 0
// })
// .from('.astronaut', {
//   scrollTrigger: {
//     markers: true,
//     trigger: '.how__we__work',
//     // start: '100',
//     // end: '+=300',
//     scrub: true,
//   },
//   y: 500
// })
