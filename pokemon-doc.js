var numTypes = {
    0: "Normal",
    1: "Fire",
    2: "Water",
    3: "Grass",
    4: "Electric",
    5: "Ice",
    6: "Fighting",
    7: "Poison",
    8: "Ground",
    9: "Flying",
    10: "Psychic",
    11: "Bug",
    12: "Rock",
    13: "Ghost",
    14: "Dragon",
    15: "Dark",
    16: "Steel",
    17: "Fairy"
};
var typeNums = {
    "Normal": 0,
    "Fire": 1,
    "Water": 2,
    "Grass": 3,
    "Electric": 4,
    "Ice": 5,
    "Fighting": 6,
    "Poison": 7,
    "Ground": 8,
    "Flying": 9,
    "Psychic": 10,
    "Bug": 11,
    "Rock": 12,
    "Ghost": 13,
    "Dragon": 14,
    "Dark": 15,
    "Steel": 16,
    "Fairy": 17
}
// Counts as 289 possible Attack :-: Pokémon Matches

// 5 = 0.5 [short]
var mat = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 0, 1, 1, 5, 1], // Normal
    [1, 5, 5, 2, 1, 2, 1, 1, 1, 1, 1, 2, 5, 1, 5, 1, 2, 1], // Fire
    [1, 2, 5, 5, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 5, 1, 1, 1], // Water
    [1, 5, 2, 5, 1, 1, 1, 5, 2, 5, 1, 5, 2, 1, 5, 1, 5, 1], // Grass
    [1, 1, 2, 5, 5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 5, 1, 1, 1], // Electro
    [1, 5, 5, 2, 1, 5, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 5, 1], // Ice
    [2, 1, 1, 1, 1, 2, 1, 5, 1, 5, 5, 5, 2, 0, 1, 2, 2, 5], // Fighting
    [1, 1, 1, 2, 1, 1, 1, 5, 5, 1, 1, 1, 5, 5, 1, 1, 0, 2], // Poison
    [1, 2, 1, 5, 2, 1, 1, 2, 1, 0, 1, 5, 2, 1, 1, 1, 2, 1], // Ground
    [1, 1, 1, 2, 5, 1, 2, 1, 1, 1, 1, 2, 5, 1, 1, 1, 5, 1], // Flying
    [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 5, 1, 1, 1, 1, 0, 5, 1], // Psychic
    [1, 5, 1, 2, 1, 1, 5, 5, 1, 5, 2, 1, 1, 5, 1, 2, 5, 5], // Bug
    [1, 2, 1, 1, 1, 2, 5, 1, 5, 2, 1, 2, 1, 1, 1, 1, 5, 1], // Rock
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 5, 1, 1], // Ghost
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 5, 0], // Dragon
    [1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 2, 1, 1, 2, 1, 5, 1, 5], // Dark
    [1, 5, 5, 1, 5, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 5, 2], // Steel
    [1, 5, 1, 1, 1, 1, 2, 5, 1, 1, 1, 1, 1, 1, 2, 2, 5, 1]  // Fairy
];

//var attack = Math.floor(Math.random() * 18);
//var def_pokemon = Math.floor(Math.random() * 18);

//function eval(attacker, defender){
//    return mat[attacker][defender];
//}

//Amount of Standalone Types
var maxTypes = 17;

