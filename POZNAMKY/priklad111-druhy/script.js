const names = getSavedNames() // do konštanty names mi ulož to, čo mi 
// vráti tá funkcia getSavedNames

let myForm  = document.querySelector("#test-form")

myForm.addEventListener("submit", function(event){
    event.preventDefault() // zrusenie refreshu stranky po stlaceni na odoslat

    names.push({ // push pridanie hodnoty na koniec poľa 
        id: "", 
        firstName: event.target.elements.firstName.value // hodnota políčka
    })





})