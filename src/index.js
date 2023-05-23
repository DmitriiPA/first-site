var tl = gsap.timeline();
tl.to(
  '.heder-stars-box',  {
    duration: 0.8,
    // scale: 0.5, 
    opacity: 1, 
    delay: 0.7, 
    stagger: 0.2,
    // ease: "elastic", 
    // force3D: true
  }
)
.from(
  '.title',
  {
    x: 400,
    y: -260,
    // delay: 0.5
  },
)
.from(
  '.subtitle',
  {
    opacity: 0
  },
)
.fromTo(
  '.moon',
  {
    width: 0,
    height:0,
  },
  {
    width: 350 ,
    height: 340
  },
)
.from(
  '.women', {
    y: -900,
  }
)
.from(
  '.women', {
    rotate: 20,
    ease: "bounce.out",
    duration: 1
  }
)
.from(
  '.field', {
    y: 400,
  },
  3
)
.fromTo(
'.nav_ul li', {
  x: -600,
},
{
  x: 0,
  duration: 0.5,
  stagger: 0.1
},
2.7
)
.from(
  '.kye-box', {
    y: -600,
  },
  2.7
)
.from(
  '.kye-box', {
    rotate: 10,
    duration: 1,
    ease: "bounce.out"
  },
  2.8
)