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
    resizeCanvas()
}

const resizeCanvas = () => {
    $canvas.width = window.innerWidth
    $canvas.height = window.innerHeight
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
        for(particle of particleArray)
        {
            particle.posx += particle.speed/5
            particle.posy += particle.speed/5
        }
    }
    else if(coords.x < oldcoords.x && coords.y > oldcoords.y)
    {
        for(particle of particleArray)
        {
            particle.posx += particle.speed/5
            particle.posy -= particle.speed/5
        }
    }
    else if(coords.x > oldcoords.x && coords.y > oldcoords.y)
    {
        for(particle of particleArray)
        {
            particle.posx -= particle.speed/5
            particle.posy -= particle.speed/5
        }
    }else
    {
        for(particle of particleArray)
        {
            particle.posx -= particle.speed/5
            particle.posy += particle.speed/5
        }
    }
})
initialize()

window.addEventListener('resize', resizeCanvas) 