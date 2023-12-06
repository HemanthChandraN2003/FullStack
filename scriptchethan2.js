// "use strict"; //This is used to detect if any errors are present in the javascript code, checkout the errors in console log


// /************************************ */
// //************Accordion**************//
// /************************************ */
// const item = document.querySelectorAll(".item");

// let prevAcc = 0,
//   curAcc = 0,
//   index = 0;
// item.forEach(function (ele, i1) {
//   ele.addEventListener("click", function () {
//     const icon = ele.querySelector(".fa-solid");
//     if (curAcc === 0 && prevAcc === 0) {
//       openAcc(ele, icon);
//       curAcc = 1;
//       prevAcc = 1;
//       index = i1;
//     } else if (curAcc === 1 && index === i1) {
//       closeAcc(ele, icon);
//       curAcc = 0;
//       prevAcc = 0;
//       index = 0;
//     }
//     if (prevAcc === 1 && curAcc === 1) switchAcc(ele, icon, i1, item);
//   });
// });

// function openAcc(ele, icon) {
//   ele.lastElementChild.classList.add("active");
//   ele.classList.add("active-color");
//   icon.classList.replace("fa-plus", "fa-minus");
// }
// function closeAcc(ele, icon, i1, item) {
//   ele.lastElementChild.classList.remove("active");
//   ele.classList.remove("active-color");
//   icon.classList.replace("fa-minus", "fa-plus");
// }
// function switchAcc(acc1, icon, i1, item) {
//   item.forEach(function (acc2, i2) {
//     const icon2 = acc2.querySelector(".fa-solid");
//     if (i1 !== i2) {
//       closeAcc(acc2, icon2);
//     } else if (i1 === i2) {
//       openAcc(acc1, icon);
//       curAcc = 1;
//       prevAcc = 1;
//       index = i1;
//     }
//   });
// }
// /*************************************/
// //*********Playlist Generator*********/
// /*************************************/
// const searchbar = document.querySelector(".search-bar");
// const searchbar2 = document.querySelector(".search-bar");
// const searchBtn = document.querySelector(".search-btn");
// const playlist = document.querySelector(".playlist");
// const songCover = document.querySelector(".song-cover");
// const playlistSection = document.querySelector(".playlist-section");
// let genereRelSongs = [];

// {
  

//   const genere = []; //storing the genere specific song objects for further use.
//   let musicName; //global variable used to store a songName when cliked on song division.

//   const searchGenere = function () {
//     searchBtn.addEventListener("click", function () {
//       console.log(searchbar.value);
//       playlist.innerHTML = "";
//       allSongs.forEach(function (ele) {
//         let random = Math.trunc(Math.random() * 5 + 1);

//         if (ele.genere === searchbar.value) {
//           genere.push(ele);
//           const div = `
//         <div class="song">
//           <div class="left-section">
//             <img
//               src="SongCover/${random}.jpg"
//               style="width: 50px; border-radius: 50%; display: inline-block"
//               class="song-cover"
//             />
//             <div class="song-name">${ele.name}</div>
//           </div>
//           <div class="creator">${ele.artist}</div>
//           <div class="duration">${ele.duration}</div>
//           <div class="add-playlist"><i class="fa-solid fa-plus"></i></div>
//         </div>`;
//           playlist.insertAdjacentHTML("afterbegin", div); //inserting each song division into the container
//         }
//       });
//       const song = document.querySelectorAll(".song");
//       playPause(song); //calling the play pause functionality
//     });
//   };
//   searchGenere();
//   // let passval = searchbar.value;
//   // export{passval};
//   // console.log(passval);

//   //Play and Pause functionality
//   let music,
//     prev = "none",
//     play = 0;

