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

var light = new THREE.PointLight(0xFFFF00);
light.position.set(10, 0, 25);
scene.add(light);

let cubes = []

class Cube {
    constructor(x, y, z) {
        this.cube = new THREE.Mesh(new THREE.BoxGeometry(20, 20, 20), new THREE.MeshLambertMaterial({
            color: 0xfd59d7
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