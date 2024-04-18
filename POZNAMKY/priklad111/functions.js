// 112. Moderní JavaScript - Miniprojekt vymazání položky Založení projektu
// 113. Moderní JavaScript - Miniprojekt vymazání položky Formulář a funkce načtení dat z logalStorage


/*
    funkcia načítajúca dáta v localStorage;
    ošetriť, pokiaľ dáta v localStorage nie sú
*/

const getSavedNames = function () {
    const myNames = localStorage.getItem("names")

    if (myNames !== null) {
        return JSON.parse(myNames)
    } else {
        return []
    }
}


// 114. Moderní JavaScript - Miniprojekt vymazání položky funkce na ukládání dat do localStorage

/* 
    funkcia pre použitie pri odoslaní formulára;
    ukladá do localStorage meno z formulára 
*/

const saveNames = function (oneName) {
    localStorage.setItem("names", JSON.stringify(oneName))
}


/* 
Generovanie HTML štruktúry, ktorú umiestnime do sránky po kliknutí na stlačítko "Vypíš"

+ použíjeme ju tiež pre vypísanie informácii z localStorage, keď nejaké meno vymažeme pomocou tlačítka vymazať meno 
*/

const generateHTMLstructure = function(oneName){
    const newDiv = document.createElement("div")
    const newSpan = document.createElement("span")
    const button = document.createElement("button")
    

    // nastavenie mazacieho tlačídla

    button.textContent = "Vymazať meno"
    newDiv.appendChild(button)


    button.addEventListener("click", function(event){
        removeNames(oneName.id)
        saveNames(names)
    })

    newSpan.textContent = oneName.firstName
    newDiv.appendChild(newSpan)



    

    return newDiv
}

/* 
    Podľa ID nájdeme index daného mena a pomocou splice ho odstraníme 
*/

const removeNames = function(id){
    const index = names.findIndex(function(nameWantToCheck){
        return nameWantToCheck.id === id
    })

    if(index > -1){
        names.splice(index,1)
    }

    // console.log(index)
}