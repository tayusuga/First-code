console.log("start audio.js");

function play(num){
  // audio 要素を探す
  var audio;
  audio = document.querySelectorAll("audio");
  // 探した audio 要素に対して操作する
  audio[num].play();
}

function pause(num){
  // audio 要素を探す
  var audio;
  audio = document.querySelectorAll("audio");
  // 探した audio 要素に対して操作する
  audio[num].pause();
}

function skip10sec(num){
  console.log("skip 10sec");
  var audio;
  audio = document.querySelectorAll("audio");
  audio[num].currentTime
    = audio[num].currentTime + 10;
}

function rewind10sec(num){
  var audio;
  audio = document.querySelectorAll("audio");
  audio[num].currentTime
    = audio[num].currentTime - 10;
}

function stop(num){
  var audio;
  audio = document.querySelectorAll("audio");
  audio[num].pause();
  audio[num].currentTime = 0;
}

function mute(num){
  var audio;
  audio = document.querySelectorAll("audio");
  audio[num].muted = true;
}

function setVolume(audio, value){
  if(value < 0 || 1 < value){
    return;
  }
  audio.volume = value;
}

function volumeDown(num){
  var audio;
  audio = document.querySelectorAll("audio");
  setVolume(audio[num], audio[num].volume - 0.1);
}

function volumeUp(num){
  var audio;
  audio = document.querySelectorAll("audio");
  setVolume(audio[num], audio[num].volume + 0.1);
}

function bindClickHandler(selector, handler){
  const elm = document.querySelector(selector);
  elm.addEventListener("click", handler);
}

bindClickHandler("#play",function () {play(0)} );
bindClickHandler("#pause",function (){pause(0)});
bindClickHandler("#skip10sec",function (){skip10sec(0)});
bindClickHandler("#rewind10sec", function (){rewind10sec(0)});
bindClickHandler("#stop",function () {stop(0)});
bindClickHandler("#mute",function () {mute(0)});
bindClickHandler("#volumeDown", function (){volumeDown(0)});
bindClickHandler("#volumeUp",function (){volumeUp(0)});

bindClickHandler("#play2", function (){play(1)});
bindClickHandler("#pause2", function (){pause(1)});
bindClickHandler("#skip10sec2", function (){skip10sec(1)});
bindClickHandler("#rewind10sec2", function (){rewind10sec(1)});
bindClickHandler("#stop2", function (){stop(1)});
bindClickHandler("#mute2",function (){mute(1)});
bindClickHandler("#volumeDown2",function (){volumeDown(1)});
bindClickHandler("#volumeUp2", function (){volumeUp(1)});
