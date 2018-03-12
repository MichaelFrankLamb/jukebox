window.onload = function() {
    var myAudio = document.getElementById('music');
    var myControl = document.getElementById('control');

    function changeStatus() {
        if (myAudio.paused == true) {
            myAudio.play();
            myControl.innerHTML = "pause";
        }   else {
            myAudio.pause();
            myControl.innerHTML = "play";
        }
    }

    myControl.addEventListener("click", function() {
        changeStatus();
    }, false);
}

var source = document.getElementById('currentSong');

var songsArr = [
{
    id = 0,
    url = "songs/beethoven-12-variation.mp3"
},
{
    id = 1,
    url = "songs/boccherini-concerto.mp3"
},
{
    id = 2,
    url = "songs/tchaikovsky-nocturne.mp3"
}
];

