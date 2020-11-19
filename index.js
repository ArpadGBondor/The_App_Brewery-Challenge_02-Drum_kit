// this object pairs the
// keys with the filenames
var sounds = {
  w: "sounds/tom-1.mp3",
  a: "sounds/tom-4.mp3",
  s: "sounds/tom-3.mp3",
  d: "sounds/tom-2.mp3",
  j: "sounds/snare.mp3",
  k: "sounds/kick-bass.mp3",
  l: "sounds/crash.mp3"
};

// add "click" Eventlistener to every button
var buttons = document.querySelectorAll(".drum");
for (var i = 0; i < buttons.length; ++i)
  buttons[i].addEventListener("click",handleClick);

// add "keydown" EventListener to the whole page
document.addEventListener("keydown",handleKey);

function handleClick(event){
  // key goes through the properties
  // of the sounds object.
  // w, a, s, d, j, k, l
  for (var key in sounds)
    // check every possible key,
    // to find which one was pressed
    if (this.classList.contains(key))
    {
      playSound(key);
      buttonAnimation(key);
    }
}

function handleKey(event){
  // we were listening for "keydown"
  // so the paremeter is KeyboardEvent.
  // Key property was pressed on the keyboard
  playSound(event.key);
  buttonAnimation(event.key);
}

function playSound(key) {
  // if we have a filename for
  // the parameter, play the file
  if (sounds.hasOwnProperty(key))
    (new Audio(sounds[key])).play();
}

function buttonAnimation(key){
  // if we have a filename for
  // the parameter, we can do animation
  // ignore every other pressed keys
  if (sounds.hasOwnProperty(key)) {
    var activeButton = document.querySelector(".drum."+key);
    activeButton.classList.add("pressed");
    setTimeout( function(){ activeButton.classList.remove("pressed"); }, 100 );
  }
}
