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
    trigger: '.section__who__what',
    start: '+=50',
    end: '+=500',
    scrub: true,
  },
  scale: 1500
}
)
.to ('.back__yellow', {
  scrollTrigger: {
    // markers:true,
    trigger: '.back__yellow',
    start: '-=120 bottom',
    end: '+=500',
    scrub: true,
  },
  scale: 1500
}
)


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
    // markers:true,
    trigger: '.who__what__three__text',
    start: '1800 center',
    end: '+=20',
    scrub: true,
  },
  opacity: 0,
})
.to ('.if__you__want__buttom__three', {
  scrollTrigger: {
    // markers:true,
    trigger: '.who__what__three__text',
    start: '1800 center',
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
    start: '2200 center',
    end: '+=20',
    scrub: true,
  },
  opacity: 0,
})
.to ('.if__you__want__buttom__four', {
  scrollTrigger: {
    // markers:true,
    trigger: '.who__what__three__text',
    start: '2200 center',
    end: '+=200',
    scrub: true,
  },
  opacity: 1,
  y: -245,
})



ifYouWantImg
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
    // markers: true,  
    trigger: '.who__what__three__text',
    start: '250 center',
    end: '+=500',
    scrub: true,
  },
  ease: "none",
  y: 400,
})
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
    end: '+=2000',
    scrub: true,
  },
  x: 1100,
})





let st = ScrollTrigger.create({
    // markers: true,
    trigger: ".if__you__want__buttom",
    pin: ".if__you__want__title",
    start: '0 center',
    end: "+=3600"
});