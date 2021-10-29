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
  .then((response) => response.json())
  .then((body) => {
    let resp = body.data;

    resp.forEach((element) => {
      let albums = (document.getElementById("album-card").innerHTML += `
    
    <div
    class="col pr-0 d-flex justify-content-space-between"
    id="album-card"
  >
    <div class="carbon-example flex-wrapper" style="position: relative">
     
    <img
        src="${element.album.cover_small}"
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
      <a href="album.html" <p>${element.album.title}</p> </a>
      </div>
    </div>
  </div>`);
    });
  });

// album js

let albumid = 69319552;

fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${albumid}`)
  .then((response) => response.json())
  .then((body) => {
    let artist = (document.getElementById(
      "album"
    ).innerHTML += `<div class="wrap">
    <div class="album-container">
      <div class="album-img-container">
        <img src="${body.cover}" alt="album cover" class="img" />
      </div>

      <div class="album-content">
        <h3 class="album">ALBUM</h3>

        <h1 class="title">${body.title}</h1>

        <h3 class="detail">
          <img src="assets/drake.jpg " alt="" class="small-artist-img" />
          <a href="./artist.html" class="album-link">${body.artist.name}</a>
          <span class="detail-span">- ${body.release_date.substring(0, 4)} - ${
      body.tracks.data.length
    } songs, 1 hr 26 min</span>
        </h3>
      </div>
    </div>

    <div class="song-icons">
      <i class="fas fa-play-circle album-icon-play"></i>

      <i class="far fa-heart album-icon"></i>
      <i class="fas fa-ellipsis-h album-icon"></i>
    </div>
  </div>`);

    let resp = body.tracks.data;
    console.log(resp);
    resp.forEach((song) => {
      console.log(song);
      let container = (document.getElementById("song-list").innerHTML += `
    <div class="song">
<div class="left-number">
  <p>${resp.indexOf(song) + 1}</p>
</div>
<div class="left-title">
  <p>${song.title}<br /><span class="title-span">Drake</span></p>
</div>
<div class="right-time">
  <p>${song.duration}</p>
</div>
</div>`);
    });
  });

// artist page

fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/246791")
  .then((response) => {
    return response.json();
  })
  .then((body) => {
    console.log(body);
    let header = (document.getElementById("header").innerHTML += `
    <div class="wrapper header-container">
        <div class="header-verified">
          <i class="fas fa-check-circle header-verified-icon"></i>
          <p>Verified Artist</p>
        </div>
        <div class="header-artist">
          <p>${body.name}</p>
        </div>
        <div class="header-listeners">
          <p>62,010,228 monthly listeners</p>
        </div>
      </div>`);
    fetch(`${body.tracklist}`)
      .then((response) => response.json())
      .then((body) => {
        let resp = body.data;
        console.log(resp);
        resp.forEach((element) => {
          let pic = element.contributors[0].picture;

          let popular = (document.getElementById("popular-songs").innerHTML += `
            <div class="popular-inner-song">
                    <p class="popular-inner-number">${
                      resp.indexOf(element) + 1
                    }</p>
                    <img
                      src="${pic}"
                      alt=""
                      class="popular-inner-img"
                    />
                    <p class="popular-inner-song-name">
                      ${element.title}
                    </p>
                    <p class="popular-inner-listens">149,925,606</p>
                    <p class="popular-inner-time">${element.duration}</p>
                  </div>`);
        });
      });
  });