var Pokemons = {
    // Gen I (151)
    "Bulbasaur":  ["Grass", "Poison"],
    "Ivysaur":    ["Grass", "Poison"],
    "Venusaur":   ["Grass", "Poison"],
    "Charmander": ["Fire"],
    "Charmeleon": ["Fire"],
    "Charizard":  ["Fire"],
    "Squirtle":   ["Water"],
    "Wartortle":  ["Water"],
    "Blastoise":  ["Water"],
    "Blastois":   ["Water", "Water"],
    "Caterpie":   ["Bug"],
    "Metapod":    ["Bug"],
    "Butterfree": ["Bug", "Flying"],
    "Weedle":     ["Bug", "Poison"],
    "Kakuna":     ["Bug", "Poison"],
    "Beedrill":   ["Bug", "Poison"],
    "Pidgey":     ["Normal", "Flying"],
    "Pidgeotto":  ["Normal", "Flying"],
    "Pidgeot":    ["Normal", "Flying"],
    "Rattata":    ["Normal"],
    "Raticate":   ["Normal"],
    "Spearow":    ["Normal", "Flying"],
    "Fearow":     ["Normal", "Flying"],
    "Ekans":      ["Poison"],
    "Arbok":      ["Poison"],
    "Pikachu":    ["Electric"],
    "Raichu":     ["Electric"],
    "Sandshrew":  ["Ground"],
    "Sandslash":  ["Ground"],
    "Nidoran":    ["Poison"],
    "Nidorina":   ["Poison"],
    "Nidoqueen":  ["Poison", "Ground"],
    "Nidorino":   ["Poison"],
    "Nidoking":   ["Poison", "Ground"],
    "Clefairy":   ["Fairy"],
    "Clefable":   ["Fairy"],
    "Vulpix":     ["Fire"],
    "Ninetales":  ["Fire"],
    "Jigglypuff": ["Normal", "Fairy"],
    "Wigglytuff": ["Normal", "Fairy"],
    "Zubat":      ["Poison", "Flying"],
    "Golbat":     ["Poison", "Flying"],
    "Oddish":     ["Grass", "Poison"],
    "Gloom":      ["Grass", "Poison"],
    "Vileplume":  ["Grass", "Poison"],
    "Paras":      ["Bug", "Grass"],
    "Parasect":   ["Bug", "Grass"],
    "Venonat":    ["Bug", "Poison"],
    "Venomoth":   ["Bug", "Poison"],
    "Diglett":    ["Ground"],
    "Dugtrio":    ["Ground"],
    "Meowth":     ["Normal"],
    "Persian":    ["Normal"],
    "Psyduck":    ["Water"],
    "Golduck":    ["Water"],
    "Mankey":     ["Fighting"],
    "Primeape":   ["Fighting"],
    "Growlithe":  ["Fire"],
    "Arcanine":   ["Fire"],
    "Poliwag":    ["Water"],
    "Poliwhirl":  ["Water"],
    "Poliwrath":  ["Water", "Fighting"],
    "Ninumini":   ["Dark", "Fairy"],
    "Abra":       ["Psychic"],
    "Kadabra":    ["Psychic"],
    "Alakazam":   ["Psychic"],
    "Machop":     ["Fighting"],
    "Machoke":    ["Fighting"],
    "Machamp":    ["Fighting"],
    "Bellsprout": ["Grass", "Poison"],
    "Weepinbell": ["Grass", "Poison"],
    "Victreebel": ["Grass", "Poison"],
    "Tentacool":  ["Water", "Poison"],
    "Tentacruel": ["Water", "Poison"],
    "Geodude":    ["Rock", "Ground"],
    "Graveler":   ["Rock", "Ground"],
    "Golem":      ["Rock", "Ground"],
    "Ponyta":     ["Fire"],
    "Rapidash":   ["Fire"],
    "Slowpoke":   ["Water", "Psychic"],
    "Slowbro":    ["Water", "Psychic"],
    "Magnemite":  ["Electric", "Steel"],
    "Magneton":   ["Electric", "Steel"],
    "Farfetch'd": ["Normal", "Flying"],
    "Doduo":      ["Normal", "Flying"],
    "Dodrio":     ["Normal", "Flying"],
    "Seel":       ["Water"],
    "Dewgong":    ["Water", "Ice"],
    "Grimer":     ["Poison"],
    "Muk":        ["Poison"],
    "Shellder":   ["Water"],
    "Cloyster":   ["Water", "Ice"],
    "Gastly":     ["Ghost", "Poison"],
    "Haunter":    ["Ghost", "Poison"],
    "Gengar":     ["Ghost", "Poison"],
    "Onix":       ["Rock", "Ground"],
    "Drowzee":    ["Psychic"],
    "Hypno":      ["Psychic"],
    "Krabby":     ["Water"],
    "Kingler":    ["Water"],
    "Voltorb":    ["Electric"],
    "Electrode":  ["Electric"],
    "Exeggcute":  ["Grass", "Psychic"],
    "Exeggutor":  ["Grass", "Psychic"],
    "Cubone":     ["Ground"],
    "Marowak":    ["Ground"],
    "Hitmonlee":  ["Fighting"],
    "Hitmonchan": ["Fighting"],
    "Lickitung":  ["Normal"],
    "Koffing":    ["Poison"],
    "Weezing":    ["Poison"],
    "Rhyhorn":    ["Ground", "Rock"],
    "Rhydon":     ["Ground", "Rock"],
    "Chansey":    ["Normal"],
    "Tangela":    ["Grass"],
    "Kangaskhan": ["Normal"],
    "Horsea":     ["Water"],
    "Seadra":     ["Water"],
    "Goldeen":    ["Water"],
    "Seaking":    ["Water"],
    "Staryu":     ["Water"],
    "Starmie":    ["Water", "Psychic"],
    "Mr. Mime":   ["Psychic", "Fairy"],
    "Scyther":    ["Bug", "Flying"],
    "Jynx":       ["Ice", "Psychic"],
    "Electabuzz": ["Electric"],
    "Magmar":     ["Fire"],
    "Pinsir":     ["Bug"],
    "Tauros":     ["Normal"],
    "Magikarp":   ["Water"],
    "Gyarados":   ["Water", "Flying"],
    "Lapras":     ["Water", "Ice"],
    "Ditto":      ["Normal"],
    "Eevee":      ["Normal"],
    "Vaporeon":   ["Water"],
    "Jolteon":    ["Electric"],
    "Flareon":    ["Fire"],
    "Lesbeon":    ["Ground"],
    "Porygon":    ["Normal"],
    "Omanyte":    ["Rock", "Water"],
    "Omastar":    ["Rock", "Water"],
    "Kabuto":     ["Rock", "Water"],
    "Kabutops":   ["Rock", "Water"],
    "Aerodactyl": ["Rock", "Flying"],
    "Snorlax":    ["Normal"],
    "Articuno":   ["Ice", "Flying"],
    "Zapdos":     ["Electric", "Flying"],
    "Moltres":    ["Fire", "Flying"],
    "Dratini":    ["Dragon"],
    "Dragonair":  ["Dragon"],
    "Dragonite":  ["Dragon", "Flying"],
    "Mewtwo":     ["Psychic"],
    "Mew":        ["Psychic"],

    // Special P
    "Tom":        ["Normal", "Ghost"],
    "Ruben":      ["Fire", "Psychic"],
    "Luca":       ["Fighting", "Normal"],
    "Yannick":    ["Poison", "Psychic"],
    "Younes":     ["Poison", "Psychic"],
    "Ati":        ["Ground", "Steel"],
    "Addi":       ["Ground", "Steel"],
    "Atilla":     ["Ground", "Steel"],
    "Benedikt":   ["Fire", "Poison"],
    "Bene":       ["Fire", "Poison"],
    "Ida":        ["Psychic", "Dragon"],
    "Chris":      ["Fighting", "Electric"],
    "Christoph":  ["Fighting", "Electric"],
    "Christian":  ["Fighting", "Electric"],
    "Andrej":     ["Electric", "Dark"],
    "Andrew":     ["Electric", "Dark"],
    "Ninu":       ["Dark", "Fairy"],

    // Gen II (99)
    "Chikorita": ["Grass"],
    "Bayleef": ["Grass"],
    "Meganium": ["Grass"],
    "Cyndaquil": ["Fire"],
    "Quilava": ["Fire"],
    "Typhlosion": ["Fire"],
    "Totodile": ["Water"],
    "Croconaw": ["Water"],
    "Feraligatr": ["Water"],
    "Senret": ["Normal"],
    "Furret": ["Normal"],
    "Hoothoot": ["Normal", "Flying"],
    "Noctowl": ["Normal", "Flying"],
    "Ledyba": ["Bug", "Flying"],
    "Ledian": ["Bug", "Flying"],
    "Spinarak": ["Bug", "Poison"],
    "Ariados": ["Bug", "Poison"],
    "Crobat": ["Poison", "Flying"],
    "Chinchou": ["Water", "Electric"],
    "Lanturn": ["Water", "Electric"],
    "Pichu": ["Electric"],
    "Cleffa": ["Fairy"],
    "Igglybuff": ["Normal", "Fairy"],
    "Togepi": ["Fairy"],
    "Togetic": ["Fairy", "Flying"],
    "Natu": ["Psychic", "Flying"],
    "Xatu": ["Psychic", "Flying"],
    "Mareep": ["Electric"],
    "Flaaffy": ["Electric"],
    "Ampharos": ["Electric"],
    "Bellossom": ["Grass"],
    "Marill": ["Water", "Fairy"],
    "Azumarill": ["Water", "Fairy"],
    "Sudowoodo": ["Rock"],
    "Politoed": ["Water"],
    "Hoppip": ["Grass", "Flying"],
    "Skiploom": ["Grass", "Flying"],
    "Jumpluff": ["Grass", "Flying"],
    "Aipom": ["Normal"],
    "Sunkern": ["Grass"],
    "Sunflora": ["Grass"],
    "Ninunja": ["Dark", "Fairy"],
    "Yanma": ["Bug", "Flying"],
    "Wooper": ["Water", "Ground"],
    "Quagsire": ["Water", "Ground"],
    "Espeon": ["Psychic"],
    "Umbreon": ["Dark"],
    "Murkrow": ["Dark", "Flying"],
    "Slowking": ["Water", "Psychic"],
    "Misdreavus": ["Ghost"],
    "Unown": ["Psychic"],
    "Wobbuffet": ["Psychic"],
    "Girafarig": ["Normal", "Psychic"],
    "Pineco": ["Bug"],
    "Forretress": ["Bug", "Steel"],
    "Dunsparce": ["Normal"],
    "Gligar": ["Ground", "Flying"],
    "Steelix": ["Steel", "Ground"],
    "Snubbull": ["Fairy"],
    "Granbull": ["Fairy"],
    "Qwilfish": ["Water", "Poison"],
    "scizor": ["Bug", "Steel"],
    "Shuckle": ["Bug", "Rock"],
    "Heracross": ["Bug", "Fighting"],
    "Sneasel": ["Dark", "Ice"],
    "Teddiursa": ["Normal"],
    "Ursaring": ["Normal"],
    "Slugma": ["Fire"],
    "Magcargo": ["Fire", "Rock"],
    "Swinub": ["Ice", "Ground"],
    "Piloswine": ["Ice", "Ground"],
    "Corsola": ["Water", "Rock"],
    "Remoraid": ["Water"],
    "Octillery": ["Water"],
    "Delibird":["Ice", "Flying"],
    "Mantine": ["Water", "Flying"],
    "Skarmory": ["Steel", "Flying"],
    "Houndour": ["Dark", "Fire"],
    "Houndoom": ["Dark", "Fire"],
    "Kingdra": ["Water", "Dragon"],
    "Phanpy": ["Ground"],
    "Donphan": ["Ground"],
    "Porygon": ["Normal"],
    "Stantler": ["Normal"],
    "Smeargle": ["Normal"],
    "Tyrogue": ["Fighting"],
    "Hitmontop": ["Fighting"],
    "Smoochum": ["Ice", "Psychic"],
    "Elekid": ["Electric"],
    "Magby": ["Fire"],
    "Miltank": ["Normal"],
    "Blissey": ["Normal"],
    "Raikou": ["Electric"],
    "Entei": ["Fire"],
    "Suicune": ["Water"],
    "Larvitar": ["Rock", "Ground"],
    "Pupitar": ["Rock", "Ground"],
    "Tyranitar": ["Rock", "Dark"],
    "Lugia": ["Psychic", "Flying"],
    "Ho-Oh": ["Fire", "Flying"],
    "Celebi": ["Psychic", "Grass"],

    // Gen III (134)
    "Treecko": ["Grass"],
    "Grovyle": ["Grass"],
    "Sceptile": ["Grass"],
    "Torchic": ["Fire"],
    "Combusken": ["Fire"],
    "Blaziken": ["Fire", "Fighting"],
    "Mudkip": ["Water"],
    "Marshtomp": ["Water", "Ground"],
    "Swampert": ["Water", "Ground"],
    "Poochyena": ["Dark"],
    "Mightyena": ["Dark"],
    "Zigzagoon": ["Normal"],
    "Linoone": ["Normal"],
    "Wurmple": ["Bug"],
    "Silcoon": ["Bug"],
    "Beautifly": ["Bug", "Flying"],
    "Cascoon": ["Bug"],
    "Dustox": ["Bug", "Poison"],
    "Lotad": ["Water", "Grass"],
    "Lombre": ["Water", "Grass"],
    "Ludicolo": ["Water", "Grass"],
    "Seedot": ["Grass"],
    "Nuzleaf": ["Grass", "Dark"],
    "Shiftry": ["Grass", "Dark"],
    "Taillow": ["Normal", "Flying"],
    "Swellow": ["Normal", "Flying"],
    "Wingull": ["Water", "Flying"],
    "Pelipper": ["Water", "Flying"],
    "Ralts": ["Psychic", "Fairy"],
    "Kirlia": ["Psychic", "Fairy"],
    "Gardevoir": ["Psychic", "Fairy"],
    "Surskit": ["Bug", "Water"],
    "Masquerain": ["Bug", "Flying"],
    "Shroomish": ["Grass"],
    "Breloom": ["Grass", "Fighting"],
    "Slakoth": ["Normal"],
    "Vigoroth": ["Normal"],
    "Slaking": ["Normal"],
    "Nincada": ["Bug", "Ground"],
    "Ninjask": ["Bug", "Flying"],
    "Shedinja": ["Bug", "Ghost"],
    "Whismur": ["Normal"],
    "Loudred": ["Normal"],
    "Exploud": ["Normal"],
    "Makuhita": ["Fighting"],
    "Hariyama": ["Fighting"],
    "Azurill": ["Normal", "Fairy"],
    "Nosepass": ["Rock"],
    "Skitty": ["Normal"],
    "Delcatty": ["Normal"],
    "Sableye": ["Dark", "Ghost"],
    "Mawile": ["Steel", "Fairy"],
    "Aron": ["Steel", "Rock"],
    "Lairon": ["Steel", "Rock"],
    "Aggron": ["Steel", "Rock"],
    "Meditite": ["Fighting", "Psychic"],
    "Medicham": ["Fighting", "Psychic"],
    "Electrike": ["Electric"],
    "Manectric": ["Electric"],
    "Plusle": ["Electric"],
    "Minun": ["Electric"],
    "Volbeat": ["Bug"],
    "Illumise": ["Bug"],
    "Roselia": ["Grass", "Poison"],
    "Gulpin": ["Poison"],
    "Swalot": ["Poison"],
    "Carvanha": ["Water", "Dark"],
    "Sharpedo": ["Water", "Dark"],
    "Wailmer": ["Water"],
    "Wailord": ["Water"],
    "Numel": ["Fire", "Ground"],
    "Camerupt": ["Fire", "Ground"],
    "Torkoal": ["Fire"],
    "Spoink": ["Psychic"],
    "Grumpig": ["Psychic"],
    "Spinda": ["Normal"],
    "Trapinch": ["Ground"],
    "Vibrava": ["Ground", "Dragon"],
    "Flygon": ["Ground", "Dragon"],
    "Cacnea": ["Grass"],
    "Cacturne": ["Grass", "Dark"],
    "Ninurai": ["Dark", "Fairy"],
    "Swablu": ["Normal", "Flying"],
    "Altaria": ["Dragon", "Flying"],
    "Zangoose": ["Normal"],
    "Seviper": ["Poison"],
    "Lunatone": ["Rock", "Psychic"],
    "Solrock": ["Rock", "Psychic"],
    "Barboach": ["Water", "Ground"],
    "Whiscash": ["Water", "Ground"],
    "Corphish": ["Water"],
    "Crawdaunt": ["Water", "Dark"],
    "Baltoy": ["Ground", "Psychic"],
    "Claydol": ["Ground", "Psychic"],
    "Lileep": ["Rock", "Grass"],
    "Cradily": ["Rock", "Grass"],
    "Anorith": ["Rock", "Bug"],
    "Armaldo": ["Rock", "Bug"],
    "Feebas": ["Water"],
    "Milotic": ["Water"],
    "Castform": ["Normal"],
    "Kecleon": ["Normal"],
    "Shuppet": ["Ghost"],
    "Banette": ["Ghost"],
    "Duskull": ["Ghost"],
    "Dusclops": ["Ghost"],
    "Tropius": ["Grass", "Flying"],
    "Chimecho": ["Psychic"],
    "Absol": ["Dark"],
    "Wynaut": ["Psychic"],
    "Snorunt": ["Ice"],
    "Glalie": ["Ice"],
    "Spheal": ["Ice", "Water"],
    "Sealeo": ["Ice", "Water"],
    "Walrein": ["Ice", "Water"],
    "Clamperl": ["Water"],
    "Huntail": ["Water"],
    "Gorebyss": ["Water"],
    "Relicanth": ["Water", "Rock"],
    "Luvdisc": ["Water"],
    "Bagon": ["Dragon"],
    "Shelgon": ["Dragon"],
    "Salamence": ["Dragon", "Flying"],
    "Beldum": ["Steel", "Psychic"],
    "Metang": ["Steel", "Psychic"],
    "Metagross": ["Steel", "Psychic"],
    "Regirock": ["Rock"],
    "Regice": ["Ice"],
    "Registeel": ["Steel"],
    "Latias": ["Dragon", "Psychic"],
    "Latios": ["Dragon", "Psychic"],
    "Laties": ["Dragon", "Psychic"],
    "Latiis": ["Dragon", "Psychic"],
    "Latius": ["Dragon", "Psychic"],
    "Kyogre": ["Water"],
    "Groudon": ["Ground"],
    "Rayquaza": ["Dragon", "Flying"],
    "Jirachi": ["Steel", "Psychic"],
    "Deoxys": ["Psychic"],

    // Gen IV (106)
    "Turtwig": ["Grass"],
    "Grotle": ["Grass"],
    "Torterra": ["Grass", "Ground"],
    "Chimchar": ["Fire"],
    "Monferno": ["Fire", "Fighting"],
    "Infernape": ["Fire", "Fighting"],
    "Piplup": ["Water"],
    "Prinplup": ["Water"],
    "Empoleon": ["Water", "Steel"],
    "Starly": ["Normal", "Flying"],
    "Staravia": ["Normal", "Flying"],
    "Staraptor": ["Normal", "Flying"],
    "Bidoof": ["Normal"],
    "Bibarel": ["Normal", "Water"],
    "Kricketot": ["Bug"],
    "Kricketune": ["Bug"],
    "Shinx": ["Electric"],
    "Luxio": ["Electric"],
    "Luxray": ["Electric"],
    "Budew": ["Grass", "Poison"],
    "Roserade": ["Grass", "Poison"],
    "Cranidos": ["Rock"],
    "Rampardos": ["Rock"],
    "Shieldon": ["Rock", "Steel"],
    "Bastiodon": ["Rock", "Steel"],
    "Burmy": ["Bug"],
    "Wormadam": ["Bug", "Grass"],
    "Mothim": ["Bug", "Flying"],
    "Combee": ["Bug", "Flying"],
    "Vespiquen": ["Bug", "Flying"],
    "Pachirisu": ["Electric"],
    "Buizel": ["Water"],
    "Floatzel": ["Water"],
    "Cherubi": ["Grass"],
    "Cherrim": ["Grass"],
    "Shellos": ["Water"],
    "Gastrodon": ["Water", "Ground"],
    "Ambipom": ["Normal"],
    "Drifloon": ["Ghost", "Flying"],
    "Drifblim": ["Ghost", "Flying"],
    "Buneary": ["Normal"],
    "Lopunny": ["Normal"],
    "Mismagius": ["Ghost"],
    "Honchkrow": ["Dark", "Flying"],
    "Glameow": ["Normal"],
    "Purugly": ["Normal"],
    "Chingling": ["Psychic"],
    "Stunky": ["Poison", "Dark"],
    "Skuntank": ["Poison", "Dark"],
    "Bronzor": ["Steel", "Psychic"],
    "Bronzong": ["Steel", "Psychic"],
    "Bonsly": ["Rock"],
    "Mime Jr.": ["Psychic", "Fairy"],
    "Happiny": ["Normal"],
    "Chatot": ["Normal", "Flying"],
    "Spiritomb": ["Ghost", "Dark"],
    "Gible": ["Dragon", "Ground"],
    "Gabite": ["Dragon", "Ground"],
    "Garchomp": ["Dragon", "Ground"],
    "Munchlax": ["Normal"],
    "Riolu": ["Fighting"],
    "Lucario": ["Fighting", "Steel"],
    "Hippopotas": ["Ground"],
    "Hippowdon": ["Ground"],
    "Skorupi": ["Poison", "Bug"],
    "Drapion": ["Poison", "Dark"],
    "Croagunk": ["Poison", "Fighting"],
    "Toxicroak": ["Poison", "Fighting"],
    "Carnivine": ["Grass"],
    "Finneon": ["Water"],
    "Lumineon": ["Water"],
    "Mantyke": ["Water", "Flying"],
    "Snover": ["Grass", "Ice"],
    "Abomasnow": ["Grass", "Ice"],
    "Weavile": ["Dark", "Ice"],
    "Magnezone": ["Electric", "Steel"],
    "Lickilicky": ["Normal"],
    "Rhyperior": ["Ground", "Rock"],
    "Tangrowth": ["Grass"],
    "Electivire": ["Electric"],
    "Magmortar": ["Fire"],
    "Togekiss": ["Fairy", "Flying"],
    "Yanmega": ["Bug", "Flying"],
    "Leafeon": ["Grass"],
    "Glaceon": ["Ice"],
    "Gliscor": ["Ground", "Flying"],
    "Mamoswine": ["Ice", "Ground"],
    "Porygon-Z": ["Normal"],
    "Gallade": ["Psychic", "Fighting"],
    "Probopass": ["Rock", "Steel"],
    "Dusknoir": ["Ghost"],
    "Froslass": ["Ice", "Ghost"],
    "Rotom": ["Electric", "Ghost"],
    "Uxie": ["Psychic"],
    "Mesprit": ["Psychic"],
    "Azelf": ["Psychic"],
    "Dialga": ["Steel", "Dragon"],
    "Palkia": ["Water", "Dragon"],
    "Heatran": ["Fire", "Steel"],
    "Regigigas": ["Normal"],
    "Giratina": ["Ghost", "Dragon"],
    "Cresselia": ["Psychic"],
    "Phione": ["Water"],
    "Manaphy": ["Water"],
    "Darkrai": ["Dark"],
    "Shaymin": ["Grass"],
    "Arceus": ["Normal"],

    // Gen V (155)
    "Victini": ["Psychic", "Fire"],
    "Snivy": ["Grass"],
    "Servine": ["Grass"],
    "Serperior": ["Grass"],
    "Tepig": ["Fire"],
    "Pignite": ["Fire", "Fighting"],
    "Emboar": ["Fire", "Fighting"],
    "Oshawott": ["Water"],
    "Dewott": ["Water"],
    "Samurott": ["Water"],
    "Patrat": ["Normal"],
    "Watchog": ["Normal"],
    "Lillipup": ["Normal"],
    "Herdier": ["Normal"],
    "Stoutland": ["Normal"],
    "Purrloin": ["Dark"],
    "Liepard": ["Dark"],
    "Pansage": ["Grass"],
    "Simisage": ["Grass"],
    "Pansear": ["Fire"],
    "Simisear": ["Fire"],
    "Panpour": ["Water"],
    "Simipour": ["Water"],
    "Munna": ["Psychic"],
    "Musharna": ["Psychic"],
    "Pidove": ["Normal", "Flying"],
    "Tranquill": ["Normal", "Flying"],
    "Unfezant": ["Normal", "Flying"],
    "Blitzle": ["Electric"],
    "Zebstrika": ["Electric"],
    "Roggenrola": ["Rock"],
    "Boldore": ["Rock"],
    "Gigalith": ["Rock"],
    "Woobat": ["Psychic", "Flying"],
    "Swoobat": ["Psychic", "Flying"],
    "Drilbur": ["Ground"],
    "Excadrill": ["Ground", "Steel"],
    "Audino": ["Normal"],
    "Timburr": ["Fighting"],
    "Gurdurr": ["Fighting"],
    "Conkeldurr": ["Fighting"],
    "Tympole": ["Water"],
    "Palpitoad": ["Water", "Ground"],
    "Seismitoad": ["Water", "Ground"],
    "Throh": ["Fighting"],
    "Sawk": ["Fighting"],
    "Sewaddle": ["Bug", "Grass"],
    "Swadloon": ["Bug", "Grass"],
    "Leavanny": ["Bug", "Grass"],
    "Venipede": ["Bug", "Poison"],
    "Whirlipede": ["Bug", "Poison"],
    "Scolipede": ["Bug", "Poison"],
    "Cottonee": ["Grass", "Fairy"],
    "Whimsicott": ["Grass", "Fairy"],
    "Petilil": ["Grass"],
    "Lilligant": ["Grass"],
    "Basculin": ["Water"],
    "Sandile": ["Ground", "Dark"],
    "Krokorok": ["Ground", "Dark"],
    "Krookodile": ["Ground", "Dark"],
    "Darumaka": ["Fire"],
    "Darmanitan": ["Fire"],
    "Maractus": ["Grass"],
    "Dwebble": ["Bug", "Rock"],
    "Crustle": ["Bug", "Rock"],
    "Scraggy": ["Dark", "Fighting"],
    "Scrafty": ["Dark", "Fighting"],
    "Sigilyph": ["Psychic", "Flying"],
    "Yamask": ["Ghost"],
    "Cofagrigus": ["Ghost"],
    "Tirtouga": ["Water", "Rock"],
    "Carracosta": ["Water", "Rock"],
    "Archen": ["Rock", "Flying"],
    "Archeops": ["Rock", "Flying"],
    "Trubbish": ["Poison"],
    "Garbodor": ["Poison"],
    "Zorua": ["Dark"],
    "Zoroark": ["Dark"],
    "Minccino": ["Normal"],
    "Cinccino": ["Normal"],
    "Gothita": ["Psychic"],
    "Gothorita": ["Psychic"],
    "Gothitelle": ["Psychic"],
    "Solosis": ["Psychic"],
    "Duosion": ["Psychic"],
    "Reuniclus": ["Psychic"],
    "Ducklett": ["Water", "Flying"],
    "Swanna": ["Water", "Flying"],
    "Vanillite": ["Ice"],
    "Vanillish": ["Ice"],
    "Vanilluxe": ["Ice"],
    "Deerling": ["Normal", "Grass"],
    "Sawsbuck": ["Normal", "Grass"],
    "Emolga": ["Electric", "Flying"],
    "Karrablast": ["Bug"],
    "Escavalier": ["Bug", "Steel"],
    "Foongus": ["Grass", "Poison"],
    "Amoonguss": ["Grass", "Poison"],
    "Frillish": ["Water", "Ghost"],
    "Jellicent": ["Water", "Ghost"],
    "Alolmomola": ["Water"],
    "Joltik": ["Bug", "Electric"],
    "Galvantula": ["Bug", "Electric"],
    "Ferroseed": ["Grass", "Steel"],
    "Ferrothorn": ["Grass", "Steel"],
    "Klink": ["Steel"],
    "Klang": ["Steel"],
    "Klinklang": ["Steel"],
    "Tynamo": ["Electric"],
    "Eelektrik": ["Electric"],
    "Eelektross": ["Electric"],
    "Elgyem": ["Psychic"],
    "Beheeyem": ["Psychic"],
    "Litwick": ["Ghost", "Fire"],
    "Lampent": ["Ghost", "Fire"],
    "Chandelure": ["Ghost", "Fire"],
    "Axew": ["Dragon"],
    "Fraxure": ["Dragon"],
    "Haxorus": ["Dragon"],
    "Chubchoo": ["Ice"],
    "Beartic": ["Ice"],
    "Cryogonal": ["Ice"],
    "Shelmet": ["Bug"],
    "Accelgor": ["Bug"],
    "Stunfisk": ["Bug"],
    "Mienfoo": ["Fighting"],
    "Mienshao": ["Fighting"],
    "Druddigon": ["Dragon"],
    "Golett": ["Ground", "Ghost"],
    "Golurk": ["Ground", "Ghost"],
    "Pawniard": ["Dark", "Steel"],
    "Bisharp": ["Dark", "Steel"],
    "Bouffalant": ["Normal"],
    "Rufflet": ["Normal", "Flying"],
    "Braviary": ["Normal", "Flying"],
    "Vullaby": ["Dark", "Flying"],
    "Mandibuzz": ["Dark", "Flying"],
    "Heatmor": ["Fire"],
    "Durant": ["Bug", "Steel"],
    "Deino": ["Dark", "Dragon"],
    "Zweilous": ["Dark", "Dragon"],
    "Hydreigon": ["Dark", "Dragon"],
    "Larvesta": ["Bug", "Fire"],
    "Volcarona": ["Bug", "Fire"],
    "Cobalion": ["Steel", "Fighting"],
    "Terrakion": ["Rock", "Fighting"],
    "Virizion": ["Grass", "Fighting"],
    "Tornadus": ["Flying"],
    "Thundurus": ["Electric", "Flying"],
    "Reshiram": ["Dragon", "Fire"],
    "Zekrom": ["Dragon", "Electric"],
    "Landorus": ["Ground", "Flying"],
    "Kyurem": ["Dragon", "Ice"],
    "Keldeo": ["Water", "Fighting"],
    "Meloetta": ["Normal", "Psychic"],
    "Genesect": ["Bug", "Steel"],

    // Gen VI (71)
    "Chespin": ["Grass"],
    "Quilladin": ["Grass"],
    "Chesnaught": ["Grass", "Fighting"],
    "Fennekin": ["Fire"],
    "Braixen": ["Fire"],
    "Delphox": ["Fire", "Psychic"],
    "Froakie": ["Water"],
    "Frogadier": ["Water"],
    "Greninja": ["Water", "Dark"],
    "Bunnelby": ["Normal"],
    "Diggersby": ["Normal", "Ground"],
    "Fletchling": ["Normal", "Flying"],
    "Fletchinder": ["Fire", "Flying"],
    "Talonflame": ["Fire", "Flying"],
    "Scatterbug": ["Bug"],
    "Spewpa": ["Bug"],
    "Vivillon": ["Bug", "Flying"],
    "Litleo": ["Fire", "Normal"],
    "Pyroar": ["Fire", "Normal"],
    "Flabébé": ["Fairy"],
    "Floette": ["Fairy"],
    "Florges": ["Fairy"],
    "Skiddo": ["Grass"],
    "Gogoat": ["Grass"],
    "Pancham": ["Fighting"],
    "Pangoro": ["Fighting"],
    "Furfrou": ["Normal"],
    "Espurr": ["Psychic"],
    "Meowstic": ["Psychic"],
    "Honedge": ["Steel", "Ghost"],
    "Doublade": ["Steel", "Ghost"],
    "Aegislash": ["Steel", "Ghost"],
    "Spritzee": ["Fairy"],
    "Aromatisse": ["Fairy"],
    "Swirlix": ["Fairy"],
    "Slurpuff": ["Fairy"],
    "Inkay": ["Dark", "Psychic"],
    "Malamar": ["Dark", "Psychic"],
    "Binacle": ["Rock", "Water"],
    "Barbaracle": ["Rock", "Water"],
    "Skrelp": ["Poison", "Water"],
    "Dragalge": ["Poison", "Dragon"],
    "Clauncher": ["Water"],
    "Clawitzer": ["Water"],
    "Helioptile": ["Electric", "Normal"],
    "Heliolisk": ["Electric", "Normal"],
    "Tyrunt": ["Rock", "Dragon"],
    "Tyrantrum": ["Rock", "Dragon"],
    "Amaura": ["Rock", "Ice"],
    "Aurorus": ["Rock", "Ice"],
    "Sylveon": ["Fairy"],
    "Hawlucha": ["Fighting", "Flying"],
    "Dedenne": ["Electric", "Fairy"],
    "Carbink": ["Rock", "Fairy"],
    "Goomy": ["Dragon"],
    "Sliggoo": ["Dragon"],
    "Goodra": ["Dragon"],
    "Klefki": ["Steel", "Fairy"],
    "Phantump": ["Ghost", "Grass"],
    "Trevenant": ["Ghost", "Grass"],
    "Pumpkaboo": ["Ghost", "Grass"],
    "Gourgeist": ["Ghost", "Grass"],
    "Bergmite": ["Ice"],
    "Avalugg": ["Ice"],
    "Noibat": ["Flying", "Dragon"],
    "Noivern": ["Flying", "Dragon"],
    "Xerneas": ["Fairy"],
    "Yveltal": ["Dark", "Flying"],
    "Zygarde": ["Dragon", "Ground"],
    "Diancie": ["Rock", "Fairy"],
    "Hoopa": ["Psychic", "Ghost"],
    "Volcanion": ["Fire", "Water"],

    // Gen VII (87)
    "Rowlet": ["Grass", "Flying"],
    "Dartrix": ["Grass", "Flying"],
    "Decidueye": ["Grass", "Ghost"],
    "Litten": ["Fire"],
    "Torracat": ["Fire"],
    "Incineroar": ["Fire", "Dark"],
    "Popplio": ["Water"],
    "Brionne": ["Water"],
    "Primarina": ["Water", "Fairy"],
    "Pikipek": ["Normal", "Flying"],
    "Trumbeak": ["Normal", "Flying"],
    "Toucannon": ["Normal", "Flying"],
    "Yungoos": ["Normal"],
    "Gumshoos": ["Normal"],
    "Grubbin": ["Bug"],
    "Charjabug": ["Bug", "Electric"],
    "Vikavolt": ["Bug", "Electric"],
    "Crabrawler": ["Fighting"],
    "Crabominable": ["Fighting", "Ice"],
    "Oricorio": ["Fire", "Flying"],
    "Cutiefly": ["Bug", "Fairy"],
    "Ribombee": ["Bug", "Fairy"],
    "Rockruff": ["Rock"],
    "Lycanroc": ["Rock"],
    "Wishiwashi": ["Water"],
    "Mareanie": ["Poison", "Water"],
    "Toxapex": ["Poison", "Water"],
    "Cycloreen": ["Normal", "Steel"],
    "Mudbray": ["Ground"],
    "Mudsdale": ["Ground"],
    "Dewpider": ["Water", "Bug"],
    "Araquanid": ["Water", "Bug"],
    "Fomantis": ["Grass"],
    "Lurantis": ["Grass"],
    "Morelull": ["Grass", "Fairy"],
    "Shiinotic": ["Grass", "Fairy"],
    "Salandit": ["Poison", "Fire"],
    "Salazzle": ["Poison", "Fire"],
    "Stufful": ["Normal", "Fighting"],
    "Bewear": ["Normal", "Fighting"],
    "Bounsweet": ["Grass"],
    "Steenee": ["Grass"],
    "Tsareena": ["Grass"],
    "Comfey": ["Fairy"],
    "Oranguru": ["Normal", "Psychic"],
    "Passimian": ["Fighting"],
    "Wimpod": ["Bug", "Water"],
    "Golisopod": ["Bug", "Water"],
    "Sandygast": ["Ghost", "Ground"],
    "Palossand": ["Ghost", "Ground"],
    "Pyukumuku": ["Water"],
    "Type: Null": ["Normal"],
    "Silvally": ["Normal"],
    "Minior": ["Rock", "Flying"],
    "Komala": ["Normal"],
    "Turtonator": ["Fire", "Dragon"],
    "Togedemaru": ["Electric", "Steel"],
    "Mimikyu": ["Ghost", "Fairy"],
    "Bruxish": ["Water", "Psychic"],
    "Drampa": ["Normal", "Dragon"],
    "Dhelmise": ["Ghost", "Grass"],
    "Jangmo-O": ["Dragon"],
    "Hakamo-O": ["Dragon", "Fighting"],
    "Kommo-O": ["Dragon", "Fighting"],
    "Tapu Koko": ["Electric", "Fairy"],
    "Tapu Lele": ["Psychic", "Fairy"],
    "Tapu Bulu": ["Grass", "Fairy"],
    "Tapu Fini": ["Water", "Fairy"],
    "Cosmog": ["Psychic"],
    "Cosmoem": ["Psychic"],
    "Solgaleo": ["Psychic", "Steel"],
    "Lunala": ["Psychic", "Ghost"],
    "Nihilego": ["Rock", "Poison"],
    "Buzzwole": ["Bug", "Fighting"],
    "Pheromosa": ["Bug", "Fighting"],
    "Xurkitree": ["Electric"],
    "Celesteela": ["Steel", "Flying"],
    "Kartana": ["Grass", "Steel"],
    "Guzzlord": ["Dark", "Dragon"],
    "Necrozma": ["Psychic"],
    "Magearna": ["Steel", "Fairy"],
    "Marshadow": ["Fighting", "Ghost"],
    "Poipole": ["Poison"],
    "Naganadel": ["Poison", "Dragon"],
    "Stakataka": ["Rock", "Steel"],
    "Blacephalon": ["Fire", "Ghost"],
    "Zeraora": ["Electric"],
    "Meltan": ["Steel"],
    "Melmetal": ["Steel"],

    // Gen VIII (95)
    "Grookey": ["Grass"],
    "Thwackey": ["Grass"],
    "Rillaboom": ["Grass"],
    "Scorbunny": ["Fire"],
    "Raboot": ["Fire"],
    "Cinderace": ["Fire"],
    "Sobble": ["Water"],
    "Drizzile": ["Water"],
    "Inteleon": ["Water"],
    "Skwovet": ["Normal"],
    "Greedent": ["Normal"],
    "Rookidee": ["Flying"],
    "Corvisquire": ["Flying"],
    "Corviknight": ["Flying", "Steel"],
    "Blipbug": ["Bug"],
    "Dottler": ["Bug", "Psychic"],
    "Orbeetle": ["Bug", "Psychic"],
    "Nickit": ["Dark"],
    "Thievul": ["Dark"],
    "Gossifleur": ["Grass"],
    "Eldegoss": ["Grass"],
    "Wooloo": ["Normal"],
    "Dubwool": ["Normal"],
    "Chewtle": ["Water"],
    "Drednaw": ["Water", "Rock"],
    "Yamper": ["Electric"],
    "Boltund": ["Electric"],
    "Rolycoly": ["Rock"],
    "Carkol": ["Rock", "Fire"],
    "Coalossal": ["Rock", "Fire"],
    "Applin": ["Grass", "Dragon"],
    "Flapple": ["Grass", "Dragon"],
    "Appletun": ["Grass", "Dragon"],
    "Silicobra": ["Ground"],
    "Sandaconda": ["Ground"],
    "Cramorant": ["Flying", "Water"],
    "Arrokuda": ["Water"],
    "Barraskewda": ["Water"],
    "Toxel": ["Electric", "Poison"],
    "Toxtricity": ["Electric", "Poison"],
    "Sizzlipede": ["Fire", "Bug"],
    "Centiskorch": ["Fire", "Bug"],
    "Clobbopus": ["Fighting"],
    "Grapploct": ["Fighting"],
    "Sinistea": ["Ghost"],
    "Polteageist": ["Ghost"],
    "Hatenna": ["Psychic"],
    "Hattrem": ["Psychic"],
    "Hatterene": ["Psychic", "Fairy"],
    "Impidimp": ["Dark", "Fairy"],
    "Morgrem": ["Dark", "Fairy"],
    "Grimmsnarl": ["Dark", "Fairy"],
    "Obstagoon": ["Dark", "Normal"],
    "Perrserker": ["Steel"],
    "Cursola": ["Ghost"],
    "Sirfetch'd": ["Fighting"],
    "Mr. Rime": ["Ice", "Psychic"],
    "Runerigus": ["Ground", "Ghost"],
    "Milcery": ["Fairy"],
    "Alcremie": ["Fairy"],
    "Falinks": ["Fighting"],
    "Pincurchin": ["Electric"],
    "Snom": ["Ice", "Bug"],
    "Frosmoth": ["Ice", "Bug"],
    "Stonjourner": ["Rock"],
    "Eiscue": ["Ice"],
    "Indeedee": ["Psychic", "Normal"],
    "Morpeko": ["Electric", "Dark"],
    "Cufant": ["Steel"],
    "Copperajah": ["Steel"],
    "Dracozolt": ["Electric", "Dragon"],
    "Arctozolt": ["Electric", "Ice"],
    "Dracovish": ["Water", "Dragon"],
    "Arctovish": ["Water", "Ice"],
    "Duraludon": ["Steel", "Dragon"],
    "Dreepy": ["Dragon", "Ghost"],
    "Drakloak": ["Dragon", "Ghost"],
    "Dragapult": ["Dragon", "Ghost"],
    "Zacian": ["Fairy"],
    "Zamazenta": ["Fighting"],
    "Eternatus": ["Poison", "Dragon"],
    "Kubfu": ["Fighting"],
    "Urshifu": ["Fighting", "Dark"],
    "Zarude": ["Dark", "Grass"],
    "Regieleki": ["Electric"],
    "Regidrago": ["Dragon"],
    "Glastrier": ["Ice"],
    "Spectrier": ["Ghost"],
    "Calyrex": ["Psychic", "Grass"],
    "Wyrdeer": ["Normal", "Psychic"],
    "Kleavor": ["Bug", "Rock"],
    "Ursaluna": ["Ground", "Normal"],
    "Basculegion": ["Water", "Ghost"],
    "Sneasler": ["Fighting", "Poison"],
    "Overqwil": ["Dark", "Poison"],
    "Enamorus": ["Fairy", "Flying"],

    // Gen IX (119)
    "Sprigatito": ["Grass"],
    "Floragato": ["Grass"],
    "Meowscarada": ["Grass", "Dark"],
    "Fuecoco": ["Fire"],
    "Crocalor": ["Fire"],
    "Skeledirge": ["Fire", "Ghost"],
    "Quaxly": ["Water"],
    "Quaxwell": ["Water"],
    "Quaquaval": ["Water", "Fighting"],
    "Lechonk": ["Normal"],
    "Oinkologne": ["Normal"],
    "Tarountula": ["Bug"],
    "Spidops": ["Bug"],
    "Nymble": ["Bug"],
    "Lokix": ["Bug", "Dark"],
    "Pawmi": ["Electric"],
    "Pawmo": ["Electric", "Fighting"],
    "Pawmot": ["Electric", "Fighting"],
    "Tandemaus": ["Normal"],
    "Maushold": ["Normal"],
    "Fidough":["Fairy"],
    "Dachsbun": ["Fairy"],
    "Smoliv": ["Grass", "Normal"],
    "Dolliv": ["Grass", "Normal"],
    "Arboliva": ["Grass", "Normal"],
    "Squawkabilly": ["Normal", "Flying"],
    "Nacli": ["Rock"],
    "Naclstack": ["Rock"],
    "Garganacl": ["Rock"],
    "Charcadet": ["Fire"],
    "Armarouge": ["Fire", "Psychic"],
    "Ceruledge": ["Fire", "Ghost"],
    "Tadbulb": ["Electric"],
    "Bellibolt": ["Electric"],
    "Wattrel": ["Electric", "Flying"],
    "Kilowattrel": ["Electric", "Flying"],
    "Maschiff": ["Dark"],
    "Mabosstiff": ["Dark"],
    "Shroodle": ["Poison", "Normal"],
    "Grafaiai": ["Poison", "Normal"],
    "Bramblin": ["Grass", "Ghost"],
    "Brambleghast": ["Grass", "Ghost"],
    "Toedscool": ["Ground", "Grass"],
    "Toedscruel": ["Ground", "Grass"],
    "Klawf": ["Rock"],
    "Capsakid": ["Grass"],
    "Scovillain": ["Grass", "Fire"],
    "Rellor": ["Bug"],
    "Rabsca": ["Bug", "Psychic"],
    "Flittle": ["Psychic"],
    "Espathra": ["Psychic"],
    "Tinkatink": ["Fairy", "Steel"],
    "Tinkatuff": ["Fairy", "Steel"],
    "Tinkaton": ["Fairy", "Steel"],
    "Wiglett": ["Water"],
    "Wugtrio": ["Water"],
    "Bombirdier": ["Flying", "Dark"],
    "Finizen": ["Water"],
    "Palafin": ["Water"],
    "Varoom": ["Steel", "Poison"],
    "Revavroom": ["Steel", "Poison"],
    "Cyclizar": ["Dragon", "Normal"],
    "Orthworm": ["Steel"],
    "Glimmet": ["Rock", "Poison"],
    "Glimmora": ["Rock", "Poison"],
    "Greavard": ["Ghost"],
    "Houndstone": ["Ghost"],
    "Flamigo": ["Flying", "Fighting"],
    "Cetoddle": ["Ice"],
    "Cetitan": ["Ice"],
    "Veluza": ["Water", "Psychic"],
    "Dondozo": ["Water"],
    "Tatsugiri": ["Dragon", "Water"],
    "Annihilape": ["Fighting", "Ghost"],
    "Clodsire": ["Poison", "Ground"],
    "Farigiraf": ["Normal", "Psychic"],
    "Dudunsparce": ["Normal"],
    "Kingambit": ["Dark", "Steel"],
    "Great Tusk": ["Ground", "Fighting"],
    "Scream Tail": ["Fairy", "Psychic"],
    "Brute Bonnet": ["Grass", "Dark"],
    "Flutter Mane": ["Ghost", "Fairy"],
    "Slither Wing": ["Bug", "Fighting"],
    "Sandy Shocks": ["Electric", "Ground"],
    "Iron Treads": ["Ground", "Steel"],
    "Iron Bundle": ["Ice", "Water"],
    "Iron Hands": ["Fighting", "Electric"],
    "Iron Jugulis": ["Dark", "Flying"],
    "Iron Moth": ["Fire", "Poison"],
    "Iron Thorns": ["Rock", "Electric"],
    "Frigibax": ["Dragon", "Ice"],
    "Arctibax": ["Dragon", "Ice"],
    "Baxcalibur": ["Dragon", "Ice"],
    "Gimmighoul": ["Ghost"],
    "Gholdengo": ["Steel", "Ghost"],
    "Wo-Chien": ["Dark", "Grass"],
    "Chien-Pao": ["Dark", "Ice"],
    "Ting-Lu": ["Dark", "Ground"],
    "Chi-Yu": ["Dark", "Fire"],
    "Roaring Moon": ["Dragon", "Dark"],
    "Iron Valiant": ["Fairy", "Fighting"],
    "Koraidon": ["Fighting", "Dragon"],
    "Miraidon": ["Electric", "Dragon"],
    "Walking Wake": ["Water", "Dragon"],
    "Iron Leaves": ["Grass", "Psychic"],
    "Dipplin": ["Grass", "Dragon"],
    "Poltchageist": ["Grass", "Ghost"],
    "Sinistcha": ["Grass", "Ghost"],
    "Okidogi": ["Poison", "Fighting"],
    "Munkidori": ["Poison", "Psychic"],
    "Fezandipti": ["Poison", "Fairy"],
    "Ogerpon": ["Grass"],
    "Archaludon": ["Steel", "Dragon"],
    "Hydrapple": ["Grass", "Dragon"],
    "Gouging Fire": ["Fire", "Dragon"],
    "Raging Bolt": ["Electric", "Dragon"],
    "Iron Boulder": ["Rock", "Psychic"],
    "Iron Crown": ["Steel", "Psychic"],
    "Terapagos": ["Normal"],
    "Pecharunt": ["Poison", "Ghost"]
};
// currently: 1025 Pokémon

