// console.log("hs");

let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let masterSongName = document.getElementById("masterSongName");
let songNam = Array.from(document.getElementsByClassName("songName"));

let songs = [
  {
    songName: "Ajab Si",
    filePath: "1.mp3",
    coverPath: "cover1.jpg",
    duration: "4:06",
  },
  {
    songName: "Dhun Lagi",
    filePath: "2.mp3",
    coverPath: "cover1.jpg",
    duration: "5:07",
  },
  {
    songName: "Haaye Oye",
    filePath: "3.mp3",
    coverPath: "cover1.jpg",
    duration: "3:20",
  },
  {
    songName: "Hanuman Chalisa",
    filePath: "4.mp3",
    coverPath: "cover1.jpg",
    duration: "9:48",
  },
  {
    songName: "Jab Koi Bat Bigad Jayee",
    filePath: "5.mp3",
    coverPath: "cover1.jpg",
    duration: "8:00",
  },
  {
    songName: "Phir Aur Kya Chahiye",
    filePath: "6.mp3",
    coverPath: "cover1.jpg",
    duration: "4:26",
  },
  {
    songName: "Saibo",
    filePath: "7.mp3",
    coverPath: "cover1.jpg",
    duration: "2:16",
  },
];

songItems.forEach((Element, i) => {
  // console.log(Element,i);
  Element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  Element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
  Element.getElementsByClassName("time")[0].innerText = songs[i].duration;
});

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  } else {
    audioElement.pause();
    gif.style.opacity = 0;
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
  }
});

audioElement.addEventListener("timeupdate", () => {
  //   console.log("time");
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  //   console.log(progress);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songPlay")).forEach((Element) => {
    Element.classList.remove("fa-pause-circle");
    Element.classList.add("fa-play-circle");
  });
};

Array.from(document.getElementsByClassName("songPlay")).forEach((Element) => {
  Element.addEventListener("click", (e) => {
    // console.log(e.target);
    if (audioElement.paused || audioElement.currentTime <= 0) {
      makeAllPlays();
      // console.log(songIndex)
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    } else {
      audioElement.pause();
      gif.style.opacity = 0;
      e.target.classList.remove("fa-pause-circle");
      e.target.classList.add("fa-play-circle");
      masterPlay.classList.remove("fa-pause-circle");
      masterPlay.classList.add("fa-play-circle");
    }
  });
});

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 6) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

