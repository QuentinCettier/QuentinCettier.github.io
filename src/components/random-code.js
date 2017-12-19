//************************************* Eric's code ***********************************/

const $canvas = document.querySelector("canvas")
const context = $canvas.getContext("2d")


/*FONCTION TRANSITION BACKGROUND*/
//const backgroundColors={opacity:0.01}
//
//const backgroundFadeIn =()=>{
//  
//  //Boucle
//  window.requestAnimationFrame(backgroundFadeIn)
//  
//  //Fade-in
//  if(backgroundColors.opacity<=.9){
//    backgroundColors.opacity+=.025
//  }
//  
//  //Canvas effacé
//  context.clearRect(0, 0, $canvas.width, $canvas.height)
//  
//  //Dessin
//  const gradient  = context.createLinearGradient(100, 100, 400, 400)
//  gradient.addColorStop(0, `rgba(255, 255, 255, ${backgroundColors.opacity})`)
//  gradient.addColorStop(0.5, `rgba(0, 0, 255, ${backgroundColors.opacity})`)
//  gradient.addColorStop(1, `rgba(0, 0, 0, ${backgroundColors.opacity})`)
//  context.fillStyle=gradient
//  context.fillRect(0, 0, 400, 400)
//}
//
//backgroundFadeIn()


/*FONCTION SCROLL ET DÉPLACEMENT BALL*/
const ball={x:300, y:300}


const moveDown=()=>{
  window.requestAnimationFrame(moveDown)
  if(ball.y<350){
    ball.y+=5
    console.log("2e fonction")
    console.log(ball.y)
  }else{
    return
  }
  context.clearRect(0, 0, $canvas.width, $canvas.height)
  context.beginPath()
  context.arc(300, ball.y, 50, 0, Math.PI*2)
  context.fill()
}

//Si scroll vers le bas
const downScroll = () => {
  moveDown()
  console.log("down")
}

const moveUp=()=>{
  window.requestAnimationFrame(moveUp)
  if(ball.y>250){
    ball.y-=5
    console.log("1e fonction")
  }else{
    return
  }
  context.clearRect(0, 0, $canvas.width, $canvas.height)
  context.beginPath()
  context.arc(300, ball.y, 50, 0, Math.PI*2)
  context.fill()
}

//Si scroll vers le haut
const upScroll = () => {
  moveUp()
  console.log("up")
}




let lastDeltaY = 0
let lastTime = 0
document.addEventListener(
  "wheel", 
  (e) => {
	const time = Date.now()
    //1e condition : oblige un delatY supérieur à celui du dernier événement wheel en valeur absolue pour ignorer tous les wheel déclenchés avec l'élan du trackpad, car dès qu'on relâche le pad, le deltaY diminue. 
    //2e condition : vrai si le délais depuis la dernière modificiation > 600
	if (Math.abs(e.deltaY) > Math.abs(lastDeltaY) && time > lastTime + 600) { 
      (e.deltaY > 0 ? upScroll() : downScroll())
      lastTime = time 
  }
  lastDeltaY = e.deltaY //À la sortie de la condition, la variable lastDelaY est réassignée à chaque événement wheel à la fin de la fonction. Avant ça, elle représente donc la valeur de e.deltaY lors du précédent wheel.
})

////https://openclassrooms.com/forum/sujet/limiter-une-ecoute-devent-a-1-fois-par-seconde?page=1#message-92137266







/*FONCTION TRANSITION (COORD2 = COORD1, ETC.)*/

const balls = [
  {
    x: 100,
    y: 100,
    color: "red"
},
  {
    x: 200,
    y: 200,
    color: "blue"
},
  {
    x: 300,
    y: 300,
    color: "green"
},
  {
    x: 400,
    y: 400,
    color: "pink"
},
  {
    x: 500,
    y: 500,
    color: "black"
}
]


const loop = () => {
  const temp = balls[0].x
  window.requestAnimationFrame(loop)
  context.clearRect(0, 0, $canvas.width, $canvas.height)
  for (let i = 0; i < balls.length; i++) {
    if(i!=balls.length-1){
      if(balls[i].x < balls[i + 1].x)
      balls[i].x+=1
    }else{
      balls[i].x = temp
      
    }
    context.fillStyle=balls[i].color
    context.beginPath()
    context.arc(balls[i].x, 100, 50, 0, Math.PI * 2)
    context.fill()
  }
  console.log(balls)
}

loop()




