// let firstName = "Matej"
// let job = "účtovník"


// document.write("Ahoj, volám sa " + firstName + " a pracujem ako " + job + ".")








// let age = 37

// document.write("Ahoj, volám sa " + firstName + " a mám " + age + " rokov.")

// age = age + 5
// document.write("Za 5 rokov budem mať " +  age + " rokov.")






// let student1 = 95
// let student2 = 86


// let student1Name = "Jožo"
// let student2Name = "Fero"

// let fullPoints = prompt("zadaj maximálny počet bodov")

// let result1 = student1 / fullPoints * 100
// let result2 = student2 / fullPoints * 100


// document.write(student1Name + " dosiahol " + result1 + " % úspešnosti.")
// document.write(student2Name + " dosiahol " + result2 + " % úspešnosti.")







// let age = prompt("zadaj vek")

// let child = age < 18
// let adult = age >= 18
// let pensioner = age >= 65

// // document.write(child)

// // document.write(adult)

// // document.write(pensioner)

// document.write("Dieťa: " + child)
// document.write("Dospelý: " + adult)
// document.write("Dôchodca: " + pensioner)












// let job = prompt("zadaj názov pozície (programátor, administrátor alebo sekretárka")


// if (job === "programátor"){
//     document.write("Aký je rozdiel medzi HTML, CSS a JAVASCRIPTOM")
// } else if ( job === "administrátor"){
//     document.write("Aké druhy sietí poznáš")
// } else if ( job === "sekretárka"){
//     document.write("Vieš napísať list?")
// } else {
//     document.write("Zle zadaný vstup, pozíciu s názvom " + job + " nehľadáme" )
// }










// let temperature = prompt("zadaj teplotu")

// if(temperature < 10){
//     document.write("je chladno")
// } else if (temperature >= 11 && temperature <= 25){
//     document.write("je teplo")
// } else (temperature > 25){
//     document.write("je horúco")
// }



// let temp = prompt("zadaj teplotu")

// if(temp <=10){
//     document.write(temp + " stupňov Celzia " + "je zima")
// } else if ( temp >= 11 && temp <= 25){
//     document.write(temp + " stupňov Celzia " + " je teplo")
// } else {
//     document.write(temp + " stupňov Celzia " + " je horúco")
// }




// let vahaWeight = prompt("zadaj váhu")
// let vyskaHeight = prompt("zadaj výšku")


// if (vahaWeight >= 100 && vyskaHeight >= 190) {
//     document.write("je hlavný podozrivy")
// } else if (vahaWeight >= 100 || vyskaHeight >= 190) {
//     document.write("je podozrivy")
// } else {
//     document.write("nie je podozrivý")
// }


// 19. Moderní JavaScript - Lokální a globální scope v JavaScriptu

// let prvy = "prvý text"



// if(true){
//     console.log(prvy)
//     let druhy = "druhy text"
// }

// console.log(druhy)


// function pozdrav () {
//     console.log("pozdrav 1")
// }


// pozdrav()
// pozdrav()
// pozdrav()
// pozdrav()
// pozdrav()


// let naDruhu = function(num){
//     console.log(num * num)
// }

// naDruhu(2)
// naDruhu(4)
// naDruhu(6)
// naDruhu(8)
// naDruhu(10)
// naDruhu(12)
// naDruhu(14)


// let zdraviacaFunkcia = function(meno){
//     console.log("Ahoj ja som " + meno)
// }

// zdraviacaFunkcia("David")
// zdraviacaFunkcia("Jožo")
// zdraviacaFunkcia("Fero")
// zdraviacaFunkcia("Drbo")
// zdraviacaFunkcia("Ogrgeľ")


// let plus5 = function(cislo){
//     console.log(5 + cislo)
// }

// plus5(5)
// plus5(10)
// plus5(15)
// plus5(20)
// plus5(25)
// plus5(30)
// plus5(35)


// let naDruhu = (num) => {
//     console.log(num * num)
// }
// naDruhu(2)
// naDruhu(22)
// naDruhu(222)
// naDruhu(2222)
// naDruhu(22222)
// naDruhu(222222)


// let zvysovaciaFunkcia = function(num){
//     let result = num + 100
//     return result
// }

// let value = zvysovaciaFunkcia(1000)
// console.log(value)



// function adultChecker(age){
//     if (age >=18){
//        let result = "dospelý"
//        return result
//     } else if (age > 0) {
//         let result = "dieťa"
//         return result
//     } else if (age == 0) {
//         let result = "novorodeniatko"
//         return result
//     } else  {
//         let result = "nenarodený"
//         return result
//     }
// }


// let age = prompt("zadaj vek")


// let value = adultChecker(age)

// if (value === "dospelý"){
//     document.write("Výsledok kontroly veku: " + value)
//     document.write(" Môžeš vstúpiť")
// } else if (value === "dieťa") {
//     document.write("Výsledok kontroly veku: " + value)
//     document.write(" Nemôžeš vstúpiť")
// } else if (value === "novorodeniatko") {
//     document.write("Výsledok kontroly veku: " + value)
//     document.write(" Nemôžeš vstúpiť")
// } else {
//     document.write("Výsledok kontroly veku: " + value)
//     document.write(" Nemôžeš vstúpiť, ešte si sa nenarodil, narodíš sa o " + age *-1 + " rokov")
// }



// 27. Moderní JavaScript - Funkce: undefined a null v javascriptu


// let sucet = function(a, b, c){
//     return a + b * c
// }

// let value = sucet(20, 5, 15)

// console.log(value)

// let game = function(name = "Anonymny", score = 0){
//     console.log(name)
//     console.log(score)
// }

// game("David")




// 29. Moderní JavaScript - Výzva tlačítkový display a overenie prístupu

// let a = prompt("zadaj prvú číslicu")
// let b = prompt("zadaj druhú číslicu")
// let c = prompt("Zadaj tretiu číslicu")


// let overenie = function(a, b, c){
//     if (a === 1 && b === 6 && c ===9){
//         console.log("Môžeš vstúpiť")
//     } else {
//         console.log("Zle zadaný kód")
//     }
// }

// overenie(1, 6, 9) 



// správne riešenie

// let num1 = 5
// let num2 = 3
// let num3 = 8


// let checker = function(a, b, c){
//     if (num1 === a && num2=== b && num3 === c){
//         console.log("Môžeš vstúpiť")
//     } else {
//         console.log("prístup bol zablokovaný")
//     }
// }

// checker(5,3,9)
// checker(5,8,9,)
// checker(1,2,3,)
// checker(5,3,8)




// 33. Moderní JavaScript - Objekty co jsou to objekty v JavaScriptu

// let myBook = {
//     title: "Harry Potter a kamen mudrcov",
//     author: "J. K. Rowlingová",
//     published: 1997
// }

// console.log(myBook.title)

// console.log(myBook)


// console.log(`Ahoj, toto je kniha s názvom ${myBook.title}, ktorý napísala ${myBook.author} v roku ${myBook.published}`)




//34. Moderní JavaScript - Objekty výzva ovládni objekty v JavaScriptu

// let person1 = {
//     name: "Matej",
//     age: "37",
//     city: "Zvolen"
// }

// let person2 = {
//     name: "Jožo",
//     age: "42",
//     city: "Bystrica"
// }

// let person3 = {
//     name: "Fero",
//     age: "15",
//     city: "Teplica"
// }


// console.log(`Volám sa ${person1.name} mám ${person1.age} a pochádzam z mesta ${person1.city}`)
// console.log(`Volám sa ${person2.name} mám ${person2.age} a pochádzam z mesta ${person2.city}`)
// console.log(`Volám sa ${person3.name} mám ${person3.age} a pochádzam z mesta ${person3.city}`)




// 35. Moderní JavaScript - Objekty vypisování objektů pomocí funkce

// let firstBook = {
//     title: "Harry Potter a kamen mudrcov",
//     author: "J. K. Rowlingová",
//     published: 1997
// }
// let secondBook = {
//     title: "Harry Potter a tajomna komnata",
//     author: "J. K. Rowlingová",
//     published: 1998
// }

// let resultBook = function(book){
//     console.log(`Kniha od ${book.author} z roku ${book.published} s názvom ${book.title}`)
// }

// resultBook(firstBook)
// resultBook(secondBook)




// 36. Moderní JavaScript - Objekty výzva vytvořte vlastní funkci pro vypisování objektů



// let person1 = {
//     name: "Matej",
//     age: "37",
//     city: "Zvolen"
// }

// let person2 = {
//     name: "Jožo",
//     age: "42",
//     city: "Bystrica"
// }

// let person3 = {
//     name: "Fero",
//     age: "15",
//     city: "Teplica"
// }


// let personInfo = function(onePerson){
//     console.log(`Ahoj, volám sa ${onePerson.name} mám ${onePerson.age} rokov a pochádzam z mesta ${onePerson.city}`)
// }

// personInfo(person1)
// personInfo(person2)
// personInfo(person3)





// 37. Moderní JavaScript - Objekt výzva doplníme pohlaví a upravíme vypisování textu

// let person1 = {
//     name: "Matej",
//     age: "37",
//     city: "Zvolen",
//     gender: "male"
// }

// let person2 = {
//     name: "Jožo",
//     age: "42",
//     city: "Bystrica",
//     gender: "male"
// }

// let person3 = {
//     name: "Martina",
//     age: "15",
//     city: "Teplice",
//     gender: "female"
// }


