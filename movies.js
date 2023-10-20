const movies = [
  {
    name: "step brothers",
    genre: "Comedy",
    image: "./images/step brothers.jpeg",
    desc: "Brennan and Dale, two middle-aged men who still live with their parents, are forced to stay under the same roof together when Brennan's mother marries Dale's father.",
  },
  {
    name: "austin powers",
    genre: "Comedy",
    image: "./images/austin powers.j[eg",
    desc: "Austin Powers, a cryogenically frozen British spy from 1960s, is thawed and reinstated when his arch nemesis Dr. Evil returns from space and terrorizes earth with his evil schemes.",
  },
  {
    name: "borat",
    genre: "Comedy",
    image: "./images/borat.jpeg",
    desc: "Borat, a Kazakh resident, travels to the USA to make a documentary on the country. While on his mission, he learns that the USA is the same as his own country in many ways.",
  },
  {
    name: "click",
    genre: "Comedy",
    image: "./images/click.jpeg",
    desc: "An architect discovers a universal remote that permits him to fast-forward and rewind to certain portions of his life. Complexities emerge when the remote begins to override his preferences.",
  },
  {
    name: "free guy",
    genre: "Comedy",
    image: "./images/free guy.jpeg",
    desc: "When Guy, a bank teller, learns that he is a non-player character in a bloodthirsty, open-world video game, he goes on to become the hero of the story and takes the responsibility of saving the world.",
  },
  {
    name: "hot fuzz",
    genre: "Comedy",
    image: "./images/hot fuzz.jpeg",
    desc: "An honest police officer is transferred to the countryside after his superiors object to his sincerity. However, he decides to prove his mettle by solving a series of murders in the town.",
  },
  {
    name: "minions",
    genre: "Comedy",
    image: "./images/minions.jpeg",
    desc: "Minions Stuart, Kevin, and Bob are recruited by Scarlet Overkill, a supervillain who, alongside her inventor husband Herb, hatches a plot to take over the world.",
  },
  {
    name: "rs doubtfire",
    genre: "Comedy",
    image: "./images/mrs doubtfire.jpeg",
    desc: "Daniel, a divorced actor, disguises himself as Mrs Doubtfire, an ageing female Scottish housekeeper, in order to work in his ex-wife's house and spend more time with his children.",
  },
  {
    name: "no hard feelings",
    genre: "Comedy",
    image: "./images/no hard feelings.jpeg",
    desc: "On the brink of losing her childhood home, a desperate woman agrees to date a wealthy couple's introverted and awkward 19-year-old son. However, he proves to be more of a challenge than she expected, and time is running out before she loses it all.",
  },
  {
    name: "red notice",
    genre: "Comedy",
    image: "./images/red notice.jpeg",
    desc: "In the world of international crime, an Interpol agent attempts to hunt down and capture the world's most wanted art thief.",
  },
  {
    name: "sing",
    genre: "Comedy",
    image: "./images/sing.jpeg",
    desc: "Dapper Koala Buster Moon presides over a once-grand theater that has fallen on hard times. An eternal optimist, and a bit of a scoundrel, he loves his theater above all and will do anything to preserve it. Facing the crumbling of his life's ambition, he takes one final chance to restore his fading jewel to its former glory by producing the world's greatest singing competition. Five contestants emerge: a mouse, a timid elephant, a pig, a gorilla and a punk-rock porcupine.",
  },
  {
    name: "the hangover",
    genre: "Comedy",
    image: "./images/the hangover.jpeg",
    desc: "Doug and his three best men go to Las Vegas to celebrate his bachelor party. However, the three best men wake up the next day with a hangover and realise that Doug is missing.",
  },
  {
    name: "wedding crashers",
    genre: "Comedy",
    image: "./images/wedding crashers.jpeg",
    desc: "Two womanisers who love to gatecrash weddings find themselves in a fix when one of them falls in love with the bridesmaid at one such wedding.",
  },
  {
    name: "yes man",
    genre: "Comedy",
    image: "./images/yes man.jpeg",
    desc: "Carl, a lonely man with low self-esteem, participates in a self-help programme that challenges him to say yes to everything in life for an entire year.",
  },
  {
    name: "ace ventura",
    genre: "Comedy",
    image: "./images/ace ventura.jpeg",
    desc: "Ace Ventura, a private detective, specialises in finding lost animals. When Snowflake, a football team's aquatic mascot, goes missing, he is called to investigate.",
  },
  {
    name: "central intelligence",
    genre: "Comedy",
    image: "./images/central intelligence.jpeg",
    desc: "Accountant Calvin Joyner's life changes drastically after Bob Stone, his old classmate from high school, drags him into a dubious covert operation.",
  },
  {
    name: "coming to america",
    genre: "Comedy",
    image: "./images/coming to america.jpeg",
    desc: "On his 21st birthday, African Prince Akeem has to marry a woman he has never seen. Determined to break tradition, he goes to America to look for one he can truly love and respect.",
  },
  {
    name: "deadpool",
    genre: "Comedy",
    image: "./images/deadpool.jpeg",
    desc: "Ajax, a twisted scientist, experiments on Wade Wilson, a mercenary, to cure him of cancer and give him healing powers. However, the experiment leaves Wade disfigured and he decides to exact revenge.",
  },
  {
    name: "alexander",
    genre: "Action",
    image: "./images/alexander.jpeg",
    desc: "After defeating the Persian Empire, King Alexander of Macedonia leads his army across the continent, venturing further than any person from his country has ever gone.",
  },
  {
    name: "baby driver",
    genre: "Action",
    image: "./images/baby driver.jpeg",
    desc: "Doc forces Baby, a former getaway driver, to partake in a heist, threatening to hurt his girlfriend if he refuses. But the plan goes awry when their arms dealers turn out to be undercover officers.",
  },
  {
    name: "brightburn",
    genre: "Action",
    image: "./images/brightburn.jpeg",
    desc: "Tori and Kyle find a baby boy in a spaceship and adopt him as their own child, Brandon. However, after turning 12, Brandon learns that he has superpowers and begins to use them for sinister purposes.",
  },
  {
    name: "bullet train",
    genre: "Action",
    image: "./images/bullet train.jpeg",
    desc: "Ladybug, a professional assassin, is assigned to retrieve a briefcase from a bullet train. Soon, he finds himself battling many other killers who board the same train but with a different objective.",
  },
  {
    name: "inside man",
    genre: "Action",
    image: "./images/inside man.jpeg",
    desc: "A detective desperately attempts to negotiate with the mastermind of a bank robbery that turns into a hostage situation. But, the involvement of a broker worsens the situation further.",
  },
  {
    name: "john wick",
    genre: "Action",
    image: "./images/john Wick.jpeg",
    desc: "John Wick, a retired hitman, is forced to return to his old ways after a group of Russian gangsters steal his car and kill a puppy gifted to him by his late wife.",
  },
  {
    name: "kingsman",
    genre: "Action",
    image: "./images/kingsman.jpeg",
    desc: "Gary 'Eggsy' Unwin faces several challenges when he gets recruited as a secret agent in a secret spy organisation in order to look for Richmond Valentine, an eco-terrorist.",
  },
  {
    name: "oblivion",
    genre: "Action",
    image: "./images/oblivion.jpeg",
    desc: "Jack Harper, a drone repairman stationed on Earth that has been ravaged by war with extraterrestrials, questions his identity after rescuing the woman who keeps appearing in his dreams.",
  },
  {
    name: "tenet",
    genre: "Action",
    image: "./images/tenet.jpeg",
    desc: "When a few objects that can be manipulated and used as weapons in the future fall into the wrong hands, a CIA operative, known as the Protagonist, must save the world.",
  },
  {
    name: "the gentlemen",
    genre: "Action",
    image: "./images/the gentlemen.jpeg",
    desc: "When cannabis mogul Mickey Pearson plans to sell his profitable marijuana empire following his retirement, it stimulates an array of wrongdoings in the name of greed.",
  },
  {
    name: "the goonies",
    genre: "Action",
    image: "./images/the goonies.jpeg",
    desc: "A group of children facing their last days together before a development paves over their homes stumble onto evidence of a pirate's treasure attracting the attention of a family of criminals.",
  },
  {
    name: "die hard",
    genre: "Action",
    image: "./images/diehard.jpeg",
    desc: "Hoping to spend Christmas with his estranged wife, detective John McClane arrives in LA. However, he learns about a hostage situation in an office building and his wife is one of the hostages.",
  },
  {
    name: "end game",
    genre: "Action",
    image: "./images/end game.jpg",
    desc: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
  },
  {
    name: "gladiator",
    genre: "Action",
    image: "./images/Gladiator.jpeg",
    desc: "Commodus takes over power and demotes Maximus, one of the preferred generals of his father, Emperor Marcus Aurelius. As a result, Maximus is relegated to fighting till death as a gladiator.",
  },
  {
    name: "jurassic park",
    genre: "Action",
    image: "./images/jurassic park.jpeg",
    desc: "John Hammond, an entrepreneur, opens a wildlife park containing cloned dinosaurs. However, a breakdown of the island's security system causes the creatures to escape and bring about chaos.",
  },
  {
    name: "lord of the rings",
    genre: "Action",
    image: "./images/lotr return of the king.jpeg",
    desc: "The former Fellowship members prepare for the final battle. While Frodo and Sam approach Mount Doom to destroy the One Ring, they follow Gollum, unaware of the path he is leading them to.",
  },
  {
    name: "matrix",
    genre: "Action",
    image: "./images/matrix.jpeg",
    desc: "Thomas Anderson, a computer programmer, is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.",
  },
  {
    name: "pulp fiction",
    genre: "Action",
    image: "./images/pulp fiction.png",
    desc: "In the realm of underworld, a series of incidents intertwines the lives of two Los Angeles mobsters, a gangster's wife, a boxer and two small-time criminals.",
  },
  {
    name: "star wars",
    genre: "Action",
    image: "./images/star wars 1970s.jpeg",
    desc: "Princess Leia gets abducted by the insidious Darth Vader. Luke Skywalker then teams up with a Jedi Knight, a pilot and two droids to free her and to save the galaxy from the violent Galactic Empire.",
  },
  {
    name: "The Terminator",
    genre: "Action",
    image: "./images/The Terminator.jpeg",
    desc: "Disguised as a human, a cyborg assassin known as a Terminator (Arnold Schwarzenegger) travels from 2029 to 1984 to kill Sarah Connor (Linda Hamilton). Sent to protect Sarah is Kyle Reese (Michael Biehn), who divulges the coming of Skynet, an artificial intelligence system that will spark a nuclear holocaust.",
  },
  {
    name: "the dark knight",
    genre: "Action",
    image: "./images/the dark knight.jpeg",
    desc: "After Gordon, Dent and Batman begin an assault on Gotham's organised crime, the mobs hire the Joker, a psychopathic criminal mastermind who offers to kill Batman and bring the city to its knees.",
  },
  {
    name: "argo",
    genre: "Drama",
    image: "./images/argo.jpeg",
    desc: "An exfiltration specialist masquerades as a Hollywood producer in order to rescue six Americans who are held captive in Tehran during the US hostage crisis in Iran.",
  },
  {
    name: "big fish",
    genre: "Drama",
    image: "./images/big fish.jpeg",
    desc: "Will Bloom returns home to care for his dying father, who had a penchant for telling unbelievable stories. After he passes away, Will tries to find out if his tales were really true.",
  },
  {
    name: "bohemian rhapsody",
    genre: "Drama",
    image: "./images/bohemian rhapsody.jpeg",
    desc: "With his impeccable vocal abilities, Freddie Mercury and his rock band, Queen, achieve superstardom. However, amidst his skyrocketing success, he grapples with his ego, sexuality and a fatal illness.",
  },
  {
    name: "dunkirk",
    genre: "Drama",
    image: "./images/dunkirk.jpeg",
    desc: "During World War II, soldiers from the British Empire, Belgium and France try to evacuate from the town of Dunkirk during a arduous battle with German forces.",
  },
  {
    name: "friends ith benefits",
    genre: "Drama",
    image: "./images/friends with benefits.jpeg",
    desc: "Jamie, a New York-based headhunter, gets Dylan to take a job at GQ. They soon become friends but things get complicated after the individually jaded lovers add sex to their relationship.",
  },
  {
    name: "grease",
    genre: "Drama",
    image: "./images/grease.jpeg",
    desc: "While vacationing in Australia, Danny and Sandy indulge in a passionate love affair with each other. They part ways believing they will not see each other again but fate has other plans.",
  },
  {
    name: "imitation game",
    genre: "Drama",
    image: "./images/imitation game.jpeg",
    desc: "Alan Turing, a British mathematician, joins the cryptography team to decipher the German enigma code. With the help of his fellow mathematicians, he builds a machine to crack the codes.",
  },
  {
    name: "jojo rabbit",
    genre: "Drama",
    image: "./images/jojo rabbit.jpeg",
    desc: "Hitler Youth cadet Jojo Betzler firmly believes in the ideals of Nazism manifested by his imaginary friend, Adolf Hitler. However, his foundations are shaken when he finds a Jewish girl in his house.",
  },
  {
    name: "pursuit of happiness",
    genre: "Drama",
    image: "./images/pursuit of happiness.jpeg",
    desc: "Tired of Chris's professional failures, his wife decides to separate, leaving him financially broke with an unpaid internship in a brokerage firm and his son's custody to deal with.",
  },
  {
    name: "last christmas",
    genre: "Drama",
    image: "./images/last christmas.jpeg",
    desc: "Influenced by ambivalence, Katarina, an aspiring singer, works as an elf in Central London. However, she gains a new perspective on life when she meets Tom.",
  },
  {
    name: "the greatest showman",
    genre: "Drama",
    image: "./images/the greatest showman.jpeg",
    desc: "P T Barnum becomes a worldwide sensation in the show business. His imagination and innovative ideas take him to the top of his game.",
  },
  {
    name: "yesterday",
    genre: "Drama",
    image: "./images/yesterday.jpeg",
    desc: "Jack, a struggling musician, meets with an accident during a blackout and wakes up to find out that only he remembers The Beatles. Later, he starts singing the band's songs to gain fame.",
  },
  {
    name: "101 dalmations",
    genre: "Drama",
    image: "./images/101 dalmation.jpeg",
    desc: "Cruella de Vil, an evil heiress, wants to make a fur coat for herself out of the skins of a hundred and one Dalmatian puppies. She makes an effort to kidnap them by hiring a group of thugs.",
  },
  {
    name: "forrest gump",
    genre: "Drama",
    image: "./images/forrest gump.jpeg",
    desc: "Forrest, a man with low IQ, recounts the early years of his life when he found himself in the middle of key historical events. All he wants now is to be reunited with his childhood sweetheart, Jenny.",
  },
  {
    name: "harry potter",
    genre: "Drama",
    image: "./images/harry potter.jpeg",
    desc: "Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him.",
  },
  {
    name: "pretty woman",
    genre: "Drama",
    image: "./images/pretty women.png",
    desc: "Edward, a rich entrepreneur, hires Vivian, a prostitute, to accompany him to a few social events. Trouble ensues when he falls in love with her and they try to bridge the gap between their worlds.",
  },
  {
    name: "the fault in our stars",
    genre: "Drama",
    image: "./images/the fault in our stars.jpeg",
    desc: "Two cancer-afflicted teenagers Hazel and Augustus meet at a cancer support group. The two of them embark on a journey to visit a reclusive author in Amsterdam.",
  },
  {
    name: "the nightmare before christmas",
    genre: "Drama",
    image: "./images/the nightmare before christmas.jpeg",
    desc: "Jack Skellington, a being from Halloween Town, finds Christmas Town and is instantly enchanted. The situation becomes riveting when his obsession with Christmas leads him to abduct Santa Claus.",
  },
  {
    name: "seven",
    genre: "Horror",
    image: "./images/seven.jpeg",
    desc: "A serial killer begins murdering people according to the seven deadly sins. Two detectives, one new to the city and the other about to retire, are tasked with apprehending the criminal.",
  },
  {
    name: "shutter island",
    genre: "Horror",
    image: "./images/shutter island.jpeg",
    desc: "Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.",
  },
  {
    name: "sinister",
    genre: "Horror",
    image: "./images/sinister.jpeg",
    desc: "Ellison, a crime writer, moves his family to a house that once witnessed gruesome murders. Soon, when his research leads him to some eerie footage, things take a dark and harrowing turn.",
  },
  {
    name: "split",
    genre: "Horror",
    image: "./images/split.jpeg",
    desc: "Kevin, who is suffering from dissociative identity disorder and has 23 alter egos, kidnaps three teenagers. They must figure out his friendly personas before he unleashes his 24th personality.",
  },
  {
    name: "world war Z",
    genre: "Horror",
    image: "./images/world war x.jpeg",
    desc: "Gerry, a former United Nations employee, unexpectedly finds himself in a race against time as he investigates a threatening virus that turns humans into zombies.",
  },
  {
    name: "wrong turn",
    genre: "Horror",
    image: "./images/wrong turn.jpeg",
    desc: "Chris and a group of five friends are left stranded deep in the middle of the woods after their cars collide. As they venture deeper into the woods, they face an uncertain and bloodcurdling fate.",
  },
  {
    name: "alien",
    genre: "Horror",
    image: "./images/alien.jpeg",
    desc: "The crew of a spacecraft, Nostromo, intercept a distress signal from a planet and set out to investigate it. However, to their horror, they are attacked by an alien which later invades their ship.",
  },
  {
    name: "halloween",
    genre: "Horror",
    image: "./images/halloween.jpeg",
    desc: "On a cold Halloween night in 1963, six year old Michael Myers brutally murdered his 17-year-old sister, Judith. He was sentenced and locked away for 15 years. But on October 30, 1978, while being transferred for a court date, a 21-year-old Michael Myers steals a car and escapes Smith's Grove. He returns to his quiet hometown of Haddonfield, Illinois, where he looks for his next victims.",
  },
  {
    name: "nightmare on elm street",
    genre: "Horror",
    image: "./images/nightmare on elm street.jpeg",
    desc: "A young girl realises that she must stay awake at any cost to avoid a clawed killer who wants to murder her and her friends one by one in their dreams.",
  },
  {
    name: "silence of the lambs",
    genre: "Horror",
    image: "./images/silence of the lambs.jpeg",
    desc: "Clarice Starling, an FBI agent, seeks help from Hannibal Lecter, a psychopathic serial killer and former psychiatrist, in order to apprehend another serial killer who has been claiming female victims.",
  },
];
