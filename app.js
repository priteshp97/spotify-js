const number = document.querySelectorAll(".left-number");
const song = document.querySelectorAll(".song");

for (let i = 1; i < number.length; i++) {
  song[i].addEventListener("mouseenter", function () {
    number[i].innerHTML = `<i class="fas fa-play"></i>`;
  });
  song[i].addEventListener("mouseleave", function () {
    number[i].innerHTML = `<p>${i}</p>`;
  });
}


