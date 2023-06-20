var h = window.innerHeight/2;
var w = window.innerWidth/2

var tl = gsap.timeline();
tl.to(
  '.heder__stars__box img',  {
    opacity: 1, 
    delay: 0.7, 
    stagger: 0.04,
  }
)
.from(
  '.title',
  {
    x: h,
    y: -h/2,
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
  '.moon', {
    scale: 0,
    duration: 2,
   },
  1.5
)
.from(
  '.women', {
    rotate: 15,
    duration: 1.3,
    ease: 'bounce.out',
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
  '.kye__box', {
    y: -600,
    duration: 1.4,
  },
  2
)
.to(
  '.kye__box', {
    rotate: 20,
    duration: 2.8,
    ease: CustomEase.create("custom", "M0,0 C0.004,0.06 0.17,0.234 0.244,0.234 0.356,0.234 0.344,-0.13 0.434,-0.13 0.508,-0.13 0.492,0.076 0.566,0.076 0.608,0.076 0.617,-0.046 0.66,-0.046 0.699,-0.046 0.721,0.034 0.77,0.034 0.806,0.034 0.817,-0.021 0.868,-0.022 0.89,-0.023 0.904,0.011 0.938,0.016 0.968,0.016 1,0 1,0 "),
    // ease: Elastic.easeOut,
  },
  2
)
.from(
  '.nav__ul li', {
    x: '-100vw',
    stagger: 0.1
  }, 
  '-=1'
)

const who = gsap.timeline()

who.from ('.who__what__second__text', {
  scrollTrigger: {
    // markers: true,
    trigger: '.section__who__what',
    start: '+=30',
    end: '+=200',
    scrub: 2.5,
  },
  y: 270,
})
.to ('.back__dlue', {
  scrollTrigger: {
    // markers: true,
    trigger: '.back__dlue',
    start: 'centet bottom',
    end: '+=1200',
    scrub: 1,
  },
  scale: 150
})
.to ('.back__yellow', {
  scrollTrigger: {
    // markers: true,
    trigger: '.back__yellow',
    start: 'centet bottom',
    end: '+=1000',
    scrub: 1,
  },
  scale: 150
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
    scrub: 2.5,
  },
  opacity: 0,
})
.to ('.if__you__want__buttom__two', {
  scrollTrigger: {
    // markers:true,
    trigger: '.who__what__three__text',
    start: '1400 center',
    end: '+=200',
    scrub: 2.5,
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
    scrub: 2.5,
  },
  opacity: 0,
})
.to ('.if__you__want__buttom__three', {
  scrollTrigger: {
    // markers: true,
    trigger: '.who__what__three__text',
    start: '2000 center',
    end: '+=200',
    scrub: 2.5,
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
    scrub: 2.5,
  },
  opacity: 0,
})
.to ('.if__you__want__buttom__four', {
  scrollTrigger: {
    // markers:true,
    trigger: '.who__what__three__text',
    start: '2400 center',
    end: '+=200',
    scrub: 2.5,
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
    end: '+=1000',
    scrub: 4,
  },
  x: 1100,
})
.to ('.vector__stars', {
  scrollTrigger: {
    // markers: true,  
    trigger: '.who__what__three__text',
    start: '100 center',
    end: '+=700',
    scrub: true,
  },
  ease: 'none',
  y: 400,
})
.from ('.if__you__want__buttom__one', {
  scrollTrigger: {
    // markers: true,
    trigger: '.who__what__three__text',
    start: '400 center',
    end: '+=400',
    scrub: 2.5,
  },
  y: 400,
})
.from ('.eyes', {
  scrollTrigger: {
    // markers: true,
    trigger: '.who__what__three__text',
    start: '600 center',
    end: '+=100',
    scrub: 2.5,
  },
  opacity: 0
})
.to ('.vector__stars', {
  scrollTrigger: {
    // markers:true,
    trigger: '.who__what__three__text',
    start: '900 center',
    end: '+=300',
    scrub: 2.5,
  },
opacity: 0,
})
.to('.eyes', {
  scrollTrigger: {
    // markers: true,  
    trigger: '.who__what__three__text',
    start: '1400 center',
    scrub: 2.5,
  },
  attr: { src: './images/eyes.png' },
})
.to ('.vector__moon', {
  scrollTrigger: {
    // markers:true,
    trigger: '.who__what__three__text',
    start: '1400 center',
    end: '+=1500',
    scrub: 3,
  },
  x: 1100,
})
.to('.eyes', {
  scrollTrigger: {
    // markers: true,  
    trigger: '.who__what__three__text',
    start: '2100 center',
    scrub: 2.5,
  },
  attr: { src: './images/eyes_left.png' },
})
.to ('.vector__moon', {
  scrollTrigger: {
    // markers:true,
    trigger: '.who__what__three__text',
    start: '2300 center',
    end: '+=300',
    scrub: 2.5,
  },
opacity: 0,
})
.to('.eyes', {
  scrollTrigger: {
    // markers: true,  
    trigger: '.who__what__three__text',
    start: '2500 center',
    scrub: 2.5,
  },
  attr: { src: './images/eyes.png' },
})
.to('.if__you__want__buttom', {
  scrollTrigger: {
    // markers:true,
    trigger: '.who__what__three__text',
    start: '3000 center',
    end: '+=200',
    scrub: 2.5,
  },
  opacity: 0,
})
.to('.if__you__want__buttom', {
  scrollTrigger: {
    // markers:true,
    trigger: '.who__what__three__text',
    start: '3000 center',
    end: '+=200',
    scrub: 2.5,
  },
  opacity: 0,
})
.from('.it__is__me__foto', {
  scrollTrigger: {
    // markers: true,
    trigger: '.who__what__three__text',
    start: '4000 center',
    end: '+=200',
    scrub: 1.5,
  },
  scaleY: 0
})
.from('.it__is__me__star', {
  scrollTrigger: {
    // markers: true,
    trigger: '.who__what__three__text',
    start: '4000 center',
    end: '+=200',
    scrub: 2.5,
  },
  x: 900,
  y: -300,
  opacity: 0,
})


ScrollTrigger.create({
    // markers: true,
    trigger: '.section__if__you__want',
    pin: '.section__if__you__want',
    start: 'top top',
    end: '+=2400',
});

ScrollTrigger.create({
  // markers: true,
  trigger: '.section__if__you__want',
  pin: '.section__if__you__want',
  start: 'bottom bottom',
  end: '+=700',
});


// Поезд и космонафт и  текст

const work = gsap.timeline({
  // ease: 'none',
  scrollTrigger: {
    // markers: true,
    trigger: '.how__we__work',
    start: 'top top', 
    end: '+=3000',  
    scrub: 'true',
    pin: '.how__we__work',
  },
})
.from('.train', {
  scrollTrigger: {
    // markers: true,
    trigger: '.how__we__work',
    start: '300 center',
    end: '+=300',
    scrub: 2.5,
  },
  ease: 'power3.out',
  scale: 0
})
.from('.how__we__work__title', {
  scrollTrigger: {
    // markers: true,
    trigger: '.how__we__work',
    start: 'top center',
    end: '+=300',
    scrub: 2.5,
  },
  y: 300
})
.from('.how__we__work__not', {
  scrollTrigger: {
    // markers: true,
    trigger: '.how__we__work',
    start: 'top center',
    end: '+=300',
    scrub: 2.5,
  },
  y: 700
})
.to('[data-speed]', {
  scrollTrigger: {
    // markers: true,
    trigger: '.how__we__work__content',
    start: '200 top',
    end: '+=200px ',
    invalidateOnRefresh: true,
    scrub: 2.5,
  },
    y:  (i, el) => parseFloat(el.getAttribute('data-speed')) * -700,
    opacity: 0,    
})
.from('.astronaut', {
  scrollTrigger: {
    // markers: true,
    trigger: '.how__we__work__content',
    start: '200 top',
    end: '+=200px ',
    scrub: 2.5,
  },
    y:  600    
})
.from('.text__1', {
  scrollTrigger: {
    // markers: true,
    trigger: '.how__we__work__content',
    start: '200 top',
    end: '+=200px ',
    scrub: 2,
  },
    y:  300,
    opacity: 0,    
})
.from('.text__2', {
  scrollTrigger: {
    // markers: true,
    trigger: '.how__we__work__content',
    start: '200 top',
    end: '+=200px ',
    scrub: 2,
  },
    y:  700,
    opacity: 0,    
})
.to('.text__1', {
  scrollTrigger: {
    // markers: true,
    trigger: '.how__we__work__content',
    start: '600 top',
    end: '+=300px ',
    invalidateOnRefresh: true,
    scrub: 2,
  },
    y:  -300,
    opacity: 0,    
})
.to('.text__2', {
  scrollTrigger: {
    // markers: true,
    trigger: '.how__we__work__content',
    start: '600 top',
    end: '+=300px ',
    invalidateOnRefresh: true,
    scrub: 2,
  },
    y:  -300,
    opacity: 0,    
})
.from('.text__3', {
  scrollTrigger: {
    // markers: true,
    trigger: '.how__we__work__content',
    start: '700 top',
    end: '+=200px ',
    scrub: 2,
  },
    y:  300,
    opacity: 0,    
})
.from('.text__4', {
  scrollTrigger: {
    // markers: true,
    trigger: '.how__we__work__content',
    start: '700 top',
    end: '+=200px ',
    scrub: 2,
  },
    y:  700,
    opacity: 0,    
})
.from('.stars__the__end', {
  scrollTrigger: {
    // markers: true,
    trigger: '.how__we__work__content',
    start: '800 top',
    end: '+=200px ',
    scrub: 2,
  },
    opacity: 0,    
})
.to('.text__3', {
  scrollTrigger: {
    // markers: true,
    trigger: '.how__we__work__content',
    start: '1100 top',
    end: '+=200px ',
    scrub: 2,
    invalidateOnRefresh: true,
  },
    y:  -500,
    opacity: 0,    
  })
.to('.text__4', {
  scrollTrigger: {
    // markers: true,
    trigger: '.how__we__work__content',
    start: '1100 top',
    end: '+=200px ',
    scrub: 2,
    invalidateOnRefresh: true,
  },
  y:  -300,
  opacity: 0,    
})
.from('.text__5', {
  scrollTrigger: {
    // markers: true,
    trigger: '.how__we__work__content',
    start: '1300 top',
    end: '+=200px ',
    scrub: 2,
  },
    y:  200,
    opacity: 0,    
})
.from('.text__6', {
  scrollTrigger: {
    // markers: true,
    trigger: '.how__we__work__content',
    start: '1300 top',
    end: '+=200px ',
    scrub: 2,
  },
    y:  400,
    opacity: 0,    
})
.to(['.astronaut, .train'], {
  scrollTrigger: {
    // markers: true,
    trigger: '.how__we__work__content',
    start: '1700 top',
    end: '+=400px',
    scrub: 2,
    invalidateOnRefresh: true,
  },
    x: '100vw',
    opacity: 0,    
})
.to('.stars__the__end', {
  scrollTrigger: {
    // markers: true,
    trigger: '.how__we__work__content',
    start: '1800 top',
    end: '+=200px ',
    scrub: 2,
    invalidateOnRefresh: true,
  },
    opacity: 0,    
})
.from('.blue__planet', {
  scrollTrigger: {
    // markers: true,
    trigger: '.how__we__work__content',
    start: '1800 top',
    end: '+=200px ',
    scrub: 2,
  },
    opacity: 0, 
    y: 700,   
})
.from('.call__my__box', {
  scrollTrigger: {
    // markers: true,
    trigger: '.how__we__work__content',
    start: '1800 top',
    end: '+=200px ',
    scrub: 2,
  },
  x: '50vw',
  opacity: 0, 
})
.from('.price', {
  scrollTrigger: {
    // markers: true,
    trigger: '.how__we__work__content',
    start: '1800 top',
    end: '+=200px ',
    scrub: 2,
  },
    opacity: 0, 
    y: 500,   
});

gsap.utils.toArray(".call__my__box").forEach(h1 => {
  let hover = gsap.to(h1, {scale: 1.02, color: "blue", duration: .3, paused: true,});
  h1.addEventListener("mouseenter", () => hover.play());
  h1.addEventListener("mouseleave", () => hover.reverse());
});



const reviewsSection = gsap.timeline({
  // ease: 'none',
  scrollTrigger: {
    // markers: true,
    trigger: '.reviews',
    start: 'top top', 
    end: '+=1000',  
    scrub: 'true',
    pin: '.reviews',
  },
})
.from('.price__stars', {
  scrollTrigger: {
    // markers: true,
    trigger: '.reviews',
    start: 'top top',
    end: '+=400px ',
    scrub: 2,
  },
    opacity: 0, 
})
.from('.line', {
  scrollTrigger: {
    // markers: true,
    trigger: '.reviews',
    start: 'top top',
    end: '+=100px ',
    scrub: 2,
  },
  x: '-100vw',
})





const educationSection = gsap.timeline({
  // ease: 'none',
  scrollTrigger: {
    // markers: true,
    trigger: '.education',
    start: 'top top', 
    end: '+=300',  
    scrub: 'true',
    pin: '.education',
  },
})
.from('.education__title', {
  scrollTrigger: {
    // markers: true,
    trigger: '.education',
    start: 'top top',
    end: '+=100px ',
    scrub: 2,
  },
  y: '10vw',
  opacity: 0,
})
.from('.education__text', {
  scrollTrigger: {
    // markers: true,
    trigger: '.education',
    start: 'top top',
    end: '+=100px ',
    scrub: 2,
  },
  y: '20vw',
  opacity: 0,
})



var body = document.querySelector('.body');

var diplom = document.querySelectorAll('.diplom');
var blackBG = document.querySelector('.black__bg');
var kye = document.querySelector('.kye__box');

var diplomBel = document.querySelector('.diplom__belorus');
var diplomCoach = document.querySelector('.diplom__coach');
var diplomClinic = document.querySelector('.diplom__clinic');
var diplomKurp = document.querySelector('.diplom__kurpatov');
var teacherEducation = document.querySelector('.teacher_education');
var retraining = document.querySelector('.retraining');
var retrainingCourse = document.querySelector('.retraining_course');
var thinking = document.querySelector('.thinking');


function letDiplom1 () {
  diplomBel.classList.toggle('off');
  diplomCoach.classList.add('off')
  diplomClinic.classList.add('off')
  diplomKurp.classList.add('off')
};
function letDiplom2 () {
  diplomBel.classList.add('off');
  diplomCoach.classList.toggle('off')
  diplomClinic.classList.add('off')
  diplomKurp.classList.add('off')
};
function letDiplom3 () {
  diplomBel.classList.add('off');
  diplomCoach.classList.add('off')
  diplomClinic.classList.toggle('off')
  diplomKurp.classList.add('off')
};
function letDiplom4 () {
  diplomBel.classList.add('off');
  diplomCoach.classList.add('off')
  diplomClinic.classList.add('off')
  diplomKurp.classList.toggle('off')
};

teacherEducation.addEventListener('click',  letDiplom1);
retraining.addEventListener('click',  letDiplom2);
retrainingCourse.addEventListener('click',  letDiplom3);
thinking.addEventListener('click',  letDiplom4);


diplom.forEach(function (item, idx) {
  item.addEventListener('mouseenter', function () {
      blackBG.classList.remove('off')
  });
  item.addEventListener('mouseleave', function () {
      blackBG.classList.add('off')
  });
});


gsap.utils.toArray(".diplom.right_0").forEach(img => {
  let hover = gsap
  .to(img, {
    x: -w/4,
    y: -h/4,
    scale: 1.5,
    duration: .5, 
    paused: true, 
    ease: "sine",
  });
  img.addEventListener("mouseenter", () => hover.play());
  img.addEventListener("mouseleave", () => hover.reverse());
});

gsap.utils.toArray(".diplom.center_diplom").forEach(img => {
  let hover = gsap
  .to(img, {
    y: -h/4,
    scale: 1.5,
    duration: .5, 
    paused: true, 
    ease: "sine" 
  });
  img.addEventListener("mouseenter", () => hover.play());
  img.addEventListener("mouseleave", () => hover.reverse());
});


kye.addEventListener('click',  kyeGo);

function kyeGo () {
  gsap.to(
    '.kye__box', {
      rotate: 30,
      duration: 2,
      ease: CustomEase.create("custom", "M0,0 C0.004,0.06 0.124,0.234 0.198,0.234 0.3,0.234 0.331,-0.13 0.412,-0.13 0.486,-0.13 0.492,0.076 0.566,0.076 0.608,0.076 0.617,-0.046 0.66,-0.046 0.699,-0.046 0.721,0.034 0.77,0.034 0.806,0.034 0.817,-0.021 0.868,-0.022 0.89,-0.023 0.904,0.011 0.938,0.016 0.968,0.016 1,0 1,0 "),
    },
  )
}