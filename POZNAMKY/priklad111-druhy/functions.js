/*
Funkcia načítajúca dáta z localStorage; 
ošetriť pokiaľ dáta v localStorage nie sú
*/

// Získať úložené mená
const getSavedNames = function () {
  // v LS budú všetky mená pod kľúčom names

  // LS pozri sa, či už tie names nemáš v sebe
  // ak v LS nič nie je, tak nám vráti null
  // uložíme to do premennej myNames
  const myNames = localStorage.getItem("names");

  if (myNames !== null) {
    // ak to tam je
    return JSON.parse(myNames); // tak rovno to preved cez JSON von vo forme poľa objektov
  } else {
    // dáta v LS nie sú, tak
    return []; // vráti prázdne pole
  }
};

/*
Funkcia pre použitie pri odoslaní formulára;
ukladá do localStorage meno z formulara
*/

// uloženie mien
const savedNames = function (oneName) {
  // v oneName môže byť akýkoľvek názov, ktorý si popisne zadám
  localStorage.setItem("names", JSON.stringify(oneName));
  // rovno prevedieme do JSONu cez stringify
  // names sme si zadefinovali, že kľúč sa tak bude volať
  // môže to mať akýkoľvek názov (popisný - names)
};
