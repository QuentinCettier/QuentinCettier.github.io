const $canvas = document.querySelector('.canvas-background')
const context = $canvas.getContext('2d')
const $quote = document.querySelector('.quote')
const $cursor = document.querySelector('.cursor')
const $cursorCircle = document.querySelector('.cursor-circle')
const $buttonHome = document.querySelector('.button-home')
const domElements = Array.from(document.querySelectorAll('[data-link]'))
const domParallax = Array.from(document.querySelectorAll('[data-parallax]'))
const $scrollContainer = document.querySelector('.scroll-container')
const $scrollLine = document.querySelector('.scroll-line')

const coords = {
    x: 0,
    y: 0
}
const oldcoords = [{
    x: 0,
    y: 0
}]

const cursorCoords = [{
    x: 0,
    y: 0
}, {
    x: 0,
    y: 0
}]
const offset = {
    x: 0,
    y: 0
}
let frameCount = 0
let buttonCubeRotate = 25
let wheelCount = 0
let lastWheel = 0
let standardstars = []
let fallingstars = []
let standardstarscount = 300

const quotes = [
    '"When something is important enough, you do it even if the odds are not in your favor"',
    '"SpaceX designs, manufactures and launches advanced rockets and spacecraft"',
    '"I\'m not trying to be anyone\'s savior. I\'m just trying to think about the future and not be sad"'
]
const cta = 'Discover our moments'

$canvas.width = window.innerWidth
$canvas.height = window.innerHeight

const initialize = () => {
    getQuote(quotes)
    for (let i = 0; i < standardstarscount; i++) {
        const star = new StandardStar()
        standardstars.push(star)
    }
    animate()
}

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const resizeCanvas = () => {
    $canvas.width = window.innerWidth
    $canvas.height = window.innerHeight
}

const getQuote = (quotes) => {
    const random = Math.random()
    if (random < 0.33) {
        let temp = ''
        for (let i = 0; i < quotes[0].length; i++) {
            if (quotes[0][i] == ' ') {
                temp += quotes[0][i]
            } else {
                temp += `<span class='letter fade-in-${i}'>${quotes[0][i]}</span><style>.fade-in-${i}{animation: fade-in 0.5s ease forwards ${i*0.03}s;}</style>`
            }
        }
        $quote.innerHTML = temp
    } else if (random > 0.66) {
        let temp = ''
        for (let i = 0; i < quotes[1].length; i++) {
            if (quotes[1][i] == ' ') {
                temp += quotes[1][i]
            } else {
                temp += `<span class='letter fade-in-${i}'>${quotes[1][i]}</span><style>.fade-in-${i}{animation: fade-in 0.5s ease forwards ${i*0.03}s;}</style>`
            }
        }
        $quote.innerHTML = temp
    } else {
        let temp = ''
        for (let i = 0; i < quotes[2].length; i++) {
            if (quotes[2][i] == ' ') {
                temp += quotes[2][i]
            } else {
                temp += `<span class='letter fade-in-${i}'>${quotes[2][i]}</span><style>.fade-in-${i}{animation: fade-in 0.5s ease forwards ${i*0.03}s;}</style>`
            }
        }
        $quote.innerHTML = temp
    }
    window.setTimeout(() => {
        let tempc = ''
        for (let i = 0; i < cta.length; i++) {
            if (cta[i] == ' ') {
                tempc += '&nbsp'
            } else {
                let rand = randomNumber(0.5, 15)
                tempc += `<span class='letter fade-in-${rand+500}'>${cta[i]}</span><style>.fade-in-${rand+500}{animation: fade-in 1s ease forwards 0.${rand}s;}</style>`
            }
        }
        // console.log(tempc)
        $buttonHome.innerHTML = tempc
    }, 3000)
}

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

// const changeCubePannel = () => {
//     buttonCube.style.transform = `rotateX(${buttonCubeRotate}deg) translateZ(-30px)`    
//     buttonCubeRotate += 90
// }

