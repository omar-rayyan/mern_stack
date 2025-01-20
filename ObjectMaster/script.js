const pokémon = Object.freeze([
    {
        "id": 1,
        "name": "Bulbasaur",
        "types": ["poison", "grass"]
    },
    {
        "id": 5,
        "name": "Charmeleon",
        "types": ["fire"]
    },
    {
        "id": 9,
        "name": "Blastoise",
        "types": ["water"]
    },
    {
        "id": 12,
        "name": "Butterfree",
        "types": ["bug", "flying"]
    },
    {
        "id": 16,
        "name": "Pidgey",
        "types": ["normal", "flying"]
    },
    {
        "id": 23,
        "name": "Ekans",
        "types": ["poison"]
    },
    {
        "id": 24,
        "name": "Arbok",
        "types": ["poison"]
    },
    {
        "id": 25,
        "name": "Pikachu",
        "types": ["electric"]
    },
    {
        "id": 37,
        "name": "Vulpix",
        "types": ["fire"]
    },
    {
        "id": 52,
        "name": "Meowth",
        "types": ["normal"]
    },
    {
        "id": 63,
        "name": "Abra",
        "types": ["psychic"]
    },
    {
        "id": 67,
        "name": "Machamp",
        "types": ["fighting"]
    },
    {
        "id": 72,
        "name": "Tentacool",
        "types": ["water", "poison"]
    },
    {
        "id": 74,
        "name": "Geodude",
        "types": ["rock", "ground"]
    },
    {
        "id": 87,
        "name": "Dewgong",
        "types": ["water", "ice"]
    },
    {
        "id": 98,
        "name": "Krabby",
        "types": ["water"]
    },
    {
        "id": 115,
        "name": "Kangaskhan",
        "types": ["normal"]
    },
    {
        "id": 122,
        "name": "Mr. Mime",
        "types": ["psychic"]
    },
    {
        "id": 133,
        "name": "Eevee",
        "types": ["normal"]
    },
    {
        "id": 144,
        "name": "Articuno",
        "types": ["ice", "flying"]
    },
    {
        "id": 145,
        "name": "Zapdos",
        "types": ["electric", "flying"]
    },
    {
        "id": 146,
        "name": "Moltres",
        "types": ["fire", "flying"]
    },
    {
        "id": 148,
        "name": "Dragonair",
        "types": ["dragon"]
    }
]);

// An array of pokémon objects where the id is evenly divisible by 3
const idDivisibleBy3 = pokémon.filter(p => p.id % 3 === 0);

// An array of pokémon objects that are "fire" type
const fireTypePkmn = pokémon.filter(p => p.types.includes("fire"));

// An array of pokémon objects that have more than one type
const moreThanOneType = pokémon.filter(p => p.types.length > 1);

// An array with just the names of the pokémon
const pkmnNames = pokémon.map(p => p.name);

// An array with just the names of pokémon with an id greater than 99
const namesIdGreaterThan99 = pokémon.filter(p => p.id > 99).map(p => p.name);

// An array with just the names of the pokémon whose only type is poison
const poisonOnlyNames = pokémon
  .filter(p => p.types.length === 1 && p.types[0] === "poison")
  .map(p => p.name);

// An array containing just the first type of all the pokémon whose second type is "flying"
const firstTypeOfFlying = pokémon
  .filter(p => p.types[1] === "flying")
  .map(p => p.types[0]);

// A count of the number of pokémon that are "normal" type
const normalTypeCount = pokémon.filter(p => p.types.includes("normal")).length;

console.log("1. ID divisible by 3:", idDivisibleBy3);
console.log("2. Fire type Pokémon:", fireTypePkmn);
console.log("3. Pokémon with more than one type:", moreThanOneType);
console.log("4. Pokémon names:", pkmnNames);
console.log("5. Names of Pokémon with ID > 99:", namesIdGreaterThan99);
console.log("6. Poison-only Pokémon names:", poisonOnlyNames);
console.log("7. First type of Pokémon with second type 'flying':", firstTypeOfFlying);
console.log("8. Count of normal type Pokémon:", normalTypeCount);
