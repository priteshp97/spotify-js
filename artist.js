const songs = document.querySelectorAll(".popular-inner-song");
const number = document.querySelectorAll(".popular-inner-number");

for (let i = 1; i <= songs.length; i++) {
  songs[i - 1].addEventListener("mouseenter", function () {
    number[i - 1].innerHTML = `<i class="fas fa-play"></i>`;
  });
  songs[i - 1].addEventListener("mouseleave", function () {
    number[i - 1].innerHTML = `<p class="popular-inner-number">${i}</p>`;
  });
}

// play/pause animation
function myFunction(x) {
  x.classList.toggle("fa-stop-circle");
}

// audio track
var aud = document.getElementById("ASong").children[0];
var isPlaying = false;
aud.pause();

function playPause() {
  if (isPlaying) {
    aud.pause();
  } else {
    aud.play();
  }
  isPlaying = !isPlaying;
}
//login credentials
function loginCredentialCheck() {
  usernameCheck();
}

function usernameCheck() {
  var email = "bpm@gmail.com";
  var user = "bpm";
  let userMailNode = document.getElementById("user/email");
  if (userMailNode.value == email || userMailNode.value == user) {
    passwordCheck();
  } else {
    userMailNode.style.borderColor = "red";
    userMailNode.style.color = "red";
  }
}

function passwordCheck() {
  var password = "spotify";
  let passwordFieldNode = document.getElementById("passwordField");

  if (passwordFieldNode.value == password) {
    window.location.href = "testinganimation.html";
  } else if (passwordFieldNode.value == null) {
    alert("please enter password");
  } else {
    passwordFieldNode.style.borderColor = "Red";
    passwordFieldNode.style.color = "Red";
  }
}
//MUTE
function muteFuntion() {
  var x = document.getElementById("ASong").children[0];
  x.volume = 0.1;
}
// VOlUME
function outputUpdate(vol) {
  document.querySelector("#volume").value = vol;
  var song = document.getElementById("ASong").children[0];
  song.volume = vol / 100.0;
}

// populate cards

const albumCard = document.getElementById("album-card");
let artistName = ["queen", "drake", "24kGoldn"];

fetch(
  `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName[1]}`
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.forEach(element.album));

    let albums = (document.getElementById("album-card").innerHTML += `
    
    <div
    class="col pr-0 d-flex justify-content-space-between"
    id="album-card"
  >
    <div class="carbon-example flex-wrapper" style="position: relative">
      <img
        src="${data.album}"
        style="
          position: absolute;
          left: 0px;
          top: 0px;
          height: 70px;
          object-fit: cover;
          border-top-left-radius: 6px;
          border-bottom-left-radius: 6px;
        "
        alt="example design logo"
      />
      <div
        class="inner-wrapper"
        style="position: static; padding-left: 74px"
      >
        <p>Liked Songs</p>
      </div>
    </div>
  </div>`);
  });