// let personInfo = function(onePerson){
//     if (onePerson.gender === "male") {
//         console.log(`Tento človek sa volá ${onePerson.name}, jeho vek je ${onePerson.age} rokov, a on býva v meste ${onePerson.city}`)
//     } else  {
//         console.log(`Tento človek sa volá ${onePerson.name}, jej vek je ${onePerson.age} rokov, a ona býva v meste ${onePerson.city}`)
//     }
// }

// personInfo(person1)
// personInfo(person2)
// personInfo(person3)











// 38. Moderní JavaScript - Objekty proměnné a objekty, return a objekty

// objekty a premenné

// let name1 = prompt("name1")
// let name2 = prompt("name2")
// let name3 = prompt("name3")


// let person1 = {
//     name: name1,
//     age: "37",
//     city: "Zvolen",
//     gender: "male"
// }

// let person2 = {
//     name: name2,
//     age: "42",
//     city: "Bystrica",
//     gender: "male"
// }

// let person3 = {
//     name: name3,
//     age: "15",
//     city: "Teplice",
//     gender: "female"
// }

// console.log(person1.name)
// console.log(person2.name)
// console.log(person3.name)













// objekty a return

// let firstBook = {
//     title: "Harry Potter a kamen mudrcov",
//     author: "J. K. Rowlingová",
//     published: 1997
// }
// let secondBook = {
//     title: "Harry Potter a tajomna komnata",
//     author: "J. K. Rowlingová",
//     published: 1998
// }

// // let bookInfo = function(book){
// //     return book.title
// // }


// let bookInfo = function(book){
//     return {
//         basicInfo: `${book.title} od ${book.author}`,
//         publishing: `Kniha ${book.title} bola vydaná v roku ${book.published}`
//     }
// }

// let result = bookInfo(secondBook)
// // console.log(result)  

// console.log(result.basicInfo)
// console.log(result.publishing)









// 39. Moderní JavaScript - Objekty metody a jejich použití

// vysvetlenie














// // 40. Moderní JavaScript - Objekty a výzva: otevřené a uzavřené školy

// let school = {
//     type: "gymnazium",
//     street: "Galandova",
//     city: "Martin",
//     capacity: 540,
//     open: function(){
//         console.log("Škola je otvorená")},
//     closed: function(){
//         return "Škola je zavretá"
//     }
//     }


// console.log(school.type)
// console.log(school.city)

// school.open()

// let result = school.closed()

// console.log(result)











// 41. Moderní JavaScript - Objekty: kouzelné slovo this

// let person1 = {
//     firstName: "David", 
//     secondName: "Šetek",
//     age: 34,
//     greet: function(){
//         console.log(this.firstName)
//         console.log(this.secondName)
//         console.log(this.age)
//         console.log(`Ahoj, ja som ${this.firstName} a mám ${this.age} rokov`)
//     }
// }






// let person2 = {
//     firstName: "Matej", 
//     secondName: "Valocký",
//     age: 37,
//     greet: function(){
//         console.log(this.firstName)
//         console.log(this.secondName)
//         console.log(this.age)
//         console.log(`Ahoj, ja som ${this.firstName} a mám ${this.age} rokov`)
//     }
// }


// person1.greet()
// person2.greet()










// //42. Moderní JavaScript - Objekty výzva: vládní nařízení a uzavření škol

// let vladneNariadenie = false


// let school = {
//     type: "gympel",
//     street: "Hurbanova",
//     city: "Martin",
//     capacity: 540,
//     open: function(){
//         console.log(`Škola ${this.type} v meste ${this.city} je otvorená`)
//     },
//     closed: function(){
//         console.log(`Škola ${this.type} v meste ${this.city} je zatvorená`)
//     }
// }


// if( vladneNariadenie === true){
//     school.closed()
// } else {
//     school.open()
// }





// // 43. Moderní JavaScript - String: předpřipravené methods a properties

// let firstName = "Martin"

// // dĺžka
// console.log(firstName.length)

// // veľké písmená
// console.log(firstName.toUpperCase())

// // malé písmená
// console.log(firstName.toLowerCase())

// // zahŕňa
// let sentence = "Peter s učí javascript"
// let word = "David"
// console.log(sentence.includes(word))

// // odstránenie bielych medzier
// let secondName = "  Šetek   "
// console.log(secondName.trim())






// //44. Moderní JavaScript - String a výzva: kontrola délky hesla a nepovolené znaky

// let password = prompt("zadaj heslo")


// // KONTROLA DLZKY
// if (password.length > 13){
//     console.log("Veľmi silné heslo")
// } else if (password.length >8 && password.length <= 13) {
//     console.log("Silné heslo")
// } else {
//     console.log("Slabé heslo")
// }

// // NEOBSAHUJE 1234
// let numbers = 1234

// if (password.includes(numbers) ){
//     console.log("heslo nesmie obsahovať 1234")
// } else {
//     console.log("heslo je v poriadku")
// }



// // 45. Moderní JavaScript - Number: předpřipravené methods a properties, Math

// let number =  3.4956

// // toto je štandardné zaokrúhlenie, do zátvoriek sa píše počet desatiných miest
// console.log(number.toFixed(2)) 

// //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed


// // zaokrúhlovanie na celé čísla
// console.log(Math.round(number)) //  klasické matematické zaokrúhlenie na celé číslo
// console.log(Math.floor(number)) //  zaokrúhlenie vždy nadol (floor - podlaha = dolu)
// console.log(Math.ceil(number)) //   zaokrúhlenie vždy nahor (ceil - strop = hore)




// // náhodné číslo

// console.log(Math.random()) // náhodné číslo od 0 do 1
// console.log(Math.ceil(Math.random()*10)) // od 1 do 10 (nevyhodí nám 0)
// // console.log(Math.ceil(Math.random()*10)) 
// // console.log(Math.ceil(Math.random()*10)) 
// // console.log(Math.ceil(Math.random()*10)) 
// // console.log(Math.ceil(Math.random()*10)) 





// // náhodné číslo z intervalu
// console.log("interval:")
// let min = 10
// let max = 15

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// console.log(Math.floor(Math.random() * (max - min + 1)) + min)




// // 46. Moderní JavaScript - Number výzva: házíme kostkou

// // Úkol
// // Vytvořte 6 proměnných number1 až number6. Do každé proměnné uložíte výsledek hodu
// // kostkou - tedy číslo od 1 do 6. Poté do proměnné sum všech 6 čísel nasčítáte a pokud je
// // součet větší nebo rovno 25, tak vypíšete "Vítěz". Pokud menší, tak "Zkus znovu své štěstí".
// // Na vhodném místě také do konzole vypíšete celkový součet všech 6 čísel.


// let number1 = Math.ceil(Math.random() * 6) 
// let number2 = Math.ceil(Math.random() * 6) 
// let number3 = Math.ceil(Math.random() * 6) 
// let number4 = Math.ceil(Math.random() * 6) 
// let number5 = Math.ceil(Math.random() * 6) 
// let number6 = Math.ceil(Math.random() * 6) 

// let sum = number1 + number2 + number3 + number4 + number5 + number6

// console.log(number1)
// console.log(number2)
// console.log(number3)
// console.log(number4)
// console.log(number5)
// console.log(number6)

// console.log(`Súčet čísel ${number1}, ${number2}, ${number3}, ${number4}, ${number5}, a ${number6}  je: ${sum}`)


// if (sum >= 25){
//     console.log("Víťaz")
// } else {
//     console.log("Skús znova svoje šťastie")
// }













// // 47. Moderní JavaScript - Doplnění: konstanty (const)


// let adult = false

// adult = true

// console.log(adult)


// // konštanta a premenné, konštantu nemožno meniť (const), inak vyhodí chybu

// // const adult2 = false

// // adult2 = true

// // console.log(adult2)


// // konštanta a objekty

// const person = {
//     age: 15
// }

// // person = {} // nemožno prepísať ak je tam const

// person.age = 13 // ak je objekt definovaný konštantou (const), tak vnútro sa dá meniť v tomto prípade age

// console.log(person.age) // po vypísaní do konzoly sa zmení 15 na 13 = dá sa meniť vnútro objektu definovaný konštantou (const)













// //48. Moderní JavaScript - Doplnění: rozdíly mezi var a let


// // // opätovné vytvorené premennej s let 
// // let age = 30
// // let age = 40 // vyhodí chybu, už to bolo deklarované


// // // opätovné vytvorené premennej s var 
// // var age = 30
// // var age = 40 // nevyhodí chybu



// // chovanie v bloku s let

// // if (true){

// //     // toto je začiatok bloku
// //     let numberLet = 5
// //     // toto je koniec bloku
// // }

// // console.log(numberLet) // nevypíše



// // chovanie v bloku s var

// // if (true){

// //     // toto je začiatok bloku
// //     var numberVar = 5
// //     // toto je koniec bloku
// // }

// // console.log(numberVar) // vypíše



// // divnost u var


// console.log(value) // nevypíše
// let value = 10



// console.log(valueVar) // vypíše
// var valueVar = 10


// // treba používať vždy len premennú let
















//49. Moderní JavaScript - Odpočinek a obarvení textu v konzoli














// //50. Moderní JavaScript - Úvod do polí

// let employees = ["David", "Martin", "Jana"]
// console.log(employees[0])
// console.log(employees[1])
// console.log(employees[2])


// let data = ["Anna", 12, true, false, 13.5]
// console.log(data[0])
// console.log(data[1])
// console.log(data[2])
// console.log(data[3])
// console.log(data[4])



