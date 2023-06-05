const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-button");
const searchResponses = document.querySelector("#search-options");

const songTitle = document.querySelector("#song-title");
const songArtist = document.querySelector("#song-artist");

// let searchResponses = [];

const apiUrl = "https://api.deezer.com";
const apiKey = "9d59965122msh0180ded4becf47bp1d5351jsn3e5337020745"

async function fetchURL(method, callBack) {
  fetch(apiUrl + `/${method}${callBack}` + `&rapidapi-key=${apiKey}`)
  .then(response=>response.json())
  .then(info=>{
      console.log(info)
      searchSongs(info)
      // getPicture(info)  WORKS!
})}

const searchSongs = (info) => {
  info.data.forEach(response => 
    //console.log(response.title + response.artist.name)
    searchResponses.innerHTML += `<option value="${response.title}"></option>` 
    )
}

const search = (searchInput) => { 
  fetchURL("search?q=", searchInput)
 // searchResponses.push(this.target)
}

searchBtn.addEventListener("click", () => {
  search(searchInput.value);   // passes city name through api function
  searchSongs(info)
})

searchInput.addEventListener("keypress", function(e) {   // makes enter key press search button
if (e.key === "Enter") {
  e.preventDefault();
  searchBtn.click();
  searchSongs(info)
}
});


// const getPicture = (info) => {   WORKS!
//   info.data.forEach(response => 
//     console.log(response.album.cover))
// }


const searchGenre = (genre) => {
  fetchURL("genre/", genre)
}



 // search("in this moment")
// searchGenre("rock")

// console.log(searchResponses)