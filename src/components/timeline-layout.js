import {TweenMax, Power2, TimelineLite} from "gsap";

//DOM element that we use in JS
const $container = document.querySelector('.container')
const $nextButton = document.querySelector('.nextButton')
const $previousButton = document.querySelector('.previousButton')
const $visor = document.querySelector('.visor-container')
const $visor1 = $visor.querySelector('.first-visor')
const $visor2 = $visor.querySelector('.second-visor')
const $line1 = document.querySelector('.line-1')
const $line2 = document.querySelector('.line-2')
const $plan1 = $container.querySelector('.index-1')
const $plan2 = $container.querySelector('.index-2')
const $plan3 = $container.querySelector('.index-3')
const $plan4 = $container.querySelector('.index-4')
const $plan5 = $container.querySelector('.index-5')
const $github = document.querySelector('.github')
const $logo = document.querySelector('.logo-container')
// const $parallaxArray = Array.from(document.querySelectorAll('[data-parallax]'))
//Variables to display data
const $loaderImage = document.querySelector('.loader-container')
const $indications = document.querySelector('.indications')
const $date = $indications.querySelector('.date')
const $mainInfo = $indications.querySelector('.mainInformations')
const $rocket = $indications.querySelector('.rocket')
const $place = $indications.querySelector('.place')
const $cost = $indications.querySelector('.cost')
const $causeOfFailures = $indications.querySelector('.causeOfFailure')
const $details = $indications.querySelector('.details')
const $textDetails = $indications.querySelector('.textDetails')
const $consequences = $indications.querySelector('.consequences')
const $textConsequences = $indications.querySelector('.textConsequences')
const $media = $indications.querySelector('.media')
const $cursor = document.querySelector('.cursor')
const $cursorCircle = document.querySelector('.cursor-circle')

const $theme = document.querySelector('.theme')
const $equalizer = document.querySelector('.equalizer-container')
const $equalizerBars = Array.from($equalizer.querySelectorAll('.equalizer-bar'))

// const image = require('./images/2006_03_24.jpg')

//Color const
const green = '#006d56'
const red = 'rgb(120,8,13)'
const grey = '#918b8b'
const black = '#000'

const domElements = Array.from(document.querySelectorAll('[data-link]'))
const coords = {
    x: 0,
    y: 0
}
const cursorCoords = [{
    x: 0,
    y: 0
}, {
    x: 0,
    y: 0
}]

const cursorMove = () => {
    cursorCoords[0].x += (coords.x - cursorCoords[0].x) / 5
    cursorCoords[0].y += (coords.y - cursorCoords[0].y) / 5
    $cursor.style.transform = `translate(${cursorCoords[0].x + 5}px, ${cursorCoords[0].y + 4}px)`
    cursorCoords[1].x += (coords.x - cursorCoords[1].x - 4) / 1.5
    cursorCoords[1].y += (coords.y - cursorCoords[1].y - 4) / 1.5
    $cursorCircle.style.transform = `translate(${cursorCoords[1].x + 5}px, ${cursorCoords[1].y + 5}px)`
}

const cursorCheckBoundaries = (elements) => {
    for (const element of elements) {
        if (coords.x > element.getBoundingClientRect().left &&
            coords.x < element.getBoundingClientRect().left + element.clientWidth &&
            coords.y > element.getBoundingClientRect().top &&
            coords.y < element.getBoundingClientRect().top + element.clientHeight
        ) {
            $cursorCircle.classList.add('hovering')
            return true
        } else if ($cursorCircle.classList.contains('hovering')) {
            $cursorCircle.classList.remove('hovering')
        }
    }
}

const animate = () => {
    cursorMove()
    requestAnimationFrame(animate)
}
animate()

document.addEventListener('mousemove', (e) => {
    coords.x = e.clientX
    coords.y = e.clientY
    cursorCheckBoundaries(domElements)
})