// // dĺžka poľa
// console.log(employees.length)           // zobrazenie dlžky pola = u nás je to 3
// console.log(data.length)                // zobrazenie dlžky pola = u nás je to 5
// console.log(data[data.length - 1])      // zobrazenie posledného prvku v poli



















// //51. Moderní JavaScript - Pole výzva: Náhodný generátor hesel

// // //   Úkol
// //      Vytvořte proměnnou passwords (pole) a uložte do ní tři stringy - texty (i text může mít v sobě
// //      čísla). Vaším úkolem je náhodně vybrat jedno heslo. Při každém znovunačtení stránky se do
// //      konzole vypíše jedno ze tří hesel (náhodně).


// let passwords = ["slkjerweelkr", "slkejricvzuqwšj", "123seôlkuvlkj"]

// let randomIndex = Math.ceil(Math.random() * 3)

// let index = passwords.length - randomIndex

// console.log(passwords[index])
// console.log(index)





















// // 52. Moderní JavaScript - Práce s polem: push, pop, unshift, shift
//     // přepsání prvku
// let testArray = ["test1", "test2", "test3"]
// testArray[0] = "Nový prvok v poli"
// console.log(testArray)


// // přidání posledního prvku
// let myArray = ["Jedna", "Dva", "Tri"]
// myArray.push("Štyri")
// console.log(myArray)


// // odstranění posledního prvku pole
// myArray.pop()
// console.log(myArray)



// // přidání prvního prvku
// myArray.unshift("Nultý")
// console.log(myArray)



// // odstranění prvního prvku
// myArray.shift()
// console.log(myArray)


// // 53. Moderní JavaScript - Práce s polem: splice a metody na mdn

// // mdn array - properties a methods
// // odstranění z libovolné pozice v poli
// let mySecondArray = ["Jedna", "Dva", "Tři"]
// mySecondArray.splice(0,1)
// console.log(mySecondArray)
// let myThirdArray = ["Jedna", "Dva", "Čtyři"]
// myThirdArray.splice(2,0,"Tři")
// console.log(myThirdArray)











// // 54. Moderní JavaScript - Společná výzva: blbneme s polem pomocí promptu


// // let firstName = prompt("Zadaj meno")

// // console.log(firstName)

// let nameArray = []


// // pridanie prvku na koniec
// nameArray.push(prompt("Zadaj meno"))
// console.log(nameArray)

// nameArray.push(prompt("Zadaj meno"))
// console.log(nameArray)

// nameArray.push(prompt("Zadaj meno"))
// console.log(nameArray)



// //pridanie prvku na začiatok
// nameArray.unshift(prompt("Zadaj meno"))
// console.log(nameArray)
// nameArray.unshift(prompt("Zadaj meno"))
// console.log(nameArray)
// nameArray.unshift(prompt("Zadaj meno"))
// console.log(nameArray)













// //55. Moderní JavaScript - Pole a cyklus forEach: cyklus je určený na pole - vypisujeme prvky pole

// let employees = ["David", "Harry", "Hermiona", "Ron", "Draco"]

// employees.forEach(function(){
//     console.log("testujeme")             // vypíše 5x testujeme, lebo máme 5 prvkov v poli
// })

// employees.forEach(function(onePerson){
//     console.log(onePerson)               // vypíše všetky prvky v poli
// })


// employees.forEach(function(person, index){   // vypíše všetky prvky a aj indexy v poli
//     console.log(index)
//     console.log(person)
//     console.log(`${person} má index ${index}`)
// })



// nazovPola.forEach(function(jedenPrvokPola){
//     console.log(jedenPrvokPola)
// })












// // 56. Moderní JavaScript - Pole výzva: vypisujeme číslovaný seznam úkolů

// /* // Úkol
// // Vytvořte pole s názvem toDo a uložte do něj čtyři úkoly, které máte provést:
// // - vyvenčit psa,
// // - koupit kečup,
// // - vymalovat pokoj,
// // - udělat si svačinu.
// // Poté položky pole toDo vypíšete do tohoto tvaru:
// // 1. vyvenčit psa
// // 2. koupit kečup
// // 3. vymalovat pokoj
// // 4. udělat si svačinu */


// let toDo = ["vyvenčiť psa", "kúpiť kečup", "vymaľovať izbu" , "urobiť si večeru"]

// toDo.forEach(function(task, index){
//     // console.log(`${task} je v poradí ${index + 1}.`)
//     let number = index + 1 
//     console.log(`${number}. v poradí je táto čínnost: ${task}`)
// })















// // //57. Moderní JavaScript - Cyklus for (univerzálny)

// // zápis cyklu for
// for(let i = 0; i <=5; i++){
//     console.log("Testovací text")
//     console.log(`${i + 1}. Testovací text má index ${i}`)
// }



// // obrátený cyklus for
// for(let j = 3; j >=0; j-- ){
//     console.log("Ďalší test") // vypíše 4x další test
// }



// // výpis poľa pomocou cyklu for

// let employees = ["Jožo", "Fero", "Dušan", "Miro", "Matej"]

// for(let k = 0; k < employees.length; k++){
//     console.log(employees[k])
//     console.log(k)
// }


































// // // 58. Moderní JavaScript - Výzva a cyklus for



// // Úkol

// // 1. vytvořte pole toDo s úkoly:
// // sestříhat video
// // uklidit pokoj
// // vyluxovat


// // 2. Vypište pole ve tvaru:

// // 1. sestříhat video
// // 2. uklidit pokoj
// // 3. vyluxovat

// // definovanie poľa
// let toDo = ["zostrihať video", "poupratovať", "vyluxovať"]

// // vypísanie pomocou cyklu forEach
// toDo.forEach(function(oneTask, index){
//     let number = index + 1
//     console.log(`${number}. ${oneTask}`)
// })
// // vypísanie pomocou cyklu for
// for(let i = 0; i < toDo.length; i++){
//     console.log(`${i + 1}. ${toDo[i]} `)
//     } 






// // 3. Vytvořte prázdné pole a pomocí cyklu ho naplňte čísly od 0 do 4. Pole vypište do konzole

// let myArray = [] // vytvorenie prázdneho poľa

// for(let k = 0; k < 5; k++){ // naplnenie pomocou cyklu for
//     myArray.push(k)
// }


// console.log(myArray) // vypísanie celého poľa



// for(let j = 0; j < myArray.length; j++){ // vypísanie prvku poľa osobitne pomocou cyklu for
//     console.log(myArray[j])
//     } 



































// // 59. Moderní JavaScript - Pole a indexOf

// // zisťuje, index daného prvku v poli


// // najprv si definujeme pole
// let employees = ["David", "Marek", "Jana"]

// // do konzoly vypíšeme index prvku takto:
// console.log(employees.indexOf("David")) // v konzole vypíše 0
// console.log(employees.indexOf("Marek")) // v konzole vypíše 1
// console.log(employees.indexOf("Jana"))  // v konzole vypíše 2
// console.log(employees.indexOf("Jozef")) // nie je v poli, vypíše -1






// // dá sa to použiť pri podmienkach, či užívateľ je alebo nie je v databáze
// // 1.
// if(employees.indexOf("David") === -1){
//     console.log("Užívateľ nebol nájdený")
// } else {
//     console.log("Užívateľ bol nájdený")
// }

// // 2.
// // tento zápis sa dá napísať aj opačne
// if(employees.indexOf("David") != -1){ // ak sa index Dávida nerovná - 1
//     console.log("Užívateľ bol nájdený")
// } else {
//     console.log("Užívateľ nebol nájdený")
// }





// // indexOf rieší aj malé a veľké písmená, takže "david" sa nerovná "David"
// let porovnanie = "David" != "david"
// console.log(porovnanie)             // vypíše true


// let porovnanie2 = "David" === "david"
// console.log(porovnanie2)            // vypíše false






















// // 60. Moderní JavaScript - Pole objektů a metoda indexOf

// // klasické pole
// let employees = ["David", "Marek", "Jana", 20, 30, true, false]



// // obecný zápis prázdneho poľa objektov
// let prazdnePoleObjektov = [{}, {}, {}, {}, {}, {}]



// // obecný zápis poľa objektov s názvami prvkov





// // základná kostra poľa objektov s jedným objektom
// let zakladnePoleObjektov = [{nazovPrvku1: "", nazovPrvku2: "", nazovPrvku3: ""}]





// // základná prehľadná kostra poľa objektov so štyrmi objektami
// let poleObjektov = [{
//         nazovPrvku1: "",
//         nazovPrvku2: "",
//         nazovPrvku3: ""
// }, {
//         nazovPrvku1: "",
//         nazovPrvku2: "",
//         nazovPrvku3: ""
// }, {
//         nazovPrvku1: "",
//         nazovPrvku2: "",
//         nazovPrvku3: ""
// }, {
//         nazovPrvku1: "",
//         nazovPrvku2: "",
//         nazovPrvku3: ""
// }]




// // konkrétny prehľadný zápis poľa objektov s názvom books  s troma objektami
// let books = [{
//         title: "Harry Potter a kameň Mudrcov",
//         author: "J. K. Rowlingová",
//         published: 1997
// }, {
//         title: "Harry Potter a Tajomná komnata",
//         author: "J. K. Rowlingová",
//         published: 1998
// }, {
//         title: "Harry Potter a väzeň z Azkabanu",
//         author: "J. K. Rowlingová",
//         published: 1999
// }]



// // takto vypíšeme jeden celý objekt pomocou  [indexu] v poli

