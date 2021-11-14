const container= document.querySelector(".container"),
musicImg = container.querySelector(".img-area img"),
musicName =container.querySelector(".song-details .name"),
musicArtist = container.querySelector(".song-details .artist"),
mainAudio = container.querySelector("#main-audio"),
playPauseBtn = container.querySelector(".play-pause"),
prevBtn = container.querySelector("#prev"),
nextBtn = container.querySelector("#next"),
progressBar = container.querySelector(".progress-bar");

let musicIndex = 2;

window.addEventListener("load" , () =>{
    loadMusic(musicIndex);
})



function loadMusic(indexNum){
    musicName.innerText = allMusic[indexNum - 1].name;
    musicArtist.innerText = allMusic[indexNum - 1].artist;
    musicImg.src = `image/${allMusic[indexNum-1].img}.jpg`;
    mainAudio.src = `song/${allMusic[indexNum -1].src}.mp3`;

}

function playMusic(){
    container.classList.add("paused");
    playPauseBtn.querySelector("i").innerText="pause";
    mainAudio.play()
}

function pauseMusic(){
    container.classList.remove("paused");
    playPauseBtn.querySelector("i").innerText="play_arrow"
    mainAudio.pause();
}


function prevMusic(){
    musicIndex--;
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex
    loadMusic(musicIndex);
    playMusic();

}

function nextMusic(){
    musicIndex++;
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex
    loadMusic(musicIndex);
    playMusic();

}




playPauseBtn.addEventListener("click" , ()=>{
    const musicPlay =container.classList.contains("paused");
    musicPlay ? pauseMusic() : playMusic();
})

nextBtn.addEventListener("click", ()=>{
    nextMusic();
  });

prevBtn.addEventListener("click", ()=>{
    prevMusic();
  });

mainAudio.addEventListener("timeupdate", (e) =>{

    console.log(e.currentTime);

})
    