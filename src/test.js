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