
// 104. Moderní JavaScript - Posíláme do localStorage obsah tří políček najednou

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