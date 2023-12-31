var donemsg = document.getElementById("done");

function makeWish() {
    var wishInput = document.getElementById("wish-Input").value;
    var wishContainer = document.querySelector(".wish");
    wishContainer.style.opacity = "0";
    donemsg.style.opacity="1"

    setTimeout(function () {
        donemsg.style.opacity = "0";
    }, 3000);

    setTimeout(function () {
        var spaceship = document.getElementById("spaceship");
        spaceship.style.animationPlayState = "paused";
        spaceship.style.animation = "spaceshipFlyAway 3s ease-out forwards";
    }, 5500);
}