var PokeTrans = {
    // Gen I
    "Bisasam": "Bulbasaur", "Bisaknosp": "Ivysaur", "Bisaflor": "Venusaur", "Glumanda": "Charmander",
    "Glutexo": "Charmeleon", "Glurak": "Charizard", "Schiggy": "Squirtle", "Schillok": "Wartortle",
    "Turtok": "Blastoise", "Raupy": "Caterpie", "Safcon": "Metapod", "Smettbo": "Butterfree",
    "Hornliu": "Weedle", "Kokuna": "Kakuna", "Bibor": "Beedrill", "Taubsi": "Pidgey",
    "Tauboga": "Pidgeotto", "Tauboss": "Pidgeot", "Rattfratz": "Rattata", "Rattikarl": "Raticate",
    "Habitak": "Spearow", "Ibitak": "Fearow", "Rettan": "Ekans", "Arbok": "Arbok",
    "Pikachu": "Pikachu", "Raichu": "Raichu", "Sandan": "Sandshrew", "Sandamer": "Sandslash",
    "Nidoran": "Nidoran", "Nidorina": "Nidorina",
    "Nidoqueen": "Nidoqueen", "Nidorino": "Nidorino",
    "Nidoking": "Nidoking", "Piepi": "Clefairy",
    "Pixi": "Clefable", "Vulpix": "Vulpix",
    "Vulnona": "Ninetales", "Pummeluff": "Jigglypuff",
    "Knuddeluff": "Wigglytuff", "Zubat": "Zubat",
    "Golbat": "Golbat", "Myrapla": "Oddish",
    "Duflor": "Gloom", "Giflor": "Vileplume",
    "Paras": "Paras", "Parasek": "Parasect",
    "Bluzuk": "Venonat", "Omot": "Venomoth",
    "Digda": "Diglett", "Dugdri": "Digtrio",
    "Mauzi": "Meowth", "Snobilikat": "Persian",
    "Enton": "Psyduck", "Entoron": "Golduck",
    "Menki": "Mankey", "Rasaff": "Primeape",
    "Fukano": "Growlithe", "Arkani": "Arcanine",
    "Quapsel": "Poliwag", "Quappo": "Poliwhirl",
    "Abra": "Abra", "Kadabra": "Kadabra",
    "Simsala": "Alakazam", "Machollo": "Machop",
    "Maschock": "Machoke", "Machomei": "Machamp",
    "Knofensa": "Bellsprout", "Ultrigaria": "Weepinbell",
    "Sarzenia": "Victreebell", "Tentacha": "Tentacool",
    "Tentoxa": "Tentacruel", "Kleinstein": "Geodude",
    "Georok": "Graveler", "Geowaz": "Golem",
    "Ponita": "Ponyta", "Gallopa": "Rapidash",
    "Flegmon": "Slowpoke", "Lahmus": "Slowbro",
    "Magnetilo": "Magnemite", "Magneton": "Magneton",
    "Porenta": "Farfetch'd", "Dodu": "Doduo",
    "Dodri": "Dodrio", "Jurob": "Seel",
    "Jugong": "Dewgong", "Sleima": "Grimer",
    "Sleimok": "Muk", "Muschas": "Shellder",
    "Austos": "Cloyster", "Nebulak": "Gastly",
    "Alpollo": "Haunter", "Gengar": "Gengar",
    "Onix": "Onix", "Traumato": "Drowzee",
    "Hypno": "Hypno", "Krabby": "Krabby",
    "Kingler": "Kingler", "Voltobal": "Voltorb",
    "Lektrobal": "Electrode", "Owei": "Exeggcute",
    "Kokowei": "Exeggutor", "Tragosso": "Cubone",
    "Knogga": "Marowak", "Kicklee": "Hitmonlee",
    "Nockchan": "Hitmonchan", "Schlurp": "Lickitung",
    "Smogon": "Koffing", "Smogmog": "Weezing",
    "Rihorn": "Rhyhorn", "Rizeros": "Rhydon",
    "Chaneira": "Chansey", "Tangela": "Tangela",
    "Kangama": "Kangaskhan", "Seeper": "Horsea",
    "Seemon": "Seadra", "Goldini": "Goldeen",
    "Golking": "Seaking", "Sterndu": "Staryu",
    "Starmie": "Starmie", "Pantimos": "Mr. Mime",
    "Sichlor": "Scyther", "Rossana": "Jynx",
    "Elektek": "Electabuzz", "Magmar": "Magmar",
    "Pinsir": "Pinsir", "Tauros": "Tauros",
    "Karpador": "Magikarp", "Garados": "Gyarados",
    "Lapras": "Lapras", "Ditto": "Ditto",
    "Evoli": "Eevee", "Aquana": "Vaporeon",
    "Blitza": "Jolteon", "Flamara": "Flareon",
    "Lesbiana": "Lesbeon", "Porygon": "Porygon", 
    "Amonitas": "Omanyte", "Amaroso": "Omastar", 
    "Kabuto": "Kabuto", "Aerodactyl": "Aerodactyl", 
    "Relaxo": "Snorlax", "Arktos": "Articuno", 
    "Zapdos": "Zapdos", "Lavados": "Moltres", 
    "Dratini": "Dratini", "Dragonir": "Dragonair", 
    "Dragoran": "Dragonite", "Dragoran": "Dragonite", 
    "Mewtu": "Mewtwo", "Mew": "Mew",

    // Special FCP

    "Tom": "Tom",
    "Ruben": "Ruben",
    "Luca": "Luca",
    "Yannick": "Yannick",
    "Younes": "Younes",
    "Ati": "Ati",
    "Addi": "Addi",
    "Atilla": "Atilla",
    "Benedikt": "Benedikt",
    "Bene": "Bene",
    "Ida": "Ida",
    "Chris": "Chris",
    "Christoph": "Christoph",
    "Christian": "Christian",
    "Andrej": "Andrej",
    "Andrew": "Andrew",
    "Ninu": "Ninu",

    // Gen II
    "Endivie": "Chikorita", "Lorblatt": "Bayleef",
    "Meganie": "Meganium", "Feurigel": "Cyndaquil",
    "Igelavar": "Quilava", "Tornupto": "Typhlosion",
    "Karnimani": "Totodile", "Tyracroc": "Croconaw",
    "Impergator": "Feraligatr", "Wiesor": "Sentret",
    "Wiesenior": "Furret", "Hoothoot": "Hoothoot",
    "Noctuh": "Noctowl", "Ledyba": "Ledyba",
    "Ledian": "Ledian", "Webarak": "Spinarak",
    "Ariados": "Ariados", "Iksbat": "Crobat",
    "Lampi": "Chinchou", "Lanturn": "Lanturn",
    "Pichu": "Pichu", "Pii": "Cleffa",
    "Fluffeluff": "Igglybuff", "Togepi": "Togepi",
    "Togetic": "Togetic", "Natu": "Natu",
    "Xatu": "Xatu", "Voltilamm": "Mareep",
    "Waaty": "Flaaffy", "Ampharos": "Ampharos",
    "Blubella": "Bellossom", "Marill": "Marill",
    "Azumarill": "Azumarill", "Mogelbaum": "Sudowoodo",
    "Quaxo": "Politoed", "Hoppspross": "Hoppip",
    "Hubelupf": "Skiploom", "Papungha": "Jumpluff",
    "Griffel": "Aipom", "Sonnkern": "Sunkern",
    "Sonnflora": "Sunflora", "Yanma": "Yanma",
    "Felino": "Morlord", "Psiana": "Espeon",
    "Nachtara": "Umbreon", "Kramurx": "Murkrow",
    "Laschoking": "Slowking", "Traunfugil": "Misdreavus",
    "Icognito": "Unown", "Woingenau": "Wobbuffet",
    "Girafarig": "Girafarig", "Tannza": "Pineco",
    "Forstellka": "Forretress", "Dummisel": "Dunsparce",
    "Skorgla": "Gligar", "Stahlos": "Steelix",
    "Snubbull": "Snubbull", "Granbull": "Granbull",
    "Baldorfish": "Qwilfish", "Scherox": "Scizor",
    "Pottrott": "Shuckle", "Skaraborn": "Heracross",
    "Sniebel": "Sneasel", "Teddiursa": "Teddiursa",
    "Ursaring": "Ursaring", "Schneckmag": "Slugma",
    "Magcargo": "Magcargo", "Quiekel": "Swinub",
    "Keifel": "Piloswine", "Corasonn": "Corsola",
    "Remoraid": "Remoraid", "Octillery": "Octillery",
    "Botogel": "Delibird", "Mantax": "Mantine",
    "Panzaeron": "Skarmory", "Hunduster": "Houndour",
    "Hundemon": "Houndoom", "Seedraking": "Kingdra",
    "Phanpy": "Phanpy", "Donphan": "Donphan",
    "Porygon2": "Porygon2", "Damhirplex": "Stantler",
    "Farbeagle": "Smeargle", "Rabauz": "Tyrogue",
    "Kapoera": "Hitmontop", "Kussilla": "Smoochum",
    "Elekid": "Elekid", "Magby": "Magby",
    "Miltank": "Miltank", "Heiteira": "Blissey",
    "Raikou": "Raikou", "Entei": "Entei",
    "Suicune": "Suicune", "Larvitar": "Larvitar",
    "Pupitar": "Pupitar", "Despotar": "Despotar",
    "Lugia": "Lugia", "Ho-Oh": "Ho-Oh",
    "Celebi": "Celebi",

    // Gen III
    "Geckarbor": "Treecko", "Reptain": "Grovyle",
    "Gewaldro": "Sceptile", "Flemmli": "Torchic",
    "Jungglut": "Combusken", "Lohgock": "Blaziken",
    "Hydropi": "Mudkip", "Moorabbel": "Marshtomp",
    "Sumpex": "Swampert", "Fiffyen": "Poochyena",
    "Magnayen": "Mightyena", "Zigzachs": "Zigzagoon",
    "Geradaks": "Linoone", "Waumpel": "Wurmple",
    "Schaloko": "Silcoon", "Papinella": "Beautifly",
    "Panekon": "Cascoon", "Pudox": "Dustox",
    "Loturzel": "Lotad", "Lombrero": "Lombre",
    "Kappalores": "Ludicolo", "Samurzel": "Seedot",
    "Blanas": "Nuzleaf", "Tengulist": "Shiftry",
    "Schwalbini": "Taillow", "Schwalboss": "Swellow",
    "Wingull": "Wingull", "Pelipper": "Pelipper",
    "Trasla": "Ralts", "Kirlia": "Kirlia",
    "Guardevoir": "Gardevoir", "Gehweiher": "Surskit",
    "Maskeregen": "Masquerain", "Knilz": "Shroomish",
    "Kapilz": "Breloom", "Bummelz": "Slakoth",
    "Muntier": "Vigoroth", "Letarking": "Slaking",
    "Nincada": "Nincada", "Ninjask": "Ninjask",
    "Ninjatom": "Shedinja", "Flurmel": "Whismur",
    "Krakeelo": "Loudred", "Krawumms": "Exploud",
    "Makuhita": "Makuhita", "Hariyama": "Hariyama",
    "Azurill": "Azurill", "Nasgnet": "Nosepass",
    "Eneco": "Skitty", "Enekoro": "Delcatty",
    "Zobiris": "Sableye", "Flunkifer": "Mawile",
    "Stollunior": "Aron", "Stollrak": "Lairon",
    "Stolloss": "Aggron", "Meditie": "Meditite",
    "Meditalis": "Medicham", "Frizelbliz": "Electrike",
    "Voltenso": "Manectric", "Plusle": "Plusle",
    "Minun": "Minun", "Volbeat": "Volbeat",
    "Illumise": "Illumise", "Roselia": "Roselia",
    "Schluppuck": "Gulpin", "Schlukwech": "Swalot",
    "Kanivanha": "Carvanha", "Tohaido": "Sharpedo",
    "Wailmer": "Wailmer", "Wailord": "Wailord",
    "Camaub": "Numel", "Camerupt": "Camerupt",
    "Qurtel": "Torkoal", "Spoink": "Spoink",
    "Groink": "Grumpig", "Pandir": "Spinda",
    "Knacklion": "Trapinch", "Vibrava": "Vibrava",
    "Libelldra": "Flygon", "Tuska": "Cacnea",
    "Noktuska": "Cacturne", "Wablu": "Swablu",
    "Altaria": "Altaria", "Sengo": "Zangoose",
    "Vipitis": "Seviper", "Lunastein": "Lunatone",
    "Sonnfel": "Solrock", "Schmerbe": "Barboach",
    "Welsar": "Whiscash", "Krebscorps": "Corphish",
    "Krebutack": "Crawdaunt", "Puppance": "Baltoy",
    "Lepumentas": "Claydol", "Liliep": "Lileep",
    "Wielie": "Cradily", "Anorith": "Anorith",
    "Armaldo": "Armaldo", "Barschwa": "Feebas",
    "Milotic": "Milotic", "Formeo": "Castform",
    "Kecleon": "Kecleon", "Shuppet": "Shuppet",
    "Banette": "Banette", "Zwirrlicht": "Duskull",
    "Zwirrklop": "Dusclops", "Tropius": "Tropius",
    "Palimpalim": "Chimecho", "Absol": "Absol",
    "Isso": "Wynaut", "Schneppke": "Snorunt",
    "Firnontor": "Glalie", "Seemops": "Spheal",
    "Seejong": "Sealeo", "Walraisa": "Walrein",
    "Perlu": "Clamperl", "Aalabyss": "Huntail",
    "Saganabyss": "Gorebyss", "Relicanth": "Relicanth",
    "Liebiskus": "Luvdisc", "Kindwurm": "Bagon",
    "Draschel": "Shelgon", "Brutalanda": "Salamence",
    "Tanhel": "Beldum", "Metang": "Metang",
    "Metagross": "Metagross", "Regirock": "Regirock",
    "Regice": "Regice", "Registeel": "Registeel",
    "Ninumini": "Ninumini", "Ninunja": "Ninunja",
    "Ninurai": "Ninurai", "Latias": "Latias",
    "Latios": "Latios", "Laties": "Laties",
    "Latiis": "Latiis", "Latius": "Latius",
    "Kyogre": "Kyogre", "Groudon": "Groudon",
    "Rayquaza": "Rayquaza", "Jirachi": "Jirachi",
    "Deoxys": "Deoxys",

    // Gen IV
    "Chelast": "Turtwig", "Chelcarain": "Grotle",
    "Chelterrar": "Torterra", "Panflam": "Chimchar",
    "Panpyro": "Monferno", "Panferno": "Infernape",
    "Plinfa": "Piplup", "Pliprin": "Prinplup",
    "Impoleon": "Empoleon", "Staralili": "Starly",
    "Staravia": "Staravia", "Staraptor": "Staraptor",
    "Bidiza": "Bidoof", "Bidifas": "Bibarel",
    "Zirpurze": "Kricketot", "Zirpeise": "Kricketune",
    "Sheinux": "Shinx", "Luxio": "Luxio",
    "Luxtra": "Luxray", "Knospi": "Budew",
    "Roserade": "Roserade", "Koknodon": "Cranidos",
    "Rameidon": "Rampardos", "Schilterus": "Shieldon",
    "Bollterus": "Bastiodon",
    "Burmy": "Burmy", "Burmadame": "Wormadam",
    "Moterpel": "Mothim", "Wadribie": "Combee",
    "Honweisel": "Vespiquen", "Pachirisu": "Pachirisu",
    "Bamelin": "Buizel", "Bojelin": "Floatzel",
    "Kikugi": "Cherubi", "Kinoso": "Cherrim",
    "Schalellos": "Shellos", "Gastrodon": "Gastrodon",
    "Ambidiffel": "Ambipom", "Driftlon": "Drifloon",
    "Drifzepeli": "Drifblim", "Haspiror": "Buneary",
    "Schlapor": "Lopunny", "Traunmagil": "Mismagius",
    "Kramshef": "Honchkrow", "Charmian": "Glameow",
    "Shnurgarst": "Purugly", "Klingplim": "Chingling",
    "Skunkapuh": "Stunky", "Skuntank": "Skuntank",
    "Bronzel": "Bronzor", "Bronzong": "Bronzong",
    "Mobai": "Bonsly", "Pantimimi": "Mime Jr.",
    "Wonneira": "Happiny", "Plaudagei": "Chatot",
    "Kryppuk": "Spiritomb", "Kaumalat": "Gible",
    "Knarksel": "Gabite", "Knakrack": "Garchomp",
    "Mampfaxo": "Munchlax", "Riolu": "Riolu",
    "Lucario": "Lucario", "Hippopotas": "Hippopotas",
    "Hippoterus": "Hippowdon", "Pionskora": "Skorupi",
    "Piondragi": "Drapion", "Glibunkel": "Croagunk",
    "Toxiquak": "Toxicroak", "Venuflibis": "Carnivine",
    "Finneon": "Finneon", "Lumineon": "Lumineon",
    "Mantirps": "Mantyke", "Shnebedeck": "Snover",
    "Rexblisar": "Abomasnow", "Snibunna": "Weavile",
    "Magnezone": "Magnezone", "Schlurplek": "Lickilicky",
    "Rihornior": "Rhyperior", "Tangoloss": "Tangrowth",
    "Elevoltek": "Electivire", "Magbrant": "Magmortar",
    "Togekiss": "Togekiss", "Yanmega": "Yanmega",
    "Folipurba": "Leafeon", "Glaziola": "Glaceon",
    "Skorgro": "Gliscor", "Mamutel": "Mamoswine",
    "Porygon-Z": "Porygon-Z", "Galagladi": "Gallade",
    "Voluminas": "Probopass", "Zwirrfinst": "Dusknoir",
    "Frosdedje": "Froslass", "Rotom": "Rotom",
    "Selfe": "Uxie", "Vesprit": "Mesprit",
    "Tobutz": "Azelf", "Dialga": "Dialga",
    "Palkia": "Palkia", "Heatran": "Heatran",
    "Regigigas": "Regigigas", "Giratina": "Giratina",
    "Cresselia": "Cresselia", "Phione": "Phione",
    "Manaphy": "Manaphy", "Darkrai": "Darkrai",
    "Shaymin": "Shaymin", "Arceus": "Arceus",

    // Gen V
    "Victini": "Victini", "Serpifeu": "Snivy",
    "Efoserp": "Servine", "Serpiroyal": "Serperior",
    "Floink": "Tepig", "Ferkokel": "Pignite",
    "Flambirex": "Emboar", "Ottaro": "Oshawot",
    "Zwottronin": "Dewott", "Admurai": "Samurott",
    "Nagelotz": "Patrat", "Kukmarda": "Watchog",
    "Yorkleff": "Lillipup", "Terribark": "Herdier",
    "Bissbark": "Stoutland", "Felilou": "Purrloin",
    "Kleoparda": "Liepard", "Vegimak": "Pansage",
    "Vegichita": "Simisage", "Grillmak": "Pansear",
    "Grillchita": "Simisear", "Sodamak": "Panpour",
    "Sodachita": "Simipour", "Somniam": "Munna",
    "Somnivora": "Musharna", "Dusselgurr": "Pidove",
    "Navitaub": "Tranquill", "Fasasnob": "Unfezant",
    "Elezeba": "Blitzle", "Zebritz": "Zebstrika",
    "Kiesling": "Roggenrola", "Sedimantur": "Boldore",
    "Brockoloss": "Gigalith", "Fleknoil": "Woobat",
    "Fletiamo": "Swoobat", "Rotomurf": "Drilbur",
    "Stalobor": "Excadrill", "Ohrdoch": "Audino",
    "Praktibalk": "Timburr", "Strepoli": "Gurdurr",
    "Meistagrif": "Conkeldurr", "Schallquap": "Tympole",
    "Mebrana": "Palpitoad", "Branawarz": "Seismitoad",
    "Jiutesto": "Throh", "Karadonis": "Sawk",
    "Strawickl": "Sewaddle", "Folikon": "Swadloon",
    "Matrifol": "Leavanny", "Toxiped": "Venipede",
    "Rollum": "Whirlipede", "Cerapendra": "Scolipede",
    "Waumboll": "Cottonee", "Elfun": "Whimsicott",
    "Lilminip": "Petilil", "Dressella": "Basculin",
    "Ganovil": "Sandile", "Rokkaiman": "Krokorok",
    "Rabigator": "Krookodile", "Flampion": "Darumaka",
    "Flampivian": "Darmanitan", "Maracamba": "Maractus",
    "Lithomith": "Dwebble", "Castellith": "Crustle",
    "Zurrokex": "Scraggy", "Irokex": "Scrafty",
    "Symvolara": "Sigilyph", "Makabaja": "Yamask",
    "Echnatoll": "Cofagrigus", "Galapaflos": "Tirtouga",
    "Karippas": "Carracosta", "Flapteryx": "Archen",
    "Aeropteryx": "Archeops", "Unratütox": "Trubbish",
    "Deponitox": "Garbodor", "Zorua": "Zorua",
    "Zoroark": "Zoroark", "Picochilla": "Minccino",
    "Chillabell": "Cinccino", "Mollimorba": "Gothita",
    "Hypnomorba": "Gothorita", "Morbitesse": "Gothitelle",
    "Monozyto": "Solosis", "Mitodos": "Duosion",
    "Zytomega": "Reuniclus", "Piccolente": "Ducklett",
    "Swaroness": "Swanna", "Gelatini": "Vanillite",
    "Gelatroppo": "Vanillish", "Gelatwino": "Vanilluxe",
    "Sesokitz": "Deerling", "Kronjuwild": "Sawsbuck",
    "Emolga": "Emolga", "Laukaps": "Karrablast",
    "Cavalanzas": "Escavalier", "Tarnpignon": "Foongus",
    "Hutsassa": "Amoonguss", "Quabbel": "Frillish",
    "Apoquallyp": "Jellicent", "Mamolida": "Alomomola",
    "Wattzapf": "Joltik", "Voltula": "Galvantula",
    "Kastadur": "Ferroseed", "Tentantel": "Ferrothorn",
    "Klikk": "Klink", "Kliklak": "Klang",
    "Klikdiklak": "Klinklang", "Zapplardin": "Tynamo",
    "Zapplalek": "Eelektrik", "Zapplarang": "Eelektross",
    "Pygraulon": "Elgyem", "Megalon": "Beheeyem",
    "Lichtel": "Litwick", "Laternecto": "Lampent",
    "Skelabra": "Chandelure", "Milza": "Axew",
    "Sharfax": "Fraxure", "Maxax": "Haxorus",
    "Petznief": "Cubchoo", "Siberio": "Beartic",
    "Frigometri": "Cryogonal", "Schnuthelm": "Shelmet",
    "Hydragil": "Accelgor", "Flunschlik": "Stunfisk",
    "Lin-Fu": "Mienfoo", "Wie-Shu": "Mienshao",
    "Shardrago": "Druddigon", "Golbit": "Golett",
    "Golgantes": "Golurk", "Gladiantri": "Pawniard",
    "Caesurio": "Bisharp", "Bisofank": "Bouffalant",
    "Geronimatz": "Rufflet", "Washakwil": "Braviary",
    "Skallyk": "Vullaby", "Grypheldis": "Mandibuzz",
    "Furnifraß": "Heatmor", "Fermicula": "Durant",
    "Kapuno": "Deino", "Duodino": "Zweilous",
    "Trikephalo": "Hydreigon", "Ignivor": "Larvesta",
    "Ramoth": "Volcarona", "Kobalium": "Cobalium",
    "Terrakium": "Terrakion", "Viridium": "Virizion",
    "Boreos": "Tornadus", "Voltolos": "Thundurus",
    "Reshiram": "Reshiram", "Zekrom": "Zekrom",
    "Demeteros": "Landorus", "Kyurem": "Kyurem",
    "Keldeo": "Keldeo", "Meloetta": "Meloetta",

    // Gen VI
    "Igamaro": "Chespin", "Igastarnish": "Quilladin",
    "Brigaron": "Chesnaught", "Fynx": "Fennekin",
    "Rutena": "Braixen", "Fennexis": "Delphox",
    "Froxy": "Froakie", "Amphizel": "Frogadier",
    "Quajutsu": "Greninja", "Scoppel": "Bunnelby",
    "Grebbit": "Diggersby", "Dartiri": "Fletchling",
    "Dartignis": "Fletchinder", "Fiaro": "Talonflame",
    "Purmel": "Scatterbug", "Puponcho": "Spewpa",
    "Vivillon": "Vivillon", "Leufeo": "Litleo",
    "Pyroleo": "Pyroar", "Flabébé": "Flabébé",
    "Floette": "Floette", "Florges": "Florges",
    "Mähikel": "Skiddo", "Chevrumm": "Gogoat",
    "Pam-Pam": "Pancham", "Pandagro": "Pangoro",
    "Coiffwaff": "Furfrou", "Psiau": "Espurr",
    "Psiaugon": "Meowstic", "Gramokles": "Honedge",
    "Duokles": "Doublade", "Durengard": "Aegislash",
    "Parfi": "Spritzee", "Parfinesse": "Aromatisse",
    "Flauschling": "Swirlix", "Sabbaione": "Slurpuff",
    "Iscalar": "Inkay", "Calamanero": "Malamar",
    "Bithora": "Binacle", "Thanathora": "Barbaracle",
    "Algitt": "Skrelp", "Tandrak": "Dragalge",
    "Scampisto": "Clauncher", "Wummer": "Clawitzer",
    "Eguana": "Helioptile", "Elezard": "Heliolisk",
    "Balgoras": "Tyrunt", "Monargoras": "Tyrantrum",
    "Amarino": "Amaura", "Amagarga": "Aurorus",
    "Feelinara": "Sylveon", "Resladero": "Hawlucha",
    "Dedenne": "Dedenne", "Rocara": "Carbink",
    "Viscora": "Goomy", "Viscargot": "Sliggoo",
    "Viscogon": "Goodra", "Clavion": "Klefki",
    "Paragoni": "Phantump", "Trombork": "Trevenant",
    "Irrbis": "Pumpkaboo", "Pumpdjinn": "Gourgeist",
    "Arktip": "Bergmite", "Arktilas": "Avalugg",
    "eF-eM": "Noibat", "UHaFnir": "Noivern",
    "Xerneas": "Xerneas", "Yveltal": "Yveltal",
    "Zygarde": "Zygarde", "Diancie": "Diancie",
    "Hoopa": "Hoopa", "Volcanion": "Volcanion",

    // Gen VII
    "Bauz": "Rowlet", "Arboretoss": "Dartrix",
    "Silvarro": "Decidueye", "Flamiau": "Litten",
    "Miezunder": "Torracat", "Fuegro": "Incineroar",
    "Robball": "Popplio", "Marikeck": "Brionne",
    "Primarene": "Primarina", "Peppeck": "Pikipek",
    "Trompek": "Trumbeak", "Tukanon": "Toucannon",
    "Mangunior": "Yungoos", "Magnuspektor": "Gumshoos",
    "Mabula": "Grubbin", "Akkup": "Charjabug",
    "Donarion": "Vikavolt", "Krabbox": "Crabrawler",
    "Krawell": "Crabominable", "Choreogel": "Oricorio",
    "Wommel": "Cutiefly", "Bandelby": "Ribombee",
    "Wuffels": "Rockruff", "Wolwerock": "Lycanroc",
    "Lusardin": "Wishiwashi", "Garstella": "Mareanie",
    "Aggrostella": "Toxapex", "Pampuli": "Mudbray",
    "Pampross": "Mudsdale", "Araqua": "Dewpider",
    "Aranestro": "Araquanid", "Imantis": "Fomantis",
    "Mantidea": "Lurantis", "Bubungus": "Morelull",
    "Lamellux": "Shiinotic", "Molunk": "Salandit",
    "Amfira": "Salazzle", "Velursi": "Stufful",
    "Kosturso": "Bewear", "Frubberl": "Bounsweet",
    "Frubaila": "Steenee", "Fruyal": "Tsareena",
    "Curelei": "Comfey", "Kommandutan": "Oranguru",
    "Quartermak": "Passiman", "Reißlaus": "Wimpod",
    "Tectass": "Golisopod", "Sankabuh": "Sandygast",
    "Colossand": "Palossand", "Gufa": "Pyukumuku",
    "Typ:Null": "Type: Null", "Amigento": "Silvally",
    "Meteno": "Minior", "Koalelu": "Komala",
    "Tortunator": "Turtonator", "Togedemaru": "Togedemaru",
    "Mimigma": "Mimikyu", "Knirfish": "Bruxish",
    "Sen-Long": "Drampa", "Moruda": "Dhelmise",
    "Miniras": "Jangmo-o", "Mediras": "Hakamo-o",
    "Grandiras": "Kommo-o", "Kapu-Riki": "Tapu Koko",
    "Kapu-Fala": "Tapu Lele", "Kapu-Toro": "Tapu Bulu",
    "Kapu-Kime": "Tapu Fini", "Cosmog": "Cosmog",
    "Cosmovum": "Cosmoem", "Solgaleo": "Solgaleo",
    "Lunala":"Lunala", "Anego": "Nihilego",
    "Masskito": "Buzzwole", "Schabelle": "Pheromosa",
    "Voltriant": "Xurkitree", "Kaguron": "Celesteela",
    "Katagami": "Kartana", "Schlingking": "Guzzlord",
    "Necrozma": "Necrozma", "Magearna": "Magearna",
    "Marshadow": "Marshadow", "Venicro": "Poipole",
    "Agoyon": "Naganadel", "Muramura": "Stakataka",
    "Kopplosio": "Blacephalon", "Zeraora": "Zeraora",
    "Meltan": "Meltan", "Melmetal": "Melmetal",

    // Gen VIII
    "Chimpep": "Grookey", "Chimstix": "Thwackey",
    "Gortrom": "Rillaboom", "Hopplo": "Scorbunny",
    "Kickerlo": "Raboot", "Liberlo": "Cinderace",
    "Memmeon": "Sobble", "Phlegleon": "Drizzile",
    "Intelleon": "Inteleon", "Raffel": "Skwovet",
    "Schlaraffel": "Greedent", "Meikro": "Rookidee",
    "Kranoviz": "Corvisquire", "Krarmor": "Corviknight",
    "Sensect": "Blipbug", "Keradar": "Dottler",
    "Maritellit": "Orbeetle", "Kleptifux": "Nickit",
    "Gaunux": "Thievul", "Cottini": "Gossifleur",
    "Cottomi": "Eldegoss", "Wolly": "Wooloo",
    "Zwollock": "Dubwool", "Kamehaps": "Chewtle",
    "Kamalm": "Drednaw", "Voldi": "Yamper",
    "Bellektro": "Boltund", "Klonkett": "Rolycoly",
    "Wagong": "Carkol", "Montecarbo": "Coalossal",
    "Knapfel": "Applin", "Drapfel": "Flapple",
    "Schlapfel": "Appletun", "Salanga": "Silicobra",
    "Sanaconda": "Sanaconda", "Urgl": "Cramorant",
    "Pikuda": "Arrokuda", "Barrakiefa": "Barraskewda",
    "Toxel": "Toxel", "Riffex": "Toxtricity",
    "Thermopod": "Sizzlipede", "Infernopod": "Centiskorch",
    "Klopptopus": "Clobbopus", "Kaocto": "Grapploct",
    "Fatalitee": "Sinistea", "Mortipod": "Polteageist",
    "Brimova": "Hatenna", "Brimano": "Hattrem",
    "Silembrim": "Hatterene", "Bähmon": "Impidimp",
    "Pelzebub": "Morgrem", "Olangaar": "Grimsnarl",
    "Barrikadax": "Obstagoon", "Mauzinger": "Perrserker",
    "Gorgasonn": "Cursola", "Lauchzelot": "Sirfetch'd",
    "Pantifrost": "Mr. Rime", "Oghnatoll": "Runerigus",
    "Hokumil": "Milcery", "Pokusan": "Alcreamie",
    "Legios":"Falinks", "Britzigel": "Pincurchin",
    "Snomnom": "Snom", "Mottineva": "Frosmoth",
    "Humanolith": "Stonjourner", "Kubuin": "Eiscue",
    "Servol": "Indeedee", "Morpeko": "Morpeko",
    "Kupfanti": "Cufant", "Patinaraja": "Copperajah",
    "Lectragon": "Dracozolt", "Lecryodon": "Arctozolt",
    "Pescragon": "Dracovish", "Pescryodon": "Arctovish",
    "Duraludon": "Duraludon", "Grollda": "Dreepy",
    "Phandra": "Drakloak", "Katapuldra": "Dragapult",
    "Zacian": "Zacian", "Zamazenta": "Zamazenta",
    "Endynalos": "Eternatus", "Dakuma": "Kubfu",
    "Wulaosu": "Urshifu", "Zarude": "Zarude",
    "Regieleki": "Regieleki", "Regidrago": "Regidrago",
    "Polaross": "Glastrier", "Phantoross": "Spectrier",
    "Coronospa": "Calyrex", "Damythir": "Wyrdeer",
    "Axantor": "Kleavor", "Ursaluna": "Ursaluna",
    "Salmagnis": "Basculegion", "Snieboss": "Sneasler",
    "Myriador": "Overqwil", "Cupidos": "Enamorus",

    // Gen IX
    "Felori": "Sprigatito", "Feliospa": "Floragato",
    "Maskagato": "Meowscarada", "Krokel": "Fuecoco",
    "Lokroko": "Crocalor", "Skelokrok": "Skeledirge",
    "Kwaks": "Quaxly", "Fuentente": "Quaxwell",
    "Bailonda": "Quaquaval", "Ferkuli": "Lechonk",
    "Fragrunz": "Oinkologne", "Tarundel": "Tarountula",
    "Spinsidias": "Spidops", "Micrick": "Nymble",
    "Lextremo": "Lokix", "Pamo": "Pawmi",
    "Pamamo": "Pawmo", "Pamomamo": "Pawmot",
    "Zwieps": "Tandemaus", "Famieps": "Maushold",
    "Hefel": "Fidough", "Backel": "Dachsbun",
    "Olini": "Smoliv", "Olivinio": "Dolliv",
    "Olithena": "Arboliva", "Krawalloro": "Squawkabilly",
    "Geosali": "Nacli", "Sedisal": "Naclstack",
    "Saltigant": "Garganacl", "Knarbon": "Charcadet",
    "Crimanzo": "Armarouge", "Azugladis": "Ceruledge",
    "Blipp": "Tadbulb", "Wampitz": "Bellibolt",
    "Voltrel": "Wattrel", "Voltrean": "Kilowattrel",
    "Mobtiff": "Maschiff", "Mastifioso": "Mabosstiff",
    "Sproxi": "Shroodle", "Affiti": "Grafaiai",
    "Weherba": "Bramblin", "Horrerba": "Brambleghast",
    "Tentagra": "Toedscool", "Tenterra": "Toedscruel",
    "Klibbe": "Klawf", "Chilingel": "Capsakid",
    "Halupenjo": "Scovillain", "Relluk": "Rellor",
    "Skarabaks": "Rabsca", "Flattutu": "Flittle",
    "Psiopatra": "Espathra", "Forgita": "Tinkatink",
    "Tafforgita": "Tinkatuff", "Granforgita": "Tinkaton",
    "Schligda": "Wiglett", "Schligdri": "Wugtrio",
    "Adebom": "Bombirdier", "Normifin": "Finizen",
    "Delfinator": "Palafin", "Knattox": "Varoom",
    "Knattatox": "Revavroom", "Mopex": "Cyclizar",
    "Schlurm": "Orthworm", "Lumispross": "Glimmet",
    "Lumiflora": "Glimmora", "Gruff": "Greavard",
    "Friedwuff": "Houndstone", "Flaminkno": "Flamigo",
    "Flaniwal": "Cetoddle", "Kolowal": "Cetitan",
    "Agizula": "Vezula", "Heerashai": "Dondozo",
    "Nigiragi": "Tatsugiri", "Epitaff": "Annihilape",
    "Suelord": "Clodsire", "Farigiraf": "Farigiraf",
    "Dummimisel": "Dudunsparce", "Gladimperio": "Kingambit",
    "Riesenzahn": "Great Tusk", "Brüllschweif": "Scream Tail",
    "Wutpilz": "Brute Bonnet", "Flatterhaar": "Flutter Mane",
    "Kriechflügel": "Slither Wing", "Sandfell": "Sandy Shocks",
    "Eisenrad": "Iron Treads", "Eisenbündel": "Iron Bundle",
    "Eisenhand": "Iron Hands", "Eisenhals": "Iron Jugulis",
    "Eisenfalter": "Iron Moth", "Eisendorn": "Iron Thorns",
    "Frospino": "Frigibax", "Cryospino": "Arctibax",
    "Espinodon": "Baxcalibur", "Gierspenst": "Gimmighoul",
    "Monetigo": "Gholdengo", "Chongjian": "Wo-Chien",
    "Baojian": "Chien-Pao", "Dinglu": "Ting-Lu",
    "Yuyu": "Chi-Yu", "Donnersichel": "Roaring Moon",
    "Eisenkrieger": "Iron Valiant", "Koraidon": "Koraidon",
    "Miraidon": "Miraidon", "Windewoge": "Walking Wake",
    "Eisenblatt": "Iron Leaves", "Sirapfel": "Dipplin",
    "Mortcha": "Poltchageist", "Fatalitcha": "Sinistcha",
    "Boninu": "Okidogi", "Benesaru": "Munkidori",
    "Beatori": "Fezandipiti", "Ogerpon": "Ogerpon",
    "Briduradon": "Archaludon", "Hydrapfel": "Hydrapple",
    "Keilflamme": "Gouging Fire", "Furienblitz": "Raging Bolt",
    "Eisenfels": "Iron Boulder", "Eisenhaupt": "Iron Crown",
    "Terapagos": "Terapagos", "Infamomo": "Pecharunt"
}


