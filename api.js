const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-button");

const apiUrl = "https://deezerdevs-deezer.p.rapidapi.com/search?q=";
const apiKey = "9d59965122msh0180ded4becf47bp1d5351jsn3e5337020745"

// q=${searchInput}

async function search(searchInput) { 
  fetch(apiUrl + searchInput + `&rapidapi-key=${apiKey}`)
  .then(res=>res.json())
  .then(data=>{
      console.log(data)
    // data.news.forEach(news=>{
       //  console.log(news.image)
    })
}

search("halo")

