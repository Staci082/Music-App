
// OBJECT PROPERTY VARIABLES
const songTitle = document.getElementById("song-title")
const songArtist = document.getElementById("song-artist")
const songImage = document.getElementById("song-image")
const songDuration = document.getElementById("time-total")

// BUTTON VARIABLES
const playlistButton = document.getElementById('playlist-button');
const searchButton = document.getElementById('search-button');
const playPauseButton = document.getElementById('playPauseButton');
const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');


class Spotify {
    constructor() {
      this.songs = [];
      this.playlist = [];
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

// SEARCH BUTTON
    search() {
      console.log("search")
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
      songTitle.innerHTML = `${this.songs[this.currentSong].title.toUpperCase()}`
      songArtist.innerHTML = `${this.songs[this.currentSong].artist.toUpperCase()}`
      songImage.src = `${this.songs[this.currentSong].image}`
      songDuration.innerHTML = `${this.songs[this.currentSong].duration}`
    }

// PREVIOUS SONG BUTTON
//     previousSong() {
//       console.log("previous")
//       this.addSongInfo()
// 
//       let SizeOfSongs = this.songs.length-1
// 
//       if(SizeOfSongs === this.currentSong){
//           this.currentSong =0;
//       }else{
//           this.currentSong--
//       }
//     }

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


// BUTTONS

playPauseButton.addEventListener('click', () => {
  app.isPlaying ? app.pause() : app.play();
});

playlistButton.addEventListener('click', () => {
  app.displayPlaylist()
});

searchButton.addEventListener('click', () => {
  app.search()
});

previousButton.addEventListener('click', () => {
    app.previousSong()
});

nextButton.addEventListener('click', () => {
    app.nextSong()
});



app.addSong('Toxicity','SOAD','Rock', '3.57','./images/music swirl-blue.png');
app.addSong('Byob','SOAD','Rock','4.29','./images/music swirl-orange.png');
app.addSong('My name is','Eminem','Rap','3.46','./images/music swirl-purple.png');
app.addSong('Upper Cuts','Terror Reid','Rap','4.27','./images/music swirl-blue.png');
app.addSong('Before I die','2pac','Rap','4.51','./images/music swirl-orange.png');
app.addSong('Welcome to the Internet','Bo Burnham','Rap','5.24','./images/music swirl-purple.png');


/* WORKING FUNCTIONS */

// console.log(app.songs)
// console.log(app.findSongByAnything("genre", "Genre"))
// console.log(app.playAny())
// console.log(app.play())
// console.log(app.pause())
// console.log(app.nextSong())
// console.log(app.addSongToPlaylist("Upper Cuts"))
// console.log(app.displayPlaylist())



/* STILL TESTING FUNCTIONS*/ 

// console.log(app.prevousSong())