var punctuationRevision = {
    "porygonz": "Porygon-Z",
    "Porygonz": "Porygon-Z",

    "mrmime": "Mr. Mime",
    "mr.mime": "Mr. Mime",
    "mr-mime": "Mr. Mime",
    "mr mime": "Mr. Mime",
    "Mrmime": "Mr. Mime",
    "Mr.mime": "Mr. Mime",
    "Mr-mime": "Mr. Mime",
    "Mr mime": "Mr. Mime",

    "mrrime": "Mr. Rime",
    "mr.rime": "Mr. Rime",
    "mr-rime": "Mr. Rime",
    "mr rime": "Mr. Rime",
    "Mrrime": "Mr. Rime",
    "Mr.rime": "Mr. Rime",
    "Mr-rime": "Mr. Rime",
    "Mr rime": "Mr. Rime",

    "mimejr": "Mime Jr.",
    "mime jr": "Mime Jr.",
    "mime-jr": "Mime Jr.",
    "mimejr.": "Mime Jr.",
    "mime jr.": "Mime Jr.",
    "mime-jr": "Mime Jr.",

    "Mimejr": "Mime Jr.",
    "Mime jr": "Mime Jr.",
    "Mime-jr": "Mime Jr.",
    "Mimejr.": "Mime Jr.",
    "Mime jr.": "Mime Jr.",
    "Mime-jr": "Mime Jr.",

    "jangmo o": "Jangmo-O",
    "jangmo-o": "Jangmo-O",
    "jangmoo": "Jangmo-O",
    "hakamo o": "Hakamo-O",
    "hakamo-o": "Hakamo-O",
    "hakamoo": "Hakamo-O",
    "kommo o": "Kommo-O",
    "kommo-o": "Kommo-O",
    "kommoo": "Kommo-O",

    
    "screamtail": "Scream Tail",
    "brutebonnet": "Brute Bonnet",
    "fluttermane": "Flutter Mane",
    "slitherwing": "Slither Wing",
    "sandyshocks": "Sandy Shocks",
    "irontreads": "Iron Treads",
    "ironbundle": "Iron Bundle",
    "ironhands": "Iron Hands",
    "ironjugulis": "Iron Jugulis",
    "ironmoth": "Iron Moth",
    "ironthorns": "Iron Thorns",

    "wochien": "Wo-Chien",
    "chienpao": "Chien-Pao",
    "tinglu": "Ting-Lu",
    "chiyu": "Chi-Yu",

    "roaringmoon": "Roaring Moon",
    "ironvaliant": "Iron Valiant",
    "walkingwake": "Walking Wake",
    "ironleaves": "Iron Leaves",
    "gougingfire": "Gouging Fire",
    "ragingbolt": "Raging Bolt",
    "ironboulder": "Iron Boulder",
    "ironcrown": "Iron Crown",

    "pam pam": "Pam-Pam",
    "pampam": "Pam-Pam",

    "sen long": "Sen-Long",
    "senlong": "Sen-Long",

    "kapu riki": "Kapu-Riki",
    "kapu fala": "Kapu-Fala",
    "kapu toro": "Kapu-Toro",
    "kapu kime": "Kapu-Kime",
    "kapuriki": "Kapu-Riki",
    "kapufala": "Kapu-Fala",
    "kaputoro": "Kapu-Toro",
    "kapukime": "Kapu-Kime",

    "tapukoko": "Tapu Koko",
    "tapulele": "Tapu Lele",
    "tapubulu": "Tapu Bulu",
    "tapufini": "Tapu Fini",

    "farfetch d": "Farfetch'd",
    "farfetchd": "Farfetch'd",
    "Farfetch d": "Farfetch'd",
    "Farfetchd": "Farfetch'd",

    "sirfetch d": "Sirfetch'd",
    "sirfetchd": "Sirfetch'd",
    "Sirfetch d": "Sirfetch'd",
    "Sirfetchd": "Sirfetch'd",
}


