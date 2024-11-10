// JavaScript for 3D Globe Animation (scripts.js)
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("#globeCanvas") });

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 3;

// Earth Texture
const textureLoader = new THREE.TextureLoader();
const earthTexture = textureLoader.load('path/to/earth_texture.jpg');  // Add texture image path
const globe = new THREE.Mesh(new THREE.SphereGeometry(1, 50, 50), new THREE.MeshBasicMaterial({ map: earthTexture }));

scene.add(globe);

function animate() {
    requestAnimationFrame(animate);
    globe.rotation.y += 0.001;  // Slow rotation
    renderer.render(scene, camera);
}

animate();



// scripts.js
function scrollToSections() {
    document.getElementById("map-categories").scrollIntoView({ behavior: "smooth" });
}

function filterMaps() {
    const searchTerm = document.getElementById("mapSearch").value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const title = card.textContent.toLowerCase();
        card.style.display = title.includes(searchTerm) ? "block" : "none";
    });
}
function filterMaps() {
    const query = document.getElementById("mapSearch").value.toLowerCase();
    document.querySelectorAll(".category").forEach(category => {
        category.style.display = category.textContent.toLowerCase().includes(query) ? "block" : "none";
    });
}