// console.log(books[0])       // vypíše celý prvý objekt
// console.log(books[1])       // vypíše celý druhý objekt
// console.log(books[2])       // vypíše celý tretí objekt




// // konkrétnejší výpis pomocou [indexu] a bodky 

// console.log(books[0].title)         // vypíše prvý objekt s indexom [0] a jeho názov (title)
// console.log(books[0].author)        // vypíše prvý objekt s indexom [0] a jeho autora (author)
// console.log(books[0].published)     // vypíše prvý objekt s indexom [0] a jeho rok vydania (published)

// console.log(books[1].title)         // vypíše druhý objekt s indexom [1] a jeho názov (title)
// console.log(books[1].author)        // vypíše druhý objekt s indexom [1] a jeho autora (author)
// console.log(books[1].published)     // vypíše druhý objekt s indexom [1] a jeho rok vydania (published)

// console.log(books[2].title)         // vypíše tretí objekt s indexom [2] a jeho názov (title)
// console.log(books[2].author)        // vypíše tretí objekt s indexom [2] a jeho autora (author)
// console.log(books[2].published)     // vypíše tretí objekt s indexom [2] a jeho rok vydania (published)





// // skúšame aplikovať indexOf - hľadáme prázdny objekt
// // najprv si vytvoríme pole objektov s jedným prázdnym objektom:

// let knihy = [{}]

// console.log(knihy.indexOf({})) // v konzole vypíše -1 = nenašlo nám tento objekt
// // indexOf sa nedá používať pri poli objektov
// // indexOf funguje len pri obyčajnom poli napríklad pri:
// let names = ["David", "Marek", "Jana"]





















// // 61. Moderní JavaScript - Pole objektů a metoda findIndex

// // definujeme si pole objektov:
// let books = [{
//     title: "Harry Potter a kameň Mudrcov",
//     author: "J. K. Rowlingová",
//     published: 1997
// }, {
//     title: "Harry Potter a Tajomná komnata",
//     author: "J. K. Rowlingová",
//     published: 1998
// }, {
//     title: "Harry Potter a väzeň z Azkabanu",
//     author: "J. K. Rowlingová",
//     published: 1999
// }]


// // do google daj MDN ARRAY



// // použíjeme metódu findIndex
// // findIndex na bežnom poli

// let beznePole = [ 1, 12, 15, 16, 20 ]

// let result = beznePole.findIndex(function(number){
//     return number > 15
// })

// console.log(result) 
// // vypíše nám prvý index, kde toto číslo spĺňa podmienku > 15
// // ďalšie už nevypisuje, pretože skončí pri prvom náleze





// // findIndex na poli objektov
// let resultPoleObjektov = books.findIndex(function(oneBook){
//     return oneBook.published === 1998 // zadanie podmienky a vracia to index, kde to našlo
// })

// // oneBook si môžeme nazvať tak ako my chceme, hlavne popisne, aby sme sa v tom nestratili

// console.log(resultPoleObjektov)
// // vypíše nám index, kde našlo rok 1998
// // v našom prípade vypíše index 1




// console.log(books[resultPoleObjektov])
// // vypísanie celého objektu









// // 62. Moderní JavaScript - Pole objektů výzva hledání podezřelého v databázi


// // Úkol
// // Pomocí prompt() zadáte křestní jméno podezřelého a do konzole se vypíší všechny jeho
// // údaje. Každý údaj přehledně na jeden řádek. Např.:
// // Jméno: Jana
// // Příjmení: Růžová
// // atd.
// // Budete tedy muset najít podle jména daný objekt a ten pak vypíšete. K nalezení objektu
// // použijete findIndex

// // definujeme pole objektov
// let criminals = [{
//     firstName: "Martin",
//     secondName: "Zelený",
//     birth: 1985,
//     address: "U sloupů 16",
//     city: "České Budějovice"
//     }, {
//     firstName: "Jana",
//     secondName: "Růžová",
//     birth: 1996,
//     address: "Malská 29",
//     city: "České Budějovice"
//     }, {
//     firstName: "Filip",
//     secondName: "Modrý",
//     birth: 1989,
//     address: "Stevardská 38",
//     city: "České Budějovice"
//     }]



// // riešenie

// // zadanie otázky pomocou prompt
// let suspect = prompt("Aké krstné meno má podozrivý? Martin, Jana alebo Filip?")


// // zistenie indexu podozrivého a uloženie do premennej suspectIndex
// let suspectIndex = criminals.findIndex(function(oneSuspect){
//     return oneSuspect.firstName === suspect // podmienka, či sa rovná meno v databáze so zadaným menom
// })
// // vypísanie indexu podozrivého
// console.log(suspectIndex) 

// // uloženie objektu do premennej ourSuspect
// let ourSuspect = criminals[suspectIndex]
// // vypísanie celého objektu
// console.log(ourSuspect)

// // vypísanie podozrivého do konzole osobitne cez template string
// console.log(`Meno: ${ourSuspect.firstName}`)
// console.log(`Priezvisko: ${ourSuspect.secondName}`)
// console.log(`Rok narodenia: ${ourSuspect.birth}`)
// console.log(`Adresa: ${ourSuspect.address}`)
// console.log(`Mesto: ${ourSuspect.city}`)


















// // 63. Moderní JavaScript - Pole objektů a metoda find



// // MDN array metoda find

// // find a bežné pole
// // definovanie poľa
// let myArray = [1, 3, 20, 2, 8]

// let result = myArray.find(function(oneNumber){
//     return oneNumber > 4
// })

// console.log(result) // vypíše 20, tu sa to zasekne a ďalšie už nevypíše




// // find a pole objektov

// // definovanie poľa objektov
// let books = [{
//     title: "Harry Potter a kámen mudrců",
//     author: "J. K. Rowlingová",
//     published: 1997
//     }, {
//     title: "Harry Potter a Tajemná komnata",
//     author: "J. K. Rowlingová",
//     published: 1998
//     }, {
//     title: "Harry Potter a vězeň z Azkabanu",
//     author: "J. K. Rowlingová",
//     published: 1999
// }]

// // riešenie, vezmem si pole objektov books, zavolám na to metodu find, do oneBook sa postupne ukladá každá kniha a porovnáva či published sa rovná roku 1999
// // nakoniec sa výsledok uloží do premennej findBook
// let findBook = books.find(function(oneBook){
//     if(oneBook.published === 1999){
//         return oneBook // nájde nám knihu, ktorá spľňa podmienku
//     } 
// })

// //celý výsledok vypíšeme do konzoly a vytiahneme si findBook jej názov (title)
// console.log(findBook.title)













// // 64. Moderní JavaScript - Pole objektů a jejich filtrování




// // filtrování na běžném poli
// let names = ["Jana", "Anna", "Naděžda", "David"]


// // vezmeme names a použijeme na ňe filter
// let arrayResults = names.filter(function(oneName){  
//     let weTryFind = oneName.toLowerCase().includes("na")   
//         // do arrayResults nevráti true ani false, ale konkrétnu hodnotu z poľa objektov. Vyfiltruje mi všetky oneName, ktoré obsahujú "na", najprv však všetky slová prekonvertujeme na malé písmená (toLowerCase). oneName môžeme nazvať akokoľvek popisne, najprv vezme Janu, a porovná ju či vyhovuje podmienke. A ďalej pokračuje so všetkými menami v poli a porovnáva ich.

//     console.log(weTryFind) 
//         // vypíše 3x true a 1x false
//         // vracia sa sem true alebo false, podľa toho, či vyhovuje alebo nevyhovuje podmienke  
//     return weTryFind                  
// })



// console.log(arrayResults) 
// //nakoniec vypisujeme výsledky do arrayResults
// // vráti nám pole, našlo aj Nadeždu, pretože sme všetky mená v poli prekonvertovali na malé písmená (toLowerCase)






// // filtrovanie na poli objektov

// // definovanie poľa objektov
// let books = [{
//     title: "Harry Potter a kámen mudrců",
//     author: "J. K. Rowlingová",
//     published: 1997
//     }, {
//     title: "Harry Potter a Tajemná komnata",
//     author: "J. K. Rowlingová",
//     published: 1998
//     }, {
//     title: "Harry Potter a vězeň z Azkabanu",
//     author: "J. K. Rowlingová",
//     published: 1999
//     }]


// // ideme filtrovať

// let resultBooks = books.filter(function(oneBook){
//     let searched = oneBook.author.toLowerCase().includes("row")
//     console.log(searched)
//     return searched
// })

// console.log(resultBooks) 
// // vypíše celý obsah nájdených objektov, ktoré majú v autorovi slovo "row"




// resultBooks.forEach(function(oneResult){
//     console.log(oneResult.title)
// })
// // vypísanie všetkých výsledkov pomocou forEach (pretože je tam viac vyhovujúcich záznamov) a vypisujeme názov (title)











// // ukážeme si ako budeme postupovať, keď budeme chcieť vyhľadávať v autorovi (author) a v názve (title)
// // definujeme nové pole, kde posledný prvok bude Životopis Rowlingovej...

// let knihy = [{
//     title: "Harry Potter a kámen mudrců",
//     author: "J. K. Rowlingová",
//     published: 1997
//     }, {
//     title: "Harry Potter a Tajemná komnata",
//     author: "J. K. Rowlingová",
//     published: 1998
//     }, {
//     title: "Harry Potter a vězeň z Azkabanu",
//     author: "J. K. Rowlingová",
//     published: 1999 
//     }, {
//     title: "Životopis Rowlingovej",
//     author: "David",
//     published: 1999 
// }]