const animate = () => {
    frameCount++
    //clear canvas while animation
    context.fillStyle = 'rgba(34,34,34,0.95)'
    context.fillRect(0, 0, $canvas.width, $canvas.height)
    //animate each particle of the array

    for (const star of standardstars) {
        star.move()
    }
    for (const star of fallingstars) {
        star.checkBorder()
        star.display()
    }

    if (fallingstars.length < 100 && frameCount % 10 == 0) {
        let random = {
            x: randomNumber(100, $canvas.width + 100),
            y: randomNumber(-50, -100),
            vx: randomNumber(-3, -1),
            vy: randomNumber(1, 3),
            radius: randomNumber(0.4, 0.9)
        }
        const star = new FallingStar(random.x, random.y, -1, 1, random.radius)
        fallingstars.push(star)
    }

    // if(frameCount % 120 == 0) {
    //     changeCubePannel() 
    // }
    if (frameCount - lastWheel > 10) {
        wheelCount = 0
    }
    $scrollContainer.style.transform = `translate(${offset.x}px, ${offset.y + 5 * wheelCount}px)`
    cursorMove()
    requestAnimationFrame(animate)
}

document.addEventListener('mousemove', (e) => {
    oldcoords.x = coords.x
    oldcoords.y = coords.y

    coords.x = e.clientX
    coords.y = e.clientY

    offset.x = ($canvas.width / 2 - e.clientX) / 30
    offset.y = ($canvas.height / 2 - e.clientY) / 30

    for (let i = 0; i < domParallax.length; i++) {
        domParallax[i].style.transform = `translate(${offset.x}px, ${offset.y}px)`
    }

    if (coords.x < oldcoords.x && coords.y < oldcoords.y) {
        for (const star of standardstars) {
            star.posx += star.speed / 5
            star.posy += star.speed / 5
        }
    } else if (coords.x < oldcoords.x && coords.y > oldcoords.y) {
        for (const star of standardstars) {
            star.posx += star.speed / 5
            star.posy -= star.speed / 5
        }
    } else if (coords.x > oldcoords.x && coords.y > oldcoords.y) {
        for (const star of standardstars) {
            star.posx -= star.speed / 5
            star.posy -= star.speed / 5
        }
    } else {
        for (const star of standardstars) {
            star.posx -= star.speed / 5
            star.posy += star.speed / 5
        }
    }
    cursorCheckBoundaries(domElements)
})

window.addEventListener('wheel', () => {
    wheelCount++
    console.log(wheelCount)
    if (wheelCount >= 4) {
        window.location = './timeline.html'
    }
    lastWheel = frameCount
})

window.addEventListener('resize', resizeCanvas)

initialize()

class FallingStar {
    constructor(x, y, vx, vy, radius) {
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
        this.radius = radius
        this.color = '#006d56'
    }

    checkBorder() {
        if (this.x + this.radius < 0) {
            this.x = $canvas.width + this.radius
        }
        if (this.y > $canvas.height) {
            this.y = 0 - this.radius
        }
    }

    display() {
        this.x += this.vx
        this.y += this.vy

        context.beginPath()
        // context.globalCompositeOperation = 'source-over'
        context.fillStyle = this.color
        // context.globalAlpha = this.opacity
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        context.fill()
        context.closePath()
    }
}

class StandardStar {
    constructor() {
        this.originSpeed = Math.floor(Math.random() * 12) / 10
        this.originRadius = (Math.random())
        this.radius = this.originRadius
        this.posx = Math.floor((Math.random() * $canvas.width) + this.radius)
        this.posy = Math.floor((Math.random() * $canvas.height) + this.radius)
        this.color = '#ffffff'
        this.speed = this.originSpeed
        this.opacity = Math.random()
        this.direction = Math.random()
    }

    move() {
        context.beginPath()
        context.globalCompositeOperation = 'source-over'
        context.fillStyle = this.color
        context.globalAlpha = this.opacity
        context.arc(this.posx, this.posy, this.radius, 0, Math.PI * 2, false)
        context.fill()
        context.closePath()

        if (this.speed == 0) {
            this.speed = Math.floor(Math.random() * 12) / 10
        }
        this.posy += this.speed / 20

        if (this.posy > $canvas.height) {
            this.posy = 0
        }
    }
}

// let Req;
// const transition = () => {
//     for (const star of standardstars) {
//         star.posy += star.speed * 40
//     }
//     Req = requestAnimationFrame(transition)
// }

// const switchPage = () => {
//     setTimeout(function () {
//         cancelAnimationFrame(Req)
//     }, 4000);
// }


// import "../../data/timeline.json";

// const flightDetails = document.querySelector('.flight_details')

// const fetchJSON = (url, index) => {
//     fetch(url).then((res) => res.json()).then((data) => {
//         console.log(data[index])
//         // flightDetails.innerText = `${data[index].details}`
//     }).catch((err) => console.log('Data not found'))
// }

// fetchJSON('../../data/timeline.json', 0)