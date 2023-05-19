


class Spotify {
    constructor() {
      this.songs = [];
      this.playlist = [];
      this.isPlaying = false;
      this.isPaused = false;
      this.currentSong = 0;
    }
  
// ADD SONG
  addSong(name, artist, genre, album, lang, duration, year) {
    let obj = {
      name,
      artist,
      genre,
      album,
      lang,
      duration,
      year,
    };
   return this.songs.push(obj)
  }

 //  findSongByAnything(property, userInput) {
 //    return this.songs.filter((song) =>
 //      String(song[property]).toLowerCase().includes(userInput.toLowerCase())
 //    );
 //  }

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
  
//   playAny() {
//     let random = Math.floor(Math.random() * this.songs.length);
//     this.isPlaying
//       ? console.log(
//           `${this.songs[random].name} - ${
//             this.songs[random].artist
//           } is paused...`
//         )
//       : console.log(
//           `${this.songs[random].name} - ${
//             this.songs[random].artist
//           } is playing now...` 
//         );
//   }

  previousSong() {
    console.log("previous")
  }

  nextSong() {
  console.log("next")
  }

}

let app = new Spotify();


// BUTTONS

const playPauseButton = document.getElementById('playPauseButton');
const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');

playPauseButton.addEventListener('click', () => {
  if (app.isPlaying) {
    app.pause();
  } else {
    app.play();
  }
});

previousButton.addEventListener('click', () => {
    app.previousSong()
});
nextButton.addEventListener('click', () => {
    app.nextSong()
});


  
  

  
  app.addSong('Toxicity','SOAD','Rock','Toxicity','EN','10','2004');
  app.addSong('Byob','SOAD','Rock','Unknown','EN','7','2005');
  app.addSong('My name is','Eminem','Rap','Unknown','EN','5','2005');
  app.addSong('Before I die','2pac','Rap','Unknown','EN','2','2005');
  app.addSong('Welcome to the Internet','Bo Burnham','Rap','Unknown','EN','12','2005');
  app.addSong('Upper Cuts','Terror Reid','Rap','Unknown','EN','3','2005');
  app.addSong('Upper Cuts1','Terror Reid','Rap','Unknown','EN','3','2005');

// console.log(app.songs)
// console.log(app.findSongByAnything("genre", "Genre"))
// console.log(app.playAny())
// console.log(app.play())
// console.log(app.pause())
// console.log(app.previousSong())
// console.log(app.nextSong())