//JSON containing all the datas we need to display
const dataArray = 
[
  {
    'date' : 'March 24 2006',
    'rocket' : 'Falcon 1',
    'success' : 'false',
    'cost' : '$67,000,000',
    'launch_base': 'Vandenberg Air Force Base, California',
    'reason' : 'The first stage having exploded as a result of a fuel leak.',
    'consequence' : 'Space X initially attributed the fire to an improperly tightened fuel-line nut. A later review by DARPA found that the nut was properly tightened, since its locking wire was still in place, but had failed because of corrosion from saltwater spray.',
    'details': 'The vehicle had a noticeable rolling motion after liftoff, as shown on the launch video rocking back and forth a bit. Impact onto dead reef about 250 feet from the launch site.',
    'media': './images/2006_03_24.jpg'    
  },
  {
    'date' : 'March 21 2007',
    'rocket' : 'Falcon 1',
    'success' : 'false',
    'cost' : '$67,000,000',
    'launch_base': 'Vandenberg Air Force Base, California',
    'reason' : 'The second stage engine shutdown of a rool-control issue.',
    'consequence' : 'The rocket reached a final altitude of 289 km and a final velocity of 5.1 km/s compared to 7.5 km/s needed for orbit',
    'details': 'A circular coning oscillation began, which inscreased in amplitude until video was lost. The vehicle started to roll, and telemetry ended.',
    'media': './images/2010_12_08.jpg'
    
  },
  {
    'date' : 'August 3 2008',
    'rocket' : 'Falcon 1',
    'success' : 'false',
    'cost' : '$67,000,000',
    'launch_base': 'Vandenberg Air Force Base, California',
    'reason' : 'Collision between the first and second floors at the time of separation.',
    'consequence' : 'The first stage recontated the second stage, preventing successful completion of the mission. ',
    'details': 'Unexpected slow loading of helium onto the Falcon 1;  thus exposing the fuel and oxidizer to the cryogenic heliom, rendering the vehicle in a premature launch state. During the launch, small vehicle roll oscillations were visible. Residual fuel in the new Merclin 1C engine evaporated.',
    'media': './images/2008_08_03.jpg',
  },
  {
    'date' : 'September 28 2008',
    'rocket' : 'Falcon 1',
    'success' : 'true',
    'cost' : '$67,000,000',
    'launch_base': 'Vandenberg Air Force Base, California',
    'reason' : 'The fourth flight of the Falcon 1 rocket deliver a 165-kilogram non-functional boilerplate spacecraft in an orbit of 500 x 700 km inclined at 9.2 °.',
    'consequence' : "It was Falcon 1's first successful launch and the first successful orbital launch of any privately funded and developed, liquid-propelled carrier rocket.",
    'details': 'The rocket follower the same trajectory as the previous flight, which failde to placed the others spacecraft into orbit. No major changes were made to the rocket. Except increasing the time betwween first-stage burnout and second-stage.separation.'  ,
    'media': './images/2008_09_28.jpg',
  },
  {
    'date' : 'July 13 2009',
    'rocket' : 'Falcon 1',
    'success' : 'true',
    'cost' : '$67,000,000',
    'launch_base': 'Vandenberg Air Force Base, California',
    'reason' : 'Falcon 1 successfully orbits a malaysian satellite.',
    'consequence' : 'The payload was then successfully deployed. After the launch Elon Musk, founder and CEO of SpaceX, told a reporter the launch had been a success. "We nailed the orbit to well within target parameters...pretty much a bullseye" Musk said.',
    'details': "The Falcon 1 successfully orbits commercial satellite Malaysia's RazakSAT, allowing to take high-resolution images of Malaysia to aid land management, resource development and conservation, forestry and fish migration studies.",
    'media': './images/2009_07_13.jpg',
  }
]


let lastDeltaY = 0
let lastTime = 0
//currentSlide let
let currentSlide = 0

$equalizer.addEventListener('click', (e) => {
    // play/pause theme music
    $theme.paused ? $theme.play() : $theme.pause()
    for (const bar of $equalizerBars) {
        bar.classList.toggle('paused')
    }
})

