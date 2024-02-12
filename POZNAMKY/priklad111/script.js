// 112. Moderní JavaScript - Miniprojekt vymazání položky Založení projektu
// 113. Moderní JavaScript - Miniprojekt vymazání položky Formulář a funkce načtení dat z logalStorage




// console.log(uuidv4())
// VYPISUJE NAM SPECIALNY IDENTIFIKATOR




const names = getSavedNames()

// odoslanie formulára a uloženie do localStorage pomocou premennej names
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

// vypisovanie späť do stránky

let buttonToList = document.querySelector(".to-list")

buttonToList.addEventListener("click", function(event){
    let namesFromStorage = localStorage.getItem("names")
    let namesFromStorageJSON = JSON.parse(namesFromStorage)

    console.log(namesFromStorageJSON)

    namesFromStorageJSON.forEach(function(myName){
        const oneNameHTML = generateHTMLstructure(myName)
        document.querySelector(".list-names").appendChild(oneNameHTML)
    })
})