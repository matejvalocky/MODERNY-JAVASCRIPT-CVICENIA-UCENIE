const names = getSavedNames(); // do konštanty names mi ulož to, čo mi
// vráti tá funkcia getSavedNames

let myForm = document.querySelector("#test-form");

myForm.addEventListener("submit", function (event) {
  event.preventDefault(); // zrusenie refreshu stranky po stlaceni na odoslat

  names.push({
    // push pridanie hodnoty na koniec poľa
    id: uuidv4(), // generovanie špeciálnych jedinečných identifikátorov
    firstName: event.target.elements.firstName.value, // hodnota políčka
  });

  event.target.elements.firstName.value = ""; // vymazanie hodnoty políčka po kliknutí na submit

  savedNames(names);
});



// vypisovanie späť do stránky


let buttonToList = document.querySelector(".to-list") // zachytenie buttonu
buttonToList.addEventListener("click", function(event){
    let namesFromStorage = localStorage.getItem("names") // vytiahnutie dát z localStorage
    let namesFromStorageJSON = JSON.parse(namesFromStorage) // prevedenie na pôvodny datovy typ
   
    namesFromStorageJSON.forEach(function(myName){
        const oneNameHTML = generateHTMLstructure(myName)
        document.querySelector(".list-names").appendChild(oneNameHTML)
    })
})