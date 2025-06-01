const players = [
  {
    "name": "Brock",
    "gen": 1,
    "gym": 1,
    "city": "Pewter City",
    "type": "Rock",
    "badge": "Boulder",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/brock.png",
    "Ace": "Onix",
    "acetype": "Rock/Ground"
  },
  {
    "name": "Misty",
    "gen": 1,
    "gym": 2,
    "city": "Cerulean City",
    "type": "Water",
    "badge": "Cascade",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/misty.png",
    "Ace": "Starmie",
    "acetype": "Water/Psychic"
  },
  {
    "name": "Lt. Surge",
    "gen": 1,
    "gym": 3,
    "city": "Vermilion City",
    "type": "Electric",
    "badge": "Thunder",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/ltsurge.png",
    "Ace": "Raichu",
    "acetype": "Electric"
  },
  {
    "name": "Erika",
    "gen": 1,
    "gym": 4,
    "city": "Celadon City",
    "type": "Grass",
    "badge": "Rainbow",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/erika.png",
    "Ace": "Vileplume",
    "acetype": "Grass/Poison"
  },
  {
    "name": "Koga",
    "gen": 1,
    "gym": 5,
    "city": "Fuchsia City",
    "type": "Poison",
    "badge": "Soul",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/koga.png",
    "Ace": "Weezing",
    "acetype": "Poison"
  },
  {
    "name": "Sabrina",
    "gen": 1,
    "gym": 6,
    "city": "Saffron City",
    "type": "Psychic",
    "badge": "Marsh",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/sabrina.png",
    "Ace": "Alakazam",
    "acetype": "Psychic"
  },
  {
    "name": "Blaine",
    "gen": 1,
    "gym": 7,
    "city": "Cinnabar Island",
    "type": "Fire",
    "badge": "Volcano",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/blaine.png",
    "Ace": "Arcanine",
    "acetype": "Fire"
  },
  {
    "name": "Giovanni",
    "gen": 1,
    "gym": 8,
    "city": "Viridian City",
    "type": "Ground",
    "badge": "Earth",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/giovanni.png",
    "Ace": "Rhydon",
    "acetype": "Ground/Rock"
  },
  {
    "name": "Falkner",
    "gen": 2,
    "gym": 1,
    "city": "Violet City",
    "type": "Flying",
    "badge": "Zephyr",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/falkner.png",
    "Ace": "Pidgeotto"
  },
  {
    "name": "Bugsy",
    "gen": 2,
    "gym": 2,
    "city": "Azalea Town",
    "type": "Bug",
    "badge": "Hive",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/bugsy.png",
    "Ace": "Scyther"
  },
  {
    "name": "Whitney",
    "gen": 2,
    "gym": 3,
    "city": "Goldenrod City",
    "type": "Normal",
    "badge": "Plain",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/whitney.png",
    "Ace": "Miltank"
  },
  {
    "name": "Morty",
    "gen": 2,
    "gym": 4,
    "city": "Ecruteak City",
    "type": "Ghost",
    "badge": "Fog",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/morty.png",
    "Ace": "Gengar"
  },
  {
    "name": "Chuck",
    "gen": 2,
    "gym": 5,
    "city": "Cianwood City",
    "type": "Fighting",
    "badge": "Storm",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/chuck.png",
    "Ace": "Poliwrath"
  },
  {
    "name": "Jasmine",
    "gen": 2,
    "gym": 6,
    "city": "Olivine City",
    "type": "Steel",
    "badge": "Mineral",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/jasmine.png",
    "Ace": "Steelix"
  },
  {
    "name": "Pryce",
    "gen": 2,
    "gym": 7,
    "city": "Mahogany Town",
    "type": "Ice",
    "badge": "Glacier",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/pryce.png",
    "Ace": "Piloswine"
  },
  {
    "name": "Clair",
    "gen": 2,
    "gym": 8,
    "city": "Blackthorn City",
    "type": "Dragon",
    "badge": "Rising",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/clair.png",
    "Ace": "Kingdra"
  },
  {
    "name": "Roxanne",
    "gen": 3,
    "gym": 1,
    "city": "Rustboro City",
    "type": "Rock",
    "badge": "Stone",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/roxanne.png",
    "Ace": "Nosepass"
  },
  {
    "name": "Brawly",
    "gen": 3,
    "gym": 2,
    "city": "Dewford Town",
    "type": "Fighting",
    "badge": "Knuckle",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/brawly.png",
    "Ace": "Makuhita"
  },
  {
    "name": "Wattson",
    "gen": 3,
    "gym": 3,
    "city": "Mauville City",
    "type": "Electric",
    "badge": "Dynamo",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/wattson.png",
    "Ace": "Magneton"
  },
  {
    "name": "Flannery",
    "gen": 3,
    "gym": 4,
    "city": "Lavaridge Town",
    "type": "Fire",
    "badge": "Heat",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/flannery.png",
    "Ace": "Torkoal"
  },
  {
    "name": "Norman",
    "gen": 3,
    "gym": 5,
    "city": "Petalburg City",
    "type": "Normal",
    "badge": "Balance",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/norman.png",
    "Ace": "Slaking"
  },
  {
    "name": "Winona",
    "gen": 3,
    "gym": 6,
    "city": "Fortree City",
    "type": "Flying",
    "badge": "Feather",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/winona.png",
    "Ace": "Altaria"
  },
  {
    "name": "Tate & Liza",
    "gen": 3,
    "gym": 7,
    "city": "Mossdeep City",
    "type": "Psychic",
    "badge": "Mind",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/tateliza.png",
    "Ace": "Solrock"
  },
  {
    "name": "Wallace",
    "gen": 3,
    "gym": 8,
    "city": "Sootopolis City",
    "type": "Water",
    "badge": "Rain",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/wallace.png",
    "Ace": "Milotic"
  },
  {
    "name": "Roark",
    "gen": 4,
    "gym": 1,
    "city": "Oreburgh City",
    "type": "Rock",
    "badge": "Coal",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/roark.png",
    "Ace": "Cranidos"
  },
  {
    "name": "Gardenia",
    "gen": 4,
    "gym": 2,
    "city": "Eterna City",
    "type": "Grass",
    "badge": "Forest",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/gardenia.png",
    "Ace": "Roserade"
  },
  {
    "name": "Maylene",
    "gen": 4,
    "gym": 3,
    "city": "Veilstone City",
    "type": "Fighting",
    "badge": "Cobble",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/maylene.png",
    "Ace": "Lucario"
  },
  {
    "name": "Crasher Wake",
    "gen": 4,
    "gym": 4,
    "city": "Pastoria City",
    "type": "Water",
    "badge": "Fen",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/crasherwake.png",
    "Ace": "Floatzel"
  },
  {
    "name": "Fantina",
    "gen": 4,
    "gym": 5,
    "city": "Hearthome City",
    "type": "Ghost",
    "badge": "Relic",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/fantina.png",
    "Ace": "Mismagius"
  },
  {
    "name": "Byron",
    "gen": 4,
    "gym": 6,
    "city": "Canalave City",
    "type": "Steel",
    "badge": "Mine",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/byron.png",
    "Ace": "Bastiodon"
  },
  {
    "name": "Candice",
    "gen": 4,
    "gym": 7,
    "city": "Snowpoint City",
    "type": "Ice",
    "badge": "Icicle",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/candice.png",
    "Ace": "Abomasnow"
  },
  {
    "name": "Volkner",
    "gen": 4,
    "gym": 8,
    "city": "Sunyshore City",
    "type": "Electric",
    "badge": "Beacon",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/volkner.png",
    "Ace": "Luxray"
  },
  {
    "name": "Cilan",
    "gen": 5,
    "gym": 1,
    "city": "Striaton City",
    "type": "Grass",
    "badge": "Trio",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/cilan.png",
    "Ace": "Pansage"
  },
  {
    "name": "Chili",
    "gen": 5,
    "gym": 1,
    "city": "Striaton City",
    "type": "Fire",
    "badge": "Trio",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/chili.png",
    "Ace": "Pansear"
  },
  {
    "name": "Cress",
    "gen": 5,
    "gym": 1,
    "city": "Striaton City",
    "type": "Water",
    "badge": "Trio",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/cress.png",
    "Ace": "Panpour"
  },
  {
    "name": "Lenora",
    "gen": 5,
    "gym": 2,
    "city": "Nacrene City",
    "type": "Normal",
    "badge": "Basic",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/lenora.png",
    "Ace": "Watchog"
  },
  {
    "name": "Burgh",
    "gen": 5,
    "gym": 3,
    "city": "Castelia City",
    "type": "Bug",
    "badge": "Beetle",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/burgh.png",
    "Ace": "Leavanny"
  },
  {
    "name": "Elesa",
    "gen": 5,
    "gym": 4,
    "city": "Nimbasa City",
    "type": "Electric",
    "badge": "Bolt",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/elesa.png",
    "Ace": "Zebstrika"
  },
  {
    "name": "Clay",
    "gen": 5,
    "gym": 5,
    "city": "Driftveil City",
    "type": "Ground",
    "badge": "Quake",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/clay.png",
    "Ace": "Excadrill"
  },
  {
    "name": "Skyla",
    "gen": 5,
    "gym": 6,
    "city": "Mistralton City",
    "type": "Flying",
    "badge": "Jet",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/skyla.png",
    "Ace": "Swanna"
  },
  {
    "name": "Brycen",
    "gen": 5,
    "gym": 7,
    "city": "Icirrus City",
    "type": "Ice",
    "badge": "Icicle",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/brycen.png",
    "Ace": "Beartic"
  },
  {
    "name": "Drayden",
    "gen": 5,
    "gym": 8,
    "city": "Opelucid City",
    "type": "Dragon",
    "badge": "Legend",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/drayden.png",
    "Ace": "Haxorus"
  },
  {
    "name": "Iris",
    "gen": 5,
    "gym": 8,
    "city": "Opelucid City",
    "type": "Dragon",
    "badge": "Legend",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/iris.png",
    "Ace": "Haxorus"
  },
  {
    "name": "Viola",
    "gen": 6,
    "gym": 1,
    "city": "Santalune City",
    "type": "Bug",
    "badge": "Bug",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/viola.png",
    "Ace": "Vivillon"
  },
  {
    "name": "Grant",
    "gen": 6,
    "gym": 2,
    "city": "Cyllage City",
    "type": "Rock",
    "badge": "Cliff",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/grant.png",
    "Ace": "Tyrunt"
  },
  {
    "name": "Korrina",
    "gen": 6,
    "gym": 3,
    "city": "Shalour City",
    "type": "Fighting",
    "badge": "Rumble",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/korrina.png",
    "Ace": "Hawlucha"
  },
  {
    "name": "Ramos",
    "gen": 6,
    "gym": 4,
    "city": "Coumarine City",
    "type": "Grass",
    "badge": "Plant",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/ramos.png",
    "Ace": "Gogoat"
  },
  {
    "name": "Clemont",
    "gen": 6,
    "gym": 5,
    "city": "Lumiose City",
    "type": "Electric",
    "badge": "Voltage",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/clemont.png",
    "Ace": "Heliolisk"
  },
  {
    "name": "Valerie",
    "gen": 6,
    "gym": 6,
    "city": "Laverre City",
    "type": "Fairy",
    "badge": "Fairy",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/valerie.png",
    "Ace": "Sylveon"
  },
  {
    "name": "Olympia",
    "gen": 6,
    "gym": 7,
    "city": "Anistar City",
    "type": "Psychic",
    "badge": "Psychic",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/olympia.png",
    "Ace": "Meowstic"
  },
  {
    "name": "Wulfric",
    "gen": 6,
    "gym": 8,
    "city": "Snowbelle City",
    "type": "Ice",
    "badge": "Iceberg",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/wulfric.png",
    "Ace": "Avalugg"
  },
  {
    "name": "Hala",
    "gen": 7,
    "gym": 1,
    "city": "Iki Town",
    "type": "Fighting",
    "badge": "Melee",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/hala.png",
    "Ace": "Crabominable"
  },
  {
    "name": "Olivia",
    "gen": 7,
    "gym": 2,
    "city": "Konikoni City",
    "type": "Rock",
    "badge": "Rock",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/olivia.png",
    "Ace": "Lycanroc"
  },
  {
    "name": "Nanu",
    "gen": 7,
    "gym": 3,
    "city": "Malie City",
    "type": "Dark",
    "badge": "Dark",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/nanu.png",
    "Ace": "Persian"
  },
  {
    "name": "Hapu",
    "gen": 7,
    "gym": 4,
    "city": "Poni Island",
    "type": "Ground",
    "badge": "Ground",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/hapu.png",
    "Ace": "Mudsdale"
  },
  {
    "name": "Milo",
    "gen": 8,
    "gym": 1,
    "city": "Turffield",
    "type": "Grass",
    "badge": "Grass",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/milo.png",
    "Ace": "Eldegoss"
  },
  {
    "name": "Nessa",
    "gen": 8,
    "gym": 2,
    "city": "Hulbury",
    "type": "Water",
    "badge": "Water",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/nessa.png",
    "Ace": "Drednaw"
  },
  {
    "name": "Kabu",
    "gen": 8,
    "gym": 3,
    "city": "Motostoke",
    "type": "Fire",
    "badge": "Fire",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/kabu.png",
    "Ace": "Centiskorch"
  },
  {
    "name": "Bea",
    "gen": 8,
    "gym": 4,
    "city": "Stow-on-Side",
    "type": "Fighting",
    "badge": "Fighting",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/bea.png",
    "Ace": "Machamp"
  },
  {
    "name": "Allister",
    "gen": 8,
    "gym": 4,
    "city": "Stow-on-Side",
    "type": "Ghost",
    "badge": "Ghost",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/allister.png",
    "Ace": "Gengar"
  },
  {
    "name": "Opal",
    "gen": 8,
    "gym": 5,
    "city": "Ballonlea",
    "type": "Fairy",
    "badge": "Fairy",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/opal.png",
    "Ace": "Alcremie"
  },
  {
    "name": "Gordie",
    "gen": 8,
    "gym": 6,
    "city": "Circhester",
    "type": "Rock",
    "badge": "Rock",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/gordie.png",
    "Ace": "Coalossal"
  },
  {
    "name": "Melony",
    "gen": 8,
    "gym": 6,
    "city": "Circhester",
    "type": "Ice",
    "badge": "Ice",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/melony.png",
    "Ace": "Lapras"
  },
  {
    "name": "Piers",
    "gen": 8,
    "gym": 7,
    "city": "Spikemuth",
    "type": "Dark",
    "badge": "Dark",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/piers.png",
    "Ace": "Obstagoon"
  },
  {
    "name": "Raihan",
    "gen": 8,
    "gym": 8,
    "city": "Hammerlocke",
    "type": "Dragon",
    "badge": "Dragon",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/raihan.png",
    "Ace": "Duraludon"
  },
  {
    "name": "Katy",
    "gen": 9,
    "gym": 1,
    "city": "Cortondo",
    "type": "Bug",
    "badge": "Bug",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/katy.png",
    "Ace": "Lokix"
  },
  {
    "name": "Brassius",
    "gen": 9,
    "gym": 2,
    "city": "Artazon",
    "type": "Grass",
    "badge": "Grass",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/brassius.png",
    "Ace": "Sudowoodo"
  },
  {
    "name": "Iono",
    "gen": 9,
    "gym": 3,
    "city": "Levincia",
    "type": "Electric",
    "badge": "Electric",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/iono.png",
    "Ace": "Mismagius"
  },
  {
    "name": "Kofu",
    "gen": 9,
    "gym": 4,
    "city": "Cascarrafa",
    "type": "Water",
    "badge": "Water",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/kofu.png",
    "Ace": "Crabominable"
  },
  {
    "name": "Larry",
    "gen": 9,
    "gym": 5,
    "city": "Medali",
    "type": "Normal",
    "badge": "Normal",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/larry.png",
    "Ace": "Staraptor"
  },
  {
    "name": "Ryme",
    "gen": 9,
    "gym": 6,
    "city": "Montenevera",
    "type": "Ghost",
    "badge": "Ghost",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/ryme.png",
    "Ace": "Houndstone"
  },
  {
    "name": "Tulip",
    "gen": 9,
    "gym": 7,
    "city": "Alfornada",
    "type": "Psychic",
    "badge": "Psychic",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/tulip.png",
    "Ace": "Florges"
  },
  {
    "name": "Grusha",
    "gen": 9,
    "gym": 8,
    "city": "Glaseado",
    "type": "Ice",
    "badge": "Ice",
    "sprite": "https://play.pokemonshowdown.com/sprites/trainers/grusha.png",
    "Ace": "Altaria"
  }
]

console.log(players)