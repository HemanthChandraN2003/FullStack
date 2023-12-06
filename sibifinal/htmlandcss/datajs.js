const allSongs = [
    //all genere songs are stored inside an array as objects.
    {
      name: "Joints in a Spaceship",
      genere: "lofi beats",
      artist: "Tillus",
      duration: "5:40",
      iconpath:"1.png"
    },
    {
      name: "After Dark",
      genere: "lofi beats",
      artist: "Omikron",
      duration: "5:46",
      iconpath:"2.jpg"
    },
    {
      name: "CareFree",
      genere: "lofi beats",
      artist: "Grey Killer",
      duration: "3:28",
      iconpath:"3.jpg"
    },
    {
      name: "Don't Think'bout It",
      genere: "lofi beats",
      artist: "Black Loops",
      duration: "6:37",
      iconpath:"4.jpg"
    },
    {
      name: "Everytime",
      genere: "lofi beats",
      artist: "Jason Hersco",
      duration: "5:08",
      iconpath:"5.jpg"
    },
    {
      name: "Faded",
      genere: "lofi beats",
      artist: "Xix99",
      duration: "3:41",
      iconpath:"6.jpg"
    },
  
    {
      name: "HyperSpace",
      genere: "lofi beats",
      artist: "Bleu Clair",
      duration: "3:24",
      iconpath:"7.jpg"
    },
    {
      name: "Lost In Time",
      genere: "lofi beats",
      artist: "Kolter",
      duration: "7:42",
      iconpath:"8.jpg"
    },
    {
      name: "Morning Groove",
      genere: "lofi beats",
      artist: "Upper Class",
      duration: "3:49",
      iconpath:"9.jpg"
    },
    {
      name: "Sunshine",
      genere: "sunny beats",
      artist: "Camden Clown",
      duration: "3:03",
      iconpath:"10.jpg"
    },
    {
      name: "A Costa",
      genere: "sunny beats",
      artist: "Zmeyev",
      duration: "2:12",
      iconpath:"11.png"
    },
    {
      name: "Morning Stretch",
      genere: "sunny beats",
      artist: "Timothy Infinite",
      duration: "2:24",
      iconpath:"12.jpg"
    },
    {
      name: "Walking to Adachi",
      genere: "sunny beats",
      artist: "Nathan Kawanishi",
      duration: "2:21",
      iconpath:"13.jpg"
    },
    {
      name: "Since Day One",
      genere: "sunny beats",
      artist: "Huglord",
      duration: "2:30",
      iconpath:"14.png"
    },
    {
      name: "Soft Slap",
      genere: "sunny beats",
      artist: "Dream Web",
      duration: "4:03",
      iconpath:"15.png"
    },
    {
      name: "Sweet Taboo",
      genere: "sunny beats",
      artist: "Chapel Chill",
      duration: "2:21",
      iconpath:"16.png"
    },
    {
      name: "The Chillest",
      genere: "sunny beats",
      artist: "Chilou",
      duration: "2:31",
      iconpath:"17.png"
    },
    {
      name: "The Pappas",
      genere: "sunny beats",
      artist: "High Low Row",
      duration: "3:44",
      iconpath:"18.jpg"
    },
    {
      name: "Train Ride",
      genere: "sunny beats",
      artist: "High John",
      duration: "2:31",
      iconpath:"19.png"
    },
    {
      name: "Cry for Me",
      genere: "trap",
      artist: "King",
      duration: "2:22",
      iconpath:"20.png"
    },
    {
      name: "Feed the Family",
      genere: "trap",
      artist: "King",
      duration: "1:32",
      iconpath:"21.png"
    },
    {
      name: "Fire Squad",
      genere: "trap",
      artist: "King",
      duration: "3:41",
      iconpath:"22.png"
    },
    {
      name: "First Day",
      genere: "trap",
      artist: "King",
      duration: "2:52",
      iconpath:"23.png"
    },
    {
      name: "Land of the Snakes",
      genere: "trap",
      artist: "King",
      duration: "4:00",
      iconpath:"24.jpg"
    },
    {
      name: "No Money",
      genere: "trap",
      artist: "King",
      duration: "3:10",
      iconpath:"25.png"
    },
    {
      name: "Trap (feat Lil Baby)",
      genere: "trap",
      artist: "SAINt JHN",
      duration: "3:04",
      iconpath:"26.jpg"
    },
    {
      name: "Trap (feat TAEMIN and KYUHYUN)",
      genere: "trap",
      artist: "Henry",
      duration: "3:45",
      iconpath:"27.jpg"
    },
    {
      name: "Trap",
      genere: "trap",
      artist: "Fetty Wap",
      duration: "3:42",
      iconpath:"28.jpg"
    },
  
    {
      name: "Co2",
      genere: "acoustic",
      artist: "Pratek Kuhad",
      duration: "2:47",
      iconpath:"29.jpg"
    },
    {
      name: "Dancing on my own",
      genere: "acoustic",
      artist: "Calum Scott",
      duration: "4:13",
      iconpath:"30.jpg"
    },
    {
      name: "I Don't Care",
      genere: "acoustic",
      artist: "Ed Sheeran",
      duration: "3:58",
      iconpath:"31.jpg"
    },
    {
      name: "Love is Gone",
      genere: "acoustic",
      artist: "Dylan Matthew",
      duration: "2:56",
      iconpath:"32.jpg"
    },
    {
      name: "My Universe",
      genere: "acoustic",
      artist: " Coldplay",
      duration: "3:43",
      iconpath:"33.png"
    },
    {
      name: "Perfect",
      genere: "acoustic",
      artist: "Ed Sheeran",
      duration: "4:20",
      iconpath:"34.jpg"
    },
    {
      name: "Snooze",
      genere: "acoustic",
      artist: "SZA",
      duration: "3:10",
      iconpath:"35.png"
    },
    {
      name: "Take Me Away",
      genere: "acoustic",
      artist: "New Medicine",
      duration: "2:25",
      iconpath:"36.jpg"
    },
    {
      name: "This Year",
      genere: "acoustic",
      artist: "Victor Thompson",
      duration: "2:18",
      iconpath:"37.jpg"
    },
    {
      name: "Too Good At Goodbyes",
      genere: "acoustic",
      artist: "Sam Smith",
      duration: "3:40",
      iconpath:"38.jpg"
    },
    {
      name: "Background",
      genere: "ambient",
      artist: "John Adams",
      duration: "4:20",
      iconpath:"39.jpg"
    },
    {
      name: "Benefits",
      genere: "ambient",
      artist: "John Adams",
      duration: "4:18",
      iconpath:"40.jpg"
    },
    {
      name: "Creepy",
      genere: "ambient",
      artist: "John Adams",
      duration: "4:30",
      iconpath:"41.jpg"
    },
    {
      name: "Dark",
      genere: "ambient",
      artist: "John Adams",
      duration: "3:08",
      iconpath:"42.jpg"
    },
    {
      name: "Essentials",
      genere: "ambient",
      artist: "John Adams",
      duration: "4:39",
      iconpath:"43.jpg"
    },
    {
      name: "Garden",
      genere: "ambient",
      artist: "John Adams",
      duration: "4:21",
      iconpath:"44.jpg"
    },
    {
      name: "Horror",
      genere: "ambient",
      artist: "John Adams",
      duration: "4:48",
      iconpath:"45.jpg"
    },
    {
      name: "Nature",
      genere: "ambient",
      artist: "Ambience",
      duration: "2:20",
      iconpath:"46.jpg"
    },
    {
      name: "Police Scanner",
      genere: "ambient",
      artist: "John Adams",
      duration: "4:51",
      iconpath:"47.jpg"
    },
    {
      name: "Spacy",
      genere: "ambient",
      artist: "Ambience",
      duration: "5:44",
      iconpath:"48.jpg"
    },
    {
      name: "A Little Night Music",
      genere: "classical",
      artist: "Classical Music",
      duration: "1:58",
      iconpath:"49.jpg"
    },
    {
      name: "Bach Air On the G String",
      genere: "classical",
      artist: "Classical Music",
      duration: "2:25",
      iconpath:"50.jpg"
    },
    {
      name: "Beethoven's Ode to Joy",
      genere: "classical",
      artist: "Classical Music",
      duration: "3:26",
      iconpath:"51.jpg"
    },
    {
      name: "Handel Air",
      genere: "classical",
      artist: "Classical Music",
      duration: "3:45",
      iconpath:"52.png"
    },
    {
      name: "Jesu Joy of Man's Desiring",
      genere: "classical",
      artist: "Classical Music",
      duration: "3:29",
      iconpath:"53.png"
    },
    {
      name: "Mouret Rondeau",
      genere: "classical",
      artist: "Classical Music",
      duration: "1:41",
      iconpath:"54.jpg"
    },
    {
      name: "Mozart 's A Little Night Music",
      genere: "classical",
      artist: "Classical Music",
      duration: "2:55",
      iconpath:"55.jpg"
    },
    {
      name: "Mozart Serenade",
      genere: "classical",
      artist: "Classical Music",
      duration: "4:09",
      iconpath:"56.jpg"
    },
    {
      name: "Pachelbel's Canon In D",
      genere: "classical",
      artist: "Classical Music",
      duration: "7:11",
      iconpath:"57.jpg"
    },
    {
      name: "Trumpet Tune",
      genere: "classical",
      artist: "Classical Music",
      duration: "2:55",
      iconpath:"58.jpg"
    },
    {
      name: "Butch Cassidy",
      genere: "electronic",
      artist: "Truck",
      duration: "4:02",
      iconpath:"59.jpg"
    },
    {
      name: "Ca Dre",
      genere: "electronic",
      artist: "Truck",
      duration: "3:45",
      iconpath:"60.jpg"
    },
    {
      name: "Contenance",
      genere: "electronic",
      artist: "Truck",
      duration: "3:31",
      iconpath:"61.jpg"
    },
    {
      name: "Electronic Music",
      genere: "electronic",
      artist: "Truck",
      duration: "3:45",
      iconpath:"62.jpg"
    },
    {
      name: "Erase Me",
      genere: "electronic",
      artist: "AVGéminis",
      duration: "5:54",
      iconpath:"63.jpg"
    },
    {
      name: "Floor Puncher",
      genere: "electronic",
      artist: "Truck",
      duration: "5:17",
      iconpath:"64.jpg"
    },
    {
      name: "Lay Me Down",
      genere: "electronic",
      artist: "AVGéminis",
      duration: "3:54",
      iconpath:"65.jpg"
    },
    {
      name: "Sleepless",
      genere: "electronic",
      artist: "AVGéminis",
      duration: "4:20",
      iconpath:"66.jpg"
    },
    {
      name: "The Atom Bomb",
      genere: "electronic",
      artist: "Truck",
      duration: "6:36",
      iconpath:"67.jpg"
    },
    {
      name: "The Scuffed One",
      genere: "electronic",
      artist: "Truck",
      duration: "5:12",
      iconpath:"68.jpg"
    },
    {
      name: "At Last",
      genere: "jazzy",
      artist: "Etta James",
      duration: "3:02",
      iconpath:"69.jpg"
    },
    {
      name: "I Put A Spell On You",
      genere: "jazzy",
      artist: "Nina Simone",
      duration: "2:36",
      iconpath:"70.jpg"
    },
    {
      name: "Lullaby Of Birdland",
      genere: "jazzy",
      artist: " Sarah Vaughan",
      duration: "4:00",
      iconpath:"71.jpg"
    },
    {
      name: "Minor Swing",
      genere: "jazzy",
      artist: "Django Reinhard",
      duration: "2:38",
      iconpath:"72.png"
    },
    {
      name: "Moanin'",
      genere: "jazzy",
      artist: "Art Blakey",
      duration: "9:33",
      iconpath:"73.jpg"
    },
    {
      name: "So What",
      genere: "jazzy",
      artist: "Miles Davis",
      duration: "9:22",
      iconpath:"74.jpg"
    },
    {
      name: "Summertime",
      genere: "jazzy",
      artist: "Louis Armstrong",
      duration: "4:58",
      iconpath:"75.jpg"
    },
    {
      name: "Take Five",
      genere: "jazzy",
      artist: "The Dave Brubeck Quartet",
      duration: "5:24",
      iconpath:"76.jpg"
    },
    {
      name: "The Best Is Yet To Come",
      genere: "jazzy",
      artist: "Tony Bennett",
      duration: "2:33",
      iconpath:"77.jpg"
    },
    {
      name: "What A Wonderful World",
      genere: "jazzy",
      artist: "Louis Armstrong",
      duration: "2:20",
      iconpath:"78.jpg"
    },
    {
      name: "Attention",
      genere: "pop",
      artist: "Charlie Puth",
      duration: "3:31",
      iconpath:"79.jpg"
    },
    {
      name: "Calm Down",
      genere: "pop",
      artist: "Rema, Selena Gomez",
      duration: "3:59",
      iconpath:"80.png"
    },
    {
      name: "Cheap Thrills",
      genere: "pop",
      artist: "Sia",
      duration: "3:30",
      iconpath:"81.jpg"
    },
    {
      name: "Cruel Summer",
      genere: "pop",
      artist: "Taylor Swift",
      duration: "2:58",
      iconpath:"82.jpg"
    },
    {
      name: "Levitating",
      genere: "pop",
      artist: "Dua Lipa",
      duration: "3:23",
      iconpath:"83.jpg"
    },
    {
      name: "Señorita",
      genere: "pop",
      artist: "Shawn Mendes, Camila Cabello",
      duration: "3:10",
      iconpath:"84.jpg"
    },
    {
      name: "Shape of You",
      genere: "pop",
      artist: "Ed Sheeran",
      duration: "3:53",
      iconpath:"85.jpg"
    },
    {
      name: "STAY - The Kid Laroi",
      genere: "pop",
      artist: "Justin Bieber",
      duration: "2:21",
      iconpath:"86.png"
    },
    {
      name: "Unholy",
      genere: "pop",
      artist: "Sam Smith, Kim Petras",
      duration: "2:36",
      iconpath:"87.jpg"
    },
    {
      name: "Unstoppable",
      genere: "pop",
      artist: "Sia",
      duration: "3:37",
      iconpath:"88.jpg"
    },
    {
      name: "Back In Black",
      genere: "rock",
      artist: " ACDC",
      duration: "4:15",
      iconpath:"89.jpg"
    },
    {
      name: "Bohemian Rhapsody",
      genere: "rock",
      artist: " Queen",
      duration: "5:54",
      iconpath:"90.jpg"
    },
    {
      name: "Cocaine",
      genere: "rock",
      artist: "Eric Clapton",
      duration: "3:36",
      iconpath:"91.jpg"
    },
    {
      name: "Dream On",
      genere: "rock",
      artist: "Aerosmith",
      duration: "4:27",
      iconpath:"92.jpg"
    },
    {
      name: "Paranoid",
      genere: "rock",
      artist: " Black Sabbath",
      duration: "2:48",
      iconpath:"93.jpg"
    },
    {
      name: "Smoke On The Water",
      genere: "rock",
      artist: "Deep Purple",
      duration: "5:42",
      iconpath:"94.jpg"
    },
    {
      name: "Sweet Child O' Mine",
      genere: "rock",
      artist: "Guns N' Roses",
      duration: "5:56",
      iconpath:"95.jpg"
    },
    {
      name: "Sweet Home Alabama",
      genere: "rock",
      artist: "Lynyrd Skynyrd",
      duration: "4:43",
      iconpath:"96.jpg"
    },
    {
      name: "The Final Countdown",
      genere: "rock",
      artist: "Europe",
      duration: "5:10",
      iconpath:"97.jpg"
    },
    {
      name: "We Will Rock You",
      genere: "rock",
      artist: "Queen",
      duration: "2:02",
      iconpath:"98.jpg"
    },
    {
      name: "Gangsta's Paradise",
      genere: "hip hop beats",
      artist: "Coolio",
      duration: "4:00",
      iconpath:"99.jpg"
    },
    {
      name: "Him and I",
      genere: "hip hop beats",
      artist: " G-Eazy, Halse",
      duration: "4:28",
      iconpath:"100.jpg"
    },
    {
      name: "Industry Baby",
      genere: "hip hop beats",
      artist: "Lil Nas X, Jack Harlow",
      duration: "3:32",
      iconpath:"101.jpg"
    },
    {
      name: "Into Your Arms",
      genere: "hip hop beats",
      artist: "Witt Lowry",
      duration: "3:06",
      iconpath:"102.jpg"
    },
    {
      name: "Love The Way You Lie",
      genere: "hip hop beats",
      artist: "Eminem",
      duration: "4:23",
      iconpath:"103.jpg"
    },
    {
      name: "Old Town Road",
      genere: "hip hop beats",
      artist: "Lil Nas X",
      duration: "2:37",
      iconpath:"104.jpg"
    },
    {
      name: "Rockstar",
      genere: "hip hop beats",
      artist: "Post Malone",
      duration: "3:38",
      iconpath:"105.jpg"
    },
    {
      name: "The Box",
      genere: "hip hop beats",
      artist: "Roddy Ricch",
      duration: "3:16",
      iconpath:"106.jpg"
      
    },
    {
      name: "Unforgettable",
      genere: "hip hop beats",
      artist: "French Montana",
      duration: "3:53",
      iconpath:"107.png"
    },
    {
      name: "Whoopty",
      genere: "hip hop beats",
      artist: "CJ",
      duration: "2:03",
      iconpath:"108.jpg"
    },
    {
      name: "Bobby Funk",
      genere: "vintage beats",
      artist: "Dj Cam",
      duration: "2:19",
      iconpath:"109.jpg"
    },
    {
      name: "Can I Kick It",
      genere: "vintage beats",
      artist: "Dark Orchid",
      duration: "2:34",
      iconpath:"110.jpg"
    },
    {
      name: "Copper Gravy",
      genere: "vintage beats",
      artist: "Dark Orchid",
      duration: "1:35",
      iconpath:"111.jpg"
    },
    {
      name: "Dub In Your Sub",
      genere: "vintage beats",
      artist: "Dark Orchid",
      duration: "2:42",
      iconpath:"112.jpg"
    },
    {
      name: "Entertainment Tonight",
      genere: "vintage beats",
      artist: "Dark Orchid",
      duration: "2:51",
      iconpath:"113.jpg"
    },
    {
      name: "Inside My Love",
      genere: "vintage beats",
      artist: "Dj Cam",
      duration: "2:03",
      iconpath:"114.jpg"
    },
    {
      name: "Little Young Lover",
      genere: "vintage beats",
      artist: "Dark Orchid",
      duration: "2:24",
      iconpath:"115.jpg"
    },
    {
      name: "Soul Seducer",
      genere: "vintage beats",
      artist: "Dark Orchid",
      duration: "2:18",
      iconpath:"116.jpg"
    },
    {
      name: "Surf Cult",
      genere: "vintage beats",
      artist: "Dark Orchid",
      duration: "3:12",
      iconpath:"117.jpg"
    },
    {
      name: "The Funk Police",
      genere: "vintage beats",
      artist: "Dark Orchid",
      duration: "2:10",
      iconpath:"118.jpg"
    },
  ];
  
  