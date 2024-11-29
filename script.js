const main = document.getElementById('main');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function () {
    const mainIcon = this.querySelector('.main-icon');
    const crossIcon = this.querySelector('.cross-icon');
    if (mainIcon.style.display === "none") {
        mainIcon.style.display = "inline-block"
        menu.style.display = "none"
        crossIcon.style.display = "none"
    }
    else {
        crossIcon.style.display = "inline-block"
        mainIcon.style.display = "none"
        menu.style.display = "block"
    }
});