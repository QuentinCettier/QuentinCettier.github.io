const $canvas = document.querySelector('.canvas-background')
const context = $canvas.getContext('2d')
//Canvas width and height
$canvas.width = window.innerWidth
$canvas.height = window.innerHeight

let particleArray = []
let particleCount = 700

//Initialize the all scene
//Create the particles and push them into the array
const initialize = () =>
{
    for(i = 0; i<particleCount; i++)
    {
        const particle = new Particles()
        particleArray.push(particle)
        console.log(particleArray)
        
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
initialize()