var till = 7;
for (var i = 0; i < till; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var key = this.innerHTML;
    sound(key);
  });
}
document.addEventListener("keypress", function (event) {
  sound(event.key);
});
function sound(element) {
  if (element == "w") {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  } else if (element == "a") {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  } else if (element == "s") {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  } else if (element == "d") {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  } else if (element == "j") {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
  } else if (element == "k") {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  } else if (element == "l") {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
  }
}
