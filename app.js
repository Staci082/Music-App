


class Spotify {
    constructor() {
      this.songs = [];
      this.playlist = [];
      this.searchToggle = false;
      this.isPlaying = false;
      this.isPaused = false;
      this.currentSong = 0;
    }
  
// ADD SONG
  addSong(title, artist, genre, duration, image) {
    let obj = {
      title,
      artist,
      genre,
      duration,
      image 
    };
    return this.songs.push(obj)
  }

 //  findSongByAnything(property, userInput) {
 //    return this.songs.filter((song) =>
 //      String(song[property]).toLowerCase().includes(userInput.toLowerCase())
 //    );
 //  }

// DISPLAY PLAYLIST BUTTON
    displayPlaylist() {
      console.log(this.playlist)
      console.log("playlist here")
    }

// ADD SONG TO PLAYLIST
    addSongToPlaylist(songTitle) {
      
      let song = this.songs.find(song=>song.title === songTitle)
      this.playlist.push(song)
    }

// OPEN SEARCH BAR
    openSearchBar() {
      // using a parameter here to connect the variable "searchBar" to the eventListener
      const closeSearchIcon = `<i class="fa-solid fa-xmark fa-lg"></i>`;
      console.log("open search")
      
      searchButton.innerHTML = closeSearchIcon;    
      this.searchToggle = true;
    }

// CLOSE SEARCH BAR
    closeSearchBar() { 
      const openSearchIcon = `<i class="fa-solid fa-magnifying-glass fa-lg"></i>`;
      console.log("close search")

      searchButton.innerHTML = openSearchIcon;  
      this.searchToggle = false;
    }

// PAUSE BUTTON
    pause() {
      const playIcon = '<i class="fas fa-play fa-2xl"></i>';
      playPauseButton.innerHTML = playIcon;
      console.log("paused")
      this.isPlaying = false;
    }
  
// PLAY BUTTON
    play() {
      const pauseIcon = '<i class="fas fa-pause fa-2xl"></i>';
      playPauseButton.innerHTML = pauseIcon;
      console.log("playing")
      this.isPlaying = true;
    }

// ADD SONG INFO TO HTML
    addSongInfo() {
      
      // OBJECT PROPERTY VARIABLES
      const songTitle = document.getElementById("song-title")
      const songArtist = document.getElementById("song-artist")
      const songImage = document.getElementById("song-image")
      const songDuration = document.getElementById("time-total")

      // ADDING INFO INTO HTML CONTENT
      songTitle.innerHTML = `${this.songs[this.currentSong].title.toUpperCase()}`
      songArtist.innerHTML = `${this.songs[this.currentSong].artist}`
      songImage.src = `${this.songs[this.currentSong].image}`
      songDuration.innerHTML = `${this.songs[this.currentSong].duration}`
    }

// PREVIOUS SONG BUTTON
    previousSong() {
      console.log("previous")
      this.addSongInfo()

      let SizeOfSongs = this.songs.length-1

      if(SizeOfSongs === this.currentSong){
          this.currentSong =0;
      }else{
          this.currentSong--
      }
}

// NEXT SONG BUTTON
    nextSong() {
      console.log("next")
      this.addSongInfo()
      
      let SizeOfSongs = this.songs.length-1

      if(SizeOfSongs === this.currentSong){
          this.currentSong = 0;
      }else{
          this.currentSong++
      }
  }
}


// DONT FORGET THIS 
let app = new Spotify();


// ADD FUNCTIONS TO BUTTONS ON CLICKITY CLACK


// PLAY & PAUSE BUTTON EVENTLISTENER
playPauseButton.addEventListener('click', () => {
  app.isPlaying ? app.pause() : app.play();
});

// PLAYLIST BUTTON EVENTLISTENER
const playlistButton = document.getElementById('playlist-button');
playlistButton.addEventListener('click', () => {
  app.displayPlaylist()
});

// SEARCH BAR & BUTTON EVENTLISTENER
const searchButton = document.getElementById('search-button');
const searchBar = document.getElementById('search');

searchButton.addEventListener('click', () => {
  app.searchToggle ? app.closeSearchBar() : app.openSearchBar();
});

// PREVIOUS SONG BUTTON EVENTLISTENER
const previousButton = document.getElementById('previous-button');
previousButton.addEventListener('click', () => {
    app.previousSong()
});

// NEXT SONG BUTTON EVENTLISTENER
const nextButton = document.getElementById('next-button');
nextButton.addEventListener('click', () => {
    app.nextSong()
});



// ADDING THE SONGS
app.addSong('Toxicity','SOAD','Rock', '3:57','./images/music swirl-blue.png');
app.addSong('Byob','SOAD','Rock','4:29','./images/music swirl-orange.png');
app.addSong('My name is','Eminem','Rap','3:46','./images/music swirl-purple.png');
app.addSong('Upper Cuts','Terror Reid','Rap','4:27','./images/music swirl-blue.png');
app.addSong('Before I die','2pac','Rap','4:51','./images/music swirl-orange.png');
app.addSong('Welcome to the Internet','Bo Burnham','Rap','5:24','./images/music swirl-purple.png');


/* WORKING FUNCTIONS */

// console.log(app.songs)
// console.log(app.findSongByAnything("genre", "Genre"))
// console.log(app.playAny())
// console.log(app.play())
// console.log(app.pause())
// console.log(app.nextSong())
// console.log(app.addSongToPlaylist("Upper Cuts"))
// console.log(app.displayPlaylist())
// console.log(app.openSearchBar())
// console.log(app.closeSearchBar())


/* STILL TESTING FUNCTIONS*/ 

// console.log(app.prevousSong())