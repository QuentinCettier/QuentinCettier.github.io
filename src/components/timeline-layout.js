const $cursor = document.querySelector('.cursor')
const $cursorCircle = document.querySelector('.cursor-circle')
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
            console.log('okay')
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