//Scroll Hijack 
//We use it to trigger scroll event once
document.addEventListener(
  "wheel", 
  (e) => {
	const time = Date.now()
    //1e condition : oblige un delatY supérieur à celui du dernier événement wheel en valeur absolue pour ignorer tous les wheel déclenchés avec l'élan du trackpad, car dès qu'on relâche le pad, le deltaY diminue. 
    //2e condition : vrai si le délais depuis la dernière modificiation > 600
    if(e.clientX > 500 & $indications.style.opacity == 1)
    {
        if (Math.abs(e.deltaY) > Math.abs(lastDeltaY) && time > lastTime + 1600) { 
            (e.deltaY > 0 ? $nextButton.click() : $previousButton.click())
            lastTime = time 
        }
    }   
        else if($indications.style.opacity == 0)
    {
        if (Math.abs(e.deltaY) > Math.abs(lastDeltaY) && time > lastTime + 1600) { 
            (e.deltaY > 0 ? $nextButton.click() : $previousButton.click())
            lastTime = time 
        }
    }
  lastDeltaY = e.deltaY
   
})
//Coordinates for 13" screens
const coordinates = 
[ 
    { x: 0 , y: -380},
    { x: -550, y: 0},
    { x: -243, y: 520},
    { x: 400, y:865},
    { x:35, y:1290}
]
//initialize the scene, fire some animations using GSAP
const init = () =>
{
    fadeOutInfo()
    let tlInit = new TimelineLite()
    tlInit
        .to($visor, .5, {autoAlpha: 1} , '+=3')
        .to($github, .3, {autoAlpha: 1})
        .to($logo, .3, {autoAlpha:1}, '-=.3')
        .to($visor1, 2, {rotation:360})
        .to($visor2, 2, {rotation: -360}, '-=2')
        .to($line2, .5, {autoAlpha: 1, height : 500, ease: Power1.easeIn})
        .to($line1, .2, {autoAlpha:1, width: 100, ease: Power1.easeIn}, '-=.3')
        .fromTo($indications, .3, {y: 100 , autoAlpha: 0},{y: 0, autoAlpha:1 ,ease: Power1.easeIn})
    loadSlide(currentSlide)
}

//Parallax on mouse mouve event
const offset = [{x:0 ,y : 0}]
document.addEventListener('mousemove', (e) =>
{
    offset.x = (window.innerWidth - e.clientX) / 30
    offset.y = (window.innerHeight - e.clientY) / 30

    $plan1.style.transform = `translateX(${-500 + offset.x}) translateY(${-200 + offset.y}) translateZ(0px)`
    $plan2.style.transform = `translateX(${offset.x}px) translateY(${offset.y}px) translateZ(-70px) rotate(180deg)`
    $plan3.style.transform = `translateX(${offset.x}px) translateY(${offset.y}px) translateZ(-600px) `
    $plan4.style.transform = `translateX(${offset.x}px) translateY(${-1500 +offset.y}px) translateZ(-70px) rotate(180deg)`
    $plan5.style.transform = `translateX(${offset.x}px) translateY(${-1500 + offset.y}px) translateZ(-600px)`
})

//$visor click eventListener
$visor.addEventListener('click', () =>
{
    let tlAnimateIn = new TimelineLite()
    tlAnimateIn
        .to($line2, .5, {autoAlpha: 1, height : 500, ease: Power1.easeIn}, '-=.2')
        .to($line1, .2, {autoAlpha:1, width: 100, ease: Power1.easeIn})
        .fromTo($indications, .3, {y: 100 , autoAlpha: 0},{y: 0, autoAlpha:1 ,ease: Power1.easeIn})
})

//$next Button cick event Listener
$nextButton.addEventListener('click', () =>
{
    $visor1.style.borderColor =  '#ffffff'
    $visor2.style.borderColor =  '#ffffff'
    if(currentSlide + 1 < 5)
    {
        animateOut(currentSlide)
        currentSlide++
        $container.style.transform = `rotateX(50deg) translateY(${coordinates[currentSlide].y}px) translateX(${coordinates[currentSlide].x}px)`
        //Waiting for the transition to end before fire others functions
        $container.addEventListener('transitionend', () =>
        {
            loadSlide(currentSlide)
            $visor.click()
        })
    }
})

