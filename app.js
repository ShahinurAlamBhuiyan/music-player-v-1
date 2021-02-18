const music = document.querySelector('audio');
const play = document.getElementById('play');
const img = document.querySelector('img');
const title = document.getElementById('title');
const artist= document.getElementById('artist');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const allMusic = [
    {
        name : "song-1",
        title : "aniket prantor",
        artist : "by artcell"
    },
    {
        name : "song-2",
        title : "abar hashimukh",
        artist : "by shironamhin"
    },
    {
        name : "song-3",
        title : "shey amare",
        artist : "by ashes"
    },
    {
        name : "song-4",
        title : "Nijer jonno",
        artist : "by ashes"
    },
    {
        name : "song-5",
        title : "charpoka",
        artist : "by ashes"
    },
    {
        name : "song-6",
        title : "bhindeshi tara",
        artist : "by ashes"
    }
]


let isPlaying = false;

const playMusic = ()=>{
    music.play();
    isPlaying = true;
    play.classList.replace('fa-play', 'fa-pause');
    img.classList.add('anime')
};

const pauseMusic = ()=>{
    music.pause();
    isPlaying = false;
    play.classList.replace('fa-pause', 'fa-play');
    img.classList.remove('anime')
};

play.addEventListener('click', ()=>{
    isPlaying ? pauseMusic() : playMusic();
});

const loadSong = (allMusic) =>{
    title.textContent = allMusic.title;
    artist.textContent = allMusic.artist;
    music.src = `musics/${allMusic.name}.mp3`;
    img.src = `images/${allMusic.name}.jpg`;

}
musicIndex = 0;
const nextSong = () =>{
    musicIndex = (musicIndex + 1) % allMusic.length;
    loadSong(allMusic[musicIndex]) ;
    playMusic()
}
const prevSong = () =>{
    musicIndex = (musicIndex + 1 + allMusic.length) % allMusic.length;
    loadSong(allMusic[musicIndex]) ;
    playMusic()
}

next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);