var ReversePokeTrans = {};
let englishnames = Object.values(PokeTrans);
let germannames = Object.keys(PokeTrans);

let allnamess = englishnames.concat(germannames);
let allnames = removeDuplicates(allnamess);
//console.log(allnames[allnames.length-2]);
//console.log(germannames);

var num = 0;
while (num < englishnames.length){
    ReversePokeTrans[englishnames[num]] = germannames[num];
    num++;
}
//console.log(ReversePokeTrans);

function yesbtn(){
    let errorMessage = document.getElementById('error-message');
    errorMessage.style.backgroundColor = 'rgb(226, 134, 134)';
    errorMessage.innerHTML = 'Seriously...';
}


let results = document.getElementById('search-results');
let searchbar = document.getElementById('answer');
let searchterm = [];

if(null == 1){
    searchbar.addEventListener('input', (e) => {
        var searchArray = [];
        results.innerHTML = '';
        if (e.data != null){
            searchterm.push(e.data);
        } else if (e.data == null){
            searchterm.pop();
        }
        var d = 0;
        var name = '';
        while (d < searchterm.length){
            name = name + searchterm[d];
            d++;
        }

        name = name.toLowerCase();
        name = capitalizeFirstLetter(name);

        var g = 0;
        while (g < allnames.length){
            if (allnames[g].startsWith(name) && name.length >= 1){
                searchArray.push(allnames[g]);
            }
            g++;
        }

        //console.log(name);
        if (name.length >= 1){
            results.innerHTML = '<button class="searchresult" id="p_' + searchArray[0] + '">' + searchArray[0] + '</button>';
        }
        let thisbtn = document.getElementById('p_' + searchArray[0]);
        if (thisbtn != null){
            thisbtn.addEventListener('mousedown', (e) => {
                var btnText = thisbtn.innerText;
                searchbar.value = '';
                searchbar.value = btnText;
                results.innerHTML = '';
                searchterm = [];
                name = '';
                execute();
                return;
            });
        }
    });

}