//   const playPause = function (song) {
//     song.forEach(function (ele) {
//       ele.addEventListener("click", function () {
//         musicName = ele.querySelector(".song-name").innerHTML;
//         if (prev != musicName) {
//           play = 0;
//           music?.pause();
//           ele.classList.add("playing");
//         }
//         if (ele.classList.contains("playing")) {
//           playMusic(musicName);
//           ele.classList.remove("playing");
//         } else {
//           pauseMusic();
//           ele.classList.add("playing");
//         }
//       });
//     });
//   };

//   function playMusic(musicName) {
//     if (play === 0) {
//       prev = musicName;
//       music = new Audio(`${genereRelSongs[0].genere}/${musicName}.mp3`);
//       music.play();
//       play++;
//     } else {
//       music.play();
//     }
//   }
//   function pauseMusic() {
//     music.pause();
//   }
// }

// // console.log(passval);
// // export {passval,passval2};



// ---------------------------------------------------------------------------------------------------------------


"use strict"; //This is used to detect if any errors are present in the javascript code, checkout the errors in console log

/************************************ */
//*************Accordion***************/
/************************************ */
const item = document.querySelectorAll(".item");
console.log(allSongs);     
let prevAcc = 0,
  curAcc = 0,
  index = 0;
item.forEach(function (ele, i1) {
  ele.addEventListener("click", function () {
    const icon = ele.querySelector(".fa-solid");
    if (curAcc === 0 && prevAcc === 0) {
      openAcc(ele, icon);
      curAcc = 1;
      prevAcc = 1;
      index = i1;
    } else if (curAcc === 1 && index === i1) {
      closeAcc(ele, icon);
      curAcc = 0;
      prevAcc = 0;
      index = 0;
    }
    if (prevAcc === 1 && curAcc === 1) switchAcc(ele, icon, i1, item);
  });
});

function openAcc(ele, icon) {
  ele.lastElementChild.classList.add("active");
  ele.classList.add("active-color");
  icon.classList.replace("fa-plus", "fa-minus");
}
function closeAcc(ele, icon, i1, item) {
  ele.lastElementChild.classList.remove("active");
  ele.classList.remove("active-color");
  icon.classList.replace("fa-minus", "fa-plus");
}
function switchAcc(acc1, icon, i1, item) {
  item.forEach(function (acc2, i2) {
    const icon2 = acc2.querySelector(".fa-solid");
    if (i1 !== i2) {
      closeAcc(acc2, icon2);
    } else if (i1 === i2) {
      openAcc(acc1, icon);
      curAcc = 1;
      prevAcc = 1;
      index = i1;
    }
  });
}

/*************************************/
//*********Playlist Generator*********/
/*************************************/
const searchbar = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".search-btn");
const playlist = document.querySelector(".playlist");
const player = document.querySelector(".player");
const playBtn = document.querySelector(".playBtn");
const pauseBtn = document.querySelector(".pauseBtn");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const playlistSection = document.querySelector(".playlist-section");
const progressBar=document.querySelector(".range");


let genereRelSongs = []; //storing the genere specific song objects for further use.
//global variable used to store a songName when cliked on song division.

const searchGenere = function () {
  searchBtn.addEventListener("click", function () {
    genereRelSongs = [];
    const genereName = searchbar.value;
    playlist.innerHTML = "";
    allSongs.forEach(function (ele) {
      
      if (ele.genere === genereName.toLowerCase()) {
        genereRelSongs.push(ele);
        console.log("hi");
        const div = `
        <div class="song">
          <div class="left-section">
            <img
              src="SongCover/${ele.iconpath}.jpg"
              style="width: 10%; border-radius: 50%; display: inline-block"
              class="song-cover"
            />
            <div class="song-name">${ele.name}</div>
          </div>
          <div class="creator">${ele.artist}</div>
          <div class="duration">${ele.duration}</div>
          <div class="add-playlist"><i class="fa-solid fa-plus"></i></div>
        </div>`;
        playlist.insertAdjacentHTML("afterbegin", div); //inserting each song division into the container
      }
    });
    const song = document.querySelectorAll(".song");
    playPause(song); //calling the play pause functionality
  });
};
searchGenere();

