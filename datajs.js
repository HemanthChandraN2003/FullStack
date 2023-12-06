const allSongs = [
    //all genere songs are stored inside an array as objects.
    {
      name: "Joints in a Spaceship",
      genere: "lofi beats",
      artist: "Tillus",
      duration: "5:40",
      iconpath:"1"
    },
    {
      name: "After Dark",
      genere: "lofi beats",
      artist: "Omikron",
      duration: "5:46",
      iconpath:"2"
    },
    {
      name: "CareFree",
      genere: "lofi beats",
      artist: "Grey Killer",
      duration: "3:28",
      iconpath:"3"
    },
    {
      name: "Don't Think'bout It",
      genere: "lofi beats",
      artist: "Black Loops",
      duration: "6:37",
      iconpath:"4"
    },
    {
      name: "Everytime",
      genere: "lofi beats",
      artist: "Jason Hersco",
      duration: "5:08",
      iconpath:"5"
    },
    {
      name: "Faded",
      genere: "lofi beats",
      artist: "Xix99",
      duration: "3:41",
      iconpath:"6"
    },
  
    {
      name: "HyperSpace",
      genere: "lofi beats",
      artist: "Bleu Clair",
      duration: "3:24",
      iconpath:"7"
    },
    {
      name: "Lost In Time",
      genere: "lofi beats",
      artist: "Kolter",
      duration: "7:42",
      iconpath:"8"
    },
    {
      name: "Morning Groove",
      genere: "lofi beats",
      artist: "Upper Class",
      duration: "3:49",
      iconpath:"9"
    },
    {
      name: "Sunshine",
      genere: "sunny beats",
      artist: "Camden Clown",
      duration: "3:03",
      iconpath:"10"
    },
    {
      name: "A Costa",
      genere: "sunny beats",
      artist: "Zmeyev",
      duration: "2:12",
      iconpath:"11"
    },
    {
      name: "Morning Stretch",
      genere: "sunny beats",
      artist: "Timothy Infinite",
      duration: "2:24",
      iconpath:"12"
    },
    {
      name: "Walking to Adachi",
      genere: "sunny beats",
      artist: "Nathan Kawanishi",
      duration: "2:21",
      iconpath:"13"
    },
    {
      name: "Since Day One",
      genere: "sunny beats",
      artist: "Huglord",
      duration: "2:30",
      iconpath:"14"
    },
    {
      name: "Soft Slap",
      genere: "sunny beats",
      artist: "Dream Web",
      duration: "4:03",
      iconpath:"15"
    },
    {
      name: "Sweet Taboo",
      genere: "sunny beats",
      artist: "Chapel Chill",
      duration: "2:21",
      iconpath:"16"
    },
    {
      name: "The Chillest",
      genere: "sunny beats",
      artist: "Chilou",
      duration: "2:31",
      iconpath:"17"
    },
    {
      name: "The Pappas",
      genere: "sunny beats",
      artist: "High Low Row",
      duration: "3:44",
      iconpath:"18"
    },
    {
      name: "Train Ride",
      genere: "sunny beats",
      artist: "High John",
      duration: "2:31",
      iconpath:"19"
    },
    {
      name: "Cry for Me",
      genere: "trap",
      artist: "King",
      duration: "2:22",
      iconpath:"20"
    },
    {
      name: "Feed the Family",
      genere: "trap",
      artist: "King",
      duration: "1:32",
      iconpath:"21"
    },
    {
      name: "Fire Squad",
      genere: "trap",
      artist: "King",
      duration: "3:41",
      iconpath:"22"
    },
    {
      name: "First Day",
      genere: "trap",
      artist: "King",
      duration: "2:52",
      iconpath:"23"
    },
    {
      name: "Land of the Snakes",
      genere: "trap",
      artist: "King",
      duration: "4:00",
      iconpath:"24"
    },
    {
      name: "No Money",
      genere: "trap",
      artist: "King",
      duration: "3:10",
      iconpath:"25"
    },
    {
      name: "Trap (feat Lil Baby)",
      genere: "trap",
      artist: "SAINt JHN",
      duration: "3:04",
      iconpath:"26"
    },
    {
      name: "Trap (feat TAEMIN and KYUHYUN)",
      genere: "trap",
      artist: "Henry",
      duration: "3:45",
      iconpath:"27"
    },
    {
      name: "Trap",
      genere: "trap",
      artist: "Fetty Wap",
      duration: "3:42",
      iconpath:"28"
    },
  
    {
      name: "Co2",
      genere: "acoustic",
      artist: "Pratek Kuhad",
      duration: "2:47",
      iconpath:"29"
    },
    {
      name: "Dancing on my own",
      genere: "acoustic",
      artist: "Calum Scott",
      duration: "4:13",
      iconpath:"30"
    },
    {
      name: "I Don't Care",
      genere: "acoustic",
      artist: "Ed Sheeran",
      duration: "3:58",
      iconpath:"31"
    },
    {
      name: "Love is Gone",
      genere: "acoustic",
      artist: "Dylan Matthew",
      duration: "2:56",
      iconpath:"32"
    },
    {
      name: "My Universe",
      genere: "acoustic",
      artist: " Coldplay",
      duration: "3:43",
      iconpath:"33"
    },
    {
      name: "Perfect",
      genere: "acoustic",
      artist: "Ed Sheeran",
      duration: "4:20",
      iconpath:"34"
    },
    {
      name: "Snooze",
      genere: "acoustic",
      artist: "SZA",
      duration: "3:10",
      iconpath:"35"
    },
    {
      name: "Take Me Away",
      genere: "acoustic",
      artist: "New Medicine",
      duration: "2:25",
      iconpath:"36"
    },
    {
      name: "This Year",
      genere: "acoustic",
      artist: "Victor Thompson",
      duration: "2:18",
      iconpath:"37"
    },
    {
      name: "Too Good At Goodbyes",
      genere: "acoustic",
      artist: "Sam Smith",
      duration: "3:40",
      iconpath:"38"
    },
    {
      name: "Background",
      genere: "ambient",
      artist: "John Adams",
      duration: "4:20",
      iconpath:"39"
    },
    {
      name: "Benefits",
      genere: "ambient",
      artist: "John Adams",
      duration: "4:18",
      iconpath:"40"
    },
    {
      name: "Creepy",
      genere: "ambient",
      artist: "John Adams",
      duration: "4:30",
      iconpath:"41"
    },
    {
      name: "Dark",
      genere: "ambient",
      artist: "John Adams",
      duration: "3:08",
      iconpath:"42"
    },
    {
      name: "Essentials",
      genere: "ambient",
      artist: "John Adams",
      duration: "4:39",
      iconpath:"43"
    },
    {
      name: "Garden",
      genere: "ambient",
      artist: "John Adams",
      duration: "4:21",
      iconpath:"44"
    },
    {
      name: "Horror",
      genere: "ambient",
      artist: "John Adams",
      duration: "4:48",
      iconpath:"45"
    },
    {
      name: "Nature",
      genere: "ambient",
      artist: "Ambience",
      duration: "2:20",
      iconpath:"46"
    },
    {
      name: "Police Scanner",
      genere: "ambient",
      artist: "John Adams",
      duration: "4:51",
      iconpath:"47"
    },
    {
      name: "Spacy",
      genere: "ambient",
      artist: "Ambience",
      duration: "5:44",
      iconpath:"48"
    },
    {
      name: "A Little Night Music",
      genere: "classical",
      artist: "Classical Music",
      duration: "1:58",
      iconpath:"49"
    },
    {
      name: "Bach Air On the G String",
      genere: "classical",
      artist: "Classical Music",
      duration: "2:25",
      iconpath:"50"
    },
    {
      name: "Beethoven's Ode to Joy",
      genere: "classical",
      artist: "Classical Music",
      duration: "3:26",
      iconpath:"51"
    },
    {
      name: "Handel Air",
      genere: "classical",
      artist: "Classical Music",
      duration: "3:45",
      iconpath:"52"
    },
    {
      name: "Jesu Joy of Man's Desiring",
      genere: "classical",
      artist: "Classical Music",
      duration: "3:29",
      iconpath:"53"
    },
    {
      name: "Mouret Rondeau",
      genere: "classical",
      artist: "Classical Music",
      duration: "1:41",
      iconpath:"54"
    },
    {
      name: "Mozart 's A Little Night Music",
      genere: "classical",
      artist: "Classical Music",
      duration: "2:55",
      iconpath:"55"
    },
    {
      name: "Mozart Serenade",
      genere: "classical",
      artist: "Classical Music",
      duration: "4:09",
      iconpath:"56"
    },
    {
      name: "Pachelbel's Canon In D",
      genere: "classical",
      artist: "Classical Music",
      duration: "7:11",
      iconpath:"57"
    },
    {
      name: "Trumpet Tune",
      genere: "classical",
      artist: "Classical Music",
      duration: "2:55",
      iconpath:"58"
    },
    {
      name: "Butch Cassidy",
      genere: "electronic",
      artist: "Truck",
      duration: "4:02",
      iconpath:"59"
    },
    {
      name: "Ca Dre",
      genere: "electronic",
      artist: "Truck",
      duration: "3:45",
      iconpath:"60"
    },
    {
      name: "Contenance",
      genere: "electronic",
      artist: "Truck",
      duration: "3:31",
      iconpath:"61"
    },
    {
      name: "Electronic Music",
      genere: "electronic",
      artist: "Truck",
      duration: "3:45",
      iconpath:"62"
    },
    {
      name: "Erase Me",
      genere: "electronic",
      artist: "AVGéminis",
      duration: "5:54",
      iconpath:"63"
    },
    {
      name: "Floor Puncher",
      genere: "electronic",
      artist: "Truck",
      duration: "5:17",
      iconpath:"64"
    },
    {
      name: "Lay Me Down",
      genere: "electronic",
      artist: "AVGéminis",
      duration: "3:54",
      iconpath:"65"
    },
    {
      name: "Sleepless",
      genere: "electronic",
      artist: "AVGéminis",
      duration: "4:20",
      iconpath:"66"
    },
    {
      name: "The Atom Bomb",
      genere: "electronic",
      artist: "Truck",
      duration: "6:36",
      iconpath:"67"
    },
    {
      name: "The Scuffed One",
      genere: "electronic",
      artist: "Truck",
      duration: "5:12",
      iconpath:"68"
    },
    {
      name: "At Last",
      genere: "jazzy",
      artist: "Etta James",
      duration: "3:02",
      iconpath:"69"
    },
    {
      name: "I Put A Spell On You",
      genere: "jazzy",
      artist: "Nina Simone",
      duration: "2:36",
      iconpath:"70"
    },
    {
      name: "Lullaby Of Birdland",
      genere: "jazzy",
      artist: " Sarah Vaughan",
      duration: "4:00",
      iconpath:"71"
    },
    {
      name: "Minor Swing",
      genere: "jazzy",
      artist: "Django Reinhard",
      duration: "2:38",
      iconpath:"72"
    },
    {
      name: "Moanin'",
      genere: "jazzy",
      artist: "Art Blakey",
      duration: "9:33",
      iconpath:"73"
    },
    {
      name: "So What",
      genere: "jazzy",
      artist: "Miles Davis",
      duration: "9:22",
      iconpath:"74"
    },
    {
      name: "Summertime",
      genere: "jazzy",
      artist: "Louis Armstrong",
      duration: "4:58",
      iconpath:"75"
    },
    {
      name: "Take Five",
      genere: "jazzy",
      artist: "The Dave Brubeck Quartet",
      duration: "5:24",
      iconpath:"76"
    },
    {
      name: "The Best Is Yet To Come",
      genere: "jazzy",
      artist: "Tony Bennett",
      duration: "2:33",
      iconpath:"77"
    },
    {
      name: "What A Wonderful World",
      genere: "jazzy",
      artist: "Louis Armstrong",
      duration: "2:20",
      iconpath:"78"
    },
    {
      name: "Attention",
      genere: "pop",
      artist: "Charlie Puth",
      duration: "3:31",
      iconpath:"79"
    },
    {
      name: "Calm Down",
      genere: "pop",
      artist: "Rema, Selena Gomez",
      duration: "3:59",
      iconpath:"80"
    },
    {
      name: "Cheap Thrills",
      genere: "pop",
      artist: "Sia",
      duration: "3:30",
      iconpath:"81"
    },
    {
      name: "Cruel Summer",
      genere: "pop",
      artist: "Taylor Swift",
      duration: "2:58",
      iconpath:"82"
    },
    {
      name: "Levitating",
      genere: "pop",
      artist: "Dua Lipa",
      duration: "3:23",
      iconpath:"83"
    },
    {
      name: "Señorita",
      genere: "pop",
      artist: "Shawn Mendes, Camila Cabello",
      duration: "3:10",
      iconpath:"84"
    },
    {
      name: "Shape of You",
      genere: "pop",
      artist: "Ed Sheeran",
      duration: "3:53",
      iconpath:"85"
    },
    {
      name: "STAY - The Kid Laroi",
      genere: "pop",
      artist: "Justin Bieber",
      duration: "2:21",
      iconpath:"86"
    },
    {
      name: "Unholy",
      genere: "pop",
      artist: "Sam Smith, Kim Petras",
      duration: "2:36",
      iconpath:"87"
    },
    {
      name: "Unstoppable",
      genere: "pop",
      artist: "Sia",
      duration: "3:37",
      iconpath:"88"
    },
    {
      name: "Back In Black",
      genere: "rock",
      artist: " ACDC",
      duration: "4:15",
      iconpath:"89"
    },
    {
      name: "Bohemian Rhapsody",
      genere: "rock",
      artist: " Queen",
      duration: "5:54",
      iconpath:"90"
    },
    {
      name: "Cocaine",
      genere: "rock",
      artist: "Eric Clapton",
      duration: "3:36",
      iconpath:"91"
    },
    {
      name: "Dream On",
      genere: "rock",
      artist: "Aerosmith",
      duration: "4:27",
      iconpath:"92"
    },
    {
      name: "Paranoid",
      genere: "rock",
      artist: " Black Sabbath",
      duration: "2:48",
      iconpath:"93"
    },
    {
      name: "Smoke On The Water",
      genere: "rock",
      artist: "Deep Purple",
      duration: "5:42",
      iconpath:"94"
    },
    {
      name: "Sweet Child O' Mine",
      genere: "rock",
      artist: "Guns N' Roses",
      duration: "5:56",
      iconpath:"95"
    },
    {
      name: "Sweet Home Alabama",
      genere: "rock",
      artist: "Lynyrd Skynyrd",
      duration: "4:43",
      iconpath:"96"
    },
    {
      name: "The Final Countdown",
      genere: "rock",
      artist: "Europe",
      duration: "5:10",
      iconpath:"97"
    },
    {
      name: "We Will Rock You",
      genere: "rock",
      artist: "Queen",
      duration: "2:02",
      iconpath:"98"
    },
    {
      name: "Gangsta's Paradise",
      genere: "hip hop beats",
      artist: "Coolio",
      duration: "4:00",
      iconpath:"99"
    },
    {
      name: "Him and I",
      genere: "hip hop beats",
      artist: " G-Eazy, Halse",
      duration: "4:28",
      iconpath:"100"
    },
    {
      name: "Industry Baby",
      genere: "hip hop beats",
      artist: "Lil Nas X, Jack Harlow",
      duration: "3:32",
      iconpath:"101"
    },
    {
      name: "Into Your Arms",
      genere: "hip hop beats",
      artist: "Witt Lowry",
      duration: "3:06",
      iconpath:"102"
    },
    {
      name: "Love The Way You Lie",
      genere: "hip hop beats",
      artist: "Eminem",
      duration: "4:23",
      iconpath:"103"
    },
    {
      name: "Old Town Road",
      genere: "hip hop beats",
      artist: "Lil Nas X",
      duration: "2:37",
      iconpath:"104"
    },
    {
      name: "Rockstar",
      genere: "hip hop beats",
      artist: "Post Malone",
      duration: "3:38",
      iconpath:"105"
    },
    {
      name: "The Box",
      genere: "hip hop beats",
      artist: "Roddy Ricch",
      duration: "3:16",
      iconpath:"106"
      
    },
    {
      name: "Unforgettable",
      genere: "hip hop beats",
      artist: "French Montana",
      duration: "3:53",
      iconpath:"107"
    },
    {
      name: "Whoopty",
      genere: "hip hop beats",
      artist: "CJ",
      duration: "2:03",
      iconpath:"108"
    },
    {
      name: "Bobby Funk",
      genere: "vintage beats",
      artist: "Dj Cam",
      duration: "2:19",
      iconpath:"109"
    },
    {
      name: "Can I Kick It",
      genere: "vintage beats",
      artist: "Dark Orchid",
      duration: "2:34",
      iconpath:"110"
    },
    {
      name: "Copper Gravy",
      genere: "vintage beats",
      artist: "Dark Orchid",
      duration: "1:35",
      iconpath:"111"
    },
    {
      name: "Dub In Your Sub",
      genere: "vintage beats",
      artist: "Dark Orchid",
      duration: "2:42",
      iconpath:"112"
    },
    {
      name: "Entertainment Tonight",
      genere: "vintage beats",
      artist: "Dark Orchid",
      duration: "2:51",
      iconpath:"113"
    },
    {
      name: "Inside My Love",
      genere: "vintage beats",
      artist: "Dj Cam",
      duration: "2:03",
      iconpath:"114"
    },
    {
      name: "Little Young Lover",
      genere: "vintage beats",
      artist: "Dark Orchid",
      duration: "2:24",
      iconpath:"115"
    },
    {
      name: "Soul Seducer",
      genere: "vintage beats",
      artist: "Dark Orchid",
      duration: "2:18",
      iconpath:"116"
    },
    {
      name: "Surf Cult",
      genere: "vintage beats",
      artist: "Dark Orchid",
      duration: "3:12",
      iconpath:"117"
    },
    {
      name: "The Funk Police",
      genere: "vintage beats",
      artist: "Dark Orchid",
      duration: "2:10",
      iconpath:"118"
    },
  ];
  
  