// var tl = gsap.timeline();
// tl.to(
//   '.heder-stars-box img',  {
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
//   '.kye-box', {
//     y: -600,
//     duration: 1.4,
//   },
//   2
// )
// .from(
//   '.kye-box', {
//     rotate: 20,
//     duration: 2.6,
//     ease: Elastic.easeOut,
//   },
//   2
// )
// .from(
//   '.nav_ul li', {
//     x: -600,
//     stagger: 0.1
//   }, 
//   '-=1'
// )


const who = gsap.timeline()

who.from ('.who-what-second-text', {
  scrollTrigger: {
    trigger: '.section-who-what',
    start: '+=30',
    end: '+=200',
    scrub: true,
  },
  y: 270,
})
.from ('.back-dlue', {
  scrollTrigger: {
    // markers:true,
    trigger: '.section-who-what',
    start: '+=50',
    end: '+=500',
    scrub: true,
  },
  scale: 0
}
)
.from ('.back-yellow', {
  scrollTrigger: {
    markers:true,
    trigger: '.back-yellow',
    start: '-=120 bottom',
    end: '+=200',
    scrub: true,
  },
  scale: 0
}
)
