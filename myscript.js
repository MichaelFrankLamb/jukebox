// var songs = ["beethoven-12-variation.mp3",
//             "boccherini-concerto.mp3",
//             "tchaikovsky-nocturne.mp3"];

//var songTitle = document.getElementById('songTitle');
//var nextSongTitle = document.getElementById('nextSongTitle');
//var audio = document.createElement('audio')

//var song = new Audio();

function Jukebox(audio, songTitle, nextSongTitle, currentSong, songs){
    this.audio = document.createElement('audio');
    this.songTitle = document.getElementById('songTitle');
    this.nextSongTitle = document.getElementById('nextSongTitle');
    this.currentSong = 0;
    this.songs = ["beethoven-12-variation.mp3",
                "boccherini-concerto.mp3",
                "tchaikovsky-nocturne.mp3"]
};
Jukebox.prototype.loadSong = function(){
    this.audio.src = "songs/" + this.songs[this.currentSong];
    this.songTitle.textContent = (this.currentSong + 1) + ". " + this.songs[this.currentSong]; 
    this.nextSongTitle.innerHTML = "<b>Next Song: </b>" + this.songs[this.currentSong + 1 % this.songs.length];
    return this.audio.play();
}
Jukebox.prototype.playOrPauseSong = function(img) {
        //    audio.playbackRate = 1;
            if(this.audio.paused) {
                this.audio.play();
                img.src = "images/pause.png";
            }else{
                this.audio.pause();
                img.src = "images/play.png";
            }
        };
Jukebox.prototype.next = function() {
        this.currentSong = this.currentSong + 1 % this.songs.length;
        loadSong();
        },
Jukebox.prototype.previous = function() {
        this.currentSong--;
        this.currentSong = (this.currentSong < 0) ? this.songs.length - 1 : this.currentSong;
        loadSong();
    }

    
//var currentSong = 0;

window.onload = Jukebox.loadSong;

//function loadSong() {
//    audio.src = "songs/" + songs[currentSong];
//    songTitle.textContent = (currentSong + 1) + ". " + songs[currentSong]; 
//     nextSongTitle.innerHTML = "<b>Next Song: </b>" + songs[currentSong + 1 % songs.length];
//     audio.play();
// }



// function playOrPauseSong (img) {
// //    audio.playbackRate = 1;
//     if(audio.paused) {
//         audio.play();
//         img.src = "images/pause.png";
//     }else{
//         audio.pause();
//         img.src = "images/play.png";
//     }
// }


// function next() {
//     currentSong = currentSong + 1 % songs.length;
//     loadSong();
// }

// function previous() {
//     currentSong--;
//     currentSong = (currentSong < 0) ? songs.length - 1 : currentSong;
//     loadSong();
// }
