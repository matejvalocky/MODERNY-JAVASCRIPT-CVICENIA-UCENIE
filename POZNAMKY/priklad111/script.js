// 112. Moderní JavaScript - Miniprojekt vymazání položky Založení projektu
// 113. Moderní JavaScript - Miniprojekt vymazání položky Formulář a funkce načtení dat z logalStorage

const names = getSavedNames()


let myForm = document.querySelector("#test-form")
myForm.addEventListener("submit", function (event) {
    event.preventDefault()

    names.push({ // push =  pridanie záznamu na koniec
        id: "",
        firstName: event.target.elements.firstName.value
    })

    event.target.elements.firstName.value = ""

    saveNames(names)


})