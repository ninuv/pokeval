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

function effectiveOnMono(){
    let actEffectiveness = document.getElementById('effectiveness');
    typeCoeff = 0;


    if (actEffectiveness.value == 'Very-Effective'){
        typeCoeff = 2;
    } else if (actEffectiveness.value == 'Not-Very-Effective'){
        typeCoeff = 5;
    } else if (actEffectiveness.value == 'Neutral'){
        typeCoeff = 1;
    } else if (actEffectiveness.value == 'Immune'){
        typeCoeff = 0;
    }

    var EffectiveTypes = [];

    let ans = document.getElementById('answer')
    var TypesString = String(ans.value);
    var CleanTypeString = capitalizeFirstLetter(TypesString.trim());
    var Typ = CleanTypeString;
    let siteTitle = document.getElementById('site-title');
    siteTitle.innerText = CleanTypeString + ' Type';
    var TypeNumber = typeNums[Typ];
    //console.log(TypeNumber);

    if (typeof TypeNumber != "number"){
        let errorMessage = document.getElementById('error-message');
        errorMessage.innerText = 'Invalid Entry ; Try Again!';
        errorMessage.style.backgroundColor = 'rgb(226, 134, 134)';
    }

    var i = 0;
    while (i < maxTypes+1){
        if (mat[i][TypeNumber] == typeCoeff){
            EffectiveTypes.push(numTypes[i]);
        } 
        i++;
    } 
    //console.log(EffectiveTypes);
    let effectivenessRow = document.getElementById('effective-types');
    let effectiveTitle = document.getElementById('effective-title');
    let veryTitle = document.getElementById('very-title');

    effectivenessRow.innerHTML = '';
    effectiveTitle.innerText = '';
    veryTitle.innerText = '';
    var j = 0;
    while (j < EffectiveTypes.length){
        effectivenessRow.innerHTML = effectivenessRow.innerHTML + '<button class="' + EffectiveTypes[j] + '">' + EffectiveTypes[j] + '</button>';
        j++;
    }
}