console.log(searchterm);

function execute(){
    //console.log("Pok");

    let translated = document.getElementById('translations');
    translated.innerText = '';
    //translated.style.width = '310px';

    let er = document.getElementById('effective-types');
    er.innerHTML = '';

    let thistypebtn = document.getElementById('thistype');
    thistypebtn.innerText = '';
    thistypebtn.style.visibility = 'hidden';

    let errorMessage = document.getElementById('error-message');
    errorMessage.innerText = '';

    let effectivenessRow = document.getElementById('effective-types');
    effectivenessRow.innerHTML = '';

    let veryRow = document.getElementById('very-types');
    veryRow.innerHTML = '';

    let effectiveTitle = document.getElementById('effective-title');
    effectiveTitle.innerText = '';

    let veryTitle = document.getElementById('very-title');
    veryTitle.innerText = '';

    let ans = document.getElementById('answer');
    var pokemon = String(ans.value).trim();

    if (pokemon in punctuationRevision){
        pokemon = punctuationRevision[pokemon];
    }

    pokemon = pokemon.toLowerCase();
    if (pokemon == 'ef em' || pokemon == 'ef-em' || pokemon == 'efem'){
        pokemon = 'Noibat';
        translated.innerHTML = '<div>en | Noibat</div><div></div><div>de | eF-eM</div>';
        var PokeTypes = Pokemons[pokemon]; //Array of the types of this pokemon
        executeDual(PokeTypes);
        return;
    } else if (pokemon == 'uhafnir'){
        pokemon = 'Noivern';
        translated.innerHTML = '<div>en | Noivern</div><div></div><div>de | UHaFnir</div>';
        var PokeTypes = Pokemons[pokemon];
        executeDual(PokeTypes);
        return;
    } else if (pokemon == 'jangmo o' || pokemon == 'jangmo-o' || pokemon == 'jangmoo'){
        pokemon = 'Jangmo-O';
        translated.innerHTML = '<div>en | Jangmo-o</div><div></div><div>de | Miniras</div>';
        var PokeTypes = Pokemons[pokemon];
        executeMono(PokeTypes);
    } else if (pokemon == 'hakamo o' || pokemon == 'hakamo-o' || pokemon == 'hakamoo'){
        pokemon = 'Hakamo-O';
        translated.innerHTML = '<div>en | Hakamo-o</div><div></div><div>de | Mediras</div>';
        var PokeTypes = Pokemons[pokemon];
        executeMono(PokeTypes);
    } else if (pokemon == 'kommo o' || pokemon == 'kommo-o' || pokemon == 'kommoo'){
        pokemon = 'Kommo-O';
        translated.innerHTML = '<div>en | Kommo-o</div><div></div><div>de | Grandiras</div>';
        var PokeTypes = Pokemons[pokemon];
        executeMono(PokeTypes);
    } else if (pokemon == 'typ:null' || pokemon == 'typ: null' || pokemon == 'typ null' || pokemon == 'typ.null' || pokemon == 'typnull'){
        pokemon = 'Type: Null';
        translated.innerHTML = '<div>en | Typ:Null</div><div></div><div>de | Type: Null</div>';
        var PokeTypes = Pokemons[pokemon];
        executeMono(PokeTypes);
    }

    if (pokemon.indexOf(' ') > -1){
        var trennungsArray = pokemon.split(' ');
        var firstPart = trennungsArray[0];
        var secPart = trennungsArray[1];
        firstPart = capitalizeFirstLetter(firstPart);
        secPart = capitalizeFirstLetter(secPart);
        if (firstPart + '-' + secPart in Pokemons){
            pokemon = firstPart + '-' + secPart;
        } else {
            pokemon = firstPart + ' ' + secPart;
        }

    } else if (pokemon.indexOf('-') > -1){
        var trennungsArray = pokemon.split('-');
        var firstPart = trennungsArray[0];
        var secPart = trennungsArray[1];
        firstPart = capitalizeFirstLetter(firstPart);
        secPart = capitalizeFirstLetter(secPart);
        pokemon = firstPart + '-' + secPart;
    } else {
        pokemon = capitalizeFirstLetter(pokemon);
    }


    //console.log("Pokemon");


    //console.log(capitalizeFirstLetter(pokemon));

    if ((pokemon == "Pokemon") || (pokemon == "Pokémon")){
        errorMessage.style.backgroundColor = 'rgb(226, 134, 134)';
        errorMessage.innerHTML = 'I see what you\'re trying to do... But no!  <button onclick="yesbtn()">yes!</button>';
        errorMessage.style.fontSize = '30px';
        return;
    }

    let translation = document.getElementById('translations');
    if (pokemon == 'Charizard' || pokemon == 'Glurak'){
        translation.style.width = '317px';
    } 
    if (pokemon in PokeTrans){
        translation.innerHTML = '<div>en | ' + PokeTrans[pokemon] + '</div><div></div><div>de | ' + pokemon + '</div>';
        pokemon = PokeTrans[pokemon];
    } else if (pokemon in ReversePokeTrans){
        translation.innerHTML = '<div>en | ' + pokemon + '</div><div></div><div>de | ' + ReversePokeTrans[pokemon] + '</div>';
    }
    

    var PokemonTypes = Pokemons[pokemon]; //Array of the types of this pokemon
    if (!(pokemon in Pokemons)){
        errorMessage.style.backgroundColor = 'rgb(226, 134, 134)';
        errorMessage.innerText = 'Invalid Entry ; Try Again!';
        translation.innerText = '';
        return;
    }

    
    //console.log(PokemonTypes)

    let siteTitle = document.getElementById('site-title');
    siteTitle.innerText = pokemon;

    if (PokemonTypes.length == 1){
        executeMono(PokemonTypes);
    } else if (PokemonTypes.length == 2){
        executeDual(PokemonTypes);
    }
}