//$previousButton event Listener
$previousButton.addEventListener('click', () =>
{
    $visor1.style.borderColor =  '#ffffff'
    $visor2.style.borderColor =  '#ffffff'
    if(currentSlide - 1 >= 0)
    {
        animateOut(currentSlide)
        currentSlide--
        $container.style.transform = `rotateX(50deg) translateY(${coordinates[currentSlide].y}px) translateX(${coordinates[currentSlide].x}px)`
        loadSlide(currentSlide)
    }
    
})

//Animations Datas container out
const animateOut = (currentSlide) =>
{
    let tlAnimateSlideOut = new TimelineLite()
    tlAnimateSlideOut
        .to($indications, .3, {y: 50, autoAlpha:0 ,ease: Power1.easeOut})
        .to($line1, .2, {autoAlpha:0, width: 0 ,ease: Power1.easeOut})
        .to($line2, .5, {autoAlpha: 0, height : 0, ease: Power1.easeOut}, '-=.3')
    fadeOutInfo()
}
//Fill HTML with JSON 's array values
const loadSlide = (currentSlide) =>
{
    $details.innerHTML = "Details"
    $consequences.innerHTML = "Consequences"
    $date.innerHTML = dataArray[currentSlide].date
    $rocket.innerHTML = dataArray[currentSlide].rocket
    $cost.innerHTML = dataArray[currentSlide].cost
    $place.innerHTML = dataArray[currentSlide].launch_base
    $textConsequences.innerHTML = dataArray[currentSlide].consequence
    $textDetails.innerHTML = dataArray[currentSlide].details
    $media.src = dataArray[currentSlide].media
    //If success is false
    if(dataArray[currentSlide].success == 'false')
    {
        $date.style.color = black
        $place.style.color = black
        $details.style.color = black
        $consequences.style.color = black
        $line1.style.background =  black
        $line2.style.background =  black
        $visor1.style.borderColor = black  
        $visor2.style.borderColor = black 
    }//If success is false
    else if(dataArray[currentSlide].success == 'true')
    {
        $date.style.color = green
        $place.style.color = green
        $details.style.color = green
        $consequences.style.color = green
        $line1.style.background =  green
        $line2.style.background =  green
        $visor1.style.borderColor =  green
        $visor2.style.borderColor =  green
    }
}

//Animations Datas out
const fadeOutInfo = () =>
{
    $date.innerHTML = ""
    $rocket.innerHTML = ""
    $cost.innerHTML = ""
    $place.innerHTML = ""
    $textConsequences.innerHTML = ""
    $textDetails.innerHTML = ""
    $details.innerHTML = ""
    $consequences.innerHTML = ""
    $media.src = ""
}
//Keyboard event Listener
document.addEventListener('keydown', (e) =>
{

    switch(e.keyCode)
    {
        case 38:
            e.preventDefault()
            $nextButton.click()
            break

        case 40:
            e.preventDefault()
            $previousButton.click()
            break  
    }
})

//Indications container mouseMove 3D event
let delta = [{x : 0, y: 0}] 
$indications.addEventListener('mouseover', (e) =>
{
    delta.x = window.innerWidth / e.clientX/ 8
    delta.y = window.innerHeight / e.clientY * 2
    
    $indications.style.transform = `perspective(800px) rotateX(${delta.x}deg) rotateY(${delta.y}deg)`
})

init()

//Responsive
if (window.innerWidth < 500) {
    loadSlide(currentSlide)
    
    if(Modernizr.touchevents){
    $previousButton.addEventListener('touchstart', () => {
      if (currentSlide - 1 >= 0) {
        
        currentSlide--
        loadSlide(currentSlide)
      }
    })
    }else{
      $previousButton.addEventListener('click', () => {
      if (currentSlide - 1 >= 0) {
        
        currentSlide--
        loadSlide(currentSlide)
      }
    })
    }
    
    if(Modernizr.touchevents){
    $nextButton.addEventListener('touchstart', () => {
      if (currentSlide + 1 < 5) {
        
        currentSlide++
        loadSlide(currentSlide)
      }
    })
    }else{
      $nextButton.addEventListener('click', () => {
      if (currentSlide + 1 < 5) {
        
        currentSlide++
        loadSlide(currentSlide)
      }
    })
    }
  }