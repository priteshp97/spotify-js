let input = document.getElementById("search");
let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function (e) {
  console.log(input.value);
  let query = input.value;
  let selected = [];
  fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
    .then((res) => res.json())
    .then((body) => {
      selected.push(body.data);
      console.log(selected);
    });
});