// // postup 
// let vysledkyKnih = knihy.filter(function(bookOne){
//     let searched = bookOne.author.toLowerCase().includes("row")
//     let searched2 = bookOne.title.toLocaleLowerCase().includes("row")
//     console.log(searched)   // riadok 1835
//     return searched || searched2
// })

// console.log(vysledkyKnih) // riadok 1839
// // vypíše celý obsah nájdených objektov, ktoré majú v autorovi slovo "row"




// vysledkyKnih.forEach(function(oneResult){
//     console.log(oneResult.title) // riadok 1846
// })

















// // 65. Pole objektů výzva - filtrování kriminálníků podle poznávací značky




// // Úloha
// // Svedok videl auto, ktoré odišlo z miesta vraždy. Vie len to, že na poznávacej značke bolo číslo 22. 
// // Vašou úlohou je nájsť v nasledujúcej databáze zločincov, ktorí majú v poznávacej značke číslo 22.

// // Napríklad: 
// // Meno: Martin 
// // Priezvisko: Zeleny 
// // Rok narodenia: 1985 
// // atď 

// // To, čo hľadáte (v tomto prípade 22), sa zadá pomocou promptu. 

// //Do nej by ste zadali 22.



// // Postup
// // definovanie poľa objektov:

// let criminals = [{
//     firstName: "Martin",
//     secondName: "Zelený",
//     birth: 1985,
//     licencePlate: "85C3322",
//     address: "U sloupů 16",
//     city: "České Budějovice"
// }, {
//     firstName: "Jana",
//     secondName: "Růžová",
//     birth: 1996,
//     licencePlate: "93K3922",
//     address: "Malská 29",
//     city: "České Budějovice"
// }, {
//     firstName: "Filip",
//     secondName: "Modrý",
//     birth: 1989,
//     licencePlate: "2EP6328",
//     address: "Stevardská 38",
//     city: "České Budějovice"
// }]


// // Riešenie s postupom

// // zadáme premennú witness a do nej vložíme prompt s otázkou na užívateľa
// let witness = prompt("Zadaj časť poznávacej značky")

// // 1. na pole objektov criminals aplikujeme filter
// criminals.filter(function(){

// })
// // 2. potom dovnútra filtra dáme premennú tryToFind
// criminals.filter(function(){
//  let tryToFind
// })

// // 3. do premennej tryToFind dáme oneSuspect a prehľadávame licencePlate
// criminals.filter(function(oneSuspect){
//     let tryToFind = oneSuspect.licencePlate
//    })

// // 4. prevedieme všetky písmená na malé toLowerCase()
// criminals.filter(function(oneSuspect){
//     let tryToFind = oneSuspect.licencePlate.toLowerCase()
//    })

// // 5. a teraz aplikujeme includes = či obsahuje v sebe to, čo zadal svedok (witness)
// criminals.filter(function(oneSuspect){
//     let tryToFind = oneSuspect.licencePlate.toLowerCase().includes(witness)
//    })

// // 6. vrátime return tryToFind
// criminals.filter(function(oneSuspect){
//     let tryToFind = oneSuspect.licencePlate.toLowerCase().includes(witness)
//     return tryToFind
//    })

// // 7. všetko toto uložíme do premennej arrayResults (výsledky poľa) (toto je celý kód)
// let arrayResults = criminals.filter(function(oneSuspect){
//     let tryToFind = oneSuspect.licencePlate.toLowerCase().includes(witness)
//     return tryToFind
// })





// //    vypisovanie a prehľadávanie pomocou forEach
// // 1. keďže výsledkov bude viac ako jeden, tak musíme použiť cyklus forEach na pole arrayResults
// arrayResults.forEach(function(){

// })
// // 2. každý objekt sa uloží do nami zvoleného popisného slova (oneSuspect)
// arrayResults.forEach(function(oneSuspect){

// })

// // 3. do cyklu vložíme vypísanie do konzoly a pomocou template string vypíšeme postupne všetky údaje (toto je celý kód)
// arrayResults.forEach(function(oneSuspect){
//     console.log(`Meno: ${oneSuspect.firstName}`)
//     console.log(`Priezvisko: ${oneSuspect.secondName}`)
//     console.log(`Dátum narodenia: ${oneSuspect.birth}`)
//     console.log(`ŠPZ: ${oneSuspect.licencePlate}`)
//     console.log(`Adresa: ${oneSuspect.address}`)
//     console.log(`Mesto: ${oneSuspect.city}`)
//     console.log(`--------------------------------`)
// })














// // 66. Pole objektov a ich zoradenie 
// // KONIEC ZÁKLADOV JAVASCRIPTU

// // radenie bežného poľa so stringami
// let names = ["Anna", "Cecilia", "Barbora"]
// names.sort()
// console.log(names)
// // tieto stringy nám zoradí správne



// /////////////////////////////////////////////////////////////////////////

// // radenie bežného poľa s číslami
// let numbers = [1, 8, 3, 2, 15, 5]
// numbers.sort()
// console.log(numbers) 
// // vypíše 1, 15, 2, 3, 5, 8 (nezoradí nám to správne, správny postup bude nižšie)



// /////////////////////////////////////////////////////////////////////////

// // radenie poľa objektov
// // definovanie poľa objektov
// let books = [{
//     title: "Harry Potter a kámen mudrců",
//     author: "J. K. Rowlingová",
//     published: 1997
//     }, {
//     title: "Harry Potter a Tajemná komnata",
//     author: "J. K. Rowlingová",
//     published: 1998
//     }, {
//     title: "Harry Potter a vězeň z Azkabanu",
//     author: "J. K. Rowlingová",
//     published: 1999 
//     }]

// // postup:
// // // 1. zadáme názov funkcie
// // let sortsArray = function(){

// // }
// // // 2. do funkcie pošleme celé pole kníh
// // let sortsArray = function(arrayBooks){

// // }



// // 3. do tej funkcie pošleme arrayBooks a na to zavoláme to sort. Do sortu pošleme function a zadáme podmienky
// let sortsArray = function(arrayBooks){
//     arrayBooks.sort(function(a, b){ // a = prvy objekt; b = druhy objekt
//         if(a.title.toLowerCase() < b.title.toLowerCase()){
//             return -1
//         } else if (b.title.toLowerCase() < a.title.toLowerCase()) { 
//             return 1
//         } else {
//             return 0
//         }
//     }) 
// }




// // 4. zavolanie funkcie sortsArray a poslali sme do nej pole books
// sortsArray(books)
// console.log(books)



// /////////////////////////////////////////////////////////////////////////

// //radenie poľa čísel podľa predošlého kódu tak, aby nám to zoradilo už správne
// let sortedArrayOfNumbers = function(myNumbers){
//     myNumbers.sort(function(a, b){ // a = prvé číslo; b = druhé číslo
//         if(a < b){
//             return -1
//         } else if (b < a) { 
//             return 1
//         } else {
//             return 0
//         }
//     }) 
// }


// sortedArrayOfNumbers(numbers)
// console.log(numbers)



/////////////////////////////////////////////////////////////////////////















// // 67. Document Object Model 



// // poznáme 4 druhy selectorov

// // 1. querySelector
// document.querySelector("nazov_tagu")            // dá sa odchytiť jeden tag
// document.querySelector("#nazov_idčka")          // odchytenie ID
// document.querySelector(".nazov_classy")         // odchytenie CLASSY

// // 2. querySelectorAll
// document.querySelectorAll("nazov_tagu")         //  odchytenie viacerych tagov s tým istým označením napríklad všetkých <p> tagov

// // 3. getElementById
// document.getElementById("nazov_id")             // odchytenie ID 2. spôsob

// // 4. getElementsByClassName
// document.getElementsByClassName("nazov_classy") // odchytenie CLASSY 2. spôsob



// /////////////////////////////////////////////////////////////////////////








// /* 68. Výběr html tagů pomocí JavaScriptu (querySelector, querySelectorAll, byId, byClassName) */



// // querySelector
// let paragraph = document.querySelector("#david")
// console.log(paragraph) // riadok 2140


// // querySelectorAll
// let allParagraphs = document.querySelectorAll("p")
// console.log(allParagraphs[0]) // riadok 2145
// console.log(allParagraphs[1]) // riadok 2146


// //getElementById
// let myId = document.getElementById("david")
// console.log(myId)           // riadok 2151


// // getElementsByClassName
// let myClass = document.getElementsByClassName("jozef")
// console.log(myClass[0])    // riadok 2156



// /////////////////////////////////////////////////////////////////////////

























// // // 69. Výber tagov výzva: Ukáž, že vieš vybrať čokoľvek na stránke



// ////////////////////////////////////////////////////////////////////////////////
// // Vyberte pomocí querySelectoru nadpis h1 a vypište do konzole
// let nadpisH1 = document.querySelector("h1")
// console.log(nadpisH1)   // riadok 2193
// ////////////////////////////////////////////////////////////////////////////////



// ////////////////////////////////////////////////////////////////////////////////
// // Vyberte pomocí querySelectoru odstavec s idéčkem test2 a vypište do konzole
// let paragraph = document.querySelector("#test2")
// console.log(paragraph)  // riadok 2201
// ////////////////////////////////////////////////////////////////////////////////



// ////////////////////////////////////////////////////////////////////////////////
// // Vyberte pomocí querySelectorAll oba nadpisy h2 a oba dva vypište do konzole (každý zvlášť)
// let headingsH2 = document.querySelectorAll("h2")
// console.log(headingsH2[0])  // riadok 2209
// console.log(headingsH2[1])  // riadok 2210
// ////////////////////////////////////////////////////////////////////////////////



