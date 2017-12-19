import {TweenMax, Power2, TimelineLite} from "gsap";
class Particles
{
   constructor()
   {
       this.originSpeed = Math.floor(Math.random()*12) / 10
       this.originRadius = 2 * (Math.random())
       this.radius = this.originRadius
       this.posx = Math.floor((Math.random() * $canvas.width) + this.radius)
       this.posy =  Math.floor((Math.random() * $canvas.height) + this.radius)
       this.color = '#ffffff'
       this.speed = this.originSpeed
       this.opacity = Math.random()
       this.direction = Math.random()
   }

   move()
   {
       context.beginPath()
       context.globalCompositeOperation = 'source-over'
       context.fillStyle = this.color
       context.globalAlpha = this.opacity
       context.arc(this.posx, this.posy, this.radius, 0, Math.PI*2, false)
       context.fill()
       context.closePath()

       if(this.speed == 0)
       {
           this.speed = Math.floor(Math.random()*12) / 10
       }
       this.posy += this.speed/20

       if(this.posy > $canvas.height)
       {
           this.posy = 0
       }
   }  
}

const $canvas = document.querySelector('.canvas-background')
const context = $canvas.getContext('2d')
//Canvas width and height
$canvas.width = window.innerWidth
$canvas.height = window.innerHeight

let particleArray = []
let particleCount = 300

//Initialize the all scene
//Create the particles and push them into the array
const initialize = () =>
{
   for(let i = 0; i<particleCount; i++)
   {
       const particle = new Particles()
       particleArray.push(particle)       
   }
   animate()  
}

//Animate all the particles
const animate = () =>
{
   //clear canvas while animation
   context.clearRect(0, 0, $canvas.width, $canvas.height)
   //animate each particle of the array
   for (let i = 0; i < particleCount-1; i++)
   {
      particleArray[i].move()
   }
   requestAnimationFrame(animate)
}

const coords = [{x: 0, y: 0}]
const oldcoords = [{x: 0, y: 0}]

document.addEventListener('mousemove', (e) =>
{
   oldcoords.x = coords.x
   oldcoords.y = coords.y

   coords.x = e.clientX
   coords.y = e.clientY

   if(coords.x < oldcoords.x && coords.y < oldcoords.y)
   {
       for(const particle of particleArray)
       {
           particle.posx += particle.speed/5
           particle.posy += particle.speed/5
       }
   }
   else if(coords.x < oldcoords.x && coords.y > oldcoords.y)
   {
       for(const particle of particleArray)
       {
           particle.posx += particle.speed/5
           particle.posy -= particle.speed/5
       }
   }
   else if(coords.x > oldcoords.x && coords.y > oldcoords.y)
   {
       for(const particle of particleArray)
       {
           particle.posx -= particle.speed/5
           particle.posy -= particle.speed/5
       }
   }else
   {
       for(const particle of particleArray)
       {
           particle.posx -= particle.speed/5
           particle.posy += particle.speed/5
       }
   }
})
initialize()

//Main JS
const $quoteContainer = Array.from(document.querySelectorAll('.quote-container'))
const $quote = Array.from(document.querySelectorAll('.quote'))
const $firstQuote = document.querySelector('.quote-1 .quote')
const $secondQuote = document.querySelector('.quote-2 .quote')
const $thirdQuote = document.querySelector('.quote-3 .quote')
const $firstQuoteContainer = document.querySelector('.quote-1')
const $secondQuoteContainer = document.querySelector('.quote-2')
const $thirdQuoteContainer = document.querySelector('.quote-3')
const $discoverButton = document.querySelector('.discover-button')
const $copyright = document.querySelector('.copyright')
const $about = document.querySelector('.link-container .link')

const quoteArray =
[
   {
       'firstwidth': '530',
       'secondwidth': '220',
       'thirdwidth': '410',

       'firstQuote' : '"When something is important enough,',
       'secondQuote' :  'you do it even if ',
       'thirdQuote' :'the odds are not in your favor"'
   },
   {
       'firstwidth': '500',
       'secondwidth': '290',
       'thirdwidth': '340',
       'firstQuote' :'"SpaceX designs, manufactures and ',
       'secondQuote' : 'launches advanced ',
       'thirdQuote' :'rockets and spacecraft"'
   },
   {
       'firstwidth': '410',
       'secondwidth': '290',
       'firstQuote' :'"Between success and failures,',
       'secondQuote' : 'SpaceX in all its data"'
   }
]

const randomQuote = () =>
{
   const random = Math.random()
   if(random < 0.33)
   {
       $firstQuoteContainer.style.width = `${quoteArray[0].firstwidth}px`
       $secondQuoteContainer.style.width = `${quoteArray[0].secondwidth}px`
       $thirdQuoteContainer.style.width = `${quoteArray[0].thirdwidth}px`

       $firstQuote.innerHTML = quoteArray[0].firstQuote
       $secondQuote.innerHTML = quoteArray[0].secondQuote
       $thirdQuote.innerHTML = quoteArray[0].thirdQuote
   }
   else if(random >= 0.33 && random < 0.66)
   {
       $firstQuoteContainer.style.width = `${quoteArray[1].firstwidth}px`
       $secondQuoteContainer.style.width = `${quoteArray[1].secondwidth}px`
       $thirdQuoteContainer.style.width = `${quoteArray[1].thirdwidth}px`
      

       $firstQuote.innerHTML = quoteArray[1].firstQuote
       $secondQuote.innerHTML = quoteArray[1].secondQuote
       $thirdQuote.innerHTML = quoteArray[1].thirdQuote
   }
   else if(random >= 0.66 && random < 1)
   {
       $firstQuoteContainer.style.width = `${quoteArray[2].firstwidth}px`
       $secondQuoteContainer.style.width = `${quoteArray[2].secondwidth}px`

       $firstQuote.innerHTML = quoteArray[2].firstQuote
       $secondQuote.innerHTML = quoteArray[2].secondQuote
   }
}
randomQuote()

let tlFadeInMain = new TimelineLite()
let animating = false

tlFadeInMain
   .set($discoverButton, {x:-125})
   .fromTo($about, 1, {y:50}, {y:0}, '+=1')
   .fromTo($copyright, 1, {y:50}, {y:0}, '-=1')
   .fromTo($quote, 1, {y:50}, {y:0}, '-=1')
   .fromTo($discoverButton, .5, {y:50}, {y:0},'-=.5')

$discoverButton.addEventListener('click', () =>
{
   let tlFadeOutMain = new TimelineMax({onComplete : transition})
   tlFadeOutMain
       .fromTo($about, 1, {y:0}, {y:50})
       .fromTo($copyright, 1, {y:0}, {y:50}, '-=1')
       .fromTo($quote, .5, {y:0}, {y:50}, '-=1')
       .fromTo($discoverButton, .4, {y:0}, {y:60}, '-=1');

   animating = true
   switchPage()
})

let Req;
const  transition = () =>
{
   for(const particle of particleArray)
   {
       particle.posy += particle.speed * 40
   }
   Req = requestAnimationFrame(transition)
}

const switchPage = () =>
{
   setTimeout(function()
   {
       cancelAnimationFrame(Req)
   }, 4000);
}