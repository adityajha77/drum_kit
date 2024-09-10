var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Detect button clicks
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerhtml = this.innerHTML;
        makeSound(buttonInnerhtml);
        buttonAnimation(buttonInnerhtml);
    });
}

// Detect keypresses
document.addEventListener("keydown", function(event) {
    var keyPressed = event.key;
    makeSound(keyPressed);
    buttonAnimation(keyPressed);
});

// Function to play the sound based on key/button press
function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        default:
            console.log(key); // Optional: log unrecognized keys
    }
}

// Function to animate buttons when pressed
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    if (activeButton) {
        activeButton.style.color = "black"; // Change button color when pressed
        setTimeout(function() {
            activeButton.style.color = ""; // Reset color after 100ms
        }, 100);
    }
}
