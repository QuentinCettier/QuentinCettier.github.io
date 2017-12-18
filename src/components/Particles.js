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

    }   
}