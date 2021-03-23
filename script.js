// global constants
//const clueHoldTime = 1000; // time for the clue's lights/sounds
//const cluePauseTime = 333;
//const nextClueWaitTime = 1000;

// global variables

var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var guessCounter =0;
var clueHoldTime = 1000; // time for the clue's lights/sounds
var cluePauseTime = 333;
var nextClueWaitTime = 1000;
var mode = "easy";
var mistakes = 3;
var audio = document.getElementById("waa");
var volume = 1;



// function for starting the game
function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  
  // makes start hidden and stop visible
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  setMode(mode); // this sets the mistakes too and other vars
  randomize();
  playClueSequence();
}

// function for stopping the game
function stopGame(){
  gamePlaying = false;
  // makes stop hidden and start visible
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// function for randomizing the pattern
function randomize(){
  for(let i = 0; i < pattern.length; i++){
    pattern[i] = Math.floor(Math.random() * 4) + 1;
    console.log("pattern at " + i + " number: " + pattern[i]);
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 200.3,
  2: 241.2,
  3: 420,
  4: 569.2
}
function playTone(btn,len){ 
  //o.frequency.value = freqMap[btn]
  //g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  startTone(btn)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    //o.frequency.value = freqMap[btn]
    if(btn == 1){
     audio = document.getElementById("waa");
      audio.play();
      console.log("played");
  }else if (btn == 2){
    audio = document.getElementById("wario");
    audio.play();
  }else if (btn == 3){
    audio = document.getElementById("disc");
    audio.play();
  }else if (btn == 4){
    audio = document.getElementById("car");
    audio.play();
  }
    //g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
  
  
}
function stopTone(){
    //g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  audio.currentTime = 0.3;
  audio.pause();
    tonePlaying = false
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

// function for playing a single clue
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

// function for playing a seqeuence of clues
function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime;
  for(let i= 0; i <= progress; i++){
    console.log("play single clue: " + pattern[i] + " in " + delay + " ms")
    setTimeout(playSingleClue, delay, pattern[i])
    delay += clueHoldTime
    delay += cluePauseTime;
    if(mode == "easy"){
      clueHoldTime -= 25;
    }else if(mode == "medium"){
      clueHoldTime -= 10;
    }else if(mode == "hard"){
      clueHoldTime -= 8;
    }
    console.log("time " + clueHoldTime);
  }
}

// function for if the player loses the game
function loseGame(){
  stopGame();
  alert("Game Over, You Lost!!!!!");
}

// function for if the player wins the game
function winGame(){
  stopGame();
  alert("Game Over, You Won!!!!")
}

// checking each guess function
function guess(btn){
  console.log("user guess: "+ btn);
  if(!gamePlaying){
    return;
  }
  // otherwise
  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      if(progress == pattern.length -1){
        winGame();
      }else{
        progress++;
        playClueSequence();
      }
    }else{ // if the guessCoutner has not gotten there yet
      guessCounter++; // increment guess
    }
  }else{
      if(mistakes == 0){
        loseGame();
      }
      mistakes -= 1;
      console.log("mistakes: " + mistakes);
      playClueSequence();
  }
}

// function to increase volume
function increaseVolume(){
  volume += .10;
  audio.volume = volume;
  console.log("volume: " + audio.volume);
}

// function to decrease volume
function decreaseVolume(){
  if(volume != 0){
    volume -= .10;
    audio.volume = volume;
  }
  console.log("volume: " + volume);
}

// function to put on easy
function setMode(btn){
  if(btn == "easy"){
    mode = "easy";
    mistakes = 2;
    clueHoldTime = 1000;
    cluePauseTime = 333;
    nextClueWaitTime = 1000;
  }else if(btn == "medium"){
    mode = "medium";
    mistakes = 1;
    clueHoldTime = 500;
    cluePauseTime = 200;
    nextClueWaitTime = 500;
  }else if(btn == "hard"){
    mode = "hard";
    mistakes = 0;
    clueHoldTime = 250;
    cluePauseTime = 100;
    nextClueWaitTime = 250;
  }
  console.log("set " + btn+ " mode");
}



//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)