function executeMono(thisPokemonsTypeArray){

    let effectiveTitle = document.getElementById('effective-title');
    effectiveTitle.innerText = '';


    let effectivenessSelector = document.getElementById('effectiveness');
    
    var typeCorr = 0;
    if (effectivenessSelector.value == 'Very-Effective'){
        typeCorr = 2;
    } else if (effectivenessSelector.value == 'Neutral'){
        typeCorr = 1;
    } else if (effectivenessSelector.value == 'Not-Very-Effective'){
        typeCorr = 5;
    } else if (effectivenessSelector.value == 'Immune'){
        typeCorr = 0;
    }

    var giveTypeArray = [];

    var thisPokemonsType = thisPokemonsTypeArray[0];

    let thistype = document.getElementById('thistype');
    thistype.style.visibility = 'visible';
    thistype.innerText = thisPokemonsType + ' Type';

    var typeNumber = typeNums[thisPokemonsType];
    var k = 0;
    while (k < maxTypes+1){
        if (mat[k][typeNumber] == typeCorr){
            giveTypeArray.push(numTypes[k]);
        }
        k++;
    }
    //console.log(giveTypeArray);

    let effectivenessRow = document.getElementById('effective-types');
    let veryTitle = document.getElementById('very-title');

    effectivenessRow.innerHTML = '';
    veryTitle.innerText = '';

    if ((effectivenessSelector.value == 'Very-Effective') && (giveTypeArray.length != 0)){
        effectiveTitle.innerText = '2 times effective:';
    } else if ((effectivenessSelector.value == 'Not-Very-Effective') && (giveTypeArray.length != 0)){
        effectiveTitle.innerText = '0.5 times effective:';
    }

    var j = 0;
    while (j < giveTypeArray.length){
        effectivenessRow.innerHTML = effectivenessRow.innerHTML + '<button class="' + giveTypeArray[j] + '">' + giveTypeArray[j] + '</button>'
        j++;
    }
}





