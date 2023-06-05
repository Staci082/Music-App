const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-button");
const img = document.querySelector("#song-image-container");

const songTitle = document.querySelector("#song-title");
const songArtist = document.querySelector("#song-artist");

const apiUrl = "https://api.deezer.com";
const apiKey = "9d59965122msh0180ded4becf47bp1d5351jsn3e5337020745"

async function fetchURL(method, callBack) {
  fetch(apiUrl + `/${method}${callBack}` + `&rapidapi-key=${apiKey}`)
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
})}

function search(searchInput) { 
  fetchURL("search?q=", searchInput)
}

function searchGenre(genre) {
  fetchURL("genre/", genre)
  img.innerHTML = `${data.picture}`
}

// search("halo")
searchGenre("rock")