// ---------------------------------------------------------------------


function genrepass(parameter) {
  genereRelSongs = [];
  // const genereName = searchbar.value;
  const genereName = parameter;
  playlist.innerHTML = "";
  allSongs.forEach(function (ele) {
 
    if (ele.genere === genereName.toLowerCase()) {
      genereRelSongs.push(ele);
      console.log("hi");
      const div = `
      <div class="song">
        <div class="left-section">
          <img
            src="SongCover/${ele.iconpath}.jpg"
            style="width: 40px; border-radius: 50%; display: inline-block"
            class="song-cover"
          />
          <div class="song-name">${ele.name}</div>
        </div>
        <div class="creator">${ele.artist}</div>
        <div class="duration">${ele.duration}</div>
        <div class="add-playlist"><i class="fa-solid fa-plus"></i></div>
      </div>`;
      playlist.insertAdjacentHTML("afterbegin", div); //inserting each song division into the container
    }
  });
  const song = document.querySelectorAll(".song");
  playPause(song); //calling the play pause functionality
}

const playPause = function (song) {
  song.forEach(function (ele, i) {
    ele.addEventListener("click", function () {
      songIndex = i;
      player.classList.remove("hidden");
      playBtn.classList.add("hidden");
      pauseBtn.classList.remove("hidden");
      
      musicName = ele.querySelector(".song-name").innerHTML;
      document.querySelector(".musictitle").innerHTML=musicName;
      if (prev != musicName) {
        play = 0;
        music?.pause();
        ele.classList.add("playing");
      }
      if (ele.classList.contains("playing")) {
        playMusic(musicName);
        timeupdate();
        change();
        
        ele.classList.remove("playing");
      } else {
        pauseMusic();
        ele.classList.add("playing");
      }
    });
  });
};


function timeupdate(){
  music.addEventListener("timeupdate",()=>{
    let progress=parseInt((music.currentTime/music.duration)*100);
    progressBar.value=progress;
  });
  }
  
  function change(){
  progressBar.addEventListener("change",()=>{
    music.currentTime=(progressBar.value*music.duration)/100;
  })
  }


//Play and Pause functionality
let music,
  prev = "none",
  play = 0,
  musicName;
  songIndex;
  
  

function playMusic(musicName) {
  if (play === 0) {
    prev = musicName;

    music = new Audio(`${genereRelSongs[0].genere}/${musicName}.mp3`);
    console.log("ji");
    music.play();
    play++;
  } else {
    music.play();
  }
}


function pauseMusic() {
  music?.pause();
  showPlayBtn();
}
pauseBtn.addEventListener("click", function () {
  pauseMusic();
  document.querySelector(".musictitle").innerHTML=musicName;
  showPlayBtn();
});

playBtn.addEventListener("click", function () {
  playMusic(musicName);
  document.querySelector(".musictitle").innerHTML=musicName;
  showPauseBtn();
});

prevBtn.addEventListener("click", function () {
  songIndex = songIndex - 1;
  if (songIndex === -1) songIndex = 9;
  musicName = genereRelSongs[songIndex].name;
  document.querySelector(".musictitle").innerHTML=musicName;
  // currentName=musicName;
  play = 0;
  pauseMusic();
  playMusic(musicName);
  showPauseBtn();
});

nextBtn.addEventListener("click", function () {
  songIndex = songIndex + 1;
  if (songIndex >= 10) songIndex = 0;
  musicName = genereRelSongs[songIndex].name;
  document.querySelector(".musictitle").innerHTML=musicName;
  // currentName=musicName;
  play = 0;
  pauseMusic();
  playMusic(musicName);
  showPauseBtn();
});

function showPauseBtn() {
  playBtn.classList.add("hidden");
  pauseBtn.classList.remove("hidden");
}
function showPlayBtn() {
  pauseBtn.classList.add("hidden");
  playBtn.classList.remove("hidden");
}


