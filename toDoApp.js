// 74. ToDoAppka tvorba poľa objektov  a vypísanie počtu zostávajúcich úloh 

let myToDos = [{
    text: "vyniesť kôš",
    completion: false
}, {
    text: "ísť nakúpiť",
    completion: false
}, {
    text: "upratať",
    completion: false
}, {
    text: "nakrmiť psa",
    completion: true
},{
    text: "nakrmiť mačku",
    completion: true
}]


// vypísanie počtu zostávajúcich úloh
let toDoLeft = myToDos.filter(function(oneToDo){
    return oneToDo.completion === false
})


let paragraph = document.createElement("p")
paragraph.textContent = `Počet všetkých zostávajúcich úloh, ktoré majú status false bez filtrovania:  ${toDoLeft.length}`

document.querySelector("main").appendChild(paragraph)



/////////////////////////////////////////////////////////////////////

// Vypísanie všetkých úloh do stránky (aj tých nesplnených)

// použi cyklus for
// vytvoriť nový odstavec
// naplniť odstavec
// appendnúť


for(let i = 0; i < myToDos.length; i++){
    let taskParagraph = document.createElement("p")
    taskParagraph.textContent = myToDos[i].text
    document.querySelector("#results-todos").appendChild(taskParagraph)
}


/////////////////////////////////////////////////////////////////////////////////








/************
 * FILTROVANIE
 ***********/

//uložíme dáta z políčka
let filters = {
    searchingText: ""
}


// OBECNA FILTROVACIA FUNKCIA
let renderToDos = function(ourToDos, weSearching){
    let ourResults = ourToDos.filter(function(oneToDo){
        return oneToDo.text.toLowerCase().includes(weSearching.searchingText.toLowerCase())
    })



// 83. Moderní JavaScript - ToDoAppka - Počet nesplnených úloh z filtrovaných výsledkov
// KOLKO ULOH OSTAVA UROBIT
    
    document.querySelector("#toDosLeft").innerHTML = ""

let leftToDos = ourResults.filter(function(oneToDo){
    return oneToDo.completion === false
})


    // console.log(leftToDos.length)

    let paragraph = document.createElement("p")
    paragraph.textContent = `Ešte zostáva urobiť úloh z vyfiltrovaných (počet všetkých, čo sú false): ${leftToDos.length}`
    document.querySelector("#toDosLeft").appendChild(paragraph)
    

// VYPISOVANIE ULOH DO STRANKY
    document.querySelector("#results-todos").innerHTML = ""

    ourResults.forEach(function(oneResult){
        let paragraph = document.createElement("p")
        paragraph.textContent = oneResult.text + " " + "(" + oneResult.completion + ")"
        document.querySelector("#results-todos").appendChild(paragraph)
    })
    
}



//načítanie dát z políčka
let searchText = document.querySelector("#search-text")




//pridanie eventlistenera
searchText.addEventListener("input", function(event){
    filters.searchingText = event.target.value
    // voláme filtrovaciu funkciu
    renderToDos(myToDos, filters)
})



