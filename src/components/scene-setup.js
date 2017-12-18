import * as THREE from 'three'
let OrbitControls = require('three-orbit-controls')(THREE)

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 100 
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

window.addEventListener('resize', () => {
camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
})

let controls = new OrbitControls(camera) 

var light = new THREE.PointLight(0xFFFF00)
light.position.set(10, 0, 25)
scene.add(light)

var light = new THREE.AmbientLight( 0x404040 )
scene.add(light)

let cubes = []

class Cube {
    constructor(x, y, z) {
        this.cube = new THREE.Mesh(new THREE.SphereGeometry( 0.2, 32, 32 ), new THREE.MeshLambertMaterial({
            color: 0xfefefe
        }))
        this.cube.position.x = x
        this.cube.position.y = y
        this.cube.position.z = z
    }

    display() {
        scene.add(this.cube)
    }
    move() {
        this.cube.rotation.x += 0.01
        this.cube.rotation.y += 0.01
        this.cube.position.z += 0.1
    }
}

for (let i = 0; i < 3; i++) {
    const newCube = new Cube(-58 + i * 50, 0, -10)
    cubes.push(newCube)
}

for (const cube of cubes) {
    cube.display()
    console.log(cube.cube.position.x)
}

const animate = () => {
    requestAnimationFrame(animate)
    for (const cube of cubes) {
        cube.move()
    }
    renderer.render(scene, camera)
}
animate()