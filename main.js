window.addEventListener("keydown", function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.add("playing");
})
const keys = document.querySelectorAll(".key");
keys.forEach(function (key) {
    key.addEventListener('transitionend', function (e) {
        if (e.propertyName !== "transform") return;
        console.log(this);
        this.classList.remove('playing');

    })
})
