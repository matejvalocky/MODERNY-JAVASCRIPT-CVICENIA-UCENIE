// 112. Moderní JavaScript - Miniprojekt vymazání položky Založení projektu
// 113. Moderní JavaScript - Miniprojekt vymazání položky Formulář a funkce načtení dat z logalStorage


/*
    funkcia načítajúca dáta v localStorage;
    ošetriť, pokiaľ dáta v localStorage nie sú
*/

const getSavedNames = function(){
    const myNames = localStorage.getItem("names")

    if(myNames !== null){
        return JSON.parse(myNames)
    } else {
        return []
    }
}