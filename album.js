let albumid = 69319552;

fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${albumid}`)
  .then((response) => response.json())
  .then((body) => {
    console.log(body);
  });

`<!-- album -->

    <section id="album">
      <div class="wrap">
        <div class="album-container">
          <div class="album-img-container">
            <img src="./assets/album.png" alt="album cover" class="img" />
          </div>

          <div class="album-content">
            <h3 class="album">ALBUM</h3>

            <h1 class="title">Certified Lover Boy</h1>

            <h3 class="detail">
              <img src="assets/drake.jpg " alt="" class="small-artist-img" />
              <a href="./artist.html" class="album-link">Drake</a>
              <span class="detail-span">- 2021 - 21 songs, 1 hr 26 min</span>
            </h3>
          </div>
        </div>

        <div class="song-icons">
          <i class="fas fa-play-circle album-icon-play"></i>

          <i class="far fa-heart album-icon"></i>
          <i class="fas fa-ellipsis-h album-icon"></i>
        </div>
      </div>
    </section>

    <section class="song-list">
      <div class="wrap">
        <div class="grid-container">
          <!-- song -->
          <div class="song song-first">
            <div class="left-number">
              <p class="column">#</p>
            </div>
            <div class="left-title">
              <p class="column">TITLE</p>
            </div>
            <div class="right-time">
              <p class="column">Time</p>
            </div>
          </div>
          <!-- end of song -->
          <hr />
          <!-- song -->
          <div class="song">
            <div class="left-number">
              <p>1</p>
            </div>
            <div class="left-title">
              <p>Champagne Poetry<br /><span class="title-span">Drake</span></p>
            </div>
            <div class="right-time">
              <p>5:36</p>
            </div>
          </div>
          <!-- end of song -->

          <!-- song -->
          <div class="song">
            <div class="left-number">
              <p>2</p>
            </div>
            <div class="left-title">
              <p>Papi's Home<br /><span class="title-span">Drake</span></p>
            </div>
            <div class="right-time">
              <p>2:58</p>
            </div>
          </div>
          <!-- end of song -->

          <!-- song -->
          <div class="song">
            <div class="left-number">
              <p>3</p>
            </div>
            <div class="left-title">
              <p>
                Girls Want Girls (with Lil Baby) <br /><span class="title-span"
                  >Drake, Lil Baby</span
                >
              </p>
            </div>
            <div class="right-time">
              <p>3:41</p>
            </div>
          </div>
          <!-- end of song -->

          <!-- song -->
          <div class="song">
            <div class="left-number">
              <p>4</p>
            </div>
            <div class="left-title">
              <p>
                In The Bible (with Lil Durk & Giveon) <br /><span
                  class="title-span"
                  >Drake, Lil Durk, Giveon</span
                >
              </p>
            </div>
            <div class="right-time">
              <p>4:56</p>
            </div>
          </div>
          <!-- end of song -->

          <!-- song -->
          <div class="song">
            <div class="left-number">
              <p>5</p>
            </div>
            <div class="left-title">
              <p>
                Love All (with JAY-Z) <br /><span class="title-span"
                  >Drake, JAY-Z</span
                >
              </p>
            </div>
            <div class="right-time">
              <p>3:48</p>
            </div>
          </div>
          <!-- end of song -->

          <!-- song -->
          <div class="song">
            <div class="left-number">
              <p>6</p>
            </div>
            <div class="left-title">
              <p>
                Fair Trade (with Travis Scott)<br /><span class="title-span"
                  >Drake, Travis Scott</span
                >
              </p>
            </div>
            <div class="right-time">
              <p>4:51</p>
            </div>
          </div>
          <!-- end of song -->

          <!-- song -->
          <div class="song">
            <div class="left-number">
              <p>7</p>
            </div>
            <div class="left-title">
              <p>
                Way 2 Sexy (with Future & Young Thug)<br /><span
                  class="title-span"
                  >Drake, Future, Young Thug</span
                >
              </p>
            </div>
            <div class="right-time">
              <p>4:17</p>
            </div>
          </div>
          <!-- end of song -->

          <!-- song -->
          <div class="song">
            <div class="left-number">
              <p>8</p>
            </div>
            <div class="left-title">
              <p>TSU<br /><span class="title-span">Drake</span></p>
            </div>
            <div class="right-time">
              <p>5:08</p>
            </div>
          </div>
          <!-- end of song -->

          <!-- song -->
          <div class="song">
            <div class="left-number">
              <p>9</p>
            </div>
            <div class="left-title">
              <p>N 2 Deep<br /><span class="title-span">Drake, Future</span></p>
            </div>
            <div class="right-time">
              <p>4:33</p>
            </div>
          </div>
          <!-- end of song -->

          <!-- song -->
          <div class="song">
            <div class="left-number">
              <p>10</p>
            </div>
            <div class="left-title">
              <p>Pipe Down<br /><span class="title-span">Drake</span></p>
            </div>
            <div class="right-time">
              <p>3:25</p>
            </div>
          </div>
          <!-- end of song -->

          <!-- song -->
          <div class="song">
            <div class="left-number">
              <p>11</p>
            </div>
            <div class="left-title">
              <p>
                Yebba's Heartbreak<br /><span class="title-span"
                  >Drake, Yebba</span
                >
              </p>
            </div>
            <div class="right-time">
              <p>2:13</p>
            </div>
          </div>
          <!-- end of song -->

          <!-- song -->
          <div class="song">
            <div class="left-number">
              <p>12</p>
            </div>
            <div class="left-title">
              <p>
                No Friends In The Industry<br /><span class="title-span"
                  >Drake</span
                >
              </p>
            </div>
            <div class="right-time">
              <p>3:24</p>
            </div>
          </div>
          <!-- end of song -->

          <!-- song -->
          <div class="song">
            <div class="left-number">
              <p>13</p>
            </div>
            <div class="left-title">
              <p>
                Knife Talk (with 21 Savage ft. Project Pat)<br /><span
                  class="title-span"
                  >Drake, 21 Savage, Project Pat</span
                >
              </p>
            </div>
            <div class="right-time">
              <p>4:02</p>
            </div>
          </div>
          <!-- end of song -->
        </div>
      </div>
    </section>
    <!-- end of album -->`;
