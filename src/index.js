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
    y: -220,
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
.from(
  '.kye__box', {
    rotate: 20,
    duration: 2.8,
    ease: Elastic.easeOut,
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
    trigger: '.section__who__what',
    start: '0',
    end: '+=900',
    scrub: 2,
  },
  scale: 100
})
.to ('.back__yellow', {
  scrollTrigger: {
    // markers: true,
    trigger: '.back__yellow',
    start: '-=120 bottom',
    end: '+=900',
    scrub: 2,
  },
  scale: 100
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
    end: '+=300',
    scrub: 2.5,
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
.from('.call__my', {
  scrollTrigger: {
    // markers: true,
    trigger: '.how__we__work__content',
    start: '1800 top',
    end: '+=200px ',
    scrub: 2,
  },
    opacity: 0, 
    x: 700,   
})
.from('.price', {
  scrollTrigger: {
    // markers: true,
    trigger: '.how__we__work__content',
    start: '1800 top',
    end: '+=200px ',
    scrub: 2,
    // invalidateOnRefresh: true,
  },
    opacity: 0, 
    y: 500,   
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

function lookAt(event) {
    event.currentTarget.classList.toggle('visit');
    blackBG.classList.toggle('off');
  }

diplomBel.addEventListener('click',  lookAt)
diplomCoach.addEventListener('click',  lookAt)
diplomClinic.addEventListener('click',  lookAt)
diplomKurp.addEventListener('click',  lookAt)



kye.addEventListener('click',  kyeGo);

function kyeGo () {
  gsap.to(
    '.kye__box', {
      rotate: 40,
      duration: 2,
      ease: CustomEase.create("custom",  "M0,0 C0.004,0.067 0,0.278 0.04,0.278 0.128,0.278 0.209,-0.131 0.292,-0.131 0.324,-0.131 0.383,0.012 0.383,0.012 0.383,0.012 0.426,0.088 0.48,0.088 0.48,0.088 0.48,0.088 0.48,0.088 0.518,0.088 0.608,-0.046 0.632,-0.046 0.69,-0.046 0.702,0.034 0.752,0.034 0.788,0.034 0.807,-0.021 0.858,-0.022 0.88,-0.023 0.904,0.011 0.938,0.016 0.968,0.016 1,0 1,0 "),
    },
  )
}