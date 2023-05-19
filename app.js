


class Spotify {
    constructor() {
      this.songs = [];
      this.users = [];
      this.isPlaying = false;
      this.isPaused = false;
      this.currentSong = 0;
    }
  
  // Add a Song
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
  
  findSongByAnything(property, userInput) {
    return this.songs.filter((song) =>
      String(song[property]).toLowerCase().includes(userInput.toLowerCase())
    );
  }
  
  playAny() {
    let random = Math.floor(Math.random() * this.songs.length);
    this.isPlaying
      ? console.log(
          `${this.songs[random].name} - ${
            this.songs[random].artist
          } is paused...`
        )
      : console.log(
          `${this.songs[random].name} - ${
            this.songs[random].artist
          } is playing now...` 
        );
  }

  // Pause player
  pause() {
    this.isPlaying = false;
  }

  // Play player
  play() {
    this.isPlaying = true;
  }
}
  

  
  
  let app = new Spotify();
  
  app.addSong('Toxicity','SOAD','Rock','Toxicity','EN','10','2004');
  app.addSong('Byob','SOAD','Rock','Unknown','EN','7','2005');
  app.addSong('My name is','Eminem','Rap','Unknown','EN','5','2005');
  app.addSong('Before I die','2pac','Rap','Unknown','EN','2','2005');
  app.addSong('Welcome to the Internet','Bo Burnham','Rap','Unknown','EN','12','2005');
  app.addSong('Upper Cuts','Terror Reid','Rap','Unknown','EN','3','2005');
  app.addSong('Upper Cuts1','Terror Reid','Rap','Unknown','EN','3','2005');

// console.log(app.songs)
// console.log(app.findSongByAnything("genre", "Genre"))

console.log(app.playAny())
// console.log(app.pause())
