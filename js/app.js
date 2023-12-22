

document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('myAudio');
    document.addEventListener('click', function () {
        audio.play();
    });
});

document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
        style: `
        --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
        --move-y: ${(e.clientY - window.innerHeight / 2) * -.01}deg;
        `
    })
})