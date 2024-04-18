// 105. Moderní JavaScript - Vypisujeme data z localStorage zpět do stránky po kliknutí

let myForm = document.querySelector("#testForm")


if(localStorage.getItem("criminals") == null){ // ak v LS nie je nič
    var myArray = [] // vytvorenie prázdneho poľa
} else { // ak tam niečo je
    myArray = JSON.parse(localStorage.getItem("criminals")) 
}

 

myForm.addEventListener("submit", function(event){
    event.preventDefault()

    myArray.push({
        id: "",
        firstName: event.target.elements.firstName.value, 
        secondName: event.target.elements.secondName.value, 
        crime: event.target.elements.crime.value
    })

    console.log(myArray)


    // ukladanie do localStorage
    myArrayJSON = JSON.stringify(myArray)
    localStorage.setItem("criminals", myArrayJSON)

})


// zmeny 105
let toList = document.querySelector(".to-list")

toList.addEventListener("click", function(){ 
    // event netreba teraz písať

    let myStorage = localStorage.getItem("criminals")
    let myStorageJSON = JSON.parse(myStorage)

    myStorageJSON.forEach(function(oneCriminal){
        let paragraph = document.createElement("p")
        
        paragraph.innerHTML = `Meno: ${oneCriminal.firstName}, <br>
                                Priezvisko: ${oneCriminal.secondName}, <br>
                                Zločin ${oneCriminal.crime}` 

        document.querySelector(".list-criminals").appendChild(paragraph)
    })
})
// zmeny 105