
function Jukebox(){
    var music = this;
    music.audio = document.createElement('audio');
    music.songTitle = document.getElementById('songTitle');
    music.nextSongTitle = document.getElementById('nextSongTitle');
    var next = document.getElementById('next');
    var prev = document.getElementById('prev');
    var playPause = document.getElementById('playPause');
    var stop = document.getElementById('stop'); ///////
    music.currentSong = 0;
    music.songs = ["Beethoven's 12th Symphony.mp3",
                   "Boccherini's Concerto in D.mp3",
                   "Nocturne by Tchaikovsky.mp3"]
    music.loadSong = loadSong;
    function loadSong(){
    music.audio.src = "songs/" + music.songs[music.currentSong];
    music.songTitle.textContent = (music.currentSong + 1) + ". " + music.songs[music.currentSong]; 
    music.nextSongTitle.innerHTML = "<b>Next Song: </b>" + music.songs[(music.currentSong + 1) % +(music.songs.length)];
    music.audio.play();
    }
    playPause.addEventListener("click",function playPause(e) {
            if(music.audio.paused) {
                music.audio.play();
                e.target.src = "images/pause.png";
            }else{
                music.audio.pause();
                e.target.src = "images/play.png";
            }
        } );
    next.addEventListener("click",function(e) {
        ++music.currentSong;
        music.currentSong = (music.currentSong > 2) ? music.songs.length - 3 : music.currentSong;
        loadSong();
    });

    prev.addEventListener("click",function(e) {
        music.currentSong--;
        music.currentSong = (music.currentSong < 0) ? music.songs.length - 1 : music.currentSong;
        loadSong();
    });

    stop.addEventListener("click",function(e) {  //
        music.audio.pause();
        music.audio.load();
        music.audio.src = ""; 
        music.audio.src = "songs/" + music.songs[music.currentSong];                  
    });                                           //
}

var myJukebox = new Jukebox()

window.onload = myJukebox.loadSong;