//const loop = () => {
//  const temp = balls[0].x
//  for (let i = 0; i < balls.length; i++) {
//    if(i!=balls.length-1){
//      balls[i].x = balls[i + 1].x
//    }else{
//      balls[i].x = temp
//    }
//    context.fillStyle=balls[i].color
//    context.beginPath()
//    context.arc(balls[i].x, 100, 50, 0, Math.PI * 2)
//    context.fill()
//  }
//  console.log(balls)
//}
//
//loop()



//context.beginPath()
//context.arc((i+1).x, 100, 50, 0, Math.PI*2)
//context.fill()

//const move = () => {
//  window.requestAnimationFrame(move)
//  if (ball2.x > ball1.x && ball2.y > ball1.y) {
//    ball2.x-=1
//    ball2.y-=1
//  }
//  context.clearRect(0, 0, $canvas.width, $canvas.height)
//  context.beginPath()
//  context.arc(ball2.x, ball2.y, 50, 0, Math.PI*2)
//  context.fill()
//  firstDrawing()
//}
//
//move()


//************************************Quentin's code ***************************************//



// class Particles
// {
//     constructor()
//     {
//         this.originSpeed = Math.floor(Math.random()*12) / 10
//         this.originRadius = 2 * (Math.random())
//         this.radius = this.originRadius
//         this.posx = Math.floor((Math.random() * $canvas.width) + this.radius)
//         this.posy =  Math.floor((Math.random() * $canvas.height) + this.radius)
//         this.color = '#ffffff'
//         this.speed = this.originSpeed
//         this.opacity = Math.random()
//         this.direction = Math.random()
//     }

//     move()
//     {
//         context.beginPath()
//         context.globalCompositeOperation = 'source-over'
//         context.fillStyle = this.color
//         context.globalAlpha = this.opacity
//         context.arc(this.posx, this.posy, this.radius, 0, Math.PI*2, false)
//         context.fill()
//         context.closePath()

//         if(this.speed == 0)
//         {
//             this.speed = Math.floor(Math.random()*12) / 10
//         }
//         this.posy += this.speed/20

//         if(this.posy > $canvas.height)
//         {
//             this.posy = 0
//         }
//     }   
// }

// const $canvas = document.querySelector('.canvas-background')
// const context = $canvas.getContext('2d')
// //Canvas width and height
// $canvas.width = window.innerWidth
// $canvas.height = window.innerHeight

// let particleArray = []
// let particleCount = 300

// //Initialize the all scene
// //Create the particles and push them into the array
// const initialize = () =>
// {
//     for(let i = 0; i<particleCount; i++)
//     {
//         const particle = new Particles()
//         particleArray.push(particle)        
//     }
//     animate()   
// }

// //Animate all the particles
// const animate = () =>
// {
//     //clear canvas while animation
//     context.clearRect(0, 0, $canvas.width, $canvas.height)
//     //animate each particle of the array
//     for (let i = 0; i < particleCount-1; i++)
//     {
//        particleArray[i].move()
//     }
//     requestAnimationFrame(animate)
// }

// const coords = [{x: 0, y: 0}]
// const oldcoords = [{x: 0, y: 0}]

// document.addEventListener('mousemove', (e) =>
// { 
//     oldcoords.x = coords.x
//     oldcoords.y = coords.y

//     coords.x = e.clientX
//     coords.y = e.clientY

//     if(coords.x < oldcoords.x && coords.y < oldcoords.y)
//     {
//         for(const particle of particleArray)
//         {
//             particle.posx += particle.speed/5
//             particle.posy += particle.speed/5
//         }
//     }
//     else if(coords.x < oldcoords.x && coords.y > oldcoords.y)
//     {
//         for(const particle of particleArray)
//         {
//             particle.posx += particle.speed/5
//             particle.posy -= particle.speed/5
//         }
//     }
//     else if(coords.x > oldcoords.x && coords.y > oldcoords.y)
//     {
//         for(const particle of particleArray)
//         {
//             particle.posx -= particle.speed/5
//             particle.posy -= particle.speed/5
//         }
//     }else
//     {
//         for(const particle of particleArray)
//         {
//             particle.posx -= particle.speed/5
//             particle.posy += particle.speed/5
//         }
//     }
// })
// initialize()

// //Main JS
// const $quoteContainer = Array.from(document.querySelectorAll('.quote-container'))
// const $quote = Array.from(document.querySelectorAll('.quote'))
// const $firstQuote = document.querySelector('.quote-1 .quote')
// const $secondQuote = document.querySelector('.quote-2 .quote')
// const $thirdQuote = document.querySelector('.quote-3 .quote')
// const $firstQuoteContainer = document.querySelector('.quote-1')
// const $secondQuoteContainer = document.querySelector('.quote-2')
// const $thirdQuoteContainer = document.querySelector('.quote-3')
// const $discoverButton = document.querySelector('.discover-button')
// const $copyright = document.querySelector('.copyright')
// const $about = document.querySelector('.link-container .link')


