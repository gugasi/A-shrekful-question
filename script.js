const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const popup = document.getElementById("popup");

noButton.addEventListener("mouseover", () => {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const noButtonRect = noButton.getBoundingClientRect();

    const newLeft = Math.random() * (containerRect.width - noButtonRect.width);
    const newTop = Math.random() * (containerRect.height - noButtonRect.height);

    noButton.style.position = "absolute";
    noButton.style.left = newLeft + "px";
    noButton.style.top = newTop + "px";
});

yesButton.addEventListener("click", () => {
    popup.style.display = "block";
});

popup.addEventListener("click", () => {
    popup.style.display = "none";
});

// Hide the popup initially
popup.style.display = "none";

// Night Sky background scripts
function draw() {
    setInterval(createStars, 30);
    setInterval(starFall, 2000);
    var canvas = document.getElementById("nightSky");
    var art = canvas.getContext("2d");
    art.beginPath();
    art.arc(240, 60, 60, 0, Math.PI * 2, true);
    var color = art.createRadialGradient(100, 100, 150, 100, 20, 30);
    color.addColorStop(0, '#cae3ef');
    color.addColorStop(0.5, '#cde1e8');
    color.addColorStop(1, '#7aa4b4');
    art.fillStyle = color;
    art.fill();
    canvas.style.setProperty("-webkit-filter", "drop-shadow(5px 5px 5px white)");
}

function createStars() {
    const star = document.createElement('div');
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.backgroundColor = "white";
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.width = Math.floor(Math.random() * 3) + 'px';
    star.style.height = Math.floor(Math.random() * 3) + 'px';
    star.style.position = "absolute";
    star.style.zIndex = "-1";
    document.body.appendChild(star);
    setTimeout(() => {
        star.remove();
    }, 70000)
}

function starFall() {
    const createFall = document.createElement('div');
    function randomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }
    var lengthStar = randomNumber(100, 150);
    createFall.style.width = lengthStar + "px";
    createFall.style.height = "2px";
    createFall.style.backgroundImage = "linear-gradient(to right, white 40%, transparent)";
    document.body.appendChild(createFall);
    createFall.style.left = Math.random() * window.innerWidth + 'px';
    createFall.style.top = Math.random() * window.innerHeight + 'px';
    createFall.style.zIndex = "-1";
    createFall.style.transform = "rotate(7deg)";
    createFall.style.animation = "hide 1s linear infinite alternate";
    setTimeout(() => {
        createFall.remove();
    }, 900)
}