function executeDual(thisPokemonsTypes){
    var Type1 = thisPokemonsTypes[0];
    var Type2 = thisPokemonsTypes[1];
    var Type1Number = typeNums[Type1];
    var Type2Number = typeNums[Type2];

    var concatType = Type1 + ' ' + Type2;
    let thistype = document.getElementById('thistype');
    thistype.style.visibility = 'visible';
    thistype.innerText = concatType + ' Type';

    var effectivenessArrayType1 = [];
    var effectivenessArrayType2 = [];

    var f = 0;
    var g = 0;
    while (f < maxTypes+1){
        effectivenessArrayType1.push(mat[f][Type1Number]);
        f++;
    }
    while (g < maxTypes+1){
        effectivenessArrayType2.push(mat[g][Type2Number]);
        g++;
    }

    console.log(effectivenessArrayType1);
    console.log(effectivenessArrayType2);

    // complete combined array:
    var comcomarr = [];

    // division arrays:
    var Effective = [];
    var veryEffective = [];
    var veryUneffective = [];
    var Uneffective = [];
    var Neutral = [];
    var Immune = [];

    var d = 0;
    while (d < maxTypes+1){
        var k = effectivenessArrayType1[d] * effectivenessArrayType2[d];
        if (k == 10){
            k = 1;
        }
        comcomarr.push(k);
        d++;
    }

    console.log(comcomarr);

    var t = 0;
    while (t < maxTypes+1){
        if (comcomarr[t] == 0){
            Immune.push(numTypes[t]);
        }
        else if (comcomarr[t] == 1){
            Neutral.push(numTypes[t]);
        }
        else if (comcomarr[t] == 5){
            Uneffective.push(numTypes[t]);
        }
        else if (comcomarr[t] == 2){
            Effective.push(numTypes[t]);
        }
        else if (comcomarr[t] == 4){
            veryEffective.push(numTypes[t]);
        }
        else if (comcomarr[t] == 25){
            veryUneffective.push(numTypes[t]);
        }
        t++;
    }

    console.log(Immune);
    console.log(Neutral);
    console.log(Uneffective);
    console.log(Effective);
    console.log(veryEffective);
    console.log(veryUneffective);

    let effectivenessRow = document.getElementById('effective-types');
    let veryRow = document.getElementById('very-types');

    let selector = document.getElementById('effectiveness');

    let effectiveTitle = document.getElementById('effective-title');
    let veryTitle = document.getElementById('very-title');

    if (selector.value == "Very-Effective"){
        if (Effective.length == 0){
            effectiveTitle.innerText = '';
        } else if (Effective.length != 0){
            effectiveTitle.innerText = '2 times effective:';
        }
        if (veryEffective.length == 0){
            veryTitle.innerText = '';
        } else if (veryEffective.length != 0){
            veryTitle.innerText = '4 times effective:';
        }

        var z = 0;
        var p = 0;
        while (z < Effective.length){
            effectivenessRow.innerHTML = effectivenessRow.innerHTML + '<button class="' + Effective[z] + '">' + Effective[z] + '</button>';
            z++;
        }
        while (p < veryEffective.length){
            veryRow.innerHTML = veryRow.innerHTML + '<button class="' + veryEffective[p] + '">' + veryEffective[p] + '</button>';
            p++;
        }
    }
    else if (selector.value == "Not-Very-Effective"){
        if (Uneffective.length == 0){
            effectiveTitle.innerText = '';
        } else if (Uneffective.length != 0){
            effectiveTitle.innerText = '0.5 times effective:';
        }
        if (veryUneffective.length == 0){
            veryTitle.innerText = '';
        } else if (veryUneffective.length != 0){
            veryTitle.innerText = '0.25 times effective:';
        }

        var n = 0;
        var m = 0;
        while (n < Uneffective.length){
            effectivenessRow.innerHTML = effectivenessRow.innerHTML + '<button class="' + Uneffective[n] + '">' + Uneffective[n] + '</button>';
            n++;
        }
        while (m < veryUneffective.length){
            veryRow.innerHTML = veryRow.innerHTML + '<button class="' + veryUneffective[m] + '">' + veryUneffective[m] + '</button>';
            m++;
        }
    }
    else if (selector.value == "Neutral"){
        effectiveTitle.innerText = '';
        veryTitle.innerText = '';
        var w = 0;
        while (w < Neutral.length){
            effectivenessRow.innerHTML = effectivenessRow.innerHTML + '<button class="' + Neutral[w] + '">' + Neutral[w] + '</button>';
            w++;
        }
    } 
    else if (selector.value == "Immune"){
        effectiveTitle.innerText = '';
        veryTitle.innerText = '';
        var q = 0;
        while (q < Immune.length){
            effectivenessRow.innerHTML = effectivenessRow.innerHTML + '<button class="' + Immune[q] + '">' + Immune[q] + '</button>';
            q++;
        }
    }
}

document.getElementById('answer').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      execute();
    }
});


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}



function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}