// const quoteArray = 
// [
//     {
//         'firstwidth': '530',
//         'secondwidth': '220',
//         'thirdwidth': '410',

//         'firstQuote' : '"When something is important enough,',
//         'secondQuote' :  'you do it even if ',
//         'thirdQuote' :'the odds are not in your favor"'
//     },
//     {
//         'firstwidth': '500',
//         'secondwidth': '290',
//         'thirdwidth': '340',
//         'firstQuote' :'"SpaceX designs, manufactures and ',
//         'secondQuote' : 'launches advanced ',
//         'thirdQuote' :'rockets and spacecraft"'
//     },
//     {
//         'firstwidth': '410',
//         'secondwidth': '290',
//         'firstQuote' :'"Between success and failures,',
//         'secondQuote' : 'SpaceX in all its data"'
//     }
// ]

// const randomQuote = () =>
// {
//     const random = Math.random()
//     if(random < 0.33)
//     {
//         $firstQuoteContainer.style.width = `${quoteArray[0].firstwidth}px`
//         $secondQuoteContainer.style.width = `${quoteArray[0].secondwidth}px`
//         $thirdQuoteContainer.style.width = `${quoteArray[0].thirdwidth}px`

//         $firstQuote.innerHTML = quoteArray[0].firstQuote
//         $secondQuote.innerHTML = quoteArray[0].secondQuote
//         $thirdQuote.innerHTML = quoteArray[0].thirdQuote
//     }
//     else if(random >= 0.33 && random < 0.66)
//     {
//         $firstQuoteContainer.style.width = `${quoteArray[1].firstwidth}px`
//         $secondQuoteContainer.style.width = `${quoteArray[1].secondwidth}px`
//         $thirdQuoteContainer.style.width = `${quoteArray[1].thirdwidth}px`
        

//         $firstQuote.innerHTML = quoteArray[1].firstQuote
//         $secondQuote.innerHTML = quoteArray[1].secondQuote
//         $thirdQuote.innerHTML = quoteArray[1].thirdQuote
//     }
//     else if(random >= 0.66 && random < 1)
//     {
//         $firstQuoteContainer.style.width = `${quoteArray[2].firstwidth}px`
//         $secondQuoteContainer.style.width = `${quoteArray[2].secondwidth}px`

//         $firstQuote.innerHTML = quoteArray[2].firstQuote
//         $secondQuote.innerHTML = quoteArray[2].secondQuote
//     }
// }
// randomQuote()

// let tlFadeInMain = new TimelineLite()
// let animating = false

// tlFadeInMain
//     .fromTo($about, 1, {y:50}, {y:0}, '+=1')
//     .fromTo($copyright, 1, {y:50}, {y:0}, '-=1')
//     .fromTo($quote, 1, {y:50}, {y:0}, '-=1')
//     .fromTo($discoverButton, .5, {y:50}, {y:0},'-=.5')

// $discoverButton.addEventListener('click', () =>
// {
//     let tlFadeOutMain = new TimelineMax({onComplete : transition})
//     tlFadeOutMain
//         .fromTo($about, 1, {y:0}, {y:50})
//         .fromTo($copyright, 1, {y:0}, {y:50}, '-=1')
//         .fromTo($quote, .5, {y:0}, {y:50}, '-=1')
//         .fromTo($discoverButton, .4, {y:0}, {y:60}, '-=1');

//     animating = true
//     switchPage()
// })

// let Req;
// const  transition = () =>
// {
//     for(const particle of particleArray)
//     {
//         particle.posy += particle.speed * 40
//     }
//     Req = requestAnimationFrame(transition)
    
// }

// const switchPage = () =>
// {
//     setTimeout(function()
//     {
//         cancelAnimationFrame(Req)
//         // ChangeUrl('Page 1', '/page1.html')
//     }, 4000);

// }

// // function ChangeUrl(title, url) {
// //     if (typeof (history.pushState) != "undefined") {
// //         let obj = { Title: title, Url: url }
// //         history.pushState(obj, obj.Title, obj.Url)

// //     } else {
// //         alert("Browser does not support HTML5.")
// //     }
// // }




//************************************************Tristan's code *********************************//

import "../../data/timeline.json";

const flightDetails = document.querySelector('.flight_details')

const fetchJSON = (url, index) => {
    fetch(url).then((res) => res.json()).then((data) => {
        console.log(data[index])
        // flightDetails.innerText = `${data[index].details}`
    }).catch((err) => console.log('Data not found'))
}

fetchJSON('../../data/timeline.json', 0)