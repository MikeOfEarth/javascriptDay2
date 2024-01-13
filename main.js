//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

console.log('----Problem 1----')
console.log('                 ')
console.log('---Answer 1.1...key of---')
const peopleKeys=Object.keys(person)
for (const k of peopleKeys){
    console.log(k)
    console.log(person[k])    
}

console.log('                 ')
console.log('---Answer 1.2...index and format---')
for (let i=0; i<peopleKeys.length; i++){
    console.log(`${peopleKeys[i]} : ${person[peopleKeys[i]]}`)
}

console.log('                 ')
console.log('---Answer 1.3...just lists---')
for (const k in person){
    if (Array.isArray(person[k])){
        console.log(person[k])
    }
}

console.log('                 ')
console.log('---Answer 1.4...big flat---')
console.log(Object.entries(person).flat(Infinity))


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/
console.log('                 ')
console.log('----Problem 2----')

console.log('Hey, remember where Dylan said in class not to do methods as arrow functions? Pepperidge Farms remembers.')
console.log('----2.1----')
// Create our Person Prototype
function Dude(fname, lname, age) {
    this.fName = fname
    this.lName = lname
    this.age = age

    this.printInfo = function(){
        console.log(
            `${this.fName} ${this.lName} is ${this.age} years old`
            )        
    }

    this.aging = function(){
        this.age++
        console.log(
        `${this.fName} ${this.lName} is another year older`
        )
    }
}

const carlos = new Dude('Carlos', 'Carlyle', 30)
carlos.printInfo()
carlos.aging()
carlos.aging()
carlos.aging()
carlos.printInfo()

// ------------------------- //

console.log('                 ')
console.log('----2.2----')
console.log('Took an embarassing amount of time to figure out the arrow method for these bad boys but here we are.')


class Dudette {
    constructor(first, last, age){
        this.first = first
        this.last = last
        this.age = age
    }

    printoInfo=()=>{console.log(`${this.first} ${this.last} is ${this.age} years old`) 
    }

    addAging=()=>{this.age++}
}

const hailey = new Dudette('Hailey','Bury', 30)
hailey.printoInfo()
for (let i=0;i<3;i++){
    hailey.addAging()
    i===0 ? console.log(`1 year has passed`) : console.log(`${i+1} years have passed`)
}
hailey.printoInfo()
    
// ------------------------- //

console.log('                 ')
console.log('----2.3----')
console.log('This is just a bonkers variable method I found while trying to figure out how to do arrow functions as methods since the GitHub for day two was not up yet')

const dudetta = {
    firsto : 'Bella',
    lasto : 'Mason',
    age : 30,
    printoInfo(){
        return `${this.firsto} ${this.lasto} is ${this.age} years old`},
    moreaging(){this.age++}
}

console.log(dudetta.printoInfo())
dudetta.moreaging()
dudetta.moreaging()
dudetta.moreaging()
console.log('Three years pass')
console.log(dudetta.printoInfo())


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

console.log('                 ')
console.log('----Problem 3----')

function stringBig(stringo){
    return new Promise((resolve,reject) =>{
        if (stringo.length>10){
            resolve([true,stringo])
        } else {
            reject([false,stringo])
        }
    })
}

bigWord = 'Manlookatalltheseletters'
wordSmall = 'Nah'


const bigger = stringBig('Manlookatalltheseletters')
console.log(bigger)

const small = stringBig(wordSmall)
console.log(small)

stringBig(bigWord)
.then( result => {
    console.log(`${result[0]} :` , `${result[1]} is big enough`)
}).catch(error => {
    console.log(error[0], `${error[1]} is too small`)
})

small.then((result) => console.log(result[0] , ': Is BEEEG werd')).catch(error => console.log(error,'<--- Dem were smol'))

console.log('   ')
console.log('----non promise practice----')

wordChecka = (word) => {word.length > 10 ? console.log('Beeg') : console.log(('smol'))}

wordChecka(bigWord)
wordChecka(wordSmall)

console.log('         ')
console.log('.....    ')
console.log('Those promises are just waiting')
console.log('.....    ')
console.log('         ')
console.log('         ')




