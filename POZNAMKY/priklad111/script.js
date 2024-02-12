// 112. Moderní JavaScript - Miniprojekt vymazání položky Založení projektu
// 113. Moderní JavaScript - Miniprojekt vymazání položky Formulář a funkce načtení dat z logalStorage




// console.log(uuidv4())
// VYPISUJE NAM SPECIALNY IDENTIFIKATOR




const names = getSavedNames()


let myForm = document.querySelector("#test-form")
myForm.addEventListener("submit", function (event) {
    event.preventDefault()

    names.push({ // push =  pridanie záznamu na koniec
        id: uuidv4(),
        firstName: event.target.elements.firstName.value
    })

    event.target.elements.firstName.value = ""

    saveNames(names)


})