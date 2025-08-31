const scene = document.getElementById('scene');
document.getElementById('scene').addEventListener('click', () => {
    scene.classList.remove('play');
    void scene.offsetWidth;
    scene.classList.add('play');
});