// ////////////////////////////////////////////////////////////////////////////////
// // Vyberte pomocí querySelectorAll oba odstavce s třídou test1 a oba vypište do konzole (každý zvlášť)
// let headingsIdTest1 = document.querySelectorAll(".test1")
// console.log(headingsIdTest1[0])     // riadok 2218
// console.log(headingsIdTest1[1])     // riadok 2219
// ////////////////////////////////////////////////////////////////////////////////



// ////////////////////////////////////////////////////////////////////////////////
// // Vyberte pomocí getElementsByClassName odstavce s třídou test1 a oba vypište do konzole (každý zvlášť)
// let otherParagraphs = document.getElementsByClassName("test1")
// console.log(otherParagraphs[0])     // riadok 2227
// console.log(otherParagraphs[1])     // riadok 2228
// ////////////////////////////////////////////////////////////////////////////////



// ////////////////////////////////////////////////////////////////////////////////
// // Vyberte pomocí getElementById odstavec s idéčkem test2 a vypište do konzole
// let nextParagraph = document.getElementById("test2")
// console.log(nextParagraph)          // riadok 2236
// ////////////////////////////////////////////////////////////////////////////////














// // 70. Hrajeme si s textem (textContent, innerText, innerHTML)

// let heading = document.querySelector("h1")  // vybratie h1
// console.log(heading)
// console.log(heading.textContent)            // vypíše len textový obsah
// console.log(heading.innerText)              // nepoužívať (to isté ako textový obsah, je náchylný na útoky)
// console.log(heading.innerHTML)              // vypíše aj html kód ak sa vnútri nejaký

// heading.textContent = "Ahoj"                // zmena obsahu

////////////////////////////////////////////////////////////////////////////////////////////////////////


































// // 71. Vypisujeme pole odstavcov pomocou cyklu forEach

// let paragraphs = document.querySelectorAll("p")                 // výber tagu a uloženie do premennej

// // teraz použijeme cyklus forEach
// paragraphs.forEach(function(oneParagraph){                      // p elementov je viac, tak vypisujeme ich cyklom forEach
//     console.log(oneParagraph.textContent)                       // vypisujeme ich textový obsah
//     oneParagraph.textContent = "************************"       // prepis textového obsahu na nový
// })

////////////////////////////////////////////////////////////////////////////////////////////////////////















































// // 72. Moderní JavaScript - Odstraňujeme prvky podle obsahu (remove)

// let paragraphs = document.querySelectorAll("p") // vyberieme si všetky p tagy a priradíme ich do premenne paragraphs
// console.log(paragraphs) // kontrolný výpis


// // prehľadávanie všetkých odstavcov cez forEach
// paragraphs.forEach(function(oneParagraph){
//    if(oneParagraph.textContent.toLowerCase().includes("nakrmit")){ // zadanie podmienky, ak paragraf obsahuje slovo "nakrmit", tak to odstráň zo stránky
//     oneParagraph.remove() // príkaz odstránenie zo stránky
//    }
// })


// //////////////////////////////////////////////////////////////////////////////////////////////////////


















// // 73. Moderní JavaScript - Vytváříme nové html elementy a přidáváme je do stránky


// // pridanie nového odstavca
// const newParagraph = document.createElement("p")
// console.log(newParagraph)
// newParagraph.textContent = "text do nového odstavca"
// document.querySelector("header").appendChild(newParagraph)


// // pridanie nového divu
// const newDiv = document.createElement("div")
// document.querySelector("header").appendChild(newDiv)


// // vytvorenie a naplnenie druhého odstavca
// const secondParagraph = document.createElement("p")
// secondParagraph.textContent = "testovací text do divu"


// // pridanie druhého odstavca do nového divu
// newDiv.appendChild(secondParagraph)




// // pridanie textu pred a za v druhom odstavci
// secondParagraph.append(" TEXT NA KONCI")
// secondParagraph.prepend("TEXT NA ZACIATKU ")




// // pridanie nového spanu do druhého odstavca hore na začiatok
// const newSpan = document.createElement("span")
// newSpan.textContent = "Nový span"
// secondParagraph.prepend(newSpan)




///////////////////////////////////////////////////////////////////////////////////////









































// // 76. Zachytávame kliknutie návštevníka (EventListener, click, event)

// document.querySelector("a").addEventListener("click", function(event){
//     event.target.textContent = "Bolo kliknuté"
// })


///////////////////////////////////////////////////////////////////














// // 77. Event kliknutia - výzva zmeň texty nadpisov po kliknutí


// /* V index.html vytvoríte nadpisy h1, h2 a h3. Všetky budú obsahovať ľubovoľný text. Pre všetky
// nadpisy nastavíte text, ktorý sa po kliknutí na nadpis zmení na "Kliknite na nadpis nižšie".
// Výsledkom teda bude, že keď kliknete na h1, zmení sa text na "Kliknite na nadpis nižšie
// nižšie". Kliknutím na nadpis pod h1 - teda h2 - sa text opäť zmení na "Kliknite na
// nadpis nižšie" atď. */


// document.querySelector("h1").addEventListener("click", function(event){
//     event.target.textContent = "Klikni na nadpis nižšie"
// })


// document.querySelector("h2").addEventListener("click", function(event){
//     event.target.textContent = "Klikni na nadpis nižšie"
// })


// document.querySelector("h3").addEventListener("click", function(event){
//     event.target.textContent = "Klikni na nadpis nižšie"
// })



// /////////////////////////////////////////////////////////////////////////







// // 79. Výber elementov podľa názvov vs podľa class


// // 1. vyberie vždy len prvý element (nevybral druhý)
// let buttons = document.querySelector("button")
// console.log(buttons)



// // 2. vyberie všetky elementy, ktoré chceme
// let buttonsAll = document.querySelectorAll("button")
// console.log(buttonsAll)








// // odchytenie prvého tlačídla cez index
// // keď vyberáme element (button) podľa indexu, tak na to sa dá použiť eventListener
// buttonsAll[0].addEventListener("click", function(){
//     console.log("Klinutie na prvé tlačídlo")
// })

// // odchytenie druhého tlačídla cez index
// buttonsAll[1].addEventListener("click", function(){
//     console.log("Klinutie na druhé tlačídlo")
// })







// // odchytenie cez classy
// let buttonWithClass1 = 
// document.querySelector(".first-button").addEventListener("click", function(){
//     console.log("Kliknutie na prvé tlačídlo s classou")
// })

// let buttonWithClass2 = 
// document.querySelector(".second-button").addEventListener("click", function(){
//     console.log("Kliknutie na druhé tlačídlo s classou")
// })

// // vždy používať classy, alebo ID, pretože ak sa nám vymení poradie buttonov a odchytávame ich cez index, nebude to fungovať a funkcie sa spustia opačne 




////////////////////////////////////////////////////////////////////////////////























































// // 80. Moderní JavaScript - Zachytáváme text v políčku (Event listener change a input)

// let input = document.querySelector("#input-text")

// input.addEventListener("input", function(event){
//    event.target.value // tu je hodnota z políčka
// })

// // VYPISOVANIE PRI INPUTE
// // input.addEventListener("input", function(event){
// //     console.log(event.target.value) 
// //  })







// // VYPISOVANIE PRI CHANGE
//  input.addEventListener("change", function(event){
//     console.log(event.target.value) 
//  })


///////////////////////////////////////////////////////////////////////////////




















































// //81. Komplexný príklad, filtrujeme podozrivých a vypisujeme ich do stránky


// // data - pole objektov
// let criminals = [{
//         firstName: "Martin",
//         secondName: "Zelený",
//         birth: 1985,
//         licencePlate: "85C3322",
//         address: "U sloupů 16",
//         city: "České Budějovice"
//     }, {
//         firstName: "Jana",
//         secondName: "Růžová",
//         birth: 1996,
//         licencePlate: "93K3922",
//         address: "Malská 29",
//         city: "České Budějovice"
//     }, {
//         firstName: "Anna",
//         secondName: "Modrá",
//         birth: 1989,
//         licencePlate: "2EP6328",
//         address: "Stevardská 38",
//         city: "České Budějovice"
//     }]

//     // úlohy:
//     //1. vytvoriť políčko v html
//     //2. budeme hľadať podľa značky auta aj podľa jej časti
//     //3. všetky informácie nám vypíše do stránky




//     // postup:
//     //1. vytvor v indexe.html input typ text, placeholder poznávacia značka s ID licence-plate  (HTML)
//     //2. vytvor miesto, kde sa budú vypísovať výsledky - vytvorenie div s id idCriminal         (HTML)

//     // všetko ostatné bude písané v JAVASCRIPTE
//     //3. načítanie dát z políčka 
//     //4. pridanie eventlistenera
//     //5. načítanie informácii z políčka
//     //6. uložíme dáta z políčka
//     //7. filtrovanie
//     //8. vypísanie výsledkov do stránky




// //3. načítanie dát z políčka 
// let licencePlate = document.querySelector("#licence-plate")
// //4. pridanie eventlistenera
// licencePlate.addEventListener("input", function(event){
// //5. načítanie informácii z políčka
//      filters.searchText = event.target.value
//      renderCriminals(criminals, filters)

// })






// //6. uložíme dáta z políčka
// let filters = {
//     searchText: "",

// }