function effectiveOnDual(){
    //console.log("Hey")
    var EffectiveTypes1 = [];
    var EffectiveTypes2 = [];

    let ans = document.getElementById('answer');
    var TypesString = String(ans.value);
    var CleanTypeString = TypesString.trim();
    var Type1 = CleanTypeString.split(" ")[0];
    var Type2 = CleanTypeString.split(" ")[1];

    Type1 = capitalizeFirstLetter(Type1);
    Type2 = capitalizeFirstLetter(Type2);
    //console.log("Hey")
    //console.log(Type1);
    //console.log(Type2);
    var TypeNumber1 = typeNums[Type1];
    var TypeNumber2 = typeNums[Type2];
    //console.log(TypeNumber1);
    //console.log(TypeNumber2);

    if ((typeof TypeNumber1 != "number") || (typeof TypeNumber2 != "number") || (TypeNumber1 == TypeNumber2)){
        let errorMessage = document.getElementById('error-message');
        errorMessage.innerText = 'Invalid Entry ; Try Again!';
        errorMessage.style.backgroundColor = 'rgb(226, 134, 134)';

        let effectivenessRow = document.getElementById('effective-types');
        let effectiveTitle = document.getElementById('effective-title');
        let veryTitle = document.getElementById('very-title');

        effectivenessRow.innerHTML = '';
        effectiveTitle.innerText = '';
        veryTitle.innerText = '';
        return;
    }

    let siteTitle = document.getElementById('site-title');
    siteTitle.innerText = CleanTypeString + ' Type';

    var l = 0;
    while (l < maxTypes+1){
        EffectiveTypes1.push(mat[l][TypeNumber1]);
        l++;
    }
    var t = 0;
    while (t < maxTypes+1){
        EffectiveTypes2.push(mat[t][TypeNumber2]);
        t++;
    }
    //console.log(EffectiveTypes1);
    //console.log(EffectiveTypes2);

    PokeArray = [];

    var g = 0;
    while (g < maxTypes+1){
        var k = EffectiveTypes1[g] * EffectiveTypes2[g];
        if (k == 10){
            k = 1;
        }
        PokeArray.push(k);
        g++;
    }
    //console.log(PokeArray); // 1 = Neutral; 2 = Double Effective; 4 = 4 times Effective; 5 = half Effective; 25 = A fourth Effective; 0 = Immune

    let effectivenessRow = document.getElementById('effective-types');
    effectivenessRow.innerHTML = '';
    let veryRow = document.getElementById('very-types');
    veryRow.innerHTML = '';

    var Effective = []; // or uneffective
    var veryEffective = []; // or very uneffective
    var Neutral = [];
    var Immune = [];
    var veryUneffective = [];
    var Uneffective = [];

    var h = 0;
    while (h < maxTypes+1){
        if (PokeArray[h] == 4){
            veryEffective.push(numTypes[h]);
        } else if (PokeArray[h] == 2){
            Effective.push(numTypes[h]);
        } else if (PokeArray[h] == 1){
            Neutral.push(numTypes[h]);
        } else if (PokeArray[h] == 0){
            Immune.push(numTypes[h]);
        } else if (PokeArray[h] == 5){
            Uneffective.push(numTypes[h]);
        } else if (PokeArray[h] == 25){
            veryUneffective.push(numTypes[h]);
        }
        h++;
    }

    let actEffectiveness = document.getElementById('effectiveness');

    let effectiveTitle = document.getElementById('effective-title');
    let veryTitle = document.getElementById('very-title');
    if (actEffectiveness.value == 'Very-Effective'){
        if (veryEffective.length == 0){
            veryTitle.innerText = '';
        } else if (veryEffective.length != 0){
            veryTitle.innerText = '4 times effective:';
        }
        if (Effective.length == 0){
            effectiveTitle.innerText = '';
        } else if (Effective.length != 0){
            effectiveTitle.innerText = '2 times effective:';
        }
        var u = 0;
        var v = 0;
        while (u < veryEffective.length){
            veryRow.innerHTML = veryRow.innerHTML + '<button class="' + veryEffective[u] + '">' + veryEffective[u] + '</button>';
            u++;
        }
        while (v < Effective.length){
            effectivenessRow.innerHTML = effectivenessRow.innerHTML + '<button class="' + Effective[v] + '">' + Effective[v] + '</button>';
            v++;
        }
    } else if (actEffectiveness.value == 'Not-Very-Effective'){
        if (veryUneffective.length == 0){
            veryTitle.innerText = '';
        } else if (veryUneffective.length != 0){
            veryTitle.innerText = '0.25 times effective:';
        }
        if (Uneffective.length == 0){
            effectiveTitle.innerText = '';
        } else if (Uneffective.length != 0){
            effectiveTitle.innerText = '0.5 times effective:';
        }
        var n = 0;
        var m = 0;
        while (n < veryUneffective.length){
            veryRow.innerHTML = veryRow.innerHTML + '<button class="' + veryUneffective[n] + '">' + veryUneffective[n] + '</button>';
            n++;
        }
        while (m < Uneffective.length){
            effectivenessRow.innerHTML = effectivenessRow.innerHTML + '<button class="' + Uneffective[m] + '">' + Uneffective[m] + '</button>';
            m++;
        }
    } else if (actEffectiveness.value == 'Neutral'){
        veryTitle.innerText = '';
        effectiveTitle.innerText = '';
        var s = 0;
        while (s < Neutral.length){
            effectivenessRow.innerHTML = effectivenessRow.innerHTML + '<button class="' + Neutral[s] + '">' + Neutral[s] + '</button>';
            s++;
        }
    } else if (actEffectiveness.value == 'Immune'){
        veryTitle.innerText = '';
        effectiveTitle.innerText = '';
        var e = 0;
        while (e < Immune.length){
            effectivenessRow.innerHTML = effectivenessRow.innerHTML + '<button class="' + Immune[e] + '">' + Immune[e] + '</button>';
            e++;
        }
    }
    //console.log(Effective)
    //console.log(Uneffective)
    //console.log(veryEffective)
    //console.log(veryUneffective)
    //console.log(Neutral)
    //console.log(Immune)

}

document.getElementById('answer').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      execute();
    }
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}



function execute(){
    //console.log("HeyBeginExe")
    let veryRow = document.getElementById('very-types');
    veryRow.innerHTML = '';
    let errorMessage = document.getElementById('error-message');
        errorMessage.innerText = '';
    //console.log("THERE!");
    let amountSelector = document.getElementById('select-type-amounts');
    var amount = amountSelector.value;

    if (amount == 'Monotype'){
        effectiveOnMono();
    } else if (amount == 'Dualtype'){
        //console.log("HeyExe")
        effectiveOnDual();
    }

}
