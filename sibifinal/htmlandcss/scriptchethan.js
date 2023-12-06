"use strict"; //This is used to detect if any errors are present in the javascript code, checkout the errors in console log

/************************************ */
//************Accordion**************/
/************************************ */
const item = document.querySelectorAll(".item");

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
const searchbar2 = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".search-btn");
const playlist = document.querySelector(".playlist");
const songCover = document.querySelector(".song-cover");
const playlistSection = document.querySelector(".playlist-section");


{const allSongs = [
  //all genere songs are stored inside an array as objects.
  {
    name: "Joints in a Spaceship",
    genere: "lofi beats",
    artist: "Tillus",
    duration: "5:40",
  },
  {
    name: "After Dark",
    genere: "lofi beats",
    artist: "Omikron",
    duration: "5:46",
  },
  {
    name: "CareFree",
    genere: "lofi beats",
    artist: "Grey Killer",
    duration: "3:28",
  },
  {
    name: "Dont Think 'bout It",
    genere: "lofi beats",
    artist: "Black Loops",
    duration: "6:37",
  },
  {
    name: "Everytime",
    genere: "lofi beats",
    artist: "Jason Hersco",
    duration: "5:08",
  },
  {
    name: "Faded",
    genere: "lofi beats",
    artist: "Xix99",
    duration: "3:41",
  },
  {
    name: "Floating",
    genere: "lofi beats",
    artist: "Klur",
    duration: "4:12",
  },
  {
    name: "HyperSpace",
    genere: "lofi beats",
    artist: "Bleu Clair",
    duration: "3:24",
  },
  {
    name: "Lost In Time",
    genere: "lofi beats",
    artist: "Kolter",
    duration: "7:42",
  },
  {
    name: "Morning Groove",
    genere: "lofi beats",
    artist: "Upper Class",
    duration: "3:49",
  },
  {
    name: "Sunshine",
    genere: "sunny beats",
    artist: "Camden Clown",
    duration: "3:03",
  },
  {
    name: "A Costa",
    genere: "sunny beats",
    artist: "Zmeyev",
    duration: "2:12",
  },
  {
    name: "Morning Stretch",
    genere: "sunny beats",
    artist: "Timothy Infinite",
    duration: "2:24",
  },
  {
    name: "Walking to Adachi",
    genere: "sunny beats",
    artist: "Nathan Kawanishi",
    duration: "2:21",
  },
  {
    name: "Since Day One",
    genere: "sunny beats",
    artist: "Huglord",
    duration: "2:30",
  },
  {
    name: "Soft Slap",
    genere: "sunny beats",
    artist: "Dream Web",
    duration: "4:03",
  },
  {
    name: "Sweet Taboo",
    genere: "sunny beats",
    artist: "Chapel Chill",
    duration: "2:21",
  },
  {
    name: "The Chillest",
    genere: "sunny beats",
    artist: "Chilou",
    duration: "2:31",
  },
  {
    name: "The Pappas",
    genere: "sunny beats",
    artist: "High Low Row",
    duration: "3:44",
  },
  {
    name: "Train Ride",
    genere: "sunny beats",
    artist: "High John",
    duration: "2:31",
  },
  {
    name: "Cry for Me",
    genere: "trap",
    artist: "King",
    duration: "2:22",
  },
  {
    name: "Feed the Family",
    genere: "trap",
    artist: "King",
    duration: "1:32",
  },
  {
    name: "Fire Squad",
    genere: "trap",
    artist: "King",
    duration: "3:41",
  },
  {
    name: "First Day",
    genere: "trap",
    artist: "King",
    duration: "2:52",
  },
  {
    name: "Land of the Snakes",
    genere: "trap",
    artist: "King",
    duration: "4:00",
  },
  {
    name: "No Money",
    genere: "trap",
    artist: "King",
    duration: "3:10",
  },
  {
    name: "Trap(feat Lil Baby)",
    genere: "trap",
    artist: "SAINt JHN",
    duration: "3:04",
  },
  {
    name: "Trap(feat TAEMIN & YUN)",
    genere: "trap",
    artist: "Henry",
    duration: "3:45",
  },
  {
    name: "Trap",
    genere: "trap",
    artist: "Fetty Wap",
    duration: "3:42",
  },
  {
    name: "Wait For U",
    genere: "trap",
    artist: "Future",
    duration: "3:09",
  },
  {
    name: "Co2",
    genere: "acoustic",
    artist: "Pratek Kuhad",
    duration: "2:47",
  },
  {
    name: "Dancing on my own",
    genere: "acoustic",
    artist: "Calum Scott",
    duration: "4:13",
  },
  {
    name: "I Don't Care",
    genere: "acoustic",
    artist: "Ed Sheeran",
    duration: "3:58",
  },
  {
    name: "Love is Gone",
    genere: "acoustic",
    artist: "Dylan Matthew",
    duration: "2:56",
  },
  {
    name: "My Universe",
    genere: "acoustic",
    artist: " Coldplay",
    duration: "3:43",
  },
  {
    name: "Perfect",
    genere: "acoustic",
    artist: "Ed Sheeran",
    duration: "4:20",
  },
  {
    name: "Snooze",
    genere: "acoustic",
    artist: "SZA",
    duration: "3:10",
  },
  {
    name: "Take Me Away",
    genere: "acoustic",
    artist: "New Medicine",
    duration: "2:25",
  },
  {
    name: "This Year",
    genere: "acoustic",
    artist: "Victor Thompson",
    duration: "2:18",
  },
  {
    name: "Too Good At Goodbyes ",
    genere: "acoustic",
    artist: "Sam Smith",
    duration: "3:40",
  },
  {
    name: "Background",
    genere: "ambient",
    artist: "John Adams",
    duration: "4:20",
  },
  {
    name: "Benefits",
    genere: "ambient",
    artist: "John Adams",
    duration: "4:18",
  },
  {
    name: "Creepy",
    genere: "ambient",
    artist: "John Adams",
    duration: "4:30",
  },
  {
    name: "Dark",
    genere: "ambient",
    artist: "John Adams",
    duration: "3:08",
  },
  {
    name: "Essentials",
    genere: "ambient",
    artist: "John Adams",
    duration: "4:39",
  },
  {
    name: "Garden",
    genere: "ambient",
    artist: "John Adams",
    duration: "4:21",
  },
  {
    name: "Horror",
    genere: "ambient",
    artist: "John Adams",
    duration: "4:48",
  },
  {
    name: "Nature",
    genere: "ambient",
    artist: "Ambience",
    duration: "2:20",
  },
  {
    name: "Police Scanner",
    genere: "ambient",
    artist: "John Adams",
    duration: "4:51",
  },
  {
    name: "Spacy",
    genere: "ambient",
    artist: "Ambience",
    duration: "5:44",
  },
  {
    name: "A Little Night Music",
    genere: "classical",
    artist: "Classical Music",
    duration: "1:58",
  },
  {
    name: "Bach Air On the G String",
    genere: "classical",
    artist: "Classical Music",
    duration: "2:25",
  },
  {
    name: "Beethoven's Ode to Joy",
    genere: "classical",
    artist: "Classical Music",
    duration: "3:26",
  },
  {
    name: "Handel Air",
    genere: "classical",
    artist: "Classical Music",
    duration: "3:45",
  },
  {
    name: "Jesu Joy of Man's Desiring",
    genere: "classical",
    artist: "Classical Music",
    duration: "3:29",
  },
  {
    name: "Mouret Rondeau",
    genere: "classical",
    artist: "Classical Music",
    duration: "1:41",
  },
  {
    name: "Mozart 's A Little Night Music",
    genere: "classical",
    artist: "Classical Music",
    duration: "2:55",
  },
  {
    name: "Mozart Serenade",
    genere: "classical",
    artist: "Classical Music",
    duration: "4:09",
  },
  {
    name: "Pachelbel's Canon In D",
    genere: "classical",
    artist: "Classical Music",
    duration: "7:11",
  },
  {
    name: "Trumpet Tune",
    genere: "classical",
    artist: "Classical Music",
    duration: "2:55",
  },
  {
    name: "Butch Cassidy",
    genere: "electronic",
    artist: "Truck",
    duration: "4:02",
  },
  {
    name: "Ca Dre",
    genere: "electronic",
    artist: "Truck",
    duration: "",
  },
  {
    name: "Contenance",
    genere: "electronic",
    artist: "Truck",
    duration: "3:31",
  },
  {
    name: "Electronic Music",
    genere: "electronic",
    artist: "Truck",
    duration: "3:45",
  },
  {
    name: "Erase Me",
    genere: "electronic",
    artist: "AVGéminis",
    duration: "5:54",
  },
  {
    name: "Floor Puncher",
    genere: "electronic",
    artist: "Truck",
    duration: "5:17",
  },
  {
    name: "Lay Me Down",
    genere: "electronic",
    artist: "AVGéminis",
    duration: "3:54",
  },
  {
    name: "Sleepless",
    genere: "electronic",
    artist: "AVGéminis",
    duration: "4:20",
  },
  {
    name: "The Atom Bomb",
    genere: "electronic",
    artist: "Truck",
    duration: "6:36",
  },
  {
    name: "The Scuffed One",
    genere: "electronic",
    artist: "Truck",
    duration: "5:12",
  },
  {
    name: "At Last",
    genere: "jazzy",
    artist: "Etta James",
    duration: "3:02",
  },
  {
    name: "I Put A Spell On You",
    genere: "jazzy",
    artist: "Nina Simone",
    duration: "2:36",
  },
  {
    name: "Lullaby Of Birdland",
    genere: "jazzy",
    artist: " Sarah Vaughan",
    duration: "4:00",
  },
  {
    name: "Minor Swing",
    genere: "jazzy",
    artist: "Django Reinhard",
    duration: "2:38",
  },
  {
    name: "Moanin' ",
    genere: "jazzy",
    artist: "Art Blakey",
    duration: "9:33",
  },
  {
    name: "So What",
    genere: "jazzy",
    artist: "Miles Davis",
    duration: "9:22",
  },
  {
    name: "Summertime",
    genere: "jazzy",
    artist: "Louis Armstrong",
    duration: "4:58",
  },
  {
    name: "Take Five",
    genere: "jazzy",
    artist: "The Dave Brubeck Quartet",
    duration: "5:24",
  },
  {
    name: "The Best Is Yet To Come",
    genere: "jazzy",
    artist: "Tony Bennett",
    duration: "2:33",
  },
  {
    name: "What A Wonderful World",
    genere: "jazzy",
    artist: "Louis Armstrong",
    duration: "2:20",
  },
  {
    name: "Attention",
    genere: "pop",
    artist: "Charlie Puth",
    duration: "3:31",
  },
  {
    name: "Calm Down",
    genere: "pop",
    artist: "Rema, Selena Gomez",
    duration: "3:59",
  },
  {
    name: "Cheap Thrills",
    genere: "pop",
    artist: "Sia",
    duration: "3:30",
  },
  {
    name: "Cruel Summer",
    genere: "pop",
    artist: "Taylor Swift",
    duration: "2:58",
  },
  {
    name: "Levitating (feat DaBaby)",
    genere: "pop",
    artist: "Dua Lipa",
    duration: "3:23",
  },
  {
    name: "Señorita",
    genere: "pop",
    artist: "Shawn Mendes, Camila Cabello",
    duration: "3:10",
  },
  {
    name: "Shape of You",
    genere: "pop",
    artist: "Ed Sheeran",
    duration: "3:53",
  },
  {
    name: "STAY - The Kid Laroi",
    genere: "pop",
    artist: "Justin Bieber",
    duration: "2:21",
  },
  {
    name: "Unholy",
    genere: "pop",
    artist: "Sam Smith, Kim Petras",
    duration: "2:36",
  },
  {
    name: "Unstoppable",
    genere: "pop",
    artist: "Sia",
    duration: "3:37",
  },
  {
    name: "Back In Black",
    genere: "rock",
    artist: " ACDC",
    duration: "4:15",
  },
  {
    name: "Bohemian Rhapsody",
    genere: "rock",
    artist: " Queen",
    duration: "5:54",
  },
  {
    name: "Cocaine",
    genere: "rock",
    artist: "Eric Clapton",
    duration: "3:36",
  },
  {
    name: "Dream On ",
    genere: "rock",
    artist: "Aerosmith",
    duration: "4:27",
  },
  {
    name: "Paranoid",
    genere: "rock",
    artist: " Black Sabbath",
    duration: "2:48",
  },
  {
    name: "Smoke On The Water",
    genere: "rock",
    artist: "Deep Purple",
    duration: "5:42",
  },
  {
    name: "Sweet Child O' Mine",
    genere: "rock",
    artist: "Guns N' Roses",
    duration: "5:56",
  },
  {
    name: "Sweet Home Alabama",
    genere: "rock",
    artist: "Lynyrd Skynyrd",
    duration: "4:43",
  },
  {
    name: "The Final Countdown",
    genere: "rock",
    artist: "Europe",
    duration: "5:10",
  },
  {
    name: "We Will Rock You",
    genere: "rock",
    artist: "Queen",
    duration: "2:02",
  },
  {
    name: "Gangsta's Paradise",
    genere: "hip hop beats",
    artist: "Coolio",
    duration: "4:00",
  },
  {
    name: "Him & I",
    genere: "hip hop beats",
    artist: " G-Eazy, Halse",
    duration: "4:28",
  },
  {
    name: "Industry Baby",
    genere: "hip hop beats",
    artist: "Lil Nas X, Jack Harlow",
    duration: "3:32",
  },
  {
    name: "Into Your Arms",
    genere: "hip hop beats",
    artist: "Witt Lowry",
    duration: "3:06",
  },
  {
    name: "Love The Way You Lie",
    genere: "hip hop beats",
    artist: "Eminem",
    duration: "4:23",
  },
  {
    name: "Old Town Road",
    genere: "hip hop beats",
    artist: "Lil Nas X",
    duration: "2:37",
  },
  {
    name: "Rockstar",
    genere: "hip hop beats",
    artist: "Post Malone",
    duration: "3:38",
  },
  {
    name: "The Box",
    genere: "hip hop beats",
    artist: "Roddy Ricch",
    duration: "3:16",
  },
  {
    name: "Unforgettable",
    genere: "hip hop beats",
    artist: "French Montana",
    duration: "3:53",
  },
  {
    name: "Whoopty",
    genere: "hip hop beats",
    artist: "CJ",
    duration: "2:03",
  },
  {
    name: "Bobby Funk",
    genere: "vintage beats",
    artist: "Dj Cam",
    duration: "2:19",
  },
  {
    name: "Can I Kick It",
    genere: "vintage beats",
    artist: "Dark Orchid",
    duration: "2:34",
  },
  {
    name: "Copper Gravy",
    genere: "vintage beats",
    artist: "Dark Orchid",
    duration: "1:35",
  },
  {
    name: "Dub In Your Sub",
    genere: "vintage beats",
    artist: "Dark Orchid",
    duration: "2:42",
  },
  {
    name: "Entertainment Tonight",
    genere: "vintage beats",
    artist: "Dark Orchid",
    duration: "2:51",
  },
  {
    name: "Inside My Love",
    genere: "vintage beats",
    artist: "Dj Cam",
    duration: "2:03",
  },
  {
    name: "Little Young Lover",
    genere: "vintage beats",
    artist: "Dark Orchid",
    duration: "2:24",
  },
  {
    name: "Soul Seducer",
    genere: "vintage beats",
    artist: "Dark Orchid",
    duration: "2:18",
  },
  {
    name: "Surf Cult",
    genere: "vintage beats",
    artist: "Dark Orchid",
    duration: "3:12",
  },
  {
    name: "The Funk Police",
    genere: "vintage beats",
    artist: "Dark Orchid",
    duration: "2:10",
  },
];

const genere = []; //storing the genere specific song objects for further use.
let musicName; //global variable used to store a songName when cliked on song division.

const searchGenere = function () {
  searchBtn.addEventListener("click", function () {
    console.log(searchbar.value);
    playlist.innerHTML = "";
    allSongs.forEach(function (ele) {
      let random = Math.trunc(Math.random() * 5 + 1);
      if (ele.genere === searchbar.value) {
        genere.push(ele);
        const div = `
        <div class="song">
          <div class="left-section">
            <img
              src="SongCover/${random}.jpg"
              style="width: 50px; border-radius: 50%; display: inline-block"
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
// let passval = searchbar.value;
// export{passval};
// console.log(passval);


//Play and Pause functionality
let music,
  prev = "none",
  play = 0;

const playPause = function (song) {
  song.forEach(function (ele) {
    ele.addEventListener("click", function () {
      musicName = ele.querySelector(".song-name").innerHTML;
      if (prev != musicName) {
        play = 0;
        music?.pause();
        ele.classList.add("playing");
      }
      if (ele.classList.contains("playing")) {
        playMusic(musicName);
        ele.classList.remove("playing");
      } else {
        pauseMusic();
        ele.classList.add("playing");
      }
    });
  });
};

function playMusic(musicName) {
  if (play === 0) {
    prev = musicName;
    music = new Audio(`AllSongs/${musicName}.mp3`);
    music.play();
    play++;
  } else {
    music.play();
  }
}
function pauseMusic() {
  music.pause();
}

}






 


// console.log(passval);
// export {passval,passval2};