// //7. filtrovanie
// const renderCriminals = function(ourCriminals, tryToFind){
//     let arrayResult = ourCriminals.filter(function(oneSuspect){
//         return oneSuspect.licencePlate.toLowerCase().includes(tryToFind.searchText.toLowerCase())
//     })

//     // console.log(arrayResult)

//     // vyprázdnenie výsledkov (obsahu divu) pri ďalšom hľadaní
//     document.querySelector("#idCriminal").innerHTML = ""




//     //8A. vypísanie výsledkov
//     arrayResult.forEach(function(oneSuspect){
//         let paragraph = document.createElement("p")
//         paragraph.innerHTML =  `Meno: ${oneSuspect.firstName} <br>  
//                                 Priezvisko: ${oneSuspect.secondName} <br>
//                                 Dátum narodenia: ${oneSuspect.birth} <br>
//                                 Poznávacia značka: ${oneSuspect.licencePlate} <br>
//                                 Adresa: ${oneSuspect.address} <br>
//                                 Mesto: ${oneSuspect.city} <br>`


//         //8B. vypísanie výsledkov do stránky                        
//         document.querySelector("#idCriminal").appendChild(paragraph)               
//     })
// }












































































// // 84. Moderní JavaScript - Formulář a vypsání odeslaných hodnot

// document.querySelector("#test-form").addEventListener("submit", function(event){
//     // vypnutie východzieho chovania formulára
//     event.preventDefault()

//     // prístup k obsahu inputu
//     event.target.elements.firstName.value

//     // vytvoríme odstavec a pridáme do neho text z políčka
//     let paragraph = document.createElement("p")
//     paragraph.textContent = event.target.elements.firstName.value

//     document.querySelector("#from-form").appendChild(paragraph)


//     // vyčistenie obsah políčka po odoslaní
//     event.target.elements.firstName.value = ""

// })
























// // 85. Moderní JavaScript - Výzva Formulář a vypsání 3 políček

// document.querySelector("#formular").addEventListener("submit", function(event){
//     // vypnutie refreshu pri poslaní formulara
//     event.preventDefault()

//     // načítanie hodnôť z políčok do premenných
//     let firstName = event.target.elements.firstName.value
//     let lastName = event.target.elements.lastName.value
//     let email = event.target.elements.email.value




//     // vytvoríme odstavec a pridámem do neho text z políčka
//     let paragraph = document.createElement("p")
//     paragraph.innerHTML = `Meno: ${firstName}, <br>
//                             Priezvisko: ${lastName}, <br>
//                             Email: ${email}`




//     // vybranie divu, kde sa má prilepiť obsah
//     document.querySelector("#from-formular").appendChild(paragraph)




//     // vymazanie obsahu políčok po odoslaní
//     event.target.elements.firstName.value = ""
//     event.target.elements.lastName.value = ""
//     event.target.elements.email.value = ""
// })




















































// // 86. Moderní JavaScript - Zaškrtávací boxy checkbox a zachycení zaškrtnutí a odškrtnutí


// let myCheckBox = document.querySelector("#my-check-box")

// myCheckBox.addEventListener("change", function(event){
//     console.log(event.target.checked)
//     console.log("Zaškrtol si prvý checkbox")
// })


// let sex = document.querySelector("#sex")
// sex.addEventListener("change", function(event){
//     console.log(event.target.checked)
//     console.log("zaškrtol si checkbox s otázkou, či si muž")
// })



















































// // 87. Moderný JavaScript - Vypisujeme text z políčka vrátane checkboxu (setAttribute)


// let myForm = document.querySelector("#my-form")
// let count = 0; // počet

// myForm.addEventListener("submit", function(event){
//     // vypneme východzie chovanie formulara (refresh)
//     event.preventDefault()

//     // načítanie hodnoty z políčka (v našom prípade je to task)
//     event.target.elements.task.value

//     // count zvyšujeme o 1
//     count = count + 1 
//     // count+ = 1 (toto je ten isty zapis)

//     // vytvorenie inputu s typom checkbox
//     let input = document.createElement("input")
//     input.type = "checkbox"

//     // definovanie input id 
//     input.id = `testovací-${count}`

//     // zobrazenie inputu (pridanie potomka) do tagu s id results
//     document.querySelector("#results").appendChild(input)

//     // vytvorenie label tagu
//     let label = document.createElement("label")

//     // do label tagu vložíme textový obsah taký, aký zadáme do políčka
//     label.textContent = event.target.elements.task.value 

//     // nastavenie atributu for v label tagu na testovací + zvýšený count
//     label.setAttribute("for", `testovací-${count}`) 

//     // pridanie labelu (pridanie potomka) do divu s id results
//     document.querySelector("#results").appendChild(label)

//     // vyčistenie políčka na prázdny string
//     event.target.elements.task.value = ""
// })



// // 88. roletka s výberom

// let mySelect = document.querySelector("#my-select")

// console.log(mySelect)


// mySelect.addEventListener("change", function(event){
//     console.log(event.target.value)
// })










// // 89. eventy mouseenter a mouseleave

// // 1. mouse events

// let buttonMouseEnter = document.querySelector("#mouse-enter-button")

// buttonMouseEnter.addEventListener("mouseenter", function(event){
//     console.log("Event nabehutia myši na tlačítko")
// })



// let buttonMouseLeave = document.querySelector("#mouse-leave-button")

// buttonMouseLeave.addEventListener("mouseleave", function(event){
//     console.log("Event opustenia myši z tlačítka")
// })


// // 2. keyboard events

// document.querySelector("body").addEventListener("keydown", function(event){
//     console.log("klávesa bola stlačená nadol s opakovaním pri držaní KEYDOWN")
// })

// document.querySelector("body").addEventListener("keyup", function(event){
//     console.log("klávesa bola pustená nahor KEYUP")
// })

// document.querySelector("body").addEventListener("keypress", function(event){
//     console.log("klávesa bola stlačená nadol KEYPRESS")
// })


// // zachytenie hodnoty z klávesnice pomocou event.key

// document.querySelector("body").addEventListener("keyup", function(event){
//     console.log(event.key)
// })









// // 90. Meníme štýly pomocou javascriptu

// // vybratie elementu (h1)
// let heading = document.querySelector("h1")

// heading.addEventListener("mouseenter", function(event){
// // meníme štýly takto
// heading.style.color = "blue"
// })

// heading.addEventListener("mouseleave", function(event){
//     heading.style.color = "green"
// })





// // // meníme veľkosť písma
// // heading.style.fontSize = "50px"


// // // zmiznutie elementu
// // heading.style.display = "none"


// // // vypnutie tučnoty písma
// // heading.style.fontWeight = 400





// // 91. Posúvanie štvorček do všetkých strán

// let square = document.querySelector(".square")

// let newLeft = null;
// let newTop = null;

// document.querySelector("body").addEventListener("keydown", function(event){
//     if(event.key === "ArrowLeft"){
//         newLeft = newLeft - 10
//         square.style.left = newLeft + "px"
//     } else if (event.key === "ArrowRight") {
//         newLeft = newLeft + 10
//         square.style.left = newLeft + "px"
//     } else if (event.key === "ArrowUp"){
//         newTop = newTop - 10
//         square.style.top = newTop + "px"
//     } else if (event.key === "ArrowDown"){
//         newTop = newTop + 10
//         square.style.top = newTop + "px"
//     } 
// })


// // // posúvanie dolu
// // square.style.top = "10px"

// // // posúvanie hore
// // square.style.top = "-10px"

// // // posúvanie do prava
// // square.style.left = "20px"

// // // posúvanie do ľava
// // square.style.left = "-20px"





// // 92. GetComputedStyle a vyťahovanie informácii o štýloch

// let heading = document.querySelector("h1")

// // tento výpis štýlov nefunguje
// console.log(heading.style.color)

// // tento výpis štýlov funguje
// let style = getComputedStyle(heading)
// console.log(style.color) // vypísanie farby písma
// console.log(style.backgroundColor)  // vypísanie farby pozadia
// console.log(style)  // vypísanie všetkých štýlov elementu





// // 93. Zadávame text do políčka a podľa toho sa mení farba pozadia


// // zachytenie formulára
// let myForm = document.querySelector("#my-form")
// // zachytenie body
// let myBody = document.querySelector("body")

// myForm.addEventListener("submit", function(event){
//     event.preventDefault()

//     let inputColor = event.target.elements.color.value

//     myBody.style.backgroundColor = inputColor

//     event.target.elements.color.value = ""


// })






// // 94. Moderní JavaScript - Událost Scrollování a doscrollování nakonec


// window.addEventListener("scroll", function(){
//     let scrolled = window.scrollY // kolko sme skrolovali
//     let scrollable = document.documentElement.scrollHeight - window.innerHeight  // maximálne zaskrolovanie 
//     console.log(scrollable)
//     console.log(scrolled)

//     if (Math.ceil(scrolled) === scrollable){
//         alert("Doskroloval si na koniec")
//     }

//     // if (Math.ceil(scrolled) > 1000){
//     //     alert("Doskroloval si nad 1000px")
//     // }
// })




// // 95. Moderní JavaScript - Scrollování a praktický příklad s tlačítkem Nahoru

// window.addEventListener("scroll", function(){
//     let scrolled = window.scrollY
//     let scrollable = document.documentElement.scrollHeight - window.innerHeight

//     // if(Math.ceil(scrolled) === scrollable){
//     //     let toTop = document.querySelector(".top-page")
//     //     toTop.style.display = "block"

//     //     toTop.addEventListener("click", function(){
//     //         toTop.style.display = "none"
//     //     })
//     // }

