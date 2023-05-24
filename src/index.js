var tl = gsap.timeline();
tl.to(
  '.heder-stars-box',  {
    opacity: 1, 
    delay: 0.7, 
    stagger: 0.2,
  }
)
.from(
  '.title',
  {
    y: -260,
    x: 400,
    duration: 0.8
  },
1
)
.from(
  '.women', {y: -900},
  1.2
)
.from(
  '.field', {
    y: 400,
    opacity: 0,
  },
  1.2
)
.from(
  '.women', {
    rotate: 20,
    ease: "bounce.out",
    duration: 1
  },
  1.6
)
.from(
  '.subtitle',
  {
    opacity: 0
  },
  1.8
)
.from(
  '.moon',
  {
    // scale: 1
    width: 0,
    height:0,
    duration: 1.8,
    // ease: "bounce.out", 
  },
  1.5
  )
  .from(
    '.kye-box', {
      y: -600,
      duration: 1.4,
      rotate: 20,
      duration: 1.2,
      // ease: "bounce.out",
    },
    2
  )
  .from(
    '.kye-box', {
    },
    2.1
  )
  .from(
  '.nav_ul li', {
    x: -600,
    stagger: 0.1
  })

  