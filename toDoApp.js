// 74. ToDoAppka tvorba poľa objektov  a vypísanie počtu zostávajúcich úloh 

let myToDos = [{
    text: "vyniesť kôš",
    completion: true
}, {
    text: "ísť nakúpiť",
    completion: false
}, {
    text: "upratať",
    completion: true
}, {
    text: "nakrmiť psa",
    completion: false
},{
    text: "nakrmiť mačku",
    completion: false
}]


// vypísanie počtu zostávajúcich úloh
let toDoLeft = myToDos.filter(function(oneToDo){
    return oneToDo.completion === false
})


let paragraph = document.createElement("p")
paragraph.textContent = `Počet zostávajúcich úloh:  ${toDoLeft.length}`

document.querySelector("main").prepend(paragraph)



/////////////////////////////////////////////////////////////////////

// 75. Vypísanie všetkých úloh do stránky (aj tých nesplnených)

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


// // 82. Moderní JavaScript - ToDoAppka   filtrujeme naše úkoly filter, function, forEach

// /*********************
//  * FILTROVANIE
//  ********************/


// // Pre ukladanie textu z vyhľadávacieho políčka
// const filters = {
//     searchingText: ""
// }





// // Obecná filtrovacia funkcia
// let renderToDos = function(ourToDos, weSearching){
//     let ourResults = ourToDos.filter(function(oneToDo){
//         return oneToDo.text.toLowerCase().includes(weSearching.searchingText.toLowerCase())
//     })
//     document.querySelector("#results-todos").innerHTML = ""

//     ourResults.forEach(function(oneResult){
//         let paragraph = document.createElement("p")
//         paragraph.textContent = oneResult.text
//         document.querySelector("#results-todos").appendChild(paragraph)
//     })
// }






// // Načítanie textu z políčka
// let searchText = document.querySelector("#search-text")
// searchText.addEventListener("input", function(event){
//    filters.searchingText = event.target.value
   
//    // Voláme filtrovaciu funkciu 
//    renderToDos(myToDos, filters)
// })





// 83. Moderní JavaScript - ToDoAppka Počet neudělaných úkolů z filtrovaných výsledků

















































// 82. Moderní JavaScript - ToDoAppka   filtrujeme naše úkoly filter, function, forEach


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

    document.querySelector("#results-todos").innerHTML = ""

    ourResults.forEach(function(oneResult){
        let paragraph = document.createElement("p")
        paragraph.textContent = oneResult.text
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



