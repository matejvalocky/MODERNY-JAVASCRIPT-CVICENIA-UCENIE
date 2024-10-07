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