//     if(Math.ceil(scrolled) > 500){
//         let toTop = document.querySelector(".top-page")
//         toTop.style.display = "block"

//         toTop.addEventListener("click", function(){
//             toTop.style.display = "none"
//         })
//     }

// })


//96. Moderní JavaScript - scrollTo a plynulé scrollování






// // 97. Moderní JavaScript - Po kliknutí na menu scrollujeme plynule kamkoliv na stránce (offsetTop) 

// let firstItemMenu =  document.querySelector(".first-item-menu")
// let scrollGoal = document.querySelector(".scroll-goal").offsetTop // kde sa to presne nachádza

// console.log(scrollGoal)


// firstItemMenu.addEventListener("click", function(){
//     window.scrollTo({
//         top: scrollGoal,
//         behavior: "smooth"
//     })
// })


// let secondItemMenu =  document.querySelector(".second-item-menu")
// let scrollGoal2 = document.querySelector(".scroll-goal2").offsetTop // kde sa to presne nachádza

// console.log(scrollGoal2)


// secondItemMenu.addEventListener("click", function(){
//     window.scrollTo({
//         top: scrollGoal2,
//         behavior: "smooth"
//     })
// })



// let thirdItemMenu =  document.querySelector(".third-item-menu")
// let scrollGoal3 = document.querySelector(".scroll-goal3").offsetTop // kde sa to presne nachádza

// console.log(scrollGoal3)


// thirdItemMenu.addEventListener("click", function(){
//     window.scrollTo({
//         top: scrollGoal3,
//         behavior: "smooth"
//     })
// })



// // 98. Moderní JavaScript - LocalStorage ukládáme data setItem, getItem, removeItem, clear


// // úložisko - volá sa localStorage
// // v prehliadači dať F12 - application - local storage


// // uloženie do localStorage
// // key = location, firstName
// // value = Martin, David
// localStorage.setItem("location", "Martin")
// localStorage.setItem("firstName", "David")


// // update položky
// localStorage.setItem("location", "Praha")
// localStorage.setItem("firstName", "Matej")


// // získanie položky
// console.log(localStorage.getItem("location")) 
// console.log(localStorage.getItem("firstName"))


// // zmazanie položky
// // localStorage.removeItem("location")
// // localStorage.removeItem("firstName")


// // zmazanie všetkého v localStorage
// localStorage.clear()






// // 99. Moderní JavaScript - LocalStorage JSON a převod na string a zase zpět ( stringify, parse)


// // localStorage ukladá iba stringy, ale dajú sa do neho uložiť aj iné objekty, polia ...


// // JSON - prevedenie čohokoľvek (napríklad objekt) na string

// const user = {
//     firstName: "David",
//     age: 27
// }



// let userJSON = JSON.stringify(user)
// localStorage.setItem("user", userJSON)



// // vrátenie naspäť

// let userFromLS = localStorage.getItem("user")

// console.log(userFromLS) // je to string

// let myUser = JSON.parse(userFromLS) // prevedenie stringu na v našom prípade objekt

// console.log(myUser) // je to už normálny objekt

// console.log(`Ahoj, ja som ${myUser.firstName} a mám ${myUser.age} rokov`)




// // 100. Moderní JavaScript - LocalStorage načítáme data z políčka do localStorage

// // ÚLOHA:
// // 1. vytvorenie políčka a odosielacieho tlačídla v HTML
// // 2. keď tam dačo zadáme do políčka a dáme odoslať, tak chceme, aby sa nám to vypísalo pod tým políčkom a to sa stane s každým záznamom, bude sa to tam pridávať pod sebou do odstavca
// // 3. tieto dáta z políčka uložíme do localStorage a z neho tam budeme ťahať dáta a vypisovať



// // 103. Moderní JavaScript - LocalStorage vylepšení, pole se při návratu nezakládá znovu
// if(localStorage.getItem("users") == null){
//    var myArray = [] 
// } else {
//     myArray = JSON.parse(localStorage.getItem("users"))
// }



// let myForm = document.querySelector("#test-form")
// myForm.addEventListener("submit", function(event){
//     event.preventDefault()
//     myArray.push(event.target.elements.firstName.value)
//     myArrayToLS = JSON.stringify(myArray)
//     localStorage.setItem("users", myArrayToLS)

//     event.target.elements.firstName.value = ""

// // POKRACOVANIE k 100. 
// // 101. Moderní JavaScript - LocalStorage vypisujeme data z LocalStorage do stránky

//     let myArrayFromLS = localStorage.getItem("users")

//     let myArrayFromLSj = JSON.parse(myArrayFromLS)

//     let paragraph = document.createElement("p")

//     paragraph.textContent = myArrayFromLSj[myArrayFromLSj.length - 1]

//     document.querySelector("#my-users").appendChild(paragraph)

// })

// // POKRACOVANIE K 101. 
// // 102. Moderní JavaScript - LocalStorage vytahujeme data z LocalStorage při načtení stránky

// let myPresentArray = localStorage.getItem("users")

// let myPresentArrayJ = JSON.parse(myPresentArray)


// // 103. vylepšenie
// if(myPresentArrayJ !==null){
//     myPresentArrayJ.forEach(function(oneUser){
//         let paragraph = document.createElement("p")
//         paragraph.textContent = oneUser
//         document.querySelector("#my-users").appendChild(paragraph)
//     })
// }




// 104. Moderní JavaScript - Posíláme do localStorage obsah tří políček najednou

let myForm = document.querySelector("#test-form")


if (localStorage.getItem("criminals") == null) {
   var myArray = []
} else {
   myArray = JSON.parse(localStorage.getItem("criminals"))
}

// odosielanie formulára
myForm.addEventListener("submit", function (event) {

   event.preventDefault()

   if (event.target.elements.firstName.value == "") {
      alert("Zadaj meno!")
   } else if (event.target.elements.secondName.value == "") {
      alert("Zadaj priezvisko!")
   } else if (event.target.elements.crime.value == "") {
      alert("Zadaj zločin!")
   } else {
      myArray.push({
         id: "",
         firstName: event.target.elements.firstName.value,
         secondName: event.target.elements.secondName.value,
         crime: event.target.elements.crime.value
      })

      event.target.elements.firstName.value = ""
      event.target.elements.secondName.value = ""
      event.target.elements.crime.value = ""
   }


   myArrayJSON = JSON.stringify(myArray)
   localStorage.setItem("criminals", myArrayJSON)

})

// 105. Moderní JavaScript - Vypisujeme data z localStorage zpět do stránky po kliknutí
// vypisovanie späť do stránky
let toList = document.querySelector(".to-list")

toList.addEventListener("click", function () {
   // 108. Moderní JavaScript - Hlášky pro prázdnou databázi zločinců (prázdný localStorage)

   if (localStorage.getItem("criminals") == null) {

      let paragraph = document.createElement("p")
      paragraph.textContent = "Databaza je prázdna"
      document.querySelector(".list-criminals").appendChild(paragraph)

   } else {
      let myStorage = localStorage.getItem("criminals")

      myStorageJSON = JSON.parse(myStorage)

      // 106. Moderní JavaScript - Zabraňujeme opakovanému výpisu stejného kriminálníka
      document.querySelector(".list-criminals").innerHTML = ""
      // 106. Moderní JavaScript - Zabraňujeme opakovanému výpisu stejného kriminálníka

      myStorageJSON.forEach(function (oneCriminal) {
         let paragraph = document.createElement("p")

         paragraph.innerHTML = `Meno: ${oneCriminal.firstName}, <br>
                                 Priezvisko: ${oneCriminal.secondName} <br>
                                 Zločin: ${oneCriminal.crime} `

         paragraph.classList.add("basic-styles")

         document.querySelector(".list-criminals").appendChild(paragraph)
      })
   }


   // 108. Moderní JavaScript - Hlášky pro prázdnou databázi zločinců (prázdný localStorage) KONIEC



})

// 105. Moderní JavaScript - Vypisujeme data z localStorage zpět do stránky po kliknutí KONIEC







// 109. Moderní JavaScript - Filtrujeme zločince podle jména 

// filtrovanie

let nameFilter = document.querySelector(".name-filter")
let myStorage = localStorage.getItem("criminals")
let myStorageJSON = JSON.parse(myStorage)


nameFilter.addEventListener("input", function (event) {
   let whatWeSearch = event.target.value

   let ourResults = myStorageJSON.filter(function (oneCriminal) {
      return oneCriminal.firstName.toLowerCase().includes(whatWeSearch.toLowerCase())
   })

   document.querySelector(".filter-name").innerHTML = ""
   document.querySelector(".list-criminals").innerHTML = ""

   

   // 110. Moderní JavaScript - Vypisujeme filtrované zločince do stránky

   ourResults.forEach(function (oneCriminal) {
      let paragraph = document.createElement("p")
      paragraph.innerHTML = `Meno: ${oneCriminal.firstName}, <br>
                            Priezvisko: ${oneCriminal.secondName}, <br>
                            Zločin: ${oneCriminal.crime}`

                            

     document.querySelector(".filter-name").appendChild(paragraph)                       
   })


 // 110. Moderní JavaScript - Vypisujeme filtrované zločince do stránky KONIEC
})




// 109. Moderní JavaScript - Filtrujeme zločince podle jména KONIEC





// 111. Moderní JavaScript - Miniprojekt vymazání položky: Ukázka co budeme tvořit
// tu je len ukážka, žiadny kod sa nepise

























































































































