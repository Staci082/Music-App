const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-button");

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
      getSongs(info)
      // getPicture(info)  WORKS!
})}

const getSongs = (info) => {
  info.data.forEach(response => 
    console.log(response.title + response.artist.name))
}

const search = (searchInput) => { 
  fetchURL("search?q=", searchInput)
 // searchResponses.push(this.target)
}


// const getPicture = (info) => {   WORKS!
//   info.data.forEach(response => 
//     console.log(response.album.cover))
// }


const searchGenre = (genre) => {
  fetchURL("genre/", genre)
}



  search("in this moment")
// searchGenre("rock")

// console.